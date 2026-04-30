import { motion } from "framer-motion";
import { Video, Wrench, Truck, Shield, Award, Mail, Calendar, Users } from "lucide-react";
import benefitsImage from "@/assets/benefits-image.jpg";

const courseContent = [
  { icon: Video, title: "Videoaulas objetivas", description: "Conteúdo direto ao ponto, sem enrolação" },
  { icon: Truck, title: "Foco em transportadoras", description: "Operacional, comercial e administrativo" },
  { icon: Award, title: "+26 anos de prática", description: "Experiência real de Ederson e Dion" },
  { icon: Wrench, title: "Ferramentas práticas", description: "Cada módulo inclui materiais e ferramentas específicas para aplicar no dia a dia" },
];

const deliverables = [
  {
    icon: Mail,
    badge: "📦 Acesso",
    title: "Como funciona o acesso",
    items: [
      "Acesso enviado automaticamente após a compra",
      "Recebido no e-mail cadastrado no checkout",
      "Login na área de membros com todo o conteúdo",
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
