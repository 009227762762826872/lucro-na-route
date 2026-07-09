import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Check,
  Gem,
  Truck,
  Wallet,
  TrendingUp,
  Lock,
  Sparkles,
} from "lucide-react";

const CHECKOUT_URL =
  "https://pagar.vindi.com.br/9843e43757174fc07e8184fbfe4470da678013a5";

interface PremiumModule {
  badge: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  price: string;
  ctaLabel: string;
  link: string;
}

const premiumModules: PremiumModule[] = [
  {
    badge: "CONTEÚDO FUNDAMENTAL",
    icon: Truck,
    title: "MÓDULO 1 — BASE DA OPERAÇÃO LUCRATIVA",
    subtitle: "Onde você para de perder dinheiro na operação",
    description:
      "O Módulo 1 é onde você estrutura sua operação da forma correta. Aqui você elimina erros operacionais que geram prejuízo e constrói uma base sólida para escalar com segurança.",
    bullets: [
      "Como contratar e validar terceiros corretamente",
      "Escolha do veículo ideal para cada tipo de operação",
      "Formação de frete sem comprometer sua margem",
      "Planejamento de viagem eficiente",
      "Organização e acomodação correta da carga",
    ],
    price: "R$ 159,90",
    ctaLabel: "Quero esse módulo",
    link: "https://pagar.vindi.com.br/7535339ee2852371e6d643717871533a89e65308",
  },
  {
    badge: "CONTROLE E LUCRO",
    icon: Wallet,
    title: "MÓDULO 2 — GESTÃO FINANCEIRA DA TRANSPORTADORA",
    subtitle: "Onde a maioria das transportadoras quebra",
    description:
      "O Módulo 2 é responsável por colocar sua operação no controle financeiro. Aqui você entende números, margens e toma decisões que mantêm sua empresa viva e lucrativa.",
    bullets: [
      "Documentação e conformidade (CTRC, CIOT, contratos)",
      "Estruturação de pagamentos seguros",
      "Controle de fluxo de caixa operacional",
      "Indicadores essenciais para transportadoras",
      "Planejamento estratégico e gestão de crises",
    ],
    price: "R$ 219,90",
    ctaLabel: "Quero esse módulo",
    link: "https://pagar.vindi.com.br/fb81b0be2f8fe2b3b1166d136be098e87543dba8",
  },
];

const pillar3Topics = [
  "Mentalidade Comercial: parar de esperar carga e começar a vender solução",
  "Prospecção e Abordagem: como abordar empresas e identificar decisores",
  "Follow-up e Relacionamento: construção de carteira ativa de clientes",
  "Precificação Comercial: vender valor, não só preço",
  "Estratégia no WhatsApp: abordagem profissional, sequência e pós-venda",
];

const eliteFeatures = [
  "Acesso completo aos 3 pilares + todos os módulos",
  "Bônus exclusivo: Pilar 3 — Comercial (conteúdo avançado, não vendido separadamente)",
  "Aula ao vivo mensal em grupo, com abertura para perguntas",
  "Acompanhamento via grupo e chat",
  "Suporte com análise caso a caso",
  "Comunidade ativa para networking entre alunos",
];

