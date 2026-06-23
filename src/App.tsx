import { motion } from "motion/react";
import { Laptop, Music, Volume2, HardDrive, Wifi, CreditCard, CheckCircle2, ChevronRight } from "lucide-react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const SectionHeader = ({ number, title, subtitle }: { number: string, title: string, subtitle: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-start gap-4 mb-8"
  >
    <div className="bg-primary-dark text-white font-display text-3xl md:text-4xl px-4 py-2 rounded-lg">
      {number}
    </div>
    <div className="min-w-0 pt-1">
      <h2 className="text-xl md:text-2xl font-display uppercase tracking-tight leading-tight text-primary-dark">{title}</h2>
      <p className="text-slate-500 italic font-medium">{subtitle}</p>
    </div>
  </motion.div>
);

const Card = ({ title, items, icon: Icon, color = "border-primary-dark" }: { title: string, items: string[], icon: any, color?: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`bg-white p-5 md:p-6 rounded-xl border-l-4 ${color} shadow-sm transition-all duration-300`}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-slate-100 rounded-lg">
        <Icon size={20} className="text-primary-dark" />
      </div>
      <h3 className="font-display uppercase text-sm tracking-widest text-primary-dark">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 group">
          <ChevronRight size={14} className="mt-1 text-accent-orange opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="text-slate-700 leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const BudgetRow = ({ label, price, hoverColor = "group-hover:border-accent-orange/40" }: { key?: number, label: string, price: string, hoverColor?: string }) => (
  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center group">
    <span className="text-slate-700 font-medium leading-snug">{label}</span>
    <div className={`hidden sm:block flex-grow mx-6 border-b border-dotted border-slate-300 ${hoverColor} transition-colors`} />
    <span className="font-mono text-lg text-primary-dark whitespace-nowrap">~ {price}</span>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent-orange selection:text-white">
      {/* Header Section */}
      <header className="relative bg-primary-dark text-white overflow-hidden pt-10 pb-16 px-5 sm:px-6 md:pt-16 md:pb-32 md:px-12">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-orange/10 transform skew-x-12 translate-x-20" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-16 gap-8">
            <div className="space-y-2">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 text-[11px] md:text-xs uppercase tracking-[0.24em] md:tracking-[0.3em] font-semibold text-accent-orange"
              >
                Conservatoire de montélimar
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display uppercase leading-[0.86] tracking-tighter"
              >
                <span className="block text-5xl sm:text-6xl md:text-9xl">Numérique</span>
                <span className="block text-4xl sm:text-5xl md:text-9xl opacity-40">Conservatoire</span>
              </motion.h1>
            </div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-accent-orange text-white font-display text-3xl md:text-4xl px-5 md:px-6 py-3 rounded-xl shadow-2xl shadow-accent-orange/20"
            >
              2026
            </motion.div>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-base italic border-l-2 border-accent-orange pl-4 max-w-xl"
          >
            Présentation
          </motion.p>
        </div>
      </header>

      {/* Hero Motto */}
      <div className="bg-white py-8 md:py-10 px-5 sm:px-6 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-3xl text-primary-dark font-medium leading-tight max-w-4xl"
          >
            Créer un espace numérique mutualisé, équitable et adapté aux pratiques du conservatoire.
          </motion.p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-5 sm:px-6 py-12 md:py-20 space-y-20 md:space-y-32">
        
        {/* Section 01 */}
        <section id="s1" className="scroll-mt-20">
          <SectionHeader 
            number="01" 
            title="Équipement Informatique" 
            subtitle="Matériel adapté à une utilisation légère en MAO" 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="lg:col-span-1 bg-primary-dark text-white p-8 rounded-2xl flex flex-col justify-between shadow-xl"
            >
              <div>
                <h3 className="text-4xl font-display leading-none mb-1">MAC</h3>
                <p className="text-xl italic opacity-80 mb-6">mini</p>
                <div className="w-12 h-px bg-accent-orange mb-4 shadow-[0_0_8px_rgba(242,112,36,0.5)]" />
              </div>
              <p className="text-xs uppercase tracking-widest opacity-60">Apple Silicon</p>
            </motion.div>

            <div className="lg:col-span-3 bg-white p-6 md:p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center">
              <h4 className="text-xl md:text-2xl font-display text-primary-dark mb-6 border-b border-slate-100 pb-4">
                Mac mini — puce Apple Silicon M4
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {[
                  "Très bon rapport qualité-prix, toutes les connectiques utiles, Wi-Fi intégré.",
                  "Les puces Apple Silicon permettent l'usage de certaines IA en local (sans connexion internet), garantissant ainsi la protection des données.",
                  "Périphériques (écran, souris, clavier) : matériel d'occasion recommandé."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 text-slate-700">
                    <span className="text-accent-orange mt-2 h-2 w-2 rounded-full flex-shrink-0 bg-accent-orange shadow-[0_0_5px_rgba(242,112,36,0.5)]" />
                    <p className="text-base md:text-lg leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card 
              title="Logiciels" 
              icon={Laptop} 
              items={[
                "Ableton Live — Séquenceur & production audio",
                "Logic Pro — DAW natif Apple — qualité studio",
                "Guitar Pro — Tablature et partition",
                "MuseScore — Édition de partitions — abonnement"
              ]}
            />
            <Card 
              title="Pack Audio — Par Poste" 
              icon={Volume2} 
              items={[
                "Microphone cardioïde — Enregistrement voix & instruments",
                "Carte son USB 1 entrée — Ex. Focusrite Scarlett Solo",
                "Casque studio fermé — Travail individuel sans nuisance",
                "Clavier maître compact — Ex. Akai MPK Mini"
              ]}
            />
          </div>
        </section>

        {/* Section 02 */}
        <section id="s2" className="scroll-mt-20">
          <SectionHeader 
            number="02" 
            title="Matériel & Besoins Communs" 
            subtitle="Infrastructure partagée de la salle" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card 
              title="NAS - Stockage Réseau" 
              icon={HardDrive} 
              color="border-blue-500"
              items={[
                "Disque réseau local partagé",
                "Accès commun aux ressources depuis tous les postes",
                "Non connecté à internet",
                "Sécurité maximale des données",
                "Partothèque, enregistrements, supports de cours"
              ]}
            />
            <Card 
              title="WWW - Connexion Internet" 
              icon={Wifi} 
              color="border-blue-400"
              items={[
                "Idéal : filaire (Ethernet) — Connexion dédiée à la salle",
                "Alternative : Wi-Fi dédié — Routeur Wi-Fi dédié",
                "Indépendant du réseau professeurs et invité",
                "Réseau indépendant"
              ]}
            />
            <Card 
              title="ABT - Abonnements" 
              icon={CreditCard} 
              color="border-accent-orange"
              items={[
                "YouTube Premium — Concerts, tutos, Back in track sans publicité",
                "MuseScore Pro — Bibliothèque de partitions en ligne, fonctions avancées",
                "Guitar Pro — Tablatures et partitions",
                "Tomplay — Partitions interactives avec accompagnement audio synchronisé"
              ]}
            />
          </div>
        </section>

        {/* Section 03 */}
        <section id="s3" className="scroll-mt-20">
          <SectionHeader 
            number="03" 
            title="Budget Estimatif" 
            subtitle="Investissement de départ" 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="font-display uppercase text-sm tracking-widest text-slate-400 mb-8 border-b border-slate-200 pb-3 flex items-center justify-between">
                  <span>Investissement Initial</span>
                  <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-500">Estimations 2026</span>
                </h4>
                <div className="space-y-6">
                  {[
                    { label: "Mac mini × 3 (M4)", price: "3 000 €" },
                    { label: "Périphériques d'occasion × 3", price: "300 €" },
                    { label: "Pack audio × 3", price: "1 500 €" },
                    { label: "NAS + disques", price: "600 €" },
                    { label: "Routeur Wi-Fi dédié", price: "200 €" },
                    { label: "Licences des logiciels (Ableton, etc.)", price: "1 200 €" },
                  ].map((row, i) => (
                    <BudgetRow key={i} label={row.label} price={row.price} />
                  ))}
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center bg-primary-dark text-white p-6 rounded-2xl mt-10 shadow-xl"
                  >
                    <span className="font-display uppercase text-sm tracking-widest opacity-80">Total Investissement</span>
                    <span className="text-3xl font-display text-accent-orange">~ 6 800 €</span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="font-display uppercase text-sm tracking-widest text-slate-400 mb-8 border-b border-slate-200 pb-3 flex items-center justify-between">
                  <span>Abonnements / An</span>
                  <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-500">Frais récurrents</span>
                </h4>
                <div className="space-y-6">
                  {[
                    { label: "YouTube Premium", price: "140 €" },
                    { label: "MuseScore Pro", price: "50 €" },
                    { label: "Tomplay", price: "300 €" },
                  ].map((row, i) => (
                    <BudgetRow key={i} label={row.label} price={row.price} hoverColor="group-hover:border-blue-400/40" />
                  ))}
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center bg-slate-100 text-primary-dark p-6 rounded-2xl mt-10 border border-slate-200"
                  >
                    <span className="font-display uppercase text-sm tracking-widest opacity-60 font-bold">Total / An</span>
                    <span className="text-3xl font-display">~ 490 €</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <aside className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 md:p-10 rounded-2xl border border-slate-200 shadow-xl lg:sticky lg:top-8"
              >
                <div className="flex items-center gap-3 text-accent-orange mb-8 pb-4 border-b border-slate-100">
                  <Music size={28} />
                  <h4 className="font-display uppercase text-xl tracking-tight text-primary-dark">Points Clés</h4>
                </div>
                
                <div className="space-y-10">
                  {[
                    { title: "Équité d'accès", content: "Matériel disponible pour tous, indépendamment de l'équipement personnel." },
                    { title: "Sécurité", content: "NAS isolé d'internet + IA locale sur Mac mini Apple Silicon." },
                    { title: "Durabilité", content: "Matériel pérenne, logiciels stables, entretien minimal." },
                  ].map((point, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-accent-orange" />
                        <h5 className="font-display uppercase text-sm tracking-widest text-primary-dark">{point.title}</h5>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-sm">{point.content}</p>
                    </div>
                  ))}
                </div>
                
              </motion.div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="bg-primary-dark text-white py-12 md:py-20 px-5 sm:px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-50">
          <div className="flex items-center justify-center gap-4">
            <div className="hidden sm:block w-10 h-px bg-white/30" />
            <p className="text-center text-[10px] uppercase font-bold tracking-[0.18em] md:tracking-[0.3em]">
              Conservatoire de Montélimar
            </p>
          </div>
          <p className="text-center text-[10px] uppercase font-bold tracking-[0.18em] md:tracking-[0.3em]">
            Salle Numérique Partagée · 2026
          </p>
          <div className="flex items-center justify-center gap-4">
            <p className="text-center text-[10px] uppercase font-bold tracking-[0.18em] md:tracking-[0.3em]">
              Guillaume Mostafa et Hyacinthe Chetoui
            </p>
            <div className="hidden sm:block w-10 h-px bg-white/30" />
          </div>
        </div>
      </footer>
    </div>
  );
}
