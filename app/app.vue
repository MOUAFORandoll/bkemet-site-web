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
  ArrowUpRight,
  Instagram,
  Facebook,
  Linkedin,
  Clock,
  ShieldCheck,
  ChevronRight,
  Menu,
  X
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
    isSubmitted.value = true
    email.value = ''
    setTimeout(() => {
      isSubmitted.value = false
    }, 5000)
  }
}

const services = [
  {
    tag: "LOGISTIQUE",
    title: "Excédents de Bagages",
    description: "Une gestion simplifiée de vos surplus de poids. KEMET prend en charge l'acheminement de vos bagages personnels avec une sécurité absolue et des tarifs négociés.",
    image: "/images/hero-bg.png",
    link: "https://wa.me/237655437070"
  },
  {
    tag: "EXPORT",
    title: "Fret Aérien (Air Freight)",
    description: "Le monde n'a plus de frontières. Nous assurons le transport de vos marchandises prioritaires avec une réactivité qui définit les nouveaux standards du marché.",
    image: "/images/hero-bg.png",
    link: "https://wa.me/237655437070"
  },
  {
    tag: "TRAVEL",
    title: "Voyages & Billetterie",
    description: "En tant que partenaire privilégié de Kenya Airways, nous vous offrons l'accès aux meilleures routes et tarifs pour vos déplacements professionnels et personnels.",
    image: "/images/hero-bg.png",
    link: "https://wa.me/237655437070"
  }
]

useSeoMeta({
  title: 'KEMET Group | Votre Pont Logistique avec le Monde',
  description: 'Excellence en logistique internationale et solutions de voyage. Partenaire officiel Kenya Airways.',
  ogTitle: 'KEMET Group - Excellence Logistique',
  ogImage: '/images/hero-bg.png',
})
</script>

