import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Gem, Wrench, Calculator, TrendingUp, Lock, Sparkles } from "lucide-react";

const CHECKOUT_URL =
  "https://codigosdostransporteslucrativos1776911675993.carrinho.app/one-checkout/ocmdf/35665377";

interface Module {
  title: string;
  price: string;
  features: string[];
  link?: string;
}

interface Pillar {
  icon: React.ElementType;
  name: string;
  subtitle: string;
  modules: Module[];
}

const pillars: Pillar[] = [
  {
    icon: Wrench,
    name: "PILAR 1 — OPERACIONAL",
    subtitle: "Onde se ganha ou se perde dinheiro",
    modules: [
      {
        title: "Gestão de Terceiros",
        price: "R$ 159,90",
        link: "https://codigosdostransporteslucrativos1776911675993.carrinho.app/one-checkout/ocmdf/35629452",
        features: [
          "Como contratar corretamente o terceiro",
          "Avaliação de perfil, documentação e histórico",
          "Definição de regras claras de operação",
        ],
      },
      {
        title: "Escolha do Veículo Correto",
        price: "R$ 159,90",
        link: "https://codigosdostransporteslucrativos1776911675993.carrinho.app/one-checkout/ocmdf/35629461",
        features: [
          "Tipos de veículos e suas aplicações práticas",
          "Como evitar erro de cubagem ou excesso de custo",
          "Compatibilidade entre carga, rota e carroceria",
        ],
      },
      {
        title: "Formação de Frete ao Terceiro",
        price: "R$ 159,90",
        link: "https://codigosdostransporteslucrativos1776911675993.carrinho.app/one-checkout/ocmdf/35629531",
        features: [
          "Precificação correta para pagamento do terceiro",
          "Margem mínima saudável",
          "Como calcular carga complemento sem matar o lucro",
        ],
      },
      {
        title: "Planejamento de Viagem",
        price: "R$ 159,90",
        link: "https://codigosdostransporteslucrativos1776911675993.carrinho.app/one-checkout/ocmdf/35664324",
        features: [
          "Roteirização inteligente",
          "Organização da carga sobre o veículo",
          "Redução de reentregas, devoluções e tempo parado",
        ],
      },
      {
        title: "Acomodação da Carga",
        price: "R$ 159,90",
        link: "https://codigosdostransporteslucrativos1776911675993.carrinho.app/one-checkout/ocmdf/35664373",
        features: [
          "Técnicas básicas de amarração",
          "Tipos de carroceria para cargas específicas",
          "Prevenção de avarias e sinistros",
        ],
      },
    ],
  },
  {
    icon: Calculator,
    name: "PILAR 2 — ADMINISTRATIVO E FINANCEIRO",
    subtitle: "Onde a maioria quebra",
    modules: [
      {
        title: "Documentação e Conformidade",
        price: "R$ 219,90",
        link: "https://codigosdostransporteslucrativos1776911675993.carrinho.app/one-checkout/ocmdf/35664962",
        features: [
          "Emissão correta de CTRC",
          "Manifesto de carga",
          "Contratos de frete",
          "CIOT — exigências da ANTT",
        ],
      },
      {
        title: "Boas Práticas de Pagamento",
        price: "R$ 219,90",
        link: "https://codigosdostransporteslucrativos1776911675993.carrinho.app/one-checkout/ocmdf/35664971",
        features: [
          "Por que não usar carta frete ou cheque",
          "Como estruturar pagamentos seguros e rastreáveis",
        ],
      },
      {
        title: "Controle Financeiro",
        price: "R$ 219,90",
        link: "https://codigosdostransporteslucrativos1776911675993.carrinho.app/one-checkout/ocmdf/35664984",
        features: [
          "Organização do fluxo de caixa operacional",
          "Separação entre dinheiro da empresa e pessoal",
          "Reserva para manutenção, impostos e emergências",
        ],
      },
      {
        title: "Indicadores de Gestão",
        price: "R$ 219,90",
        link: "https://codigosdostransporteslucrativos1776911675993.carrinho.app/one-checkout/ocmdf/35664988",
        features: [
          "Quais KPIs realmente importam numa transportadora",
          "Margem por viagem / Custo por km / Taxa de ociosidade",
        ],
      },
      {
        title: "Planejamento Estratégico",
        price: "R$ 219,90",
        link: "https://codigosdostransporteslucrativos1776911675993.carrinho.app/one-checkout/ocmdf/35665127",
        features: [
          "Tomada de decisão baseada em indicadores",
          "Construção de metas reais",
          "Passos para formar uma empresa sólida e consistente",
        ],
      },
      {
        title: "Gestão de Crises",
        price: "R$ 219,90",
        link: "https://codigosdostransporteslucrativos1776911675993.carrinho.app/one-checkout/ocmdf/35665123",
        features: [
          "Como sobreviver a períodos de baixa demanda",
          "Ajustes rápidos de custo",
          "Mentalidade de longo prazo",
        ],
      },
    ],
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

        {/* ELITE PLAN */}
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

        {/* PILLARS 1 & 2 */}
        {pillars.map((pillar, pillarIndex) => (
          <div key={pillarIndex} className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center gap-4 mb-8 p-6 rounded-2xl card-gradient border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                  {pillar.name}
                </h3>
                <p className="text-sm text-primary font-medium">{pillar.subtitle}</p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {pillar.modules.map((mod, modIndex) => (
                <motion.div
                  key={modIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: modIndex * 0.05, duration: 0.4 }}
                  className="w-full max-w-sm rounded-2xl p-6 card-gradient border border-border hover:border-primary/30 transition-all duration-300 flex flex-col text-center"
                >
                  <h4 className="font-display text-lg font-bold text-foreground mb-1">
                    {mod.title}
                  </h4>
                  <p className="text-2xl font-bold text-gradient mb-4">{mod.price}</p>

                  <ul className="space-y-2.5 mb-6 flex-1 text-left">
                    {mod.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="cta" className="w-full" asChild>
                    <a href={mod.link} target="_blank" rel="noopener noreferrer">
                      Comprar Módulo
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

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
