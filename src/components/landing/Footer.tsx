import { motion } from "framer-motion";
import { Truck, TrendingUp, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-border bg-secondary/20">
      <div className="container px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center shadow-lg">
                <Truck className="w-6 h-6 text-primary-foreground" />
                <TrendingUp className="absolute -top-1 -right-1 w-4 h-4 text-primary bg-background rounded-full p-0.5" />
              </div>
              <div>
                <span className="font-display font-bold text-base leading-tight block">
                  Códigos do
                </span>
                <span className="font-display font-bold text-base text-gradient leading-tight">
                  Transporte Lucrativo
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sistema modular de conhecimento prático para donos de transportadoras 
              que buscam lucro, controle e crescimento sustentável.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-foreground">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <a href="#problema" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                O Problema
              </a>
              <a href="#solucao" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                A Solução
              </a>
              <a href="#planos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Planos
              </a>
              <a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Perguntas Frequentes
              </a>
            </nav>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-foreground">Contato</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:contato@transportelucrativo.com.br" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                contato@transportelucrativo.com.br
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Códigos do Transporte Lucrativo. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
