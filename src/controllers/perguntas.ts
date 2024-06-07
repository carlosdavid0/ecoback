import { Elysia } from "elysia";

// Definindo interfaces para as perguntas e opções
interface Opcao {
  label: string;
  correta: boolean;
}

interface Pergunta {
  id: string;
  pergunta: string;
  opcoes: Opcao[];
}

const allPerguntas: Pergunta[] = require("../database/perguntas.json");

export const perguntas = new Elysia().group("/perguntas", (router) => {
  return router.get("/", async ({ set }) => {
    // Retorna apenas 10 perguntas aleatórias
    const randomPerguntas = allPerguntas
      .sort(() => Math.random() - Math.random())
      .slice(0, 10)
      .map((pergunta) => {
        // Embaralha as opções da pergunta
        pergunta.opcoes = pergunta.opcoes.sort(
          () => Math.random() - Math.random()
        );
        return pergunta;
      });

    return randomPerguntas;
  });
});
