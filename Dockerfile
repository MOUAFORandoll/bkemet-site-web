# Base Image
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and related files
COPY package*.json ./

# Install dependencies
RUN npm install


# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production Image
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
# Default ports, can be overridden
ENV PORT_MAIN=8080
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose ports
EXPOSE 8080

# Start the application
CMD ["node", "dist/main"]
