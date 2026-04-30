import { motion } from "framer-motion";
import { Award, Users, Calendar, TrendingUp, Truck } from "lucide-react";

const metrics = [
  { icon: Calendar, value: "+26", label: "Anos de Experiência" },
  { icon: Users, value: "2", label: "Especialistas" },
  { icon: TrendingUp, value: "100%", label: "Conteúdo Prático" },
];

export const CredibilitySection = () => {
  return (
    <section id="credibilidade" className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Quem Está Por Trás</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Conheça os especialistas por trás{" "}
            <span className="text-gradient">desse treinamento</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Mais de 26 anos de experiência real no setor de transportes
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center space-y-6 mb-12"
          >
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center mx-auto shadow-lg">
              <Truck className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <blockquote className="text-xl md:text-2xl font-display text-foreground leading-relaxed max-w-2xl mx-auto">
              "Conhecemos a realidade do transporte de dentro –{" "}
              <span className="text-gradient font-bold">
                desde a cabine até o escritório.
              </span>"
            </blockquote>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl mx-auto text-left md:text-center">
              <p>
                Começamos em uma <span className="text-foreground font-medium">transportadora de carga fracionada 
                que faturava mais de R$ 15 milhões por mês</span>, com mais de 30 unidades próprias em todo o Brasil. 
                Foram 9 anos de experiência intensa.
              </p>
              
              <p>
                <span className="text-foreground font-medium">Ederson</span> na parte operacional – roteirização, 
                frota, motoristas e ajudantes. <span className="text-foreground font-medium">Dion</span> na gestão 
                da qualidade, comercial e certificação das normas ISO.
              </p>
              
              <p>
                Depois, mais 2 anos em uma transportadora de cargas lotação e semi lotação. 
                Em <span className="text-foreground font-medium">2008, abrimos nossa própria transportadora 
                com apenas R$ 8 mil de capital</span> – e ela opera até hoje de forma lucrativa e consistente.
              </p>
              
              <p className="text-foreground font-medium">
                É essa experiência de mais de 26 anos que vamos passar para você, de forma objetiva 
                e sem enrolação.
              </p>
            </div>
          </motion.div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="text-center p-6 rounded-xl bg-secondary/50 border border-border"
              >
                <metric.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-display text-2xl md:text-3xl font-bold text-gradient">
                  {metric.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
