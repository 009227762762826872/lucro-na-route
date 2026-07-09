import { Truck, TrendingUp, Mail, Phone, Instagram } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

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
              <a href="mailto:ederson@transage.com.br" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                ederson@transage.com.br
              </a>
              <a href="tel:+5562942633503" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                (62) 94263-3503
              </a>
              <a href="https://www.instagram.com/ederson.dedordi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
                @ederson.dedordi
              </a>
            </div>
            <p className="text-xs text-muted-foreground pt-2 border-t border-border/50 mt-2">
              📩 Após a compra, o acesso é enviado automaticamente para o e-mail cadastrado no checkout.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Direitos autorais Transage LTDA — Todos os direitos reservados
          </p>

          <div className="flex items-center gap-6">
            <Dialog>
              <DialogTrigger className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Termos de Uso</DialogTitle>
                  <DialogDescription>
                    Última atualização: {new Date().toLocaleDateString("pt-BR")}
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="max-h-[60vh] pr-4">
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                    <p>
                      Ao adquirir e utilizar os produtos do programa <strong>Códigos do Transporte Lucrativo</strong>,
                      você concorda com os termos descritos abaixo.
                    </p>
                    <h4 className="font-semibold text-foreground">1. Acesso ao conteúdo</h4>
                    <p>
                      O acesso ao material é individual, intransferível e válido por 12 (doze) meses
                      a partir da data da compra, sendo liberado automaticamente no e-mail cadastrado
                      no momento do pagamento, por meio da plataforma Mindz.
                    </p>
                    <h4 className="font-semibold text-foreground">2. Direitos autorais</h4>
                    <p>
                      Todo o conteúdo (vídeos, planilhas, materiais de apoio e textos) é protegido
                      por direitos autorais. É proibida a reprodução, redistribuição, cópia ou
                      compartilhamento, total ou parcial, sob pena das sanções legais.
                    </p>
                    <h4 className="font-semibold text-foreground">3. Garantia</h4>
                    <p>
                      Oferecemos garantia incondicional de 7 (sete) dias a partir da compra,
                      conforme o Código de Defesa do Consumidor. Após esse prazo, não há reembolso.
                    </p>
                    <h4 className="font-semibold text-foreground">4. Suporte</h4>
                    <p>
                      Dúvidas podem ser enviadas para ederson@transage.com.br ou pelo telefone
                      (62) 94263-3503.
                    </p>
                    <h4 className="font-semibold text-foreground">5. Resultados</h4>
                    <p>
                      Os resultados dependem da aplicação prática do conteúdo. Não garantimos
                      resultados financeiros específicos, pois eles variam conforme o esforço,
                      contexto e execução de cada aluno.
                    </p>
                    <p className="pt-4 border-t border-border">
                      Direitos autorais Transage LTDA
                    </p>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Política de Privacidade</DialogTitle>
                  <DialogDescription>
                    Última atualização: {new Date().toLocaleDateString("pt-BR")}
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="max-h-[60vh] pr-4">
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                    <p>
                      Respeitamos sua privacidade e estamos comprometidos com a proteção dos seus
                      dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).
                    </p>
                    <h4 className="font-semibold text-foreground">1. Dados coletados</h4>
                    <p>
                      Coletamos nome, e-mail, telefone e dados de pagamento necessários para
                      processar a compra e liberar o acesso ao conteúdo.
                    </p>
                    <h4 className="font-semibold text-foreground">2. Uso dos dados</h4>
                    <p>
                      Seus dados são utilizados para liberação do acesso, envio de comunicações
                      sobre o curso, suporte e novidades relacionadas ao programa.
                    </p>
                    <h4 className="font-semibold text-foreground">3. Compartilhamento</h4>
                    <p>
                      Não vendemos nem compartilhamos seus dados com terceiros, exceto com
                      processadores de pagamento e plataforma de hospedagem do curso (Mindz),
                      estritamente para viabilizar a entrega do serviço.
                    </p>
                    <h4 className="font-semibold text-foreground">4. Seus direitos</h4>
                    <p>
                      Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer
                      momento pelo e-mail ederson@transage.com.br.
                    </p>
                    <h4 className="font-semibold text-foreground">5. Cookies</h4>
                    <p>
                      Utilizamos cookies para melhorar sua experiência de navegação e analisar
                      o desempenho da página.
                    </p>
                    <p className="pt-4 border-t border-border">
                      Direitos autorais Transage LTDA — Contato: ederson@transage.com.br
                    </p>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </footer>
  );
};
