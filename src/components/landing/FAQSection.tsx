import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Esse conteúdo é indicado para quem já tem transportadora?",
    answer: "Sim. O programa foi criado para quem já opera, mas precisa organizar custos, rotas, financeiro e decisões estratégicas para aumentar a lucratividade.",
  },
  {
    question: "Posso comprar módulos separados?",
    answer: "Sim. Cada módulo é independente — você pode começar pelo que resolve o seu maior gargalo hoje. Ou optar pelo Plano Elite, que inclui todos os módulos + mentoria individual.",
  },
  {
    question: "O conteúdo é prático ou teórico?",
    answer: "É 100% prático. Todo o material foi desenvolvido com base em experiências reais de operação e gestão de transportadoras, sem teoria desnecessária.",
  },
  {
    question: "Existe garantia?",
    answer: "Sim. Você tem 7 dias de garantia. Se o conteúdo não fizer sentido para sua realidade, você pode solicitar o reembolso dentro desse prazo.",
  },
  {
    question: "Por quanto tempo terei acesso ao conteúdo?",
    answer: "Você tem 1 ano de acesso ao conteúdo. Tempo mais que suficiente para assistir, revisar e aplicar tudo no seu ritmo.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Pronto para transformar sua transportadora?</p>
          <Button variant="hero" size="lg" asChild>
            <a href="#planos">Escolher Meu Plano Agora</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
