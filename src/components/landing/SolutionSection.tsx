import { motion } from "framer-motion";
import { Lightbulb, Wrench, Calculator, TrendingUp } from "lucide-react";
import solutionImage from "@/assets/solution-image.jpg";

export const SolutionSection = () => {
  return (
    <section id="solucao" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={solutionImage} 
          alt="Pátio de transportadora organizado" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">A Solução</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              A proposta do{" "}
              <span className="text-gradient">Códigos do Transporte Lucrativo</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="p-8 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Wrench className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Estrutura Modular por Pilares</h3>
              <p className="text-muted-foreground leading-relaxed">
                Em vez de um curso genérico, você acessa módulos organizados em 3 pilares: 
                Operacional, Administrativo/Financeiro e Comercial.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-8 rounded-2xl card-gradient border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Calculator className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Compre Apenas o que Precisa</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cada módulo resolve um problema específico da sua operação. 
                Compre individualmente ou vá direto ao Plano Elite com tudo incluso.
              </p>
            </motion.div>
          </div>
          
          {/* Three Pillars */}
          <div className="mb-4">
            <p className="text-center text-muted-foreground font-medium mb-6">
              Os módulos são organizados em três pilares:
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Wrench, title: "Operacional", desc: "Onde se ganha ou se perde dinheiro" },
              { icon: Calculator, title: "Administrativo e Financeiro", desc: "Onde a maioria quebra" },
              { icon: TrendingUp, title: "Comercial", desc: "Onde nasce o crescimento" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xl text-muted-foreground">
              Você não precisa fazer tudo de uma vez.{" "}
              <span className="text-foreground font-semibold">
                Precisa começar pelo ponto que mais impacta o seu lucro hoje.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
