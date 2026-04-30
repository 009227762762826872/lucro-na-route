import { motion } from "framer-motion";
import { Truck, Package, Users, Wrench, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const audiences = [
  { icon: Truck, text: "Donos de transportadoras de pequeno porte" },
  { icon: Package, text: "Operações de carga lotação e semi-lotação" },
  { icon: Users, text: "Frota própria, terceirizada ou mista" },
  { icon: Wrench, text: "Quem atua no operacional e precisa estruturar a gestão" },
  { icon: TrendingUp, text: "Quem quer crescer sem perder o controle financeiro" },
];

export const AudienceSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Para quem foi <span className="text-gradient">desenvolvido</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Se você vive a operação no dia a dia e precisa estruturar sua gestão, 
            este programa é para você.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`flex items-center gap-4 p-6 rounded-xl card-gradient border border-border hover:border-primary/30 transition-all duration-300 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="cta" size="lg" asChild>
            <a href="#planos">Ver Planos Disponíveis</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
