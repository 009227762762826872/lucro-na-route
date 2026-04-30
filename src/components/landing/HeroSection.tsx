import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Shield, Play } from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";
import vslThumb from "@/assets/vsl-thumb.jpg";
import logoCtl from "@/assets/logo-ctl.png";

const VSL_VIDEO_ID = "TEelxVjX4CM";

export const HeroSection = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={heroTruck} 
          alt="Caminhão de transporte na estrada" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl" />
      
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Sistema Modular de Conhecimento Prático</span>
          </motion.div>

          {/* Main headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Códigos do{" "}
            <span className="text-gradient">Transporte Lucrativo</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Lucro, controle e crescimento sustentável para donos de transportadoras 
            que precisam de decisão correta, margem saudável e organização real.
          </p>

          {/* VSL — Video Sales Letter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="max-w-3xl mx-auto mb-10"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/40 shadow-[0_0_60px_rgba(245,158,11,0.25)] bg-card">
              <div className="relative aspect-video w-full">
                {playVideo ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${VSL_VIDEO_ID}?autoplay=1&rel=0`}
                    title="Apresentação do Curso — Códigos do Transporte Lucrativo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlayVideo(true)}
                    className="group absolute inset-0 w-full h-full cursor-pointer"
                    aria-label="Reproduzir vídeo de apresentação"
                  >
                    <img
                      src={vslThumb}
                      alt="Apresentação do Curso — O começo da sua virada no transporte"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent" />
                    <img
                      src={logoCtl}
                      alt="Códigos do Transporte Lucrativo"
                      className="absolute top-4 left-4 h-12 md:h-16 w-auto drop-shadow-2xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 ring-4 ring-primary/30">
                        <Play className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground fill-primary-foreground ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-primary/30">
                      <span className="text-xs md:text-sm font-bold text-foreground uppercase tracking-wider">
                        ▶ Assista a apresentação do curso
                      </span>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://codigosdostransporteslucrativos1776911675993.carrinho.app/one-checkout/ocmdf/35665377"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero o Curso Completo
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#problema">Entender o Método</a>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: TrendingUp, text: "+26 anos de experiência prática" },
              { icon: Target, text: "Método 100% aplicável" },
              { icon: Shield, text: "Garantia de 7 dias" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};
