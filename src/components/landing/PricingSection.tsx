import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Gem, Wrench, Calculator, TrendingUp } from "lucide-react";

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
  color: string;
  modules: Module[];
}

const pillars: Pillar[] = [
  {
    icon: Wrench,
    name: "PILAR 1 — OPERACIONAL",
    subtitle: "Onde se ganha ou se perde dinheiro",
    color: "primary",
    modules: [
      {
        title: "Gestão de Terceiros",
        price: "R$ 159",
        link: "https://pagar.vindi.com.br/c3017d2f075a57b956297730c4aab831ce698d1b",
        features: [
          "Como contratar corretamente o terceiro",
          "Avaliação de perfil, documentação e histórico",
          "Definição de regras claras de operação",
        ],
      },
      {
        title: "Escolha do Veículo Correto",
        price: "R$ 247",
        link: "https://pagar.vindi.com.br/9b03a84fe1a5b5d0aa128b3107367a6b92f4cdb3",
        features: [
          "Tipos de veículos e suas aplicações práticas",
          "Como evitar erro de cubagem ou excesso de custo",
          "Compatibilidade entre carga, rota e carroceria",
        ],
      },
      {
        title: "Formação de Frete ao Terceiro",
        price: "R$ 297",
        link: "https://checkout.yapay.com.br/transacao/t87765de6ec4fb77a8f2c5fc80dd95a9a",
        features: [
          "Precificação correta para pagamento do terceiro",
          "Margem mínima saudável",
          "Como calcular carga complemento sem matar o lucro",
        ],
      },
      {
        title: "Planejamento de Viagem",
        price: "R$ 159",
        link: "https://checkout.yapay.com.br/transacao/t1524ac7bb901e2c96daf0cf0123f72c5",
        features: [
          "Roteirização inteligente",
          "Organização da carga sobre o veículo",
          "Redução de reentregas, devoluções e tempo parado",
        ],
      },
      {
        title: "Acomodação da Carga",
        price: "R$ 297",
        link: "https://checkout.yapay.com.br/transacao/t4e610a58bcaacb7b822d3fc5b210eb0c",
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
    color: "primary",
    modules: [
      {
        title: "Documentação e Conformidade",
        price: "R$ 159",
        link: "https://pagar.vindi.com.br/58636b5b9f5dc69b7833afb139f29a7e4722eed7",
        features: [
          "Emissão correta de CTRC",
          "Manifesto de carga",
          "Contratos de frete",
          "CIOT — exigências da ANTT",
        ],
      },
      {
        title: "Boas Práticas de Pagamento",
        price: "R$ 247",
        link: "https://pagar.vindi.com.br/28f51a9856b243db8931785ac975bf273b945b0c",
        features: [
          "Por que não usar carta frete ou cheque",
          "Como estruturar pagamentos seguros e rastreáveis",
        ],
      },
      {
        title: "Controle Financeiro",
        price: "R$ 297",
        link: "https://pagar.vindi.com.br/c6b0f5454da23eb1b423e6a2a26121fcdc4df0ab",
        features: [
          "Organização do fluxo de caixa operacional",
          "Separação entre dinheiro da empresa e pessoal",
          "Reserva para manutenção, impostos e emergências",
        ],
      },
      {
        title: "Indicadores de Gestão",
        price: "R$ 159",
        link: "https://pagar.vindi.com.br/ae4c0165e0448a5c8b5085741ef3bff3e7c33862",
        features: [
          "Quais KPIs realmente importam numa transportadora",
          "Margem por viagem / Custo por km / Taxa de ociosidade",
        ],
      },
      {
        title: "Planejamento Estratégico",
        price: "R$ 297",
        link: "https://pagar.vindi.com.br/00a10b3edafafda097f855d36d5818e496f6f5c9",
        features: [
          "Tomada de decisão baseada em indicadores",
          "Construção de metas reais",
          "Passos para formar uma empresa sólida e consistente",
        ],
      },
      {
        title: "Gestão de Crises",
        price: "R$ 159",
        link: "https://pagar.vindi.com.br/86dd04f113f2185b3aba06e5b49ea3c378b5515b",
        features: [
          "Como sobreviver a períodos de baixa demanda",
          "Ajustes rápidos de custo",
          "Mentalidade de longo prazo",
        ],
      },
    ],
  },
  {
    icon: TrendingUp,
    name: "PILAR 3 — COMERCIAL",
    subtitle: "Onde nasce o crescimento",
    color: "primary",
    modules: [
      {
        title: "Mentalidade Comercial",
        price: "R$ 159",
        link: "https://pagar.vindi.com.br/4bc8638ad6f948f20fc5075bfe0954514e242720",
        features: [
          "Parar de esperar carga e começar a vender solução",
          "Posicionamento como especialista, não como freteiro",
        ],
      },
      {
        title: "Prospecção e Abordagem",
        price: "R$ 197",
        link: "https://pagar.vindi.com.br/d647b5a59e686fbd1057b4baf086783cd08bedeb",
        features: [
          "Como abordar empresas corretamente",
          "Estrutura básica de apresentação da transportadora",
          "Identificação de decisores",
        ],
      },
      {
        title: "Follow-up e Relacionamento",
        price: "R$ 247",
        link: "https://pagar.vindi.com.br/b70d05b2d4f528f13344f860d4f39f264de88dd0",
        features: [
          "Rotina de acompanhamento",
          "Construção de carteira ativa de clientes",
        ],
      },
      {
        title: "Precificação Comercial",
        price: "R$ 297",
        link: "https://pagar.vindi.com.br/330144f0eda41b109afc78244aab49b7f12b032e",
        features: [
          "Como vender valor, não só preço",
          "Formação de propostas sustentáveis",
        ],
      },
      {
        title: "Estratégia no WhatsApp",
        price: "R$ 247",
        link: "https://pagar.vindi.com.br/59aa82b62d9c43201d8eaee23070c76fa4bc52ba",
        features: [
          "Abordagem profissional",
          "Sequência de mensagens",
          "Pós-venda e fidelização",
        ],
      },
    ],
  },
];

const eliteFeatures = [
  "Acesso completo aos 3 pilares + todos os módulos",
  "6 meses de mentoria individual com Ederson e Dion",
  "Acompanhamento personalizado da sua operação",
  "Suporte direto com os sócios",
  "Vagas limitadas",
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
            Escolha o <span className="text-gradient">plano ideal</span> para você
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comece pelo módulo que resolve seu maior gargalo hoje — ou vá direto ao topo com o Plano Elite
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
                💎 PARA QUEM QUER O MÁXIMO
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <Gem className="w-7 h-7 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-amber-300">Plano Elite</h3>
                    <p className="text-sm text-amber-400/70">Imersão Completa + Mentoria Individual</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 max-w-xl">
                  Acesso completo aos 3 pilares + todos os módulos + 6 meses de mentoria individual com Ederson e Dion + acompanhamento personalizado da operação + suporte direto com os sócios. Vagas limitadas.
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
                <p className="text-sm text-amber-400/70 font-medium uppercase tracking-widest">Investimento</p>
                <p className="text-4xl md:text-5xl font-black text-amber-300 leading-tight">R$ 26.900,00</p>
                <p className="text-xs text-muted-foreground">Condições personalizadas mediante consulta</p>
                <Button
                  size="lg"
                  asChild
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-950 font-bold hover:from-amber-400 hover:to-yellow-300 border-0 shadow-lg"
                >
                  <a href="https://checkout.yapay.com.br/transacao/td1a49b767ba2f53435d4b9da51d364ba" target="_blank" rel="noopener noreferrer">
                    Quero o Plano Elite
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground">Vagas limitadas • Atendimento exclusivo</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PILLARS */}
        {pillars.map((pillar, pillarIndex) => (
          <div key={pillarIndex} className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 p-6 rounded-2xl card-gradient border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">{pillar.name}</h3>
                  <p className="text-sm text-primary font-medium">{pillar.subtitle}</p>
                </div>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillar.modules.map((mod, modIndex) => (
                <motion.div
                  key={modIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: modIndex * 0.05, duration: 0.4 }}
                  className="rounded-2xl p-6 card-gradient border border-border hover:border-primary/30 transition-all duration-300 flex flex-col"
                >
                  <h4 className="font-display text-lg font-bold text-foreground mb-1">{mod.title}</h4>
                  <p className="text-2xl font-bold text-gradient mb-4">{mod.price}</p>

                  <ul className="space-y-2.5 mb-6 flex-1">
                    {mod.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {mod.link ? (
                    <Button variant="cta" className="w-full" asChild>
                      <a href={mod.link} target="_blank" rel="noopener noreferrer">
                        Comprar Módulo
                      </a>
                    </Button>
                  ) : (
                    <Button variant="cta" className="w-full">
                      Comprar Módulo
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
