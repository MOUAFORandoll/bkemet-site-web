<script setup lang="ts">
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  Globe, 
  Plane, 
  Ship, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Clock, 
  ShieldCheck, 
  Menu, 
  X,
  ExternalLink,
  ChevronRight
} from 'lucide-vue-next'

const email = ref('')
const isSubmitted = ref(false)
const isMenuOpen = ref(false)
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleSubmit = () => {
  if (email.value) {
    console.log('Email collected:', email.value)
    isSubmitted.value = true
    email.value = ''
    setTimeout(() => {
      isSubmitted.value = false
    }, 5000)
  }
}

const services = [
  {
    title: "Excédents de Bagages",
    description: "Solution économique pour vos bagages supplémentaires. Voyagez léger et nous nous occupons du reste.",
    icon: Ship,
    features: ["Enlèvement à domicile", "Tarifs préférentiels", "Suivi en temps réel"],
    color: "blue"
  },
  {
    title: "Fret Aérien (Air Freight)",
    description: "Transport international rapide et sécurisé pour vos marchandises vers toutes les destinations mondiales.",
    icon: Plane,
    features: ["Express & Standard", "Dédouanement", "Logistique porte-à-porte"],
    color: "indigo"
  },
  {
    title: "Voyages & Billetterie",
    description: "Votre partenaire de voyage complet. Réservation de billets, planification de séjours et conseils experts.",
    icon: Globe,
    features: ["Meilleurs tarifs", "Assistance 24/7", "Partenaire Kenya Airways"],
    color: "purple"
  }
]

const whyUs = [
  {
    title: "Expertise Reconnue",
    description: "Des années d'expérience dans la logistique internationale et le voyage.",
    icon: Award
  },
  {
    title: "Fiabilité Maximale",
    description: "Une sécurité garantie pour vos biens et une sérénité pour vos voyages.",
    icon: ShieldCheck
  },
  {
    title: "Réactivité",
    description: "Une équipe dédiée pour répondre à vos besoins dans les plus brefs délais.",
    icon: Clock
  }
]

