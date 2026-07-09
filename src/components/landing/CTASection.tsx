import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Truck } from "lucide-react";
import ctaRoad from "@/assets/cta-road.jpg";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={ctaRoad} 
          alt="Estrada ao pôr do sol" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Comece pelo nível certo{" "}
            <span className="text-gradient">para sua realidade</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10">
            Você não precisa fazer tudo de uma vez.
            <br />
            <span className="text-foreground font-medium">
              Precisa começar pelo ponto que mais impacta o seu lucro hoje.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Escolha o plano ideal</span>
            </div>
            <ArrowRight className="w-4 h-4 text-primary hidden sm:block" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Aplique na operação</span>
            </div>
            <ArrowRight className="w-4 h-4 text-primary hidden sm:block" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Evolua com segurança</span>
            </div>
          </div>

          <Button variant="hero" size="xl" asChild className="group">
            <a
              href="https://pagar.vindi.com.br/9843e43757174fc07e8184fbfe4470da678013a5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero o Curso Completo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          <p className="text-sm text-muted-foreground mt-6">
            Garantia incondicional de 7 dias • Acesso imediato
          </p>
        </motion.div>
      </div>
    </section>
  );
};
