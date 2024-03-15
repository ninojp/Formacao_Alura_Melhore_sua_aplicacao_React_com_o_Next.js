# Curso Alura Next.js: explorando o framework

## Aula 01 - Conhecendo o Next.js

[Next.js](https://nextjs.org/)

> npx create-next-app@latest

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