useSeoMeta({
  title: 'KEMET Group - Votre pont logistique avec le monde',
  description: 'Solutions de logistique internationale, fret aérien et voyages. Partenaire de Kenya Airways. Une nouvelle expérience arrive bientôt.',
  ogTitle: 'KEMET Group - Logistique & Voyage',
  ogDescription: 'Une nouvelle plateforme logistique et de voyage arrive bientôt.',
  ogImage: '/images/hero-bg.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="relative min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30 text-slate-200">
    
    <!-- Navbar -->
    <nav 
      class="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      :class="[scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg' : 'bg-transparent py-6']"
    >
      <div class="container mx-auto px-6 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="/images/logo.png" alt="KEMET Logo" class="h-10 w-auto" />
          <span class="text-xl font-bold tracking-tight text-white hidden sm:block">KEMET <span class="gradient-text">Group</span></span>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          <a href="#services" class="text-sm font-medium text-slate-400 hover:text-white transition-colors">Services</a>
          <a href="#about" class="text-sm font-medium text-slate-400 hover:text-white transition-colors">Pourquoi Nous ?</a>
          <a href="#contact" class="text-sm font-medium text-slate-400 hover:text-white transition-colors">Contact</a>
          <a href="https://wa.me/237655437070" target="_blank" class="btn-primary py-2 px-5 text-sm flex items-center gap-2">
            <MessageSquare class="w-4 h-4" />
            Parler sur WhatsApp
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white p-2">
          <Menu v-if="!isMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition 
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="isMenuOpen" class="md:hidden absolute top-full inset-x-0 bg-slate-900 border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl">
          <a href="#services" @click="isMenuOpen = false" class="text-lg font-medium">Services</a>
          <a href="#about" @click="isMenuOpen = false" class="text-lg font-medium">Pourquoi Nous ?</a>
          <a href="#contact" @click="isMenuOpen = false" class="text-lg font-medium">Contact</a>
          <a href="https://wa.me/237655437070" @click="isMenuOpen = false" class="btn-primary text-center">Contact WhatsApp</a>
        </div>
      </transition>
    </nav>

    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950 z-10"></div>
        <img 
          src="/images/hero-bg.png" 
          alt="Logistics Background" 
          class="w-full h-full object-cover scale-105 animate-slow-zoom blur-[2px]"
        />
        <div class="absolute top-[20%] left-[-5%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse-slow"></div>
        <div class="absolute bottom-[20%] right-[-5%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full animate-pulse-slow"></div>
      </div>

      <div class="relative z-20 container mx-auto px-6 text-center max-w-5xl">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-8 animate-fade-in shadow-glow-blue">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          PROCHAINEMENT : VOTRE NOUVELLE PLATEFORME
        </div>

        <h1 class="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-8 animate-fade-up" style="animation-duration: 1s;">
          Connecter <span class="gradient-text">vos ambitions</span><br />
          au reste du monde.
        </h1>

        <p class="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 animate-fade-up font-light leading-relaxed" style="animation-delay: 0.2s;">
          KEMET Group révolutionne le transport de bagages et la logistique internationale. Un pont fiable, rapide et intelligent arrive bientôt.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up" style="animation-delay: 0.4s;">
          <a href="#services" class="btn-primary w-full sm:w-auto text-lg px-10 py-4 flex items-center justify-center gap-3">
            Découvrir nos services
            <ArrowRight class="w-5 h-5" />
          </a>
          <a href="#contact" class="w-full sm:w-auto px-10 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-lg font-medium text-white flex items-center justify-center gap-3">
            Nous contacter
          </a>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-32 relative">
      <div class="container mx-auto px-6">
        <div class="text-center mb-20 space-y-4">
          <h2 class="text-4xl md:text-6xl font-bold text-white">Nos <span class="gradient-text">Services Excellence</span></h2>
          <p class="text-slate-400 max-w-2xl mx-auto text-lg">Solutions logistiques sur mesure pour particuliers et entreprises.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            class="glass-card group hover:bg-white/10 transition-all duration-500 p-8 flex flex-col animate-fade-up shadow-highlight"
            :style="{ animationDelay: (0.2 * index) + 's' }"
          >
            <div class="mb-8 p-4 rounded-2xl w-fit transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                 :class="[service.color === 'blue' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 
                          service.color === 'indigo' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 
                          'bg-purple-500/10 text-purple-400 border border-purple-500/20']">
              <component :is="service.icon" class="w-10 h-10" />
            </div>
            
            <h3 class="text-2xl font-bold text-white mb-4">{{ service.title }}</h3>
            <p class="text-slate-400 mb-8 leading-relaxed">{{ service.description }}</p>
            
            <ul class="space-y-4 mb-8 flex-1">
              <li v-for="feature in service.features" :key="feature" class="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 class="w-5 h-5 text-blue-500" />
                {{ feature }}
              </li>
            </ul>

            <button class="mt-auto flex items-center gap-2 text-white font-semibold group/btn">
              En savoir plus
              <ChevronRight class="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Us Section (Trust) -->
    <section id="about" class="py-24 bg-white/[0.02]">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-20">
          <div class="flex-1 space-y-8 max-w-2xl">
            <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight">
              Pourquoi faire confiance à <br />
              <span class="gradient-text">KEMET Group ?</span>
            </h2>
            <p class="text-xl text-slate-400 font-light leading-relaxed">
              Nous ne transportons pas seulement des biens, nous transportons des promesses. Notre engagement envers l'excellence fait de nous le partenaire idéal pour vos besoins internationaux.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div v-for="item in whyUs" :key="item.title" class="flex flex-col gap-4">
                <div class="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 w-fit">
                  <component :is="item.icon" class="w-6 h-6 text-blue-400" />
                </div>
                <h4 class="text-lg font-bold text-white">{{ item.title }}</h4>
                <p class="text-sm text-slate-500 leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
          </div>

          <div class="flex-1 w-full lg:max-w-md relative group">
            <div class="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div class="glass-card p-10 relative space-y-8">
              <div class="flex items-center gap-4 text-slate-500 text-xs font-bold tracking-[0.2em] uppercase">
                Notre Partenaire Majeur
              </div>
              <div class="flex flex-col gap-6">
                <span class="text-4xl md:text-5xl font-black italic text-white tracking-tighter opacity-80">KENYA AIRWAYS</span>
                <p class="text-slate-400 leading-relaxed text-sm">
                  Grâce à notre partenariat stratégique avec Kenya Airways, nous garantissons des routes optimales et une sécurité accrue pour tous vos envois et vos voyages.
                </p>
                <div class="flex items-center gap-2 text-blue-400 font-medium">
                  <Globe class="w-4 h-4" />
                  <span>Réseau Global Pan-Africain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="py-32 relative overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div class="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <div class="glass-card md:p-16 p-8 shadow-3xl hover:border-white/20 transition-all duration-700">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Soyez les premiers informés</h2>
          <p class="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
            Inscrivez-vous pour recevoir des notifications sur notre lancement officiel et nos offres exclusives d'ouverture.
          </p>

          <form @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div class="flex-1 relative group">
              <Mail class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
              <input 
                v-model="email"
                type="email" 
                placeholder="votre@email.com" 
                required
                class="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white placeholder:text-slate-500"
              />
            </div>
            <button 
              type="submit" 
              class="btn-primary flex items-center justify-center gap-2 px-8 py-4 whitespace-nowrap"
              :disabled="isSubmitted"
            >
              <span>{{ isSubmitted ? 'Inscription réussie !' : "M'inscrire" }}</span>
              <Send v-if="!isSubmitted" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
              <CheckCircle2 v-else class="w-4 h-4 text-green-400" />
            </button>
          </form>
          
          <p v-if="isSubmitted" class="mt-6 text-green-400 font-medium flex items-center justify-center gap-2 animate-bounce">
            <CheckCircle2 class="w-5 h-5" />
            Vérifiez votre boîte mail prochainement !
          </p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="pt-24 pb-12 bg-slate-900 border-t border-white/5">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div class="col-span-1 md:col-span-2 space-y-6">
            <div class="flex items-center gap-3">
              <img src="/images/logo.png" alt="KEMET Logo" class="h-10 w-auto" />
              <span class="text-2xl font-bold tracking-tight text-white">KEMET <span class="gradient-text">Group</span></span>
            </div>
            <p class="text-slate-500 max-w-md leading-relaxed">
              KEMET Group & KEMET Travel & Tours. Votre pont logistique avec le monde. Spécialiste de la logistique internationale et du voyage d'excellence.
            </p>
            <div class="flex items-center gap-6">
              <a href="#" class="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Globe class="w-5 h-5 text-slate-400" />
              </a>
              <a href="#" class="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <ExternalLink class="w-5 h-5 text-slate-400" />
              </a>
            </div>
          </div>

          <div class="space-y-6">
            <h4 class="text-white font-bold opacity-80 uppercase tracking-widest text-xs">Navigation</h4>
            <ul class="space-y-4 text-slate-400">
              <li><a href="#" class="hover:text-blue-400 transition-colors">Accueil</a></li>
              <li><a href="#services" class="hover:text-blue-400 transition-colors">Nos Services</a></li>
              <li><a href="#about" class="hover:text-blue-400 transition-colors">À Propos</a></li>
            </ul>
          </div>

          <div class="space-y-6">
            <h4 class="text-white font-bold opacity-80 uppercase tracking-widest text-xs">Contact Rapid</h4>
            <div class="space-y-4 text-slate-400">
              <a href="mailto:travel@bkemet.com" class="flex items-center gap-3 hover:text-white transition-colors group">
                <Mail class="w-5 h-5 text-blue-500" />
                <span>travel@bkemet.com</span>
              </a>
              <a href="https://wa.me/237655437070" class="flex items-center gap-3 hover:text-white transition-colors group">
                <MessageSquare class="w-5 h-5 text-green-500" />
                <span>+237 655 43 70 70</span>
              </a>
              <div class="flex items-start gap-3">
                <Phone class="w-5 h-5 text-blue-500 mt-1" />
                <span>Cameroun & International</span>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-600">
          <p>&copy; {{ new Date().getFullYear() }} KEMET Group & KEMET Travel & Tours. Tous droits réservés.</p>
          <div class="flex items-center gap-8">
            <a href="#" class="hover:text-slate-400">Politique de confidentialité</a>
            <a href="#" class="hover:text-slate-400">Mentions Légales</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Floating WhatsApp CTA -->
    <a 
      href="https://wa.me/237655437070" 
      target="_blank"
      class="fixed bottom-8 right-8 z-[100] p-4 bg-green-600 hover:bg-green-500 text-white rounded-full shadow-2xl shadow-green-600/20 transition-all duration-300 hover:scale-110 group flex items-center gap-3"
    >
      <span class="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-medium">Besoin d'aide ?</span>
      <MessageSquare class="w-6 h-6" />
    </a>

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

@keyframes pulse-slow {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.4; }
}

@keyframes slow-zoom {
  0% { transform: scale(1.05); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1.05); }
}

.animate-fade-in { animation: fade-in 1.2s ease-out forwards; }
.animate-fade-up { animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-pulse-slow { animation: pulse-slow 8s infinite ease-in-out; }
.animate-slow-zoom { animation: slow-zoom 25s infinite ease-in-out; }

.shadow-glow-blue {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
}

.shadow-highlight {
  position: relative;
  overflow: hidden;
}

.shadow-highlight::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(circle at top right, rgba(255,255,255,0.05), transparent 60%);
  pointer-events: none;
}

html {
  scroll-behavior: smooth;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #020617;
}
::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #334155;
}
</style>
