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
