# Curso Alura Next.js: explorando o framework

## Aula 01 - Conhecendo o Next.js

[Next.js](https://nextjs.org/)

> yarn create next-app  
> npx create-next-app@latest
> IMPORTANTE:  
> No gitbash o comando acima não executou corretamente (no powershell executou)  
> Também posso usar o && para concatenar comandos (testado no CMD prompt): yarn build && yarn start

### Aula 01 - Apresentação - Vídeo 1

Claro! Nesta aula, conhecemos o Next.js, um framework que roda em cima do React e tem se tornado cada vez mais popular. Ele é uma ferramenta que ajuda a trabalhar melhor com o React, resolvendo problemas de SEO, performance e segurança. O Next.js é considerado o SDK da web, o kit de desenvolvimento da web.

Durante o curso, vamos aprender sobre integração de scripts externos, gerenciamento de CSS, carregamento de arquivos estáticos e performance. O projeto do curso consiste em criar duas páginas para o Alura Cases, mas também vamos explorar muito conteúdo sobre o Next.js para ajudar você a construir seu próximo projeto com essa ferramenta. Então, vamos codar juntos!

### Aula 01 - O que é e por que usar Next.js? - Vídeo 2

Nesta aula, o instrutor introduziu o Next.js, um framework para desenvolvimento web, e discutiu a importância de compreender os problemas que levaram ao surgimento do Next.js. Ele mencionou Guillermo Rauch, um dos criadores do Next.js, e destacou a importância de focar no usuário ao desenvolver para a web, considerando diferentes dispositivos e conexões de internet. Foram mencionadas estratégias para lidar com desafios, como o uso de cache e a otimização do tamanho dos arquivos, além da importância da disponibilidade e da entrega rápida de conteúdo. O instrutor também explicou que o Next.js permite trabalhar com ambos os modelos de renderização, Client Side Rendering e Server Side Rendering, e destacou a utilização do Next.js em projetos que exigem atualizações dinâmicas, mesmo em um ambiente de Jamstack.

### Aula 01 - Iniciando o projeto - Vídeo 3

Sequência de comandos usadas neste projeto:

> yarn init -y  
Para criar o package.json  
> yarn add next@latest react@latest react-dom@latest
Para instalar as dependências.
> npx gitignore node
Para ignorar a pasta node_modules, quando enviar para o github

Nesta aula, o instrutor Mario Souto inicia explicando como criar um projeto utilizando o Next.js. Ele destaca a importância de utilizar a documentação do Next.js para aprender a fazer consultas e ter autonomia no desenvolvimento. O instrutor mostra como criar um projeto manualmente, em vez de utilizar o gerador de projeto "create-next-app", e explica que o Next.js foi projetado para ser simples e facilitar a vida do desenvolvedor, evitando a necessidade de configurar arquivos de webpack.

Em seguida, o instrutor demonstra como adicionar as bibliotecas Next.js, React e React-dom ao projeto utilizando o gerenciador de pacotes Yarn, inicializa o repositório Git e adiciona os scripts necessários ao arquivo package.json. Ele também mostra como criar uma página inicial no Next.js, utilizando a pasta "pages" e um arquivo "index.js", e destaca que o Next.js já possui suporte ao React, não sendo necessário importá-lo explicitamente.

Além disso, o instrutor mostra como iniciar o servidor de desenvolvimento do Next.js e acessar a página no navegador. Ele menciona que o Next.js possui recursos como LiveReload e Hot Module Replacement, que permitem atualizar automaticamente a página durante o desenvolvimento. Por fim, o instrutor mostra como criar uma segunda página no Next.js e fazer a navegação entre as páginas, sem a necessidade de configurar rotas manualmente. Ele ressalta a importância de prestar atenção aos detalhes ao utilizar o Next.js, pois a vantagem da ferramenta está nos detalhes e na otimização do carregamento das páginas.

### Aula 01 - Para saber mais: Yarn

Se você está acostumado a utilizar o NPM como gerenciador de pacotes, deve estar se perguntando:

Preciso mesmo utilizar o Yarn?

Não! Apesar do Yarn ter nascido para solucionar os problemas do NPM, hoje em dia, o gerenciador de pacotes tradicional do Node já evoluiu bastante e a diferença de performance e segurança entre os dois está menor.

Durante o curso, o Yarn foi escolhido por preferência do instrutor. Para instalá-lo, basta executar o seguinte comando no terminal:

> npm install -g yarn
Depois, execute o comando para verificar se a instalação ocorreu corretamente:
> yarn -version
Também temos o artigo [NPM vs Yarn](https://www.alura.com.br/artigos/npm-vs-yarn) caso você queira ver mais a fundo as particularidades de cada um.

### Aula 01 - Componente Link do Next.js - Vídeo 4

Nesta aula, o instrutor Mario Souto abordou a implementação da navegação no modelo SPA (Single Page Application) utilizando o Next.js. Ele destacou a importância dos exemplos fornecidos pela comunidade para facilitar o aprendizado e a implementação. Em seguida, explicou como utilizar o componente "Link" do Next.js para criar a navegação entre as páginas sem a necessidade de recarregar todo o conteúdo. Além disso, mostrou como verificar se a navegação está ocorrendo no modelo SPA e como criar uma página 404 utilizando o Next.js. Por fim, destacou que o Next.js pré-renderiza todo o conteúdo das páginas, o que não está presente em uma aplicação criada com o "create-react-app". Este conteúdo é útil para desenvolvedores que desejam utilizar o Next.js em seus projetos.

### Aula 01 - Para saber mais: Referências da aula

- [Guillermo Rauch](https://twitter.com/rauchg)
- [7 principles of rich web applications](https://rauchg.com/2014/7-principles-of-rich-web-applications) - Guillermo Rauch
- [Submarine Cable Map](https://www.submarinecablemap.com/)
- [Onde ficam os servidores?](https://jachoos.net/amazon-web-services-locations/)
- [Problemas, SEO e Web Vitals](https://web.dev/articles/vitals?hl=pt-br)
- [JamStack Arquivos estáticos](https://jamstack.org/)
- [Performance Web I: otimizando o front-end](https://www.alura.com.br/cursos-online-front-end/automacao-front-end)

### Aula 01 - O que aprendemos nesta aula`:`

- O que é Next.js?
  - Next.js é um framework baseado em React que pode entregar tanto conteúdo estático quanto gerado no servidor.
- A criar um projeto Next.js
  - Pode-se criar um projeto Next.js adicionando os pacotes do framework manualmente num projeto Node.js.
- Componente Link
  - Este componente permite a navegação SPA de aplicações Next.js.

## Aula 02 - Build e SEO na prática

### Aula 02 - Entendendo o Build do Next.js - Vídeo 1

> No powershell o comando abaixo NÃO EXECUTOU (no prompt executou)
yarn build && yarn start

O Next dá suporte para o Server Render, nós vamos vê-lo em outro momento desse curso ainda, mas por hora o que o Next está fazendo parece Server Render, mas vai gerar um monte de arquivos estáticos, ele está gerando um monte de arquivo estático para nós. Seguinte, aqui tem um build, que gera os arquivos estáticos e o servidor do próprio Next, otimizado para rodar o Next, que roda isso. É isso que está acontecendo.

> O "next export" foi removido e substituido por uma linha de comando ("output: export") adicionada no arquivo (next.config.js, arquivo gerado quando usado o create-next-app com: √ Would you like to use App Router? (recommended) Yes). [Leia mais:](https://nextjs.org/docs/advanced-features/static-html-export)

Aqui é uma feature avançada do Next, que é esse Next Export, para você conseguir visualizar esses arquivos que eu estou falando.  
Eu vou criar aqui um comando chamado “export”:, no meu “package.json”, quando eu rodar yarn export, é um atalho para “next build && next export”. Basicamente eu estou fazendo um atalho para rodar isso aqui.

Repara que surgiu uma pasta “out”, à esquerda e dentro dela tem o “index.html”, o “faq.html” e a página “404.html”. Ele também tem esse monte de “chunks”, esse monte de arquivos JavaScript. Tudo que está aparecendo aqui que o Next gera, está aparecendo aqui também.

Agora eu consigo copiar o path para esse arquivo na minha máquina e colar isso no navegador, então “/Users/mariosouto/dev/alura/01-nextjs-course/out/index.html” e ele abriu (estático). Para rodar, precisaria minimamente ter algum outro servidor rodando.

Tem um que eu uso bastante para testes (http-server é um servidor básico), que é esse aqui, o npx http-server ./out, que é a pasta, e vou desabilitar o cache dele aqui, vou passar esse -c-1.

Nesta aula, o instrutor discutiu sobre o processo de build do Next.js, destacando as diferenças entre o Next.js e o Create React App. Ele explicou a capacidade do Next.js de pré-carregar o código da aplicação, essencial para a estratégia de Server Side Render.

Além disso, o instrutor abordou a otimização das páginas e a geração de arquivos estáticos, como HTML, CSS e JavaScript, pelo Next.js ao rodar o código no servidor. Essa abordagem permite que o servidor envie apenas esses arquivos estáticos para o usuário, sem a necessidade de processar o código a cada requisição, o que torna a aplicação mais eficiente em termos de desempenho e custo.

Ele também demonstrou como utilizar o comando "next export" para visualizar os arquivos estáticos gerados pelo Next.js e discutiu diferentes opções de hospedagem para esses arquivos, destacando a Vercel como uma opção recomendada para o deploy de aplicações Next.js.

Se precisar de mais detalhes ou exemplos práticos sobre algum ponto específico dessa aula, estou aqui para ajudar!

### Aula 02 - SEO na prática - Vídeo 2

Nesta aula, o palestrante aborda a importância do SEO (Search Engine Optimization) e como ele afeta o ranqueamento de um site nos resultados de busca do Google. Ele menciona as métricas de Web Vitals, como LCP (Largest Contentful Paint) e FID (First Input Delay), que são consideradas pelo Google na hora de classificar um site. No entanto, o palestrante ressalta que o conteúdo é o aspecto mais importante. Mesmo que existam estudos que comprovem que o Google agora renderiza o conteúdo, se o conteúdo não for bom e demorar para aparecer, o Googlebot pode penalizar o site. O palestrante mostra um exemplo prático usando o Create React App e o Next.js. Ele explica que, no Create React App, o conteúdo só é renderizado quando o cliente (navegador) termina de baixar os scripts e o React é executado. Já no Next.js, o conteúdo estático gerado já contém o conteúdo HTML, o que melhora a velocidade de carregamento. O palestrante demonstra isso ao mostrar o código fonte das páginas e como o conteúdo é exibido. Ele menciona que em vídeos futuros irá aprofundar mais sobre a diferença entre rodar no servidor e no cliente, que é um conceito importante a ser aprendido.

### Aula 02 - Sobre o Next.js

Uma aplicação web criada com Next.js:

- Possibilita Server Side Rendering (SSR).
  - O Next.js consegue pré-renderizar o HTML para cada requisição.
- Possibilita geração de conteúdo estático (Static Site Generation - SSG).
  - O Next.js consegue pré-renderizar o HTML durante o build que será reutilizado em todas as requisições.
- Tem melhor SEO.
  - O SSR e SSG facilitam o escaneamento dos motores de busca, como resultado a aplicação tem uma melhor nota de SEO.

### Aula 02 - Nesta aula você aprendeu`:`

- Como buildar um projeto Next.js
  - O comando next build && next export gera os arquivos que serão utilizados no ambiente de produção.
- SEO no Next.js
  - O Next.js entrega o conteúdo da página diretamente, enquanto no Create React App ele é gerado após o carregamento. Como resultado o SEO é melhor.
- create-next-app
  - Essa ferramenta realiza o setup inicial por você, facilitando o início de uma aplicação Next.js.

## Aula 03 - Estilizando o projeto

### Aula 03 - Onde colocar meu CSS? - Vídeo 1

Nesta aula do curso de Next.js, o instrutor aborda a estilização da aplicação. Ele explica a abordagem CSS-in-JS, que consiste em criar o código CSS a partir do JavaScript, trazendo vantagens como evitar conflitos de escopo e a necessidade de pensar em nomes de classe. Além disso, o instrutor menciona o uso de styled components como outra forma de implementar o CSS-in-JS. Ele mostra como criar um componente de título e aplicar estilos a ele utilizando a tag especial do Next.js, chamada styled-jsx. O instrutor também demonstra como utilizar o styled-jsx para definir estilos dinâmicos, permitindo que o componente seja renderizado com diferentes tags HTML. Ele destaca a flexibilidade dessa abordagem e a possibilidade de gerar um código mais consistente, eliminando o chamado "dead code". Por fim, o instrutor menciona que é possível aplicar estilos globais na aplicação, mas que isso será abordado em um próximo vídeo.

### Aula 03 - Como lidar com estilos globais - Vídeo 2

Nesta aula, o instrutor abordou a questão de como lidar com estilos globais em um projeto Next.js. Ele começou criando um componente chamado GlobalStyle que contém a tag `<style>` com a estrutura de template string. Em seguida, ele moveu a propriedade font-family: sans-serif; para a tag body, explicando que ao aplicar essa propriedade ao body, todos os elementos herdarão esse estilo. O instrutor mencionou que, embora isso seja útil para estilos globais, quando se trata de estilos específicos de uma página, é necessário criar um arquivo _app.js na pasta pages do projeto. O '_app.js' atua como um middleware entre as páginas e os componentes, permitindo a aplicação de estilos e configurações gerais. O instrutor mostrou como criar o arquivo _app.js e importar o componente GlobalStyle nele. Ele também mencionou que é possível criar um componente separado para envolver cada página, caso seja necessário. O instrutor destacou a importância de verificar o terminal para identificar erros e problemas durante o desenvolvimento. Ele concluiu mencionando que o próximo vídeo abordará a utilização de componentes para facilitar a criação de estilos.

### Aula 03 - Componentes do layout - Vídeo 3

Para instalar a biblioteca de ícones Font Awesome
> npm i --save @fortawesome/fontawesome-svg-core
> npm i --save @fortawesome/free-solid-svg-icons
> npm i --save @fortawesome/react-fontawesome

O comando abaixo(citado na aula), deu erro
> yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

Nesta aula, o instrutor ensinou como estilizar uma página web, destacando a importância de adicionar estilos comuns a todos os projetos. Ele mostrou como adicionar as fontes do Font Awesome ao projeto e explicou a necessidade de instalar três bibliotecas: o core do Font Awesome, a versão dos ícones sólidos e o componente para trabalhar com o React do Font Awesome. Além disso, o instrutor mencionou a existência de um arquivo chamado "theme.js", que contém definições de cores, fontes e bordas, traduzidas a partir de um arquivo de design, como o Figma. Ele também criou um arquivo chamado "components.js" dentro da pasta "theme" e importou várias funções e componentes que serão utilizados no projeto. O instrutor mostrou como importar o componente de footer na página inicial do projeto, explicando que esse componente é uma caixa preta com um texto dentro, e utilizou propriedades do tema para definir o estilo do footer. Além disso, ele mostrou como aplicar um estilo global ao projeto, corrigindo a margem do body e importando um arquivo de estilo mais completo. Por fim, o instrutor organizou os arquivos em pastas e importou o componente de home na página inicial, destacando que a página inicial já está com o estilo correto, mas que o FAQ ainda precisa ser estilizado. Ele também mencionou outros projetos que seguem a mesma estrutura de definir estilos através de propriedades, como o SkynexUI e o xstyled, e finalizou o trecho dizendo que na próxima aula serão abordados os arquivos estáticos e como lidar com imagens no projeto.

### Aula 03 - Trabalhando com arquivos estáticos - Vídeo 4

Nesta aula, o professor abordou a estrutura de pastas do Next.js, explicando que o arquivo "_app.js" gerencia todos os componentes de página. Ele destacou a separação das páginas na pasta "screens" e a presença de exemplos na documentação do Next.js para uso com diferentes tecnologias, como Sass, Redux e GraphQL.

Além disso, o professor explicou como servir arquivos estáticos no Next.js, mostrando como criar um arquivo "robots.txt" na pasta "public" para controlar o acesso dos robôs de busca. Ele também demonstrou como salvar imagens na pasta "public" e acessá-las através de URLs sem a necessidade de incluir a pasta "public" na URL.

Outro ponto abordado foi a geração de arquivos como o "sitemap.xml" para listar todas as URLs do site, útil para SEO, podendo ser criado manualmente ou seguindo tutoriais disponíveis na internet.

Por fim, o professor anunciou que nas próximas aulas serão abordados recursos mais avançados do Next.js, como o Server Side Render e as funções getStaticProps e getServerSideProps. Este resumo abrange os principais tópicos discutidos na aula, incluindo a estrutura de pastas do Next.js, o uso de arquivos estáticos e a geração de arquivos como o "robots.txt" e o "sitemap.xml".

### Aula 03 - Nesta aula você aprendeu`:`

- Estilização no Next.js
  - Existem diversas maneiras de estilizar sua aplicação Next.js e você é livre para escolher a que mais lhe agrada.
- Arquitetura de aplicação
  - Podemos criar novas pastas para agrupar componentes com propósitos semelhantes.
- Lidar com arquivos estáticos
  - Conseguimos acessar os arquivos dentro da pasta public diretamente pela URL da aplicação.

## Aula 04 - Dados dinâmicos no Next.js

### Aula 04 - getStaticProps - Vídeo 1

Nesta aula, o instrutor discute a implementação de um FAQ em uma aplicação utilizando o framework Next.js. Ele destaca que o conhecimento prévio de React pode ser reaproveitado no Next.js, incluindo o uso de useEffect, Affect Api e Axios para fazer requisições de dados.

O Next.js oferece vantagens em relação ao React, especialmente em termos de performance. O instrutor demonstra o processo de obtenção dos dados da API utilizando o fetch() e mostra como converter a resposta em um objeto JavaScript. Em seguida, ele utiliza o useState() para armazenar os dados obtidos e renderizá-los na tela.

A importância da performance na experiência do usuário é destacada, explicando como o tempo de carregamento do conteúdo pode impactar no Largest Contentful Paint, uma métrica de performance do Google. O instrutor compara o carregamento de conteúdo no Next.js com o carregamento no React puro, mostrando como o Next.js permite carregar partes do conteúdo de forma mais rápida e eficiente.

Para melhorar o desempenho, o instrutor utiliza a função getStaticProps() do Next.js para pré-carregar os dados do FAQ. Ele explica como essa função funciona e mostra como os dados pré-carregados são injetados na página através das props, permitindo que o conteúdo seja renderizado instantaneamente, sem atrasos de carregamento.

O Next.js trabalha em conjunto com o React, utilizando o Server Side Rendering para sincronizar os dados pré-carregados e renderizar o conteúdo de forma eficiente. O instrutor destaca que o Next.js gera uma versão estática do conteúdo durante o processo de build, o que permite que o usuário acesse a página e veja o conteúdo instantaneamente, sem a necessidade de carregamentos adicionais.

No próximo vídeo, o instrutor promete aprofundar-se ainda mais na obtenção de conteúdo dinâmico no Next.js, abordando detalhes importantes a serem considerados.

### Aula 04 - getServerSideProps - Vídeo 2

Nesta aula, o instrutor abordou o conceito de getStaticProps e getServerSideProps no Next.js. O getStaticProps é utilizado para criar sites estáticos, ou seja, sites cujo conteúdo não será alterado mesmo que a API mude. Foi mostrado na prática como utilizar o getStaticProps e explicado que é necessário fazer um novo build do site para que as alterações sejam refletidas. Foi mencionada a importância de trabalhar no modelo da Jamstack, que consiste em utilizar JavaScript, código assíncrono e Markdown para renderizar conteúdo dinâmico. Foram destacadas as vantagens de ter um site estático, como a redução de custos de infraestrutura e a possibilidade de utilizar cache. Foi mencionado que o getServerSideProps é uma alternativa ao getStaticProps quando é necessário que a página seja dinâmica e esteja sempre em sincronia com o conteúdo atualizado. No entanto, foi ressaltado que, em geral, é preferível ter páginas estáticas, pois elas têm uma resposta mais rápida e são mais disponíveis. Foi explicado que o getStaticProps é executado apenas durante o build do projeto, enquanto o getServerSideProps é executado a cada acesso à página. Foi mostrado como utilizar essas funções em modo de desenvolvimento e em modo de produção. Foi enfatizada a importância de entender quando cada uma dessas funções é executada e sugerido o uso de console.log para debugar o código. Por fim, foram mencionados os diferentes tipos de renderização, como SSG (Static Site Generation) e SSR (Server Side Rendering), e os alunos foram convidados a explorarem esses conceitos por conta própria.

### Aula 04 - Como manipular o Head das páginas - Vídeo 3

Claro! Nesta aula, o instrutor abordou a personalização do cabeçalho das páginas em um projeto Next.js. Ele explicou como ajustar o título da página e carregar uma fonte personalizada utilizando o componente "next/head". Além disso, mostrou como importar o componente e utilizá-lo no código, demonstrando que ao adicionar o código `<Head> <title>`Home - Alura Cases Campanha`</title> </Head>`, é possível alterar o cabeçalho da página. Também mencionou a aplicação dessa personalização em outras páginas, como o FAQ, e como carregar fontes personalizadas para todas as páginas do projeto. O instrutor ainda mostrou como baixar a fonte desejada do Google Fonts e adicionar a tag `<link>` no cabeçalho do arquivo "_app.js" para carregar a fonte em todas as páginas. Por fim, ressaltou a importância de fechar corretamente as tags no JSX do React e mencionou que no próximo vídeo será abordado como carregar scripts externos e outros recursos relacionados ao cabeçalho das páginas no Next.js.

### Aula 04 - Next e Google Analytics - Vídeo 4

Link para a [aula 04](https://cursos.alura.com.br/course/next-js-iniciando-framework/task/101658) com todos os detalhes (precisa estar logado).

Por motivos práticos(conta e campanha no alaytics) vou apenas acompanhar a aula sem fazer na prática.

Nesta aula, o instrutor ensina como utilizar o Google Analytics em um site desenvolvido com Next.js. O Google Analytics é uma ferramenta importante para acompanhar métricas e realizar rastreamentos em sites e campanhas. O vídeo foca na instalação da ferramenta, que é uma tarefa comum para os desenvolvedores. O processo envolve criar uma nova conta no Google Analytics, criar a propriedade do site, realizar o acompanhamento do site e incluir a tag do Google Analytics no código do site. Após a instalação, é possível acessar os relatórios do Google Analytics para visualizar informações sobre os acessos ao site, como o número de visitantes e o tipo de dispositivo utilizado. Em resumo, o trecho do vídeo ensina passo a passo como instalar e utilizar o Google Analytics em um site desenvolvido com Next.js.

### Aula 04 - Para saber mais: Referências da aula

[getStaticProps](https://nextjs.org/docs/pages/building-your-application/data-fetching#getstaticprops-static-generation) (Static Generation)

[useEffect](https://pt-br.legacy.reactjs.org/docs/hooks-reference.html#useeffect)

[Web.dev](https://web.dev/articles/vitals?hl=pt-br) - Web Vitals

[getServerSideProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props) (Server-side Rendering)

[Jamstack](https://jamstack.org/)

SSG - Static Site Generation

SSR - Server Side Rendering

ISG - Incremental Static Generation

### Aula 04 - Nesta aula você aprendeu`:`

- getStaticProps
  - Essa função busca os dados durante o build. Ou seja, essa função é executada apenas uma vez.
- getServerSideProps
  - Essa função busca os dados do lado do servidor para cada requisição.
- Ao modificar o título da página
  - Com o componente `<Head>` conseguimos editar os metadados de cada página, como, por exemplo, o título.

## Aula 05 - Publicando seu projeto

### Aula 05 - next.config.js e Redirects - Vídeo 1

Nesta aula, o instrutor abordou os ajustes necessários para o projeto antes de fazer o deploy. Ele mencionou a configuração do "trailing slash" e os redirects, explicando como fazer essas configurações no Next.js utilizando o arquivo "next.config.js". O instrutor também destacou a importância de verificar a aba "Network" do navegador para identificar erros relacionados ao carregamento de arquivos e sugeriu utilizar empresas como a Vercel para fazer o deploy do projeto. Além disso, ele explicou que ao utilizar várias configurações no arquivo "next.config.js", é assumido que não será mais utilizado o processo de gerar a pasta "output" com o comando "next export".

### Aula 05 - Publicando na vercel - Vídeo 2

Nesta aula, o instrutor Mario Souto explica como publicar um projeto no Vercel, uma plataforma de hospedagem para projetos de front-end. Ele destaca a importância de ter o projeto no GitHub e fazer o login na Vercel com a conta do GitHub. Em seguida, mostra o passo a passo para adicionar o projeto ao repositório do GitHub, utilizando comandos do Git no terminal. Além disso, ele ensina como criar um novo projeto na Vercel, selecionando o repositório do GitHub, e explica que a Vercel irá otimizar as configurações para o Next.js. O instrutor também destaca a possibilidade de configurar um domínio personalizado para o projeto na Vercel e a vantagem de criar um branch e fazer um pull request, com um link de preview para revisar as alterações antes de fazer o merge. Por fim, ele menciona que a Vercel oferece um limite alto de uso gratuito para usuários individuais e convida os espectadores a assistir ao próximo vídeo para pegar o certificado do projeto.

### Aula 05 - Para saber mais: Referências da aula

Que tal saber o status HTTP correto das requisições com cachorrinhos???
[HTTP STATUS DOGS](https://httpstatusdogs.com/)

Para saber mais sobre redirects no Next, segue uma leitura incrível:
[Redirects](https://nextjs.org/docs/pages/api-reference/next-config-js/redirects)

Para finalizar as leituras opcionais, recomendamos essa que mostra como o Next.js redireciona URLs com barras . Por exemplo /home/, redirecionará para /home. Você pode configurar esse comportamento para agir de maneira oposta, onde urls sem barras finais são redirecionadas para suas contrapartes com barras finais.
[Trailing Slash](https://nextjs.org/docs/pages/api-reference/next-config-js/trailingSlash)

### Aula 05 - Nesta aula você aprendeu`:`

- O que é o next.config.js
  - Neste arquivo, podemos modificar algumas configurações, como, por exemplo, redirects e adição do trailing slash no final da URL automaticamente.
- Como fazer o deploy do seu projeto Next.js
  - A criadora do framework (Vercel) oferece uma plataforma de hosting de forma gratuita e integrada ao GitHub.
- Benefícios de hospedar na Vercel
  - A plataforma oferece fácil integração com plataformas de versionamento de código, assim como HTTPs e domínios customizados.

### Aula 05 - Conclusão - Vídeo 3

Nesta aula, o instrutor conclui o curso sobre Next.js e entrega os certificados aos alunos. Durante o curso, foram abordados diversos tópicos relacionados ao Next.js, desde a criação do primeiro script até a publicação do projeto. Foram apresentadas as vantagens de usar a plataforma Vercel, incluindo o recurso de visualização de pull requests. Além disso, foram explicados o funcionamento da pasta "pages" no Next.js, a importância de organizar os componentes e telas em subpastas, bem como o uso da pasta "source". Também foi abordado o gerenciamento de imagens e arquivos públicos, bem como a configuração do arquivo "robots.txt". O instrutor também explicou as diferenças entre as funções getStaticProps e getServerSideProps, recomendando o uso do getStaticProps por padrão. Ele enfatizou a importância de se familiarizar com o ecossistema do Next.js, incluindo a leitura da documentação oficial e a busca por soluções em casos de dúvidas, além de ficar atento às versões do Next.js e de consultar os exemplos disponíveis no GitHub. O instrutor encerrou a aula agradecendo aos alunos pela participação no curso e pedindo avaliações para continuar trazendo mais conteúdos sobre Next.js. Ele também convidou os espectadores a se inscreverem em seu canal do YouTube, onde há mais vídeos sobre Next.js, JavaScript e outros assuntos relacionados ao desenvolvimento web.
