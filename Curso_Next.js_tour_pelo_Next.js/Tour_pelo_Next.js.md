# Curso Alura - Next.js tour pelo Next.js

## Aula 01 - O Desenvolvimento Front-End

## Aula 01 - Apresentação - Vídeo 1

Nesta aula, o instrutor Mario Souto apresenta um tour pelo Next.js, um framework que oferece uma excelente experiência de desenvolvimento front-end. O objetivo do curso é esclarecer as dúvidas sobre quando e em quais tipos de projetos é adequado utilizar o Next.js. O instrutor não pretende construir um projeto do zero até o deploy, mas sim ensinar os alunos a identificar os cenários em que os recursos do Next.js podem ser aplicados. Durante o curso, serão explorados diversos aspectos do Next.js, permitindo que os alunos adquiram conhecimentos mais aprofundados sobre o framework. Ao final do curso, os alunos estarão aptos a tomar decisões embasadas sobre o uso do Next.js em seus projetos, compreendendo suas vantagens e desvantagens. Através dessa exploração, eles poderão aproveitar ao máximo os recursos oferecidos pelo Next.js e otimizar o desenvolvimento de suas aplicações front-end.

## Aula 01 - 7 princípios para construir web apps - Vídeo 2

Claro! Nesta aula, o instrutor introduziu o tema de performance em desenvolvimento web, destacando a importância de otimizar o código e entender as métricas de desempenho. Ele mencionou os Web Vitals do Google, que são um conjunto de métricas que impactam a experiência do usuário em um site. O instrutor explicou que o LCP (largest contentful paint) é uma métrica que mede a renderização do conteúdo acima da dobra e destacou a importância de pré-carregar o CSS para melhorar essa métrica. Além disso, ele mencionou o first input delay, que mede o tempo que leva para o usuário interagir com o site, e o cumulative layout shift, que se refere à estabilidade visual do site. O instrutor também recomendou a leitura de um artigo escrito pelo criador do Next.js, Guillermo Rauch, que aborda esses pontos, e mencionou um curso da Alura sobre performance. Ele prometeu abordar mais recursos e problemas reais relacionados ao Next.js nas próximas aulas e encerrou o trecho mencionando que na próxima aula começará a mostrar código e casos de uso do Next.js.

## Aula 01 - Estrutura de projeto I - Vídeo 3

Nesta aula, o instrutor recapitula os recursos principais do Next.js, uma ferramenta que se posiciona como o SDK da Web. Ele mostra como criar a estrutura de um projeto utilizando o NPM e o comando npm init -y, além de instalar dependências fornecidas pelo Next.js. Também é abordada a criação de páginas, onde o instrutor explica que o Next.js espera que exista uma pasta chamada "pages" onde serão criadas as páginas do projeto. Ele demonstra como criar páginas de boas-vindas, uma página "sobre" e uma página 404 personalizada. Além disso, são abordados temas como adição de estilos, utilização do componente "App" para envolver todas as páginas do projeto e customização da tag "document" para definir o idioma do site. O instrutor enfatiza a importância de personalizar a estrutura do projeto e fazer com que ele tenha a identidade do desenvolvedor.

## Aula 01 - Estrutura de projeto II - Vídeo 4

Nesta aula, o instrutor abordou a criação de rotas dinâmicas em uma aplicação utilizando o Next.js. Ele explicou como criar páginas dinâmicas, utilizando como exemplo a criação de uma página de posts. O instrutor demonstrou como criar a estrutura de pastas para os posts, criando uma pasta chamada "posts" dentro da pasta "pages" e um arquivo chamado "post.js" para representar a página de um post específico. Além disso, ele explicou como o Next.js reconhece automaticamente qualquer arquivo criado dentro da pasta "pages" e adiciona-o às rotas do projeto. O instrutor também introduziu o conceito de roteamento no Next.js, explicando o uso do "useRouter" para lidar com esse aspecto e como navegar entre páginas utilizando o componente "Link" do Next.js. Por fim, ele destacou a importância de organizar as pastas e arquivos em um projeto Next.js, além de mostrar como carregar uma imagem estática na aplicação. Esses conhecimentos são fundamentais para o desenvolvimento de aplicações mais complexas e interativas utilizando o Next.js.