<template>
  <div class="relative min-h-screen bg-[#020617] text-slate-400 selection:bg-[#D4AF37]/30 overflow-x-hidden">
    <!-- Tactile Noise Texture -->
    <div class="noise-overlay"></div>

    <!-- Navigation -->
    <nav 
      class="fixed top-0 inset-x-0 z-[100] transition-all duration-700 ease-in-out"
      :class="[scrolled ? 'bg-[#020617]/90 backdrop-blur-md border-b border-white/5 py-5' : 'bg-transparent py-10']"
    >
      <div class="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div class="flex items-center gap-4 group cursor-pointer">
          <img src="/images/logo.png" alt="KEMET Logo" class="h-12 w-auto grayscale brightness-200 contrast-125 group-hover:grayscale-0 transition-all duration-500" />
          <div class="flex flex-col">
            <span class="text-xl font-bold tracking-[0.1em] text-white">KEMET</span>
            <span class="text-[10px] tracking-[0.3em] font-bold text-[#D4AF37] uppercase">Group FZE LLC</span>
          </div>
        </div>

        <!-- Desktop Links -->
        <div class="hidden lg:flex items-center gap-12 font-bold uppercase tracking-[0.2em] text-[11px]">
          <a href="#about" class="hover:text-[#D4AF37] transition-colors">Vision</a>
          <a href="#services" class="hover:text-[#D4AF37] transition-colors">Expertise</a>
          <a href="#contact" class="hover:text-[#D4AF37] transition-colors">Contact</a>
          <div class="h-8 w-[1px] bg-white/10"></div>
          <a href="https://wa.me/237655437070" target="_blank" class="text-white hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
            WhatsApp
            <ArrowUpRight class="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden text-white p-2">
          <Menu v-if="!isMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Nav -->
      <transition 
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="opacity-0 translate-x-full"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 translate-x-full"
      >
        <div v-if="isMenuOpen" class="fixed inset-y-0 right-0 w-full bg-[#0F172A] z-50 p-12 flex flex-col justify-center gap-12 text-center lg:hidden">
          <a href="#about" @click="isMenuOpen = false" class="text-4xl font-serif italic text-white">Vision</a>
          <a href="#services" @click="isMenuOpen = false" class="text-4xl font-serif italic text-white">Expertise</a>
          <a href="#contact" @click="isMenuOpen = false" class="text-4xl font-serif italic text-white">Contact</a>
          <div class="pt-12 border-t border-white/10">
            <a href="https://wa.me/237655437070" class="btn-bespoke py-4 block">WhatsApp Direct</a>
          </div>
        </div>
      </transition>
    </nav>

    <!-- Hero Section: Editorial Style -->
    <section class="relative min-h-screen flex items-center pt-24 pb-20">
      <div class="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-8 z-10 space-y-12">
          <div class="inline-flex items-baseline gap-4">
            <span class="h-[1px] w-12 bg-[#D4AF37]"></span>
            <span class="text-xs font-bold tracking-[0.4em] uppercase text-[#D4AF37]">Coming Soon 2026</span>
          </div>

          <h1 class="text-6xl md:text-9xl font-bold leading-[0.9] text-white tracking-tighter">
            Votre <span class="editorial-heading">pont</span><br />
            vers l'infini.
          </h1>

          <p class="text-xl md:text-2xl font-light text-slate-400 max-w-xl leading-relaxed">
            KEMET Group redéfinit les frontières du transport et de la logistique. Une expérience sur mesure, ancrée dans la fiabilité, arrive bientôt.
          </p>

          <div class="flex flex-wrap gap-8 pt-8 items-center">
            <a href="#contact" class="btn-bespoke">M'informer du lancement</a>
            <div class="flex items-center gap-4 text-xs font-bold">
              <span class="text-white/30 tracking-widest uppercase">Trusted By</span>
              <span class="text-white tracking-tighter italic text-lg opacity-60">Kenya Airways</span>
            </div>
          </div>
        </div>

        <!-- Asymmetric Image Placement -->
        <div class="lg:col-span-4 relative mt-20 lg:mt-0">
          <div class="relative w-full aspect-[3/4] overflow-hidden shadow-[30px_30px_0px_#D4AF3715]">
            <img 
              src="/images/hero-bg.png" 
              alt="Logistics Detail" 
              class="w-full h-full object-cover grayscale brightness-75 contrast-125 hover:grayscale-0 transition-all duration-1000 ease-in-out cursor-crosshair scale-110"
            />
            <div class="absolute bottom-10 -left-10 bg-[#D4AF37] text-[#0F172A] p-8 max-w-[200px] shadow-2xl">
              <span class="text-4xl font-serif italic font-bold">99%</span>
              <p class="text-[10px] font-bold uppercase tracking-wider mt-2">D'efficacité opérationnelle garantie.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section id="about" class="py-32 bg-[#0F172A]/30 border-y border-white/5">
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-24 items-end">
          <div class="space-y-12">
            <h2 class="text-5xl md:text-7xl font-bold text-white tracking-tight">
              L'excellence <br />
              est notre <br />
              <span class="editorial-heading">seul itinéraire.</span>
            </h2>
          </div>
          <div class="space-y-8 pb-12">
            <p class="text-lg leading-relaxed text-slate-400">
              KEMET Group n’est pas qu’une société de logistique. C’est un partenaire stratégique conçu pour éliminer les barrières de la distance. Que ce soit pour vos colis volumineux ou vos déplacements internationaux, nous appliquons une rigueur de haute horlogerie à chaque mouvement.
            </p>
            <div class="flex gap-12 pt-8">
              <div class="space-y-2">
                <span class="text-[#D4AF37] block text-2xl font-serif italic">Global</span>
                <span class="text-[10px] font-bold uppercase tracking-widest">Couverture Afrique/Monde</span>
              </div>
              <div class="space-y-2">
                <span class="text-[#D4AF37] block text-2xl font-serif italic">Safe</span>
                <span class="text-[10px] font-bold uppercase tracking-widest">Suivi certifié KMTrack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services: Editorial Cards -->
    <section id="services" class="py-40">
      <div class="container mx-auto px-6 md:px-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-32 border-b border-white/10 pb-12 gap-8">
          <div class="space-y-4">
            <span class="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">Nos Expertises</span>
            <h2 class="text-5xl md:text-6xl font-bold text-white tracking-tighter">Nos Solutions Groupées</h2>
          </div>
          <p class="max-w-xs text-sm leading-relaxed text-slate-500 font-medium">
            Une gamme complète de services conçus pour répondre aux exigences les plus strictes de la logistique moderne.
          </p>
        </div>

        <div class="space-y-24">
          <div 
            v-for="(service, index) in services" 
            :key="service.title"
            class="group grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
          >
            <!-- Even/Odd layout switch -->
            <div :class="[index % 2 === 0 ? 'md:col-span-5' : 'md:col-span-5 md:order-2', 'space-y-8']">
              <span class="text-[10px] font-bold tracking-[0.5em] text-[#D4AF37] uppercase opacity-70">{{ service.tag }}</span>
              <h3 class="text-4xl md:text-5xl font-bold text-white transition-colors group-hover:text-[#D4AF37]">{{ service.title }}</h3>
              <p class="text-lg leading-relaxed text-slate-400 font-light">{{ service.description }}</p>
              <a :href="service.link" target="_blank" class="inline-flex items-center gap-4 text-white font-bold tracking-widest text-[10px] uppercase group/link">
                Contacter un expert 
                <div class="w-8 h-[1px] bg-[#D4AF37] group-hover/link:w-16 transition-all duration-500"></div>
                <ChevronRight class="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div :class="[index % 2 === 0 ? 'md:col-span-7' : 'md:col-span-7 md:order-1']">
              <div class="relative overflow-hidden aspect-video bg-white/5 border border-white/10">
                <img 
                  :src="service.image" 
                  class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 contrast-110 brightness-75"
                />
                <div class="absolute inset-0 bg-[#020617]/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter: High Contrast Call -->
    <section class="py-40 bg-white text-[#0F172A] relative overflow-hidden">
      <div class="container mx-auto px-6 md:px-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div class="space-y-12">
            <h2 class="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
              Faites partie du <br />
              <span class="font-serif italic text-[#D4AF37]">prochain chapitre.</span>
            </h2>
            <p class="text-xl opacity-70 leading-relaxed font-medium">
              Nous levons le voile très prochainement. Soyez informés avant tout le monde des offres exclusives de lancement.
            </p>
          </div>
          
          <div class="relative">
            <form @submit.prevent="handleSubmit" class="space-y-8">
              <div class="relative group">
                <input 
                  v-model="email"
                  type="email" 
                  placeholder="votre@email.com" 
                  required
                  class="w-full bg-transparent border-b-2 border-[#0F172A]/10 py-8 text-2xl font-bold outline-none focus:border-[#D4AF37] transition-all placeholder:text-[#0F172A]/20"
                />
              </div>
              <button 
                type="submit" 
                class="btn-bespoke w-full"
                :disabled="isSubmitted"
              >
                {{ isSubmitted ? 'Merci pour votre confiance' : "S'inscrire à l'avant-première" }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer: Industrial Chic -->
    <footer id="contact" class="bg-[#020617] border-t border-white/5 pt-40 pb-20">
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-40">
          
          <div class="lg:col-span-6 space-y-12">
            <div class="flex flex-col gap-2">
              <span class="text-4xl font-bold text-white tracking-widest uppercase">KEMET</span>
              <span class="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs">Group FZE LLC</span>
            </div>
            <div class="space-y-8">
              <div class="flex flex-col gap-2">
                <span class="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">Email</span>
                <a href="mailto:travel@bkemet.com" class="text-2xl md:text-3xl text-white hover:text-[#D4AF37] font-serif transition-all italic underline decoration-[#D4AF37]/30">travel@bkemet.com</a>
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">Phone & WhatsApp</span>
                <a href="tel:+237655437070" class="text-2xl md:text-3xl text-white hover:text-[#D4AF37] font-serif transition-all italic">+237 655 43 70 70</a>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6 grid grid-cols-2 lg:grid-cols-3 gap-12">
            <div class="space-y-8 text-xs">
              <span class="font-bold text-white uppercase tracking-[0.3em] opacity-40">Navigation</span>
              <ul class="space-y-4 font-bold uppercase tracking-widest text-[#94a3b8]">
                <li><a href="#" class="hover:text-white">Accueil</a></li>
                <li><a href="#about" class="hover:text-white">Vision</a></li>
                <li><a href="#services" class="hover:text-white">Expertise</a></li>
              </ul>
            </div>
            
            <div class="space-y-8 text-xs">
              <span class="font-bold text-white uppercase tracking-[0.3em] opacity-40">Social</span>
              <ul class="space-y-4 font-bold uppercase tracking-widest text-[#94a3b8]">
                <li><a href="#" class="hover:text-white">Linkedin</a></li>
                <li><a href="#" class="hover:text-white">Instagram</a></li>
                <li><a href="#" class="hover:text-white">Facebook</a></li>
              </ul>
            </div>

            <div class="space-y-8 text-xs col-span-2 lg:col-span-1">
              <span class="font-bold text-white uppercase tracking-[0.3em] opacity-40">Addresse</span>
              <p class="font-bold uppercase tracking-widest text-[#94a3b8] leading-relaxed">
                Douala, Cameroun<br />
                FZE LLC Registration
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-between gap-12 border-t border-white/5 pt-20">
          <p class="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">
            &copy; {{ new Date().getFullYear() }} KEMET Group. Excellence since inception.
          </p>
          <div class="flex gap-12 grayscale opacity-40 hover:opacity-100 transition-all duration-1000">
             <span class="text-sm font-black italic tracking-tighter text-white">OFFICIAL PARTNER OF KENYA AIRWAYS</span>
          </div>
          <div class="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">
            <a href="#" class="hover:opacity-100">Privacy</a>
            <a href="#" class="hover:opacity-100">Legal</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Floating Global Connection Marker -->
    <div class="fixed bottom-12 left-12 z-50 hidden md:block group cursor-none">
      <div class="w-12 h-12 border border-[#D4AF37]/30 flex items-center justify-center transform group-hover:rotate-45 transition-all duration-700">
          <Globe class="w-4 h-4 text-[#D4AF37]" />
      </div>
    </div>

  </div>
</template>

<style>
@keyframes slow-zoom {
  0% { transform: scale(1.1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1.1); }
}

.animate-slow-zoom { animation: slow-zoom 30s infinite ease-in-out; }

html {
  scroll-behavior: smooth;
  background-color: #020617;
}

/* Custom Scrollbar Editorial */
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #020617;
}
::-webkit-scrollbar-thumb {
  background: #D4AF37;
}
::-webkit-scrollbar-thumb:hover {
  background: white;
}
</style>
