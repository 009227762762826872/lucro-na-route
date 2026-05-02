import { motion } from "framer-motion";
import { BookOpen, Wrench, Truck, Shield, Award, Mail, Calendar, Users, CreditCard, Inbox, KeyRound, Zap } from "lucide-react";
import benefitsImage from "@/assets/benefits-image.jpg";

const courseContent = [
  { icon: BookOpen, title: "Conteúdos objetivos", description: "Material direto ao ponto, sem enrolação" },
  { icon: Truck, title: "Foco em transportadoras", description: "Operacional, comercial e administrativo" },
  { icon: Award, title: "+26 anos de prática", description: "Experiência real de Ederson e Dion" },
  { icon: Wrench, title: "Ferramentas práticas", description: "Cada módulo inclui materiais e ferramentas específicas para aplicar no dia a dia" },
];

const deliverables = [
  {
    icon: Mail,
    badge: "📦 Acesso via Mindz",
    title: "Acesso automático por e-mail",
    items: [
      "Login e senha enviados automaticamente após a confirmação do pagamento",
      "E-mail enviado para o endereço cadastrado no checkout",
      "Plataforma Mindz: área de membros profissional e estável",
    ],
  },
  {
    icon: Calendar,
    badge: "🎓 Aulas ao vivo",
    title: "Aulas mensais (Plano Elite)",
    items: [
      "1 aula ao vivo por mês, em grupo",
      "Exclusivas para alunos do Plano Elite",
      "Espaço aberto para perguntas e casos reais",
    ],
  },
  {
    icon: Users,
    badge: "🤝 Comunidade",
    title: "Grupo, chat e suporte",
    items: [
      "Acesso a grupo e chat com a turma",
      "Networking entre transportadores",
      "Suporte contínuo com análise caso a caso",
    ],
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={benefitsImage} 
          alt="Operação de transporte profissional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/95" />
      </div>
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            O que você <span className="text-gradient">recebe</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conteúdo prático em vídeo + ferramentas de acordo com o módulo adquirido
          </p>
        </motion.div>

        {/* Course Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <h3 className="font-display text-xl font-bold text-center mb-6">
            📹 O que cada módulo inclui
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseContent.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Access flow — Mindz platform */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto mt-16"
        >
          <div className="rounded-3xl p-8 md:p-10 border-2 border-primary/40 bg-gradient-to-br from-primary/5 via-card to-background shadow-[0_0_60px_rgba(245,158,11,0.1)]">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  Processo simples, rápido e 100% automatizado
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                Como você acessa o conteúdo <span className="text-gradient">após a compra</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tudo é feito automaticamente. Em poucos minutos após a confirmação do pagamento,
                você recebe os dados de acesso à plataforma <span className="font-bold text-foreground">Mindz</span>{" "}
                no e-mail cadastrado no checkout.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {[
                {
                  icon: CreditCard,
                  step: "1",
                  title: "Você finaliza a compra",
                  desc: "Cadastra seu e-mail no checkout e conclui o pagamento.",
                },
                {
                  icon: Inbox,
                  step: "2",
                  title: "Recebe o e-mail automático",
                  desc: "Login e senha de acesso à plataforma Mindz chegam diretamente no seu e-mail.",
                },
                {
                  icon: KeyRound,
                  step: "3",
                  title: "Acessa imediatamente",
                  desc: "Entra na área de membros e começa a estudar — sem burocracia, sem espera.",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="relative p-6 rounded-2xl bg-secondary/40 border border-border"
                >
                  <div className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-primary text-primary-foreground font-display font-bold flex items-center justify-center shadow-lg">
                    {s.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display text-lg font-bold mb-2">{s.title}</h4>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-background/50 rounded-xl p-4 border border-border">
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              <span>
                <span className="font-semibold text-foreground">Importante:</span> use um e-mail
                válido no checkout — é por ele que você receberá os dados de acesso à Mindz.
              </span>
            </div>
          </div>
        </motion.div>

        {/* Deliverables — access, live classes, community */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto mt-16"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-3">
            Como você <span className="text-gradient">recebe e evolui</span>
          </h3>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Um caminho estruturado, com entregáveis claros e um ambiente real de crescimento.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {deliverables.map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-all flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <block.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {block.badge}
                  </span>
                </div>
                <h4 className="font-display text-lg font-bold mb-3">{block.title}</h4>
                <ul className="space-y-2">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="max-w-md mx-auto mt-12 p-6 rounded-2xl bg-secondary/50 border border-border text-center"
        >
          <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
          <h4 className="font-display text-lg font-bold mb-2">Garantia de 7 dias</h4>
          <p className="text-muted-foreground text-sm">
            Satisfação garantida ou seu dinheiro de volta. Sem burocracia.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
