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
  Clock,
  ShieldCheck,
  ChevronRight,
  Menu,
  X,
  Package,
  Truck,
  FileCheck,
  HelpCircle
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

const steps = [
  {
    icon: Package,
    title: "Collecte & Inventaire",
    description: "Nous réceptionnons et répertorions vos biens avec une précision chirurgicale, garantissant une intégrité totale dès le départ."
  },
  {
    icon: FileCheck,
    title: "Expertise Douanière",
    description: "KEMET Group gère l'intégralité de la documentation et des formalités administratives pour un transit fluide."
  },
  {
    icon: Truck,
    title: "Acheminement Sécurisé",
    description: "Grâce à notre réseau mondial et au partenariat Kenya Airways, vos colis arrivent à destination en temps record."
  }
]

const faqs = [
  {
    q: "Quelles zones couvrez-vous ?",
    a: "Nous opérons une couverture mondiale avec une expertise spécifique sur les corridors Cameroun-International et les hubs FZE."
  },
  {
    q: "Proposez-vous une assurance ?",
    a: "Oui, chaque envoi bénéficie de nos protocoles de sécurité et peut être couvert par nos assurances partenaires spécialisées."
  }
]

useSeoMeta({
  title: 'KEMET Group | Votre Pont Logistique avec le Monde',
  description: 'Excellence en logistique internationale, fret aérien et solutions de voyage. Partenaire officiel Kenya Airways.',
  ogTitle: 'KEMET Group - Excellence Logistique',
  ogDescription: 'Une nouvelle dimension de la logistique et du voyage arrive prochainement.',
  ogImage: '/images/hero-bg.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'KEMET Group | Logistique & Voyage',
  twitterDescription: 'Redéfinir les frontières du transport international.',
  twitterImage: '/images/hero-bg.png',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'KEMET Group',
        'url': 'https://bkemet.com',
        'logo': 'https://bkemet.com/images/logo.png',
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+237655437070',
          'contactType': 'customer service',
          'email': 'travel@bkemet.com',
          'availableLanguage': ['French', 'English']
        },
        'sameAs': [
          'https://facebook.com/bkemet',
          'https://linkedin.com/company/bkemet',
          'https://instagram.com/bkemet'
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'serviceType': 'Logistics and International Travel',
        'provider': {
          '@type': 'Organization',
          'name': 'KEMET Group'
        },
        'areaServed': 'WorldWide',
        'description': 'International logistics, air freight, and premium travel services.'
      })
    }
  ]
})
</script>

