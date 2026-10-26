import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import logo from "@/assets/logo-ctl.png";
import { Check, Crown, Gem, Truck, Wallet, TrendingUp, Users, Video, MessageCircle, ShieldCheck, ArrowRight } from "lucide-react";

const CTA_URL =
  "https://wa.me/5562942633503?text=" +
  encodeURIComponent("Olá Ederson! Tenho interesse no Programa Premium com mentoria individual.");

const pillars = [
  { icon: Truck, title: "Pilar 1 — Operacional", text: "Contratação de terceiros, veículo ideal, formação de frete, planejamento de viagem e acomodação de carga." },
  { icon: Wallet, title: "Pilar 2 — Financeiro", text: "Documentação, pagamentos seguros, fluxo de caixa, indicadores e gestão de crises." },
  { icon: TrendingUp, title: "Pilar 3 — Comercial", text: "Mentalidade comercial, prospecção, follow-up, precificação de valor e estratégia no WhatsApp." },
];

const mentorship = [
  "Mentoria individual diretamente com Ederson",
  "Diagnóstico completo da sua operação",
  "Plano de ação personalizado para sua transportadora",
  "Análise de números, margens e contratos caso a caso",
  "Canal direto para dúvidas estratégicas",
  "Acesso completo a todos os conteúdos e módulos",
  "Aulas ao vivo mensais em grupo",
  "Comunidade exclusiva de transportadores",
];

const fade = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const CTA = ({ label = "Quero aplicar para o Premium" }: { label?: string }) => (
  <Button size="lg" asChild className="group px-10 h-14 text-base bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-950 font-bold hover:from-amber-400 hover:to-yellow-300 border-0 shadow-lg">
    <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
      {label}
      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
    </a>
  </Button>
);

const Premium = () => (
  <main className="min-h-screen bg-background">
    <header className="border-b border-amber-500/20 py-4">
      <div className="container px-6 flex items-center justify-between">
        <img src={logo} alt="Códigos do Transporte Lucrativo" className="h-12 w-auto" />
        <span className="hidden sm:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
          <Crown className="w-4 h-4" /> Programa Premium
        </span>
      </div>
    </header>

    {/* Hero */}
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-background to-background" />
      <motion.div {...fade} className="container px-6 relative z-10 max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-8">
          <Gem className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Vagas limitadas • Acompanhamento individual</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Sua transportadora conduzida{" "}
          <span className="text-gradient">lado a lado comigo</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          O Programa Premium reúne todo o método Códigos do Transporte Lucrativo com mentoria individual,
          para transformar sua operação em uma empresa estratégica e lucrativa.
        </p>
        <CTA />
      </motion.div>
    </section>

    {/* Conteúdos */}
    <section className="py-20">
      <div className="container px-6">
        <motion.div {...fade} className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400/80 mb-3">Todos os conteúdos</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Os 3 pilares completos do método</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div key={i} {...fade} transition={{ duration: 0.6, delay: i * 0.1 }} className="rounded-3xl p-8 border-2 border-amber-500/30 bg-gradient-to-br from-amber-950/20 via-card to-background text-center">
              <div className="inline-flex w-14 h-14 rounded-xl bg-amber-500/20 items-center justify-center mb-4">
                <p.icon className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-amber-300 mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Mentoria */}
    <section className="py-20">
      <div className="container px-6 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          { icon: MessageCircle, t: "Mentoria individual", d: "Encontros diretos comigo para decisões estratégicas da sua operação." },
          { icon: Video, t: "Aulas ao vivo", d: "Encontros mensais em grupo com abertura para perguntas." },
          { icon: Users, t: "Comunidade", d: "Networking com transportadores que estão crescendo." },
        ].map((b, i) => (
          <motion.div key={i} {...fade} className="rounded-2xl p-6 bg-card border border-amber-500/20">
            <b.icon className="w-8 h-8 text-amber-400 mb-3" />
            <h3 className="font-bold text-lg mb-2">{b.t}</h3>
            <p className="text-sm text-muted-foreground">{b.d}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Oferta */}
    <section className="py-24">
      <motion.div {...fade} className="container px-6 max-w-4xl">
        <div className="relative rounded-3xl p-8 md:p-12 pt-16 border-2 border-amber-500/60 bg-gradient-to-br from-amber-950/30 via-card to-amber-900/20 shadow-[0_0_60px_rgba(245,158,11,0.15)]">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2">
            <div className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-950 text-xs font-black shadow-lg whitespace-nowrap flex items-center gap-2">
              <Crown className="w-3.5 h-3.5" /> PROGRAMA PREMIUM
            </div>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-amber-300 text-center mb-8">Tudo o que você recebe</h2>
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {mentorship.map((m, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-amber-400" />
                </div>
                <span className="text-sm text-foreground">{m}</span>
              </li>
            ))}
          </ul>
          <div className="text-center border-t border-amber-500/20 pt-8">
            <p className="text-xs text-amber-400/70 font-medium uppercase tracking-widest mb-2">Investimento</p>
            <p className="text-5xl md:text-6xl font-black text-amber-300 mb-6">R$ 26.997</p>
            <CTA />
            <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-5">
              <ShieldCheck className="w-4 h-4 text-amber-400" /> Atendimento direto e confidencial
            </p>
          </div>
        </div>
      </motion.div>
    </section>

    <Footer />
  </main>
);

export default Premium;