const PremiumModuleCard = ({
  module,
  index,
}: {
  module: PremiumModule;
  index: number;
}) => {
  const Icon = module.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative rounded-3xl p-8 md:p-10 pt-14 border-2 border-amber-500/40 bg-gradient-to-br from-amber-950/20 via-card to-background shadow-[0_0_50px_rgba(245,158,11,0.08)] hover:shadow-[0_0_70px_rgba(245,158,11,0.18)] hover:border-amber-500/60 transition-all duration-500 flex flex-col"
    >
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
        <div className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-950 text-xs font-black shadow-lg whitespace-nowrap">
          {module.badge}
        </div>
      </div>

      <div className="text-center mb-6">
        <div className="inline-flex w-14 h-14 rounded-xl bg-amber-500/20 items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-amber-400" />
        </div>
        <h3 className="font-display text-xl md:text-2xl font-bold text-amber-300 mb-2 leading-tight">
          {module.title}
        </h3>
        <p className="text-sm text-amber-400/80 font-medium">
          {module.subtitle}
        </p>
      </div>

      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-6 text-sm md:text-base">
        {module.description}
      </p>

      <ul className="space-y-3 max-w-xl mx-auto mb-8 w-full">
        {module.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-amber-400" />
            </div>
            <span className="text-sm text-foreground">{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto text-center border-t border-amber-500/20 pt-6">
        <p className="text-xs text-amber-400/70 font-medium uppercase tracking-widest mb-1">
          Investimento
        </p>
        <p className="text-3xl md:text-4xl font-black text-amber-300 mb-5">
          {module.price}
        </p>
        <Button
          size="lg"
          asChild
          className="w-full sm:w-auto px-8 bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-950 font-bold hover:from-amber-400 hover:to-yellow-300 border-0 shadow-lg"
        >
          <a href={module.link} target="_blank" rel="noopener noreferrer">
            {module.ctaLabel}
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export const PricingSection = () => {
  return (
    <section id="planos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Escolha o <span className="text-gradient">caminho ideal</span> para a sua operação
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comece pelo módulo que resolve seu maior gargalo hoje — ou avance direto para o
            sistema completo com o Plano Elite.
          </p>
        </motion.div>

        {/* ELITE PLAN — UPSELL TOPO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="relative rounded-3xl p-8 md:p-10 pt-14 border-2 border-amber-500/60 bg-gradient-to-br from-amber-950/30 via-card to-amber-900/20 shadow-[0_0_60px_rgba(245,158,11,0.15)]">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
              <div className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-950 text-xs font-black shadow-lg text-center leading-tight whitespace-nowrap">
                💎 SISTEMA COMPLETO + COMUNIDADE
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <Gem className="w-7 h-7 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-amber-300">
                      Plano Elite — Curso Completo
                    </h3>
                    <p className="text-sm text-amber-400/70">
                      Sistema validado + ambiente de crescimento contínuo
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 max-w-xl">
                  Você não está comprando apenas conteúdo. Está entrando em um sistema validado,
                  um caminho estruturado do iniciante ao avançado, com aulas ao vivo,
                  acompanhamento e uma comunidade ativa de transportadores.
                </p>

                <ul className="grid sm:grid-cols-2 gap-3">
                  {eliteFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-amber-400" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:w-72 text-center flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                <p className="text-sm text-amber-400/70 font-medium uppercase tracking-widest">
                  Investimento
                </p>
                <p className="text-4xl md:text-5xl font-black text-amber-300 leading-tight">
                  R$ 297,90
                </p>
                <p className="text-xs text-muted-foreground">
                  Acesso imediato após a compra
                </p>
                <Button
                  size="lg"
                  asChild
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-950 font-bold hover:from-amber-400 hover:to-yellow-300 border-0 shadow-lg"
                >
                  <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                    Quero o Curso Completo
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground">
                  Inclui o bônus exclusivo Pilar 3
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* MÓDULOS PREMIUM — separador */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400/80 mb-3">
            Ou comece por um módulo
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Módulos avulsos com acesso imediato
          </h3>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Cada módulo é um sistema completo dentro do seu pilar — escolha por onde sua
            operação precisa começar.
          </p>
        </motion.div>

        {/* MÓDULOS 1 e 2 PREMIUM */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {premiumModules.map((mod, i) => (
            <PremiumModuleCard key={i} module={mod} index={i} />
          ))}
        </div>

        {/* PILLAR 3 — BONUS ONLY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl p-8 md:p-10 pt-14 border-2 border-amber-500/40 bg-gradient-to-br from-amber-950/20 via-card to-background">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
              <div className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-950 text-xs font-black shadow-lg flex items-center gap-2 whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5" />
                BÔNUS EXCLUSIVO DO PLANO ELITE
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="inline-flex w-14 h-14 rounded-xl bg-amber-500/20 items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-amber-300 mb-2">
                PILAR 3 — COMERCIAL
              </h3>
              <p className="text-sm text-amber-400/80 font-medium mb-4">
                Onde nasce o crescimento
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30">
                <Lock className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                  Conteúdo avançado • Não vendido separadamente
                </span>
              </div>
            </div>

            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6">
              O Pilar 3 é a etapa avançada do método: a virada de chave que transforma o operador
              em estrategista comercial. Por ser conteúdo de alto impacto, está disponível
              <span className="text-foreground font-medium"> apenas como bônus exclusivo </span>
              para alunos do Plano Elite.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-8">
              {pillar3Topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-amber-400" />
                  </div>
                  <span className="text-sm text-foreground">{topic}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-950 font-bold hover:from-amber-400 hover:to-yellow-300 border-0 shadow-lg"
              >
                <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                  Quero o Curso Completo
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                Acesso ao Pilar 3 incluso no Plano Elite
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
