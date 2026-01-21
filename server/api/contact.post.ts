import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email } = body

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email invalide.',
    })
  }

  const config = useRuntimeConfig()

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `KEMET Website <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      subject: 'Nouveau Lead - KEMET Group Website',
      text: `Nouveau client intéressé : ${email}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #020617;">
          <h2 style="color: #D4AF37;">Nouveau Lead KEMET Group</h2>
          <p>Un utilisateur a soumis son adresse email pour être recontacté.</p>
          <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <strong>Email :</strong> ${email}
          </div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0;" />
          <p style="font-size: 12px; color: #64748b;">Ceci est un message automatique généré par le site KEMET Group.</p>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error('Email sending failed:', error)
    throw createError({
      statusCode: 500,
      statusMessage: "Échec de l'envoi de l'email.",
    })
  }
})