<template>
  <div class="relative min-h-screen bg-[#020617] text-slate-400 selection:bg-[#D4AF37]/30 overflow-x-hidden" role="document">
    <!-- Tactile Noise Texture -->
    <div class="noise-overlay" aria-hidden="true"></div>

    <!-- Navigation -->
    <nav 
      class="fixed top-0 inset-x-0 z-[100] transition-all duration-700 ease-in-out"
      :class="[scrolled ? 'bg-[#020617]/90 backdrop-blur-md border-b border-white/5 py-5' : 'bg-transparent py-10']"
      aria-label="Menu principal"
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
        <nav class="hidden lg:flex items-center gap-12 font-bold uppercase tracking-[0.2em] text-[11px]" aria-label="Navigation secondaire">
          <a href="#about" class="hover:text-[#D4AF37] transition-colors">Vision</a>
          <a href="#services" class="hover:text-[#D4AF37] transition-colors">Expertise</a>
          <a href="#process" class="hover:text-[#D4AF37] transition-colors">Fonctionnement</a>
          <a href="#contact" class="hover:text-[#D4AF37] transition-colors">Contact</a>
          <div class="h-8 w-[1px] bg-white/10" aria-hidden="true"></div>
          <a href="https://wa.me/237655437070" target="_blank" class="text-white hover:text-[#D4AF37] transition-colors flex items-center gap-2 group" aria-label="WhatsApp Direct">
            WhatsApp
            <ArrowUpRight class="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </nav>

        <!-- Mobile Menu Toggle -->
        <button 
          @click="isMenuOpen = !isMenuOpen" 
          class="lg:hidden text-white p-2"
          :aria-label="isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          :aria-expanded="isMenuOpen"
        >
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
        <div v-if="isMenuOpen" class="fixed inset-y-0 right-0 w-full bg-[#0F172A] z-50 p-12 flex flex-col justify-center gap-12 text-center lg:hidden" role="dialog" aria-modal="true" aria-label="Menu de navigation mobile">
          <a href="#about" @click="isMenuOpen = false" class="text-4xl font-serif italic text-white">Vision</a>
          <a href="#services" @click="isMenuOpen = false" class="text-4xl font-serif italic text-white">Expertise</a>
          <a href="#process" @click="isMenuOpen = false" class="text-4xl font-serif italic text-white">Fonctionnement</a>
          <a href="#contact" @click="isMenuOpen = false" class="text-4xl font-serif italic text-white">Contact</a>
          <div class="pt-12 border-t border-white/10">
            <a href="https://wa.me/237655437070" class="btn-bespoke py-4 block" aria-label="Nous contacter sur WhatsApp">WhatsApp Direct</a>
          </div>
        </div>
      </transition>
    </nav>

    <!-- Hero Section -->
    <header class="relative min-h-screen flex items-center pt-24 pb-20">
      <div class="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-8 z-10 space-y-12">
          <div class="inline-flex items-baseline gap-4">
            <span class="h-[1px] w-12 bg-[#D4AF37]" aria-hidden="true"></span>
            <span class="text-xs font-bold tracking-[0.4em] uppercase text-[#D4AF37]">Innovation Logistique</span>
          </div>

          <h1 class="text-6xl md:text-9xl font-bold leading-[0.9] text-white tracking-tighter">
            L'excellence <span class="editorial-heading">sans</span><br />
            compromis.
          </h1>

          <p class="text-xl md:text-2xl font-light text-slate-400 max-w-xl leading-relaxed">
            KEMET Group transcende les standards classiques de la logistique internationale. Nous bâtissons des solutions agiles pour un monde en perpétuel mouvement.
          </p>

          <div class="flex flex-wrap gap-8 pt-8 items-center">
            <a href="#contact" class="btn-bespoke" aria-label="S'inscrire pour être informé du lancement">Prendre rendez-vous</a>
            <div class="flex items-center gap-4 text-xs font-bold">
              <span class="text-white/30 tracking-widest uppercase font-serif italic">Partenaire officiel</span>
              <span class="text-white tracking-tighter italic text-lg opacity-60">Kenya Airways</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-4 relative mt-20 lg:mt-0" aria-hidden="true">
          <div class="relative w-full aspect-[3/4] overflow-hidden shadow-[30px_30px_0px_#D4AF3710]">
            <img 
              src="/images/hero-bg.png" 
              alt="Détails logistiques montrant l'excellence opérationnelle de KEMET Group" 
              class="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 ease-in-out cursor-crosshair scale-110"
              loading="eager"
            />
            <div class="absolute bottom-10 -left-10 bg-[#D4AF37] text-[#0F172A] p-8 max-w-[200px] shadow-2xl">
              <span class="text-4xl font-serif italic font-bold">100%</span>
              <p class="text-[10px] font-bold uppercase tracking-wider mt-2">D'engagement qualité sur chaque transit.</p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Vision Section -->
    <section id="about" class="py-32 bg-[#0F172A]/30 border-y border-white/5">
      <div class="container mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <div class="space-y-12">
            <h2 class="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Un ancrage <span class="editorial-heading text-sand">local</span>,<br />
              une puissance <br />
              de frappe <span class="editorial-heading">globale.</span>
            </h2>
            <div class="relative w-full aspect-video overflow-hidden border border-white/5 opacity-40">
               <img src="/images/hero-bg.png" alt="Vue aérienne logistique" class="w-full h-full object-cover grayscale" />
            </div>
          </div>
          <div class="space-y-12 pt-12 md:pt-32">
            <p class="text-xl leading-relaxed text-slate-300 font-light">
              Né d’un besoin de fluidifier les échanges entre l’Afrique et les pôles économiques mondiaux, KEMET Group s’impose comme le maillon fort de votre chaîne logistique. 
            </p>
            <p class="text-lg leading-relaxed text-slate-400">
              Basée sur une expertise rigoureuse en zone franche (FZE) et un réseau opérationnel ancré au Cameroun, notre structure allie la flexibilité d'une startup à la robustesse d'un géant industriel. Nous ne livrons pas des colis, nous transportons votre confiance à travers le monde.
            </p>
            <div class="grid grid-cols-2 gap-12 pt-8">
              <div class="space-y-4">
                <Globe class="w-8 h-8 text-[#D4AF37] opacity-60" />
                <div>
                  <span class="text-white block font-bold tracking-widest text-[10px] uppercase mb-1">Réseau Hub</span>
                  <span class="text-slate-500 text-sm">Dubai - Douala - International</span>
                </div>
              </div>
              <div class="space-y-4">
                <ShieldCheck class="w-8 h-8 text-[#D4AF37] opacity-60" />
                <div>
                  <span class="text-white block font-bold tracking-widest text-[10px] uppercase mb-1">Conformité</span>
                  <span class="text-slate-500 text-sm">Standards IATA & FZE LLC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="py-40">
      <div class="container mx-auto px-6 md:px-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-32 border-b border-white/10 pb-12 gap-8">
          <div class="space-y-4">
            <span class="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">Nos Expertises</span>
            <h2 class="text-5xl md:text-6xl font-bold text-white tracking-tighter">Au-delà du transport.</h2>
          </div>
          <p class="max-w-xs text-sm leading-relaxed text-slate-500 font-medium italic">
            "Une maîtrise technique de pointe pour une sérénité client absolue."
          </p>
        </div>

        <div class="space-y-32">
          <article 
            v-for="(service, index) in services" 
            :key="service.title"
            class="group grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
          >
            <div :class="[index % 2 === 0 ? 'md:col-span-5' : 'md:col-span-5 md:order-2', 'space-y-8']">
              <span class="text-[10px] font-bold tracking-[0.5em] text-[#D4AF37] uppercase opacity-70">{{ service.tag }}</span>
              <h3 class="text-4xl md:text-5xl font-bold text-white group-hover:text-[#D4AF37] transition-colors font-serif italic">{{ service.title }}</h3>
              <p class="text-lg leading-relaxed text-slate-400 font-light">{{ service.description }}</p>
              <a :href="service.link" target="_blank" class="inline-flex items-center gap-4 text-white font-bold tracking-widest text-[10px] uppercase group/link" :aria-label="'En savoir plus sur ' + service.title">
                Demander un devis 
                <div class="w-8 h-[1px] bg-[#D4AF37] group-hover/link:w-16 transition-all duration-500"></div>
                <ArrowUpRight class="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>
            
            <div :class="[index % 2 === 0 ? 'md:col-span-7' : 'md:col-span-7 md:order-1']">
              <div class="relative overflow-hidden aspect-video bg-white/5 border border-white/10">
                <img 
                  :src="service.image" 
                  class="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-1000 contrast-110"
                  alt=""
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Operational Process -->
    <section id="process" class="py-32 bg-[#D4AF37]/5 relative">
      <div class="container mx-auto px-6 md:px-12">
         <div class="mb-24 space-y-4 max-w-2xl">
            <h2 class="text-4xl md:text-5xl font-bold text-white tracking-tighter">Comment nous <span class="editorial-heading">opérons.</span></h2>
            <p class="text-slate-500">Un protocole rigoureux en trois étapes pour garantir l'excellence logistique.</p>
         </div>
         <div class="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5">
            <div v-for="(step, i) in steps" :key="i" class="bg-[#020617] p-12 space-y-8 group hover:bg-white/[0.02] transition-colors">
               <div class="text-[#D4AF37]/20 font-serif italic text-6xl">0{{ i + 1 }}</div>
               <div class="p-4 bg-white/5 border border-white/10 w-fit rounded-full">
                  <component :is="step.icon" class="w-6 h-6 text-[#D4AF37]" />
               </div>
               <h4 class="text-2xl font-bold text-white">{{ step.title }}</h4>
               <p class="text-sm leading-relaxed text-slate-500">{{ step.description }}</p>
            </div>
         </div>
      </div>
    </section>

    <!-- Refined CTA Block -->
    <section class="py-40 bg-[#D4AF37] text-[#0F172A] relative overflow-hidden">
      <!-- Decorative Element -->
      <div class="absolute -right-20 -top-20 text-[20rem] font-black italic opacity-20 pointer-events-none select-none font-serif tracking-tighter">
        KM
      </div>

      <div class="container mx-auto px-6 md:px-24 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div class="space-y-8">
            <h2 class="text-5xl md:text-7xl font-bold leading-[1] tracking-tighter">
              L'excellence <br />
              au service de <br />
              <span class="font-serif italic text-[#0F172A]/70">votre vision.</span>
            </h2>
            <p class="text-xl font-medium max-w-md">
              Préparez votre prochain envoi ou voyage dès aujourd'hui. Notre équipe d'experts est à votre disposition pour une consultation personnalisée.
            </p>
          </div>
          
          <div class="relative">
            <div class="bg-[#0F172A] p-12 shadow-3xl text-white space-y-12 border border-white/5">
              <h3 class="text-3xl font-serif italic mb-8">Votre projet logistique commence ici.</h3>
              <p class="text-slate-400 font-light leading-relaxed">
                Besoin d'un devis immédiat ou d'un conseil expert ? Nos conseillers sont disponibles pour vous répondre en direct via WhatsApp.
              </p>
              <div class="pt-4">
                <a 
                  href="https://wa.me/237655437070" 
                  target="_blank"
                  class="btn-bespoke bg-white text-[#0F172A] hover:bg-[#D4AF37] w-full flex items-center justify-center gap-4 py-8"
                  aria-label="Démarrer une conversation sur WhatsApp"
                >
                  <MessageSquare class="w-6 h-6" />
                  <span>Démarrer la discussion</span>
                </a>
              </div>
              <div class="flex items-center justify-center gap-8 pt-8 border-t border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/30">
                  <span>Réponse en moins de 15min</span>
                  <span>7j/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQs / Final Population -->
    <section class="py-32">
       <div class="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div class="space-y-6">
            <h5 class="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">Des Questions ?</h5>
            <p class="text-slate-400 max-w-sm mb-12">Quelques éclaircissements sur nos méthodes et notre engagement.</p>
          </div>
          <div class="space-y-12 border-l border-white/10 pl-12">
             <div v-for="faq in faqs" :key="faq.q" class="space-y-4">
                <h6 class="text-white font-bold flex items-center gap-4">
                   <HelpCircle class="w-4 h-4 text-[#D4AF37]" />
                   {{ faq.q }}
                </h6>
                <p class="text-sm leading-relaxed text-slate-500 font-light ml-8">{{ faq.a }}</p>
             </div>
          </div>
       </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="bg-[#020617] border-t border-white/5 pt-40 pb-20">
      <div class="container mx-auto px-6 md:px-12 text-center lg:text-left">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-40">
          
          <div class="lg:col-span-6 space-y-12">
            <div class="flex flex-col gap-2 items-center lg:items-start">
              <span class="text-4xl font-bold text-white tracking-widest uppercase">KEMET</span>
              <span class="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs">Group FZE LLC</span>
            </div>
            <div class="space-y-8">
              <div class="flex flex-col gap-2">
                <span class="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">Emailing</span>
                <a href="mailto:travel@bkemet.com" class="text-2xl md:text-3xl text-white hover:text-[#D4AF37] font-serif transition-all italic underline decoration-[#D4AF37]/10">travel@bkemet.com</a>
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">Direct Line</span>
                <a href="tel:+237655437070" class="text-2xl md:text-3xl text-white hover:text-[#D4AF37] font-serif transition-all italic">+237 655 43 70 70</a>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6 grid grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            <div class="space-y-8 text-[10px]">
              <span class="font-bold text-white uppercase tracking-[0.3em] opacity-40 block">Navigation</span>
              <ul class="space-y-4 font-bold uppercase tracking-widest text-[#94a3b8]">
                <li><a href="#" class="hover:text-white transition-colors">Accueil</a></li>
                <li><a href="#about" class="hover:text-white transition-colors">Vision</a></li>
                <li><a href="#services" class="hover:text-white transition-colors">Expertise</a></li>
                <li><a href="#process" class="hover:text-white transition-colors">Processus</a></li>
              </ul>
            </div>
            
            <div class="space-y-8 text-[10px]">
              <span class="font-bold text-white uppercase tracking-[0.3em] opacity-40 block">Presence</span>
              <ul class="space-y-4 font-bold uppercase tracking-widest text-[#94a3b8]">
                <li><a href="#" class="hover:text-white transition-colors" aria-label="LinkedIn Profile">Linkedin</a></li>
                <li><a href="#" class="hover:text-white transition-colors" aria-label="Instagram Profile">Instagram</a></li>
                <li><a href="#" class="hover:text-white transition-colors" aria-label="Facebook Page">Facebook</a></li>
              </ul>
            </div>

            <div class="space-y-8 text-[10px] col-span-2 lg:col-span-1">
               <span class="font-bold text-white uppercase tracking-[0.3em] opacity-40 block">Legal Entity</span>
               <p class="font-bold uppercase tracking-widest text-slate-500 leading-relaxed">
                  KEMET GROUP FZE LLC<br />
                  Logistics License #2026<br />
                  Registration: UAE & CMR
               </p>
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-between gap-12 border-t border-white/5 pt-20">
          <p class="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">
            &copy; {{ new Date().getFullYear() }} KEMET Group. Excellence since inception.
          </p>
          <div class="flex gap-12 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             <span class="text-sm font-black italic tracking-tighter text-white">Kenya Airways Partner</span>
          </div>
          <div class="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">
            <a href="#" class="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" class="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Floating Global Marker -->
    <div class="fixed bottom-12 left-12 z-50 hidden md:block group cursor-none" aria-hidden="true">
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
