<script setup lang="ts">
import { Mail, Phone, MessageSquare, Send, Globe, Plane, Ship, CheckCircle2 } from 'lucide-vue-next'

const email = ref('')
const isSubmitted = ref(false)

const handleSubmit = () => {
  if (email.value) {
    // Basic simulation of email collection
    console.log('Email collected:', email.value)
    isSubmitted.value = true
    email.value = ''
    setTimeout(() => {
      isSubmitted.value = false
    }, 5000)
  }
}

useSeoMeta({
  title: 'KEMET Group - Votre pont logistique avec le monde',
  description: 'Une nouvelle plateforme logistique et de voyage arrive bientôt. Solutions de logistique internationale, fret aérien et voyages.',
  ogTitle: 'KEMET Group - Coming Soon',
  ogDescription: 'Une nouvelle plateforme logistique et de voyage arrive bientôt.',
  ogImage: '/images/hero-bg.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="relative min-h-screen overflow-hidden font-sans selection:bg-blue-500/30 text-slate-200">
    <!-- Background Layer -->
    <div class="fixed inset-0 z-0">
      <div class="absolute inset-0 bg-slate-950/80 z-10"></div>
      <img 
        src="/images/hero-bg.png" 
        alt="Logistics Background" 
        class="w-full h-full object-cover scale-105 animate-slow-zoom"
      />
      <!-- Decorative Gradients -->
      <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse-slow"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse-slow"></div>
    </div>

    <!-- Main Content -->
    <main class="relative z-20 container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-screen">
      
      <!-- Header / Logo -->
      <header class="mb-12 animate-fade-down" style="animation-duration: 0.8s;">
        <div class="flex flex-col items-center">
          <img src="/images/logo.png" alt="KEMET Group Logo" class="h-24 md:h-32 mb-4 drop-shadow-2xl" />
          <h1 class="text-3xl md:text-5xl font-bold tracking-tight text-white text-center">
            KEMET <span class="gradient-text">Group</span>
          </h1>
        </div>
      </header>

      <!-- Hero Content -->
      <div class="max-w-4xl w-full text-center mb-16 space-y-8">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium animate-fade-in">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Lancement prochain
        </div>

        <h2 class="text-4xl md:text-7xl font-extrabold text-white leading-tight animate-fade-up" style="animation-delay: 0.2s;">
          Une nouvelle plateforme <br class="hidden md:block" />
          <span class="gradient-text">logistique et de voyage</span> <br class="hidden md:block" />
          arrive bientôt
        </h2>

        <p class="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto animate-fade-up font-light" style="animation-delay: 0.4s;">
          "Votre pont logistique avec le monde"
        </p>

        <p class="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto animate-fade-up font-light leading-relaxed" style="animation-delay: 0.6s;">
          Notre nouveau site web, portail de nos services de logistique internationale et de voyage, est actuellement en cours de développement pour mieux vous servir.
        </p>
      </div>

      <!-- Email Section -->
      <section class="w-full max-w-xl animate-fade-up" style="animation-delay: 0.8s;">
        <div class="glass-card p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div class="relative z-10 text-center space-y-6">
            <div class="flex justify-center mb-2">
              <div class="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                <Mail class="w-8 h-8 text-blue-400" />
              </div>
            </div>
            
            <div>
              <h3 class="text-2xl font-bold text-white mb-2">📧 Restez informé(e)</h3>
              <p class="text-slate-400">Laissez-nous votre email pour être parmi les premiers averti(e)s du lancement et de nos offres exclusives.</p>
            </div>

            <form @submit.prevent="handleSubmit" class="flex flex-col md:flex-row gap-4">
              <input 
                v-model="email"
                type="email" 
                placeholder="votre@email.com" 
                required
                class="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white placeholder:text-slate-500"
              />
              <button 
                type="submit" 
                class="btn-primary flex items-center justify-center gap-2 group"
                :disabled="isSubmitted"
              >
                <span>{{ isSubmitted ? 'Inscrit !' : "S'inscrire" }}</span>
                <Send v-if="!isSubmitted" class="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <CheckCircle2 v-else class="w-4 h-4 text-green-400" />
              </button>
            </form>
            
            <p v-if="isSubmitted" class="text-green-400 text-sm animate-fade-in font-medium">
              Merci ! Vous serez informé(e) dès notre lancement.
            </p>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl animate-fade-up" style="animation-delay: 1s;">
        <div class="glass-card p-8 hover:bg-white/10 transition-all duration-300 group">
          <div class="flex items-start gap-6">
            <div class="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
              <Globe class="w-8 h-8 text-indigo-400" />
            </div>
            <div class="space-y-4">
              <h4 class="text-xl font-bold text-white">Nos Services</h4>
              <ul class="text-slate-400 space-y-2">
                <li class="flex items-center gap-2"><Ship class="w-4 h-4" /> Excédents de bagages</li>
                <li class="flex items-center gap-2"><Plane class="w-4 h-4" /> Fret aérien</li>
                <li class="flex items-center gap-2"><CheckCircle2 class="w-4 h-4" /> Billets d'avion & Voyages</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="glass-card p-8 hover:bg-white/10 transition-all duration-300 group">
          <div class="flex items-start gap-6">
            <div class="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
              <Phone class="w-8 h-8 text-blue-400" />
            </div>
            <div class="space-y-4">
              <h4 class="text-xl font-bold text-white">Contactez-nous</h4>
              <div class="space-y-3">
                <a href="mailto:travel@bkemet.com" class="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors group/link">
                  <Mail class="w-5 h-5" />
                  <span>travel@bkemet.com</span>
                </a>
                <a href="https://wa.me/237655437070" target="_blank" class="flex items-center gap-3 text-slate-300 hover:text-green-400 transition-colors group/link">
                  <MessageSquare class="w-5 h-5" />
                  <span>+237 655 43 70 70 (WhatsApp)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer / Partner -->
      <footer class="mt-24 text-center animate-fade-in" style="animation-delay: 1.2s;">
        <div class="flex flex-col items-center gap-4">
          <p class="text-slate-500 font-medium tracking-widest text-sm uppercase">Partenaire de</p>
          <div class="flex items-center gap-8 opacity-70 hover:opacity-100 transition-opacity">
            <span class="text-2xl font-bold italic text-white/50">KENYA AIRWAYS</span>
          </div>
          <p class="mt-12 text-slate-600 text-sm">
            &copy; {{ new Date().getFullYear() }} KEMET Group & KEMET Travel & Tours. Tous droits réservés.
          </p>
        </div>
      </footer>

    </main>
  </div>
</template>

<style>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-down {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.4; }
}

@keyframes slow-zoom {
  0% { transform: scale(1.05); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1.05); }
}

.animate-fade-in { animation: fade-in 1s ease-out forwards; }
.animate-fade-up { animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-fade-down { animation: fade-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-pulse-slow { animation: pulse-slow 8s infinite ease-in-out; }
.animate-slow-zoom { animation: slow-zoom 20s infinite ease-in-out; }

/* Hide scrollbar but keep functionality */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