## Aula 01 - Rotas dinâmicas com Next.js

Você pode aprender mais sobre rotas dinâmicas neste artigo Navegação com Next.Js utilizando [rotas dinâmicas](https://www.alura.com.br/artigos/navegacao-next-js-utilizando-rotas-dinamicas).

## Aula 01 - Nessa aula, você aprendeu`:`

- Como o Next.js melhora suas métricas da web;
- Sobre arquivos específicos do Next.js como o _app.js, '_document.js' e 404.js e suas funcionalidades;
- Como criar e utilizar rotas dinâmicas.

## Aula 02 - Páginas com Next.js

## Aula 02 - Static Site Generation I - Vídeo 1

Nesta aula do curso de Next.js, o instrutor abordou os diferentes tipos de build de projeto no Next.js. Ele explicou que o build é o artefato final que será colocado em produção e discutiu as opções de servidor rodando o Next Build e Next Start, ou apenas a versão estática dos arquivos. O instrutor mostrou um miniblog como exemplo e explicou como trabalhar com o Next.js e aproveitar as diferentes formas de build. Ele destacou o Static HTML Export, que é a forma de gerar um monte de arquivos estáticos, e mencionou que é fácil hospedar o projeto em diferentes lugares, como a Vercel, Amazon S3 e GitHub Pages. O instrutor ressaltou que o curso não abordará a questão do deploy, mas é importante entender os conceitos e conversar com a equipe responsável pela infraestrutura. Ele mostrou como funciona o Next Export, que gera os arquivos HTML e CSS simplificados, e explicou a importância do pre-rendering para melhorar a performance e a experiência do usuário. O instrutor mencionou a filosofia Jamstack e como o Next.js se tornou popular por causa da feature Static HTML Export. Ele também mencionou os princípios de Guillermo Rauch e como o pre-rendering ajuda no SEO e na velocidade de carregamento da página. O instrutor mostrou como emular o ambiente do GitHub Pages e outras plataformas para testar o projeto estático. Ele finalizou mencionando que na próxima aula será abordado como fazer as páginas dinâmicas funcionarem com o pre-rendering.

## Aula 02 - Static Site Generation II - Vídeo 2

Nesta aula, o instrutor resolve um problema que ocorreu na aula anterior ao tentar simular o GitHub Pages para colocar um projeto estático. Ele mostra como resolver esse problema utilizando o Next.js. Primeiramente, ele roda o comando npm run dev para iniciar o servidor local e acessa o "localhost:3000", observando que não há informações e não é possível "buildar" a página. Para resolver isso, ele precisa informar ao Next.js quantas rotas serão geradas dinamicamente. Utilizando o recurso "getStaticPaths" do Next.js, ele define uma lista de rotas estáticas, criando um array de objetos chamado "paths", em que cada objeto contém um parâmetro "id" com um valor numérico. No entanto, ele percebe que o Next.js requer que o valor do parâmetro seja uma string, então ele converte os valores numéricos para strings. Em seguida, ele encontra a função "getStaticProps" na documentação do Next.js e a adiciona abaixo da função "getStaticPaths". Essa função é responsável por pré-carregar as propriedades da página em tempo de build e retorná-las. Ele adiciona um console.log para verificar o conteúdo do objeto "context" que é passado como parâmetro para a função. O instrutor explica que as funções "getStaticPaths" e "getStaticProps" só são executadas durante o build ou no servidor que está rodando a aplicação, não no navegador. Ele mostra que é possível acessar o parâmetro "id" do objeto "context.params" e utiliza esse valor para buscar os dados correspondentes na lista de posts. Ele faz um console.log do objeto "post" para verificar se os dados estão sendo corretamente carregados. Em seguida, ele substitui os valores das propriedades "id", "title", "date" e "content" pelos valores do objeto "post". O instrutor menciona que a função "getStaticProps" pode ser assíncrona e que é possível buscar dados externos em uma API. Ele mostra que os dados estão sendo corretamente carregados ao acessar diferentes páginas. Por fim, ele integra os dados com os "paths" estáticos, mapeando os posts para criar os objetos necessários para cada rota, e faz um console.log dos dados e dos paths para verificar se estão corretos. O instrutor conclui dizendo que o problema foi resolvido e que é possível acessar as páginas corretamente, mencionando que em aulas futuras serão abordadas outras formas de lidar com o "fallback".

## Aula 02 - SSR: Server Side Render - Vídeo 3

Nesta aula, o instrutor abordou o conceito de Server-side Rendering (SSR) e sua aplicação no Next.js. Ele explicou que o SSR é comumente utilizado em aplicações que precisam lidar com autenticação e autorização de usuários. Foi mostrado um exemplo prático de como implementar a autenticação utilizando o SSR no Next.js, utilizando a função getServerSideProps para realizar a renderização do lado do servidor e retornar as props necessárias para a página. Além disso, foi discutida a importância de utilizar cookies para armazenar informações de autenticação, a diferença entre o SSR e o Static Site Generation (SSG), e a importância de considerar o custo e a infraestrutura necessária ao escolher entre as duas abordagens. Por fim, o instrutor destacou a importância de utilizar uma plataforma robusta, como a Vercel ou a Amplify da AWS, para hospedar a aplicação e garantir uma boa qualidade de deploy e cache.

## Aula 02 - Incremental Static Generation - Vídeo 4

Nesta aula, o instrutor abordou o recurso chamado Incremental Static Regeneration do Next.js. Ele explicou que, diferentemente da abordagem tradicional da Jamstack, em que todas as páginas são geradas estaticamente, o Incremental Static Regeneration permite gerar páginas sob demanda. O instrutor utilizou como exemplo um projeto de blog com mil posts e mostrou como é possível renderizar essas páginas estaticamente de forma incremental, ou seja, apenas quando são acessadas.

Ele também demonstrou o tempo necessário para gerar todas as páginas do projeto de blog utilizando o método de geração estática tradicional (SSG - Static Site Generation) e como é possível utilizar uma API para obter os dados dos posts dinamicamente e renderizar as páginas sob demanda. Além disso, abordou a importância do tempo de build do projeto, destacando como o Incremental Static Regeneration pode ajudar a reduzir o tempo de build em projetos com um grande número de páginas.

O instrutor também explicou como utilizar o parâmetro "fallback" para controlar o comportamento das páginas que ainda não foram geradas estaticamente, destacando a importância de compartilhar essas informações com gestores e equipes de infraestrutura, ressaltando as vantagens de utilizar o Next.js não apenas como um framework da moda, mas como uma ferramenta que traz benefícios para o negócio.

## Aula 02 - Revalidate do Next.js - Vídeo 5

Nesta aula, o instrutor discutiu sobre o uso do Next.js para gerar páginas estáticas de forma eficiente, visando reduzir custos de servidor e melhorar o desempenho do site. Ele destacou a importância de ter um site estático o mais próximo possível do lado do servidor, para evitar custos de processamento a cada requisição. Foi apresentado o exemplo de um site de loteria, onde milhares de pessoas acessam a página para ver os resultados, e explicado como é possível cortar o acesso à API, revalidando a página apenas em intervalos de tempo determinados. O instrutor demonstrou na prática como utilizar o parâmetro "revalidate" no método "getStaticProps" do Next.js para revalidar a página a cada 10 segundos. Foi ressaltada a importância de reduzir a quantidade de processamento e recursos necessários para atender às requisições, especialmente em casos de sites com alta demanda de acessos, como sites de votação ou de loterias. Foi enfatizado que o objetivo é obter os benefícios do conteúdo estático e dinâmico ao mesmo tempo, e que o uso dessas técnicas é fundamental para o desenvolvimento de projetos. O vídeo concluiu reforçando a importância do Static Generation, Server-side Rendering e Incremental Static Regeneration, encorajando os espectadores a praticarem essas técnicas para ganhar mais autonomia e confiança em seus projetos.

## Aula 02 - Nessa aula, você aprendeu sobre as estratégias do Next.js na criação de páginas`:`

- getStaticProps e getStaticPaths para a geração de páginas estáticas (SSG);
- getServerSideProps para a geração de páginas com conteúdo dinâmico (SSR);
- Como o atributo revalidate torna possível a criação de páginas estáticas, porém com conteúdo que pode ser atualizado de tempos em tempos (ISR).

## Aula 03 - Recursos Adicionais do Next.js

## Aula 03 - Link Prefetch - Vídeo 1

Nesta aula, o professor Mario Souto abordou recursos do Next.js que podem melhorar a performance e a experiência do usuário ao trabalhar com a framework no dia a dia. Ele destacou a importância de prever o comportamento do usuário e como isso pode ser aplicado no desenvolvimento web. Em seguida, mostrou um projeto com algumas páginas e explicou como é possível pré-carregar a próxima página para reduzir a latência e proporcionar uma transição mais rápida entre as páginas. Além disso, demonstrou como acompanhar o que está sendo baixado na página usando a aba "Network" do console. O professor também mencionou que esse recurso só está disponível no modo de produção e que é possível desabilitá-lo caso não seja necessário pré-carregar determinadas páginas. Ele ressaltou a importância de ler a documentação do Next.js para entender melhor esses recursos e finalizou mencionando que haverá mais dicas interessantes sobre o Next.js no próximo vídeo.

## Aula 03 - Dynamic Imports - Vídeo 2

Claro! Nesta aula, o instrutor fala sobre o "Dynamic Import" do Next.js, que permite carregar partes da página sob demanda. Ele usa o exemplo do YouTube para ilustrar como essa funcionalidade funciona, mostrando como é possível carregar o componente apenas quando necessário, otimizando o carregamento da página. O instrutor também menciona a importância de não carregar o código base do componente quando não é necessário, e como o "import dynamic" do Next.js permite um controle mais refinado sobre o carregamento. Além disso, ele demonstra o uso dessa funcionalidade na prática, mostrando como o código é dividido e carregado separadamente. Por fim, ele destaca a importância de conhecer essas técnicas de performance para melhorar projetos e convida os espectadores a compartilharem suas experiências nas redes sociais.

## Aula 03 - Next.js com TypeScript - Vídeo 3

Para criar um projeto do zero, com TypeScript, use esse comando:
> npx create-next-app@latest --typescript.

Para converter um projeto React JavaScript para typeScript comece renomeando os arquivos .JS(.jsx) para .TSX e depois execute o comando:(no meu Bugo, e não criou o tsconfig.json)
> npm install --save-dev typescript @types/react @types/node

Nesta aula, o instrutor mostrou como usar o TypeScript com o Next.js. Ele explicou que é possível criar um projeto do zero com TypeScript usando o comando npx create-next-app@latest --typescript, mas o foco principal foi mostrar como converter um projeto existente para usar TypeScript. O instrutor destacou que no GitHub do Next.js existem vários exemplos de projetos em TypeScript, como blogs, servidores, integração com o Amplify e o Expo, encorajando os espectadores a praticarem e testarem esses exemplos.

Foi ressaltado que o TypeScript é uma extensão do JavaScript, não modificando as funcionalidades já existentes, apenas adicionando novas funcionalidades. O instrutor também explicou que é possível remover essas funcionalidades extras sem afetar o código JavaScript original. A configuração do TypeScript no Next.js é feita através do Babel, e o instrutor mostrou como converter um projeto existente para usar TypeScript, renomeando os arquivos com conteúdo React para a extensão .tsx.

Ao rodar o comando npm run dev, o Next.js detecta que o projeto está usando TypeScript e instala as bibliotecas necessárias. O instrutor destacou que, a partir desse momento, é possível definir que uma função retorna um componente do React e escrever código TypeScript sem problemas. No entanto, ele ressaltou que o curso não é focado em TypeScript em si, mas sim em como usá-lo com o Next.js, recomendando que os espectadores busquem um curso específico sobre TypeScript para se aprofundarem no assunto. Por fim, mencionou que ao renomear os arquivos para a extensão .tsx, o projeto continua funcionando normalmente, mas agora é possível adicionar tipagem e outras funcionalidades do TypeScript.

## Aula 03 - JavaScript com tipos?

O objetivo desse curso não é ensinar TypeScript, porém você pode aprender essa linguagem em outros cursos da plataforma:

TypeScript em geral:

[TypeScript parte 1: Evoluindo seu JavaScript;](https://cursos.alura.com.br/course/typescript-evoluindo-javascript)
[TypeScript parte 2: Avançando na linguagem;](https://cursos.alura.com.br/course/typescript-avancando-linguagem)
[Typescript parte 3: Mais técnicas e boas práticas;](https://cursos.alura.com.br/course/typescript-tecnicas-boas-praticas)
[Javascript ou Typescript?.](https://www.alura.com.br/artigos/javascript-ou-typescript)

React com TypeScript:

[Fundamentos de React: escrevendo com Typescript;](https://cursos.alura.com.br/course/react-modernizando-escrever-typescript)
[React: lidando com arquivos estáticos;](https://cursos.alura.com.br/course/react-arquivos-estaticos)
[React: gerenciando estado com Recoil;](https://cursos.alura.com.br/course/react-gerenciando-estado-recoil)
[React: conhecendo a biblioteca React Router.](https://cursos.alura.com.br/course/react-biblioteca-react-router)

## Aula 03 - Tipagens do Next.js

Se até agora seu mundo foi apenas JavaScript, o TypeScript pode parecer estranho, confuso ou até mesmo trabalhoso demais. Você pode aprender mais sobre os benefícios de sua utilização nos links da atividade anterior.

Quando utilizamos uma biblioteca feita com TypeScript, nós conseguimos ter acesso a todos os métodos disponibilizados pela biblioteca sem ter que abrir a documentação!

Neste exercício, vamos dar uma olhada em como o TypeScript facilita a vida dos desenvolvedores, tanto dos que contribuem para o projeto quanto daqueles que o utilizam.

Que tal começar tipando duas funções importantes para o Next.js, como o getStaticProps e getServerSideProps?

Este artigo no curso tem muita imagem em seus exemplos... [Link para acessar](https://cursos.alura.com.br/course/next-js-tour-next-js/task/102887)

## Aula 03 - Nessa aula, você aprendeu`:`

- Como o prefetch pode impactar na performance da sua aplicação;
- Que é possível carregar componentes sob demanda com Dynamic Imports;
- Adicionar o TypeScript ao seu projeto Next.js e como a tipagem de funções da biblioteca podem te ajudar durante o desenvolvimento.

## Aula 04 - Next.js é FrameWork fullStack

## Aula 04 - API Routes - Vídeo 1

Nesta aula, o instrutor explorou o recurso de API Routes do Next.js, que possibilita a criação de endpoints de API dentro do projeto frontend. Foi mostrado como criar um endpoint que retorna um JSON e como utilizar esse recurso para acessar um backend externo. Além disso, destacou-se a importância de ter noções de como trabalhar com dados e fazer requisições, mesmo que o Next.js seja principalmente uma ferramenta para o frontend.

## Aula 04 - API Routes com typescript

Nessa aula você aprendeu que é possível criar APIs com Next.js através da criação de arquivos dentro de /pages/api. Ou seja, criar uma rota de uma API é tão fácil quanto criar páginas!

Na aula passada, você aprendeu que o Next.js fornece tipagens para getStaticProps,getServerSideProps e até mesmo para o App. O framework também possui tipagens para as API Routes. Que tal utilizá-las para facilitar o desenvolvimento?

OPINIÃO DO INSTRUTOR

Existem 2 formas de tipar os handlers de uma API Route:

- 1) Tipando o handler diretamente com NextApiHandler.

```JavaScript
import type { NextApiHandler } from 'next';
const handler: NextApiHandler = (req, res) => {
  res.status(200).json({ curso: 'next.js', instrutor: 'Dev soutinho' });
};
```

- 2) Tipando as variáveis de requisição e resposta individualmente.

```JavaScript
import type { NextApiRequest, NextApiResponse } from 'next';
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ curso: 'next.js', instrutor: 'Dev Soutinho' });
};
```

Também é possível tipar a resposta da API utilizando generics.

Com NextApiHandler devemos passar o ResponseData como generics da função:

```JavaScript
import type { NextApiHandler } from 'next';
export type ResponseData = {
  curso: string;
  instrutor: string;
};
const handler: NextApiHandler<ResponseData> = (req, res) => {
  // res.status(200).json({ nome: 'Mario Souto' });
  res.status(200).json({ curso: 'next.js', instrutor: 'Mario Souto' });
};
export default handler;
```

Com NextApiRequest e NextApiResponse devemos passar ResponseData como generics de NextApiResponse.

```JavaScript
import type { NextApiRequest, NextApiResponse } from 'next';
export type ResponseData = {
  curso: string;
  instrutor: string;
};
export default (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  // res.status(200).json({ nome: 'Mario Souto' });
  res.status(200).json({ curso: 'next.js', instrutor: 'Mario Souto' });
};
```

Descomente a primeira linha do handler e veja o que acontece!

## Aula 04 - Tipos de build da ferramenta - Vídeo 2

Claro! Nesta aula, o instrutor Mario Souto faz um resumo sobre os conceitos e termos relacionados ao Next.js. Ele explica que o Next.js é uma ferramenta que pode ser utilizada tanto no frontend quanto no backend, sendo responsável pela construção do projeto. Em seguida, ele introduz o glossário do Next.js, que inclui os seguintes termos:

- Static: É o modo padrão do Next.js, onde todas as páginas são pré-renderizadas como HTML estático. O conteúdo das páginas é gerado durante o processo de build e não é alterado durante a execução do aplicativo.

- SSG (Static Site Generation): É uma forma de geração de páginas estáticas no Next.js. É possível utilizar o getStaticProps para gerar páginas estáticas com recursos limitados, e o revalidate para definir um tempo de atualização das páginas estáticas.

- Incremental Static Generation: É uma variante do SSG que permite a geração de páginas estáticas de forma incremental, sob demanda do usuário. Para utilizá-lo, é necessário utilizar o fallback com o valor true ou 'blocking' e o getStaticPaths vazio ou com apenas alguns itens.

- SSR (Server Side Render): É uma forma de renderização no lado do servidor no Next.js. Utilizando o getServerSideProps, é possível gerar páginas de forma dinâmica a cada requisição. Além disso, todas as API Routes, dentro da pasta /api, também são renderizadas no lado do servidor.

O instrutor destaca a importância de entender o contexto de cada uma dessas opções e escolher a mais adequada para cada projeto. Ele menciona exemplos de casos em que cada opção pode ser mais vantajosa, como para um blog pequeno ou uma landing page, o Static Site Generation pode ser suficiente, enquanto para um e-commerce ou um site grande com muitas atualizações dinâmicas, o Incremental Static Generation pode ser mais adequado. Ele também menciona a possibilidade de utilizar o revalidate: true em conjunto com o Incremental Static Generation para definir um tempo de atualização das páginas.

Em resumo, o Next.js oferece diferentes opções de renderização e geração de páginas, desde o modo estático até a renderização no lado do servidor, e é importante escolher a mais adequada para cada projeto.

## Aula 04 - Benefícios do ISR

Sobre o Incremental Static Regeneration (ISR) marque as alternativas corretas:

- Utiliza o getStaticProps com o atributo revalidate.
  - Alternativa correta! A ativação do ISR se dá pela adição do atributo revalidate com um valor numérico inteiro ao retorno de getStaticProps.

- Une os benefícios da geração dinâmica e da estática.
  - Alternativa correta! O cliente receberá a página instantaneamente, pois ela é gerada estaticamente. Caso o conteúdo precise ser atualizado, a página será (re)construida do lado do servidor e posteriormente servida como estática.

- O atributo revalidate é o tempo em segundos que a página pré-renderizada ficará no cachê.
  - Alternativa correta! Requisições feitas dentro do valor em segundos do atributo revalidate terão o retorno instantâneo da página cacheada.

## Aula 04 - Nessa aula, você aprendeu a`:`

- Criar uma API com Next.js através da pasta pages/api;
- Carregar componentes sob demanda com [Dynamic Imports](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading);
- Adicionar o TypeScript ao seu projeto Next.js e como a tipagem de funções da biblioteca podem te ajudar durante o desenvolvimento.

## Aula 05 - Dicas finais e Deploy

## Aula 05 - Fazer o deploy do projeto - Vídeo 1

Nesta aula, o professor abordou o tópico de deploy de projetos com Next.js. Ele mencionou várias opções de hospedagem, como GitHub Pages, Amazon S3, Vercel, AWS Amplify, Heroku, DigitalOcean e Netlify. O professor destacou a importância de ter cuidado ao configurar serviços como a Amazon, para evitar despesas altas sem querer. Ele recomendou estudar e aprender antes de colocar um projeto em produção. Além disso, o professor mencionou que utiliza a Vercel em seus projetos pessoais, pois ela oferece uma ferramenta de monitoramento do desempenho do site, como o Web Vitals. Ele mostrou um exemplo de como a Vercel fornece dados de produção da aplicação, permitindo identificar pontos de melhoria. O professor também mencionou outras ferramentas de monitoramento, como o Calibre App Performance e o Sentry. Ele ressaltou a importância de analisar custos e escolher a opção que faz mais sentido para cada projeto, seja ele pessoal ou corporativo. O professor encerrou a aula prometendo mais dicas sobre o Next.js no próximo vídeo.

## Aula 05 - Componentes e features novas - Vídeo 2

Nesta aula, o instrutor menciona recursos do Next.js que não foram abordados durante o curso. Ele fala sobre o componente de imagem do Next.js, que oferece otimizações e integrações interessantes, mas funciona melhor quando usado na infraestrutura da Vercel ou com um provedor externo que realiza a otimização de imagem. O instrutor explica que optou por não abordar esse componente no curso, pois está muito acoplado à Vercel e o objetivo era falar sobre o Next.js em si. No entanto, ele menciona que haverá outros cursos que abordarão o componente de imagem, tanto na formação quanto em seu canal no YouTube.

Além disso, o instrutor menciona a internacionalização, que será abordada em um curso específico sobre o assunto, e o uso de middlewares, que é um recurso mais recente e é muito utilizado para fazer autenticação. Ele revela que nos próximos cursos da formação "early access" serão abordados os middlewares, assim como os outros recursos mencionados anteriormente.

O instrutor encerra incentivando os espectadores a deixarem seu feedback no Twitter, tanto para ele quanto para a Alura, para que possam guiar os próximos cursos e melhorar o conteúdo oferecido. Ele agradece pelo acompanhamento e se despede, finalizando o curso.

## Aula 05 - Desafio: de onde vem as props da página?

Durante os cursos, você viu as diferentes estratégias de pré-renderização de páginas que o Next.js nos fornece: Server Side Rendering, Static Site Generation, Incremental Static Regeneration e até mesmo o Client Side Rendering.

Para usar os primeiros 3 métodos, é preciso implementar as funções getServerSideProps, getStaticPaths e getStaticProps com o atributo revalidate, respectivamente.

O retorno dessas funções retorna um objeto com a propriedade props, que é magicamente passado para o componente da página.

Exemplo: no arquivo pages/index.js, podemos criar o componente

```JavaScript
function PaginaExemplo(props) {
  return <div>{JSON.stringify(props, null, 2)}</div>;
}
export const getServerSideProps= async () => {
  return {
    props: {
      curso: 'Next.js',
      instrutor: 'Dev Soutinho',
    },
  };
};
export default PaginaExemplo;
```

Aprendemos na prática que o objeto props retornado de getServerSideProps será o mesmo que o props passado de argumento para o componente PaginaExemplo. Entretanto, a forma que isso acontece não é explícita.

Deixamos pra você um desafio: tente descobrir onde o Next.js faz essa ligação.

VER OPINIÃO DO INSTRUTOR

Durante o curso, vimos sobre algum arquivo específico do framework que referencia uma propriedade pageProps, que curiosamente pode ser entendido como "props da página".

Esse arquivo é o _app.js!

```JavaScript
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default MyApp;
```

A prop Component é o export default da página e o pageProps é o objeto props retornado de getServerSideProps.

Seguindo o exemplo do arquivo pages/index.js criado acima, temos:

Component: PaginaExemplo
pageProps: { curso: "Next.js", instrutor: "Dev Soutinho" }
Resumindo: para cada página da aplicação, o getStaticProps ou getServerSideProps são executados e o objeto props é encaminhado para o MyApp como pageProps.

O MyApp é executado e o objeto pageProps é passado para o export default da página como props.

## Aula 05 - Desafio: ordem de execução

No desafio anterior, você foi além do básico e descobriu que através do _app, o Next.js passa a informação de getStaticProps e getServerSideProps para o componente da página.

Como essas funções geram o conteúdo da página, é intuitivo pensar que elas precisam rodar antes que o componente da página. O _app.js precisa rodar antes do componente, porém depois da função que gera o conteúdo.

Desafio: crie uma aplicação que demonstra na prática essa ordem de execução. Você pode fazer isso através de console.logs em cada função. Crie páginas usando SSR, SSG e ISR e veja no terminal e no DevTools a ordem que cada função é executada.

Observação: lembre-se de usar os comandos next build e next start para ver o SSG e ISR em modo de produção.

Extra: além do _app.js, também vimos outro arquivo específico do Next.js: o _document.js. Tente achar seu lugar na ordem de execução.

## Aula 05 - Conclusão - Vídeo 3

Claro! Neste trecho final do curso de formação em Next.js, o instrutor faz um resumo do conteúdo abordado ao longo do curso e convida os alunos a participarem da formação completa. Ele destaca a importância de revisar cada um dos pontos abordados no curso, ressaltando que, apesar do Next.js parecer complexo inicialmente, uma vez que se entende seu funcionamento, é possível aproveitar ao máximo suas vantagens. Durante o curso, foram apresentados diversos tipos de projetos, como blogs, e-commerce, sites de votação e até mesmo um site relacionado ao conceito da Mega-Sena, com resultados e acesso de muitas pessoas. Além disso, foram discutidas diferentes abordagens em relação ao consumo de processamento, visando fornecer aos alunos uma compreensão mais ampla sobre o assunto. Por fim, o instrutor convida os alunos não apenas a participarem dos próximos cursos da formação, mas também a acompanharem seu trabalho no YouTube, por meio do canal Dev Soutinho. Ele encerra a mensagem agradecendo aos alunos e pedindo que deixem uma avaliação para ajudar a melhorar a qualidade dos próximos cursos.
