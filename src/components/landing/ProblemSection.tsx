import { motion } from "framer-motion";
import { AlertTriangle, Calculator, Route, Wallet, BarChart3, Clock, XCircle } from "lucide-react";

const problems = [
{ icon: Calculator, text: "Precificação feita no achismo" },
{ icon: Route, text: "Rotas que giram caixa, mas não geram lucro" },
{ icon: Wallet, text: "Financeiro desorganizado" },
{ icon: BarChart3, text: "Decisões operacionais sem base em números" },
{ icon: Clock, text: "Dono preso no operacional todos os dias" },
{ icon: XCircle, text: "Falta de método, controle e visão estratégica" }];


export const ProblemSection = () => {
  return (
    <section id="problema" className="py-24 relative bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto">

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <span className="text-sm text-destructive">Atenção</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              O problema que trava a maioria das{" "}
              <span className="text-destructive">transportadoras</span>
            </h2>
            <p className="text-xl text-muted-foreground">Não é falta de frete. São esses erros:

            </p>
          </div>

          <div className="grid gap-4">
            {problems.map((problem, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-destructive/30 transition-colors">

                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <problem.icon className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-foreground font-medium">{problem.text}</p>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 p-6 rounded-2xl border-2 border-destructive/30 bg-destructive/5 text-center">

            <div className="flex flex-col items-center gap-2">
              <p className="text-lg font-semibold text-foreground flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
                Sem planejamento, sem processos, <span className="text-destructive">crescer vira risco.</span>
              </p>
              


              <p className="text-foreground font-medium">E nós mostramos que não precisa de estrutura robusta para crescer!

              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>);

};