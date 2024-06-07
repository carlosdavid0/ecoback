import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";

import cors from "@elysiajs/cors";
import { Dicas } from "./controllers/dicas";
import { perguntas } from "./controllers/perguntas";
import { receita } from "./controllers/receitas";

export const app = new Elysia()
  .use(
    cors({
      origin: ({ url }) => {
        return true;
      },
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  )
  .use(
    swagger({
      documentation: {
        info: {
          title: "Elysia",
          description: "Elysia API Documentation",
          version: "1.0.0",
        },
      },
      autoDarkMode: true,
    })
  )
  .use(perguntas)
  .use(Dicas)
  .use(receita);

app.listen(3000, () => {
  console.log(`🦊 Elysia is running at http://localhost:3000`);
});
