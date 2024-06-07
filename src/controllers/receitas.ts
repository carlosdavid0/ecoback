import { Elysia } from "elysia";

// Definindo interfaces para as perguntas e opções
const receitas = [
  {
    id: "7097e156",
    title: "Bolinhos de talos e folhas",
    cover: "",
    content: `<h2 id="ingredientes-">Ingredientes:</h2>
<ul>
<li>3 ovos bem batidos</li>
<li>2 xícaras (chá) de talos ou folhas bem lavados e picados</li>
<li>6 colheres (sopa) de farinha de trigo</li>
<li>1/2 cebola picada</li>
<li>2 colheres (sopa) de água</li>
<li>Sal a gosto</li>
<li>Óleo para fritar</li>
</ul>
<h2 id="modo-de-preparo-">Modo de Preparo:</h2>
<ol>
<li>No caso de talos, cozinhe-os antes até que fiquem al dente.</li>
<li>Misture todos os ingredientes em uma tigela.</li>
<li>Use uma colher para fazer bolinhos.</li>
<li>Frite-os em óleo bem quente até dourarem.</li>
<li>Escorra em papel absorvente.</li>
</ol>
<p><strong>Dica:</strong> Os bolinhos podem ser feitos com talos de couve, couve-flor, acelga e/ou agrião, folhas de cenoura, beterraba, nabo e/ou rabanete.</p>
`,
  },
  {
    id: "c3dada90",
    title: "Macarrão com ramas de cenoura",
    cover: "",
    content: `<h2 id="ingredientes-">Ingredientes:</h2>
<ul>
<li>1 cebola pequena picada</li>
<li>6 dentes de alho</li>
<li>2 xícaras de talos de agrião</li>
<li>1 xícara de ramas de cenoura</li>
<li>Noz moscada e sal a gosto</li>
<li>2 1/2 xícaras do macarrão de sua preferência</li>
</ul>
<h2 id="modo-de-preparo-">Modo de Preparo:</h2>
<ol>
<li>Em uma panela, refogue a cebola e o alho até dourar.</li>
<li>Acrescente os talos de agrião e as ramas de cenoura e continue refogando.</li>
<li>Tempere com noz moscada e sal a gosto.</li>
<li>Cozinhe o macarrão de acordo com as instruções da embalagem.</li>
<li>Use o refogado como molho para o macarrão cozido.</li>
<li>Se desejar, acrescente queijo ralado por cima antes de servir.</li>
</ol>
<p><strong>Dica:</strong> Experimente variar os tipos de macarrão para uma experiência diferente a cada vez que preparar este prato.</p>
`,
  },
  {
    id: "76c285f2",
    title: "Creme de folha de couve-flor",
    cover: "",
    content: `<h2 id="ingredientes-">Ingredientes:</h2>
<ul>
<li>1 cebola pequena picada</li>
<li>4 xícaras (chá) de folhas de couve-flor</li>
<li>1 colher (chá) de farinha de trigo</li>
<li>1 xícara (chá) de leite</li>
<li>1 colher (sopa) de queijo ralado</li>
<li>1 xícara (chá) de água</li>
<li>Sal a gosto</li>
</ul>
<h2 id="modo-de-preparo-">Modo de Preparo:</h2>
<ol>
<li>Refogue a cebola em uma panela até dourar.</li>
<li>Acrescente as folhas de couve-flor bem lavadas e picadas e continue refogando.</li>
<li>Em uma tigela, incorpore delicadamente a farinha ao leite.</li>
<li>Adicione o queijo ralado e a água à mistura de leite e farinha.</li>
<li>Acrescente essa mistura ao refogado na panela e deixe o creme encorpar.</li>
<li>Tempere com sal a gosto.</li>
<li>Sirva quente.</li>
</ol>
<p><strong>Dica:</strong> Você pode variar o tipo de queijo ralado para experimentar diferentes sabores neste creme.</p>
`,
  },
  {
    id: "6d800d98",
    title: "Pastel assado de talos de agrião",
    cover: "",
    content: `<h2 id="ingredientes-">Ingredientes:</h2>
<h3 id="para-a-massa-">Para a Massa:</h3>
<ul>
<li>250g de ricota</li>
<li>3 xícaras (chá) de farinha de trigo</li>
<li>200g de margarina ou manteiga</li>
<li>2 ovos batidos para a massa</li>
<li>1 gema para pincelar</li>
<li>Sal a gosto</li>
</ul>
<h3 id="para-o-recheio-">Para o Recheio:</h3>
<ul>
<li>1 cebola pequena picada</li>
<li>2 dentes de alho</li>
<li>1 xícara (chá) de talos de agrião</li>
<li>Azeitonas verdes a gosto</li>
<li>Sal a gosto</li>
</ul>
<h2 id="modo-de-preparo-">Modo de Preparo:</h2>
<h3 id="preparo-da-massa-">Preparo da Massa:</h3>
<ol>
<li>Em um recipiente, coloque a ricota esfarelada, a farinha de trigo, a margarina, os ovos levemente batidos e uma pitada de sal. Misture bem com as mãos.</li>
<li>Sove a massa sobre uma superfície enfarinhada e abra-a com o auxílio de um rolo.</li>
</ol>
<h3 id="preparo-do-recheio-">Preparo do Recheio:</h3>
<ol>
<li>Refogue a cebola e o alho em uma panela até dourar.</li>
<li>Acrescente os talos de agrião e continue refogando.</li>
<li>Adicione as azeitonas verdes e sal a gosto.</li>
<li>Deixe o recheio esfriar.</li>
</ol>
<h3 id="montagem-e-assamento-">Montagem e Assamento:</h3>
<ol>
<li>Corte a massa em discos.</li>
<li>Recheie cada disco com uma porção do recheio preparado.</li>
<li>Feche os pastéis, amassando bem as bordas.</li>
<li>Pincele a superfície dos pastéis com a gema de ovo batido.</li>
<li>Leve os pastéis ao forno pré-aquecido e asse até dourarem.</li>
</ol>
<p><strong>Dica:</strong> Sirva os pastéis assados de talos de agrião como um lanche saudável e saboroso!</p>
`,
  },
  {
    id: "c222697a",
    title: "Tira-gosto de casca de batata",
    cover: "",
    content: `<h1 id="tira-gosto-de-casca-de-batata">Tira-gosto de Casca de Batata</h1>
<h2 id="ingredientes-">Ingredientes:</h2>
<ul>
<li>Cascas de batatas</li>
<li>Óleo para fritar</li>
<li>Sal a gosto</li>
</ul>
<h2 id="modo-de-preparo-">Modo de Preparo:</h2>
<ol>
<li>Lave e seque bem as cascas de batata.</li>
<li>Em uma panela, aqueça o óleo até estar bem quente.</li>
<li>Frite as cascas de batata no óleo quente até ficarem douradas e crocantes.</li>
<li>Retire as cascas de batata fritas da panela e coloque-as sobre papel absorvente para remover o excesso de óleo.</li>
<li>Tempere com sal a gosto.</li>
<li>Sirva como um delicioso tira-gosto.</li>
</ol>
<p><strong>Dica:</strong> Você também pode preparar sementes de abóbora da mesma forma para obter aperitivos crocantes e saborosos.</p>
`,
  },
  {
    id: "07929266",
    title: "Assado de casca de chuchu",
    cover: "",
    content: `<h2 id="ingredientes-">Ingredientes:</h2>
<ul>
<li>3 xícaras (chá) de cascas de chuchu, lavadas, picadas e cozidas</li>
<li>1 xícara (chá) de pão amanhecido molhado no leite</li>
<li>2 colheres (sopa) de queijo ralado</li>
<li>1 cebola pequena picada</li>
<li>1 colher (sopa) de óleo</li>
<li>2 ovos batidos</li>
<li>Cheiro verde e sal a gosto</li>
</ul>
<h2 id="modo-de-preparo-">Modo de Preparo:</h2>
<ol>
<li>Bata as cascas de chuchu cozidas no liquidificador até obter uma consistência homogênea.</li>
<li>Em uma tigela, misture as cascas de chuchu batidas com os demais ingredientes: pão amanhecido molhado no leite, queijo ralado, cebola picada, óleo, ovos batidos, cheiro verde e sal a gosto.</li>
<li>Unte um pirex com óleo e despeje a mistura.</li>
<li>Leve para assar em forno preaquecido a 180°C por aproximadamente 30-40 minutos, ou até que esteja dourado e firme.</li>
<li>Sirva quente.</li>
</ol>
<p><strong>Dica:</strong> Este assado de casca de chuchu pode ser acompanhado por uma salada verde para uma refeição leve e saudável.</p>
`,
  },
  {
    id: "a391f66a",
    title: "Risoto de casca de abóbora",
    cover: "",
    content: `# Risoto de Casca de Abóbora

## Ingredientes:
- 1 cebola grande picada
- Cascas de 1 abóbora, bem lavadas e raladas
- 1 xícara (chá) de água
- 1 pimentão picado
- 3 xícaras (chá) de arroz cozido
- 1/2 caixinha de creme de leite
- 1/2 copo de requeijão
- Cheiro verde a gosto
- Sal e shoyu a gosto

## Modo de Preparo:
1. Em uma panela, refogue a cebola até ficar dourada.
2. Adicione as cascas de abóbora raladas e a água. Deixe cozinhar por 10 a 15 minutos.
3. Acrescente o pimentão picado e refogue bem.
4. Adicione o arroz cozido aos poucos, alternando com o creme de leite e o requeijão.
5. Por último, tempere com cheiro verde, sal e shoyu a gosto.
6. Mexa bem até que todos os ingredientes estejam incorporados e o risoto esteja bem cremoso.
7. Sirva quente.

**Dica:** Você pode adicionar outros vegetais ou temperos de sua preferência para personalizar este risoto de casca de abóbora ao seu gosto.
`,
  },
];

export const receita = new Elysia().group("/receitas", (router) => {
  return router.get("/", async ({ set }) => {
    return receitas;
  });
});
