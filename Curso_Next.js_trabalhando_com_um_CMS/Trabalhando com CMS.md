# Curso Alura Next.js trabalhando com um CMS

## Aula 1 - Headless CMS e Front Ends Modernos

## Aula 1 - Apresentação - Vídeo 1

Claro! Nesta aula, o instrutor convida os espectadores a aprenderem sobre a integração de uma aplicação front-end com um Headless CMS, como o DatoCMS. Ele explica que um Headless CMS é uma estrutura em que o CMS e o front-end são separados, permitindo que diferentes pessoas de produto usem a ferramenta de CMS para popular não só o site, mas também o aplicativo. O objetivo do curso é ensinar sobre arquitetura, lidar com o conteúdo global e específico, integrar os componentes com o CMS e dar autonomia para as pessoas de produto fazerem alterações no site. O projeto do curso é uma versão simplificada da Alura, com uma home, rodapé, página de perguntas e FAQ, e trará vários exemplos de como organizar e escalar a aplicação. O instrutor convida os espectadores a aprenderem junto com ele e encerra o trecho.

## Aula 1 - Por que usar um CMS? - Vídeo 2

Nesta aula, o professor discute a importância de utilizar um CMS (Content Management System) e apresenta duas opções: o WordPress e o Headless CMS. Ele explica que um CMS é uma ferramenta que permite gerenciar o conteúdo de um site sem a necessidade de programação, o que é útil para equipes de marketing que desejam fazer alterações no texto ou na estrutura do site sem precisar mexer no código. O professor menciona que, por muito tempo, o WordPress foi o CMS mais popular, mas agora existem outras opções, como o Headless CMS.

O Headless CMS é diferente do WordPress, pois não está acoplado ao site. Ele fornece conteúdo para diferentes aplicativos, como um aplicativo móvel, uma Alexa, um chatbot, entre outros. Isso significa que qualquer pessoa pode se beneficiar do uso do CMS, não apenas os profissionais de marketing ou programadores. O professor destaca que o DatoCMS é um exemplo de Headless CMS que utiliza a tecnologia GraphQL, que permite buscar apenas o conteúdo desejado. No WordPress, por exemplo, é necessário buscar todo o conteúdo, mesmo que se queira apenas o título de uma página.

Além disso, o professor menciona que o DatoCMS possui uma ferramenta chamada "Explorer" que ajuda a construir consultas de dados de forma mais fácil. Ele também ressalta a importância de se preocupar com o peso do conteúdo em um site, pois isso afeta o desempenho, sugerindo otimizar o conteúdo para melhorar o desempenho. No próximo vídeo, o professor irá começar a trabalhar em um projeto utilizando o DatoCMS e o Next.js, uma estrutura de desenvolvimento web.

## Aula 1 - Nosso projeto e criando a conta no DatoCMS - Vídeo 3

Nesta aula, o instrutor Mario Souto introduz o uso do CMS DatoCMS em conjunto com o framework Next.js. Ele mostra a estrutura pré-configurada do projeto no VS Code e explica que o objetivo é alimentar o projeto com conteúdo do DatoCMS. O instrutor destaca que as perguntas do FAQ ainda possuem títulos falsos e que o desafio será interligar essas perguntas com o CMS. Em seguida, ele demonstra como criar uma conta no DatoCMS, criar um projeto para representar o site e definir tipos de conteúdo para as perguntas e categorias do FAQ. Ele mostra como adicionar campos aos tipos de conteúdo e como relacionar as perguntas com as categorias. Por fim, ele cria alguns registros de perguntas e categorias para exemplificar o funcionamento do CMS. O instrutor ressalta que o DatoCMS é uma ferramenta flexível e personalizável, e que nos próximos vídeos será abordada a integração do projeto com o CMS e a obtenção dos conteúdos através da API do DatoCMS.

## Aula 1 - Para saber mais: Headless CMS

CMS
Um CMS (Content Management System) é um sistema de gestão de conteúdo. Trata-se de um software, ou uma plataforma, que permite criar, editar, deletar e atualizar o layout, template e o conteúdo em geral de um site. Um CMS entrega conteúdo para apenas um canal ao qual está intrinsecamente ligado, o que impossibilita que você compartilhe seu conteúdo com outros sites de seu domínio. Para permitir que fosse possível gerenciar um conteúdo e compartilhá-lo com diversos canais digitais surgiram os Headless CMS.

Headless CMS
Um Headless CMS, que em tradução livre significa CMS sem cabeça, por sua vez permitem o compartilhamento de conteúdo para múltiplos canais digitais. Neste tipo de CMS o front-end fica separado do back-end da plataforma de gestão. Isso deixa o conteúdo livre para ser distribuído para outros canais.

A forma mais comum de funcionamento de um Headless CMS é através de uma API. Neste formato o CMS dispõe de uma API que fornece os dados do back-end ao front-end. Algumas das principais vantagens de um Headless CMS são:

- Eficiência: O conteúdo pode ficar em uma única plataforma e ser distribuído para diversos canais digitais;
- Menor custo: Por permitir a distribuição de conteúdo para diversos canais digitais não é preciso adquirir outros serviços de CMS para cada canal que você possua, reduzindo assim os custos operacionais, além de existirem muitos Headless CMS com planos gratuitos muito bons;
- Agilidade: Entrega de conteúdos facilitada, reduzindo o tempo de implantação de projetos de e-commerce, por exemplo;
Acessibilidade: Não é necessário ser dev para conseguir utilizar um serviço de CMS, por isso, esse serviço é acessível a um maior número de pessoas que possuam canais digitais.

Se você quiser conhecer um pouco mais sobre o que é o Dato CMS, tem esse vídeo aqui que te mostra os poderes de um [CMS para o front-end](https://www.youtube.com/watch?v=IZi6nogysRM).

E se quiser conhecer outros sistemas de gestão de conteúdo, [neste link](https://cursos.alura.com.br/course/next-js-trabalhando-cms/task/107490) você confere uma lista de CMS populares. Ficou curioso? Não deixe de conferir!

## Aula 1 - DatoCMS

Sobre o Dato CMS é correto afirmar que:

- Ele permite que todo o conteúdo seja gerenciado de um só lugar.
  - Ser um Headless CMS significa manter todo o conteúdo na mesma página, armazenando tudo em um único hub centralizado, editando e publicando instantaneamente, em qualquer lugar.

- Com o Dato CMS podemos testar recursos experimentais e iterar por nossa aplicação sem ajuda de um programador.
  - Isso mesmo! Independentemente do produto digital em que você está trabalhando, você pode testar e iterar por ele sem entrar em contato com sua TI para migrações complexas. Além disso, ele possui a possibilidade de usarmos Feature Flags que aumentam a produtividade e escalabilidade de nossos conteúdos.

## Aula 1 - O que aprendemos nesta aula`:`

- O porquê e as vantagens de usar um CMS;
- Como criar uma conta no DatoCMS;
- Como criar um novo projeto;
- Como criar um modelo de conteúdo;
- Como adicionar novos campos ao modelo de conteúdo;
- Como adicionar relações entre modelos de conteúdo.

Na próxima aula:
Vamos exibir os conteúdos em nossa página de FAQ usando o API Explorer do DatoCMS. Vamos lá?

## Aula 2 - Setup inicial do DatoCMS

## Aula 2 - FAQ: listando o conteúdo de uma pergunta - Vídeo 1

O Endereço EndPoint foi pego de: [EndPoint](https://www.datocms.com/docs/content-delivery-api/api-endpoints)

Nesta aula, o instrutor Mario Souto começa explicando como integrar a página com o conteúdo vindo do DatoCMS. Ele mostra como fazer uma busca utilizando uma query GraphQL para obter os dados desejados. Em seguida, ele demonstra como acessar o DatoCMS através de uma URL específica e como autenticar a requisição utilizando um token de API. O instrutor também mostra como estruturar o código para obter os dados do CMS de forma mais organizada, criando um serviço chamado cmsService. Ele utiliza a função fetch para fazer a requisição ao DatoCMS e trata possíveis erros utilizando try-catch. Além disso, o instrutor mostra como utilizar variáveis de ambiente para armazenar o token de API de forma segura. Por fim, ele explica que o próximo passo será aprimorar a renderização do conteúdo obtido do DatoCMS na página.

## Aula 2 - Para saber mais: variáveis de ambiente

Se você já precisou fazer alguma alteração ou acessar um valor somente em produção ou desenvolvimento, já cometeu o erro de armazenar e versionar um dado sensível no meio da sua codebase, [aqui tem um vídeo](https://www.youtube.com/watch?v=BP2KQtCyzo8&t=1s) que fala sobre variáveis de ambiente. Assista e entenda como usá-las, a partir de casos de uso, libs e exemplos, tanto para Front quanto para Back-End:

Além disso, separei esse [link incrível](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#environment-variable-load-order) para falar sobre variáveis de ambiente no Next.js.

## Aula 2 - Renderizando texto estruturado - Vídeo 2

Nesta aula, o instrutor discutiu sobre a renderização de conteúdo utilizando a biblioteca react-datocms e o componente StructuredText. Ele explicou que o conteúdo a ser renderizado é uma estrutura de dados chamada AST, que é uma abstração do HTML. Através de uma função recursiva, é possível percorrer os elementos do AST e convertê-los em tags do React para renderização.

No entanto, o instrutor mencionou que o trabalho de implementar essa função recursiva é desnecessário, pois a biblioteca react-datocms já fornece um componente chamado StructuredText, que lida com a renderização desse tipo de conteúdo de forma mais simples. Ele demonstrou como instalar a biblioteca e importar o componente no arquivo index.js.

Além disso, o instrutor mostrou como utilizar o componente StructuredText, explicando que o componente espera receber uma propriedade chamada "content", que contém o conteúdo a ser renderizado. Ao passar o valor de "data(content)" para o componente, ele consegue renderizar o conteúdo esperado.

Foram feitos ajustes no código para melhorar a aparência da renderização, removendo algumas propriedades CSS. Também foi mencionado que é possível personalizar as tags HTML utilizadas pelo componente StructuredText, e foi mostrado um exemplo de como alterar o estilo de um título utilizando o componente Text.

Além disso, o instrutor mostrou como é possível customizar ainda mais a renderização do conteúdo utilizando a biblioteca datocms-structured-text-utils. Ele demonstrou como utilizar a função renderNodeRule para definir regras de renderização para diferentes tipos de nós do AST, e como é possível acessar informações sobre o nó atual através do parâmetro "node" da função renderNodeRule.

Por fim, o instrutor destacou a flexibilidade do DatoCMS em relação à renderização de conteúdo, mencionando que é possível criar modelos de conteúdo personalizados, com diferentes tipos de tags e estilos, de acordo com as necessidades do projeto. Também foi mencionado que no próximo vídeo serão abordadas melhorias na integração com o DatoCMS.

## Aula 2 - Pegando conteúdo global - Vídeo 3

Nesta aula, o instrutor explicou como trabalhar com conteúdo global em um CMS, mostrando como é possível organizar e acessar esse conteúdo de forma eficiente. Ele começou explicando como puxar conteúdo do Dato e mencionou a importância de descrever o conteúdo para ser guardado no CMS. Em seguida, ele criou um menu chamado "General Content" para facilitar a visualização e organização do conteúdo. Além disso, ele trabalhou com o modelo do footer, mostrando como criar campos e categorizar o conteúdo. O instrutor também demonstrou como trazer a query para o código, tratar erros e acessar o conteúdo do CMS no componente. Por fim, ele mencionou que é possível melhorar a integração com o CMS e prometeu dar dicas de como fazer isso nos próximos passos.

## Aula 2 - Ativando o sistema de Preview do NextJS - Vídeo 4

Nesta aula, o instrutor abordou a importância de utilizar o mecanismo de agendamento de publicação no Dato CMS. Ele explicou como ativar o sistema de rascunho/publicado nas configurações adicionais do modelo e como agendar a publicação de um conteúdo, especificando uma data. Além disso, mostrou como diferenciar o acesso ao conteúdo normal e ao conteúdo em modo de preview no Dato CMS, utilizando endpoints diferentes.

Também foi apresentado um recurso interessante do Next.js, que é a possibilidade de entrar em modo de preview, e como configurar o Next.js para entrar nesse modo através do valor de preview no método getStaticProps. O instrutor mencionou a importância de garantir que o modo de preview não seja acessível em produção e como adicionar uma senha para acessar o modo de preview, armazenando-a em uma variável de ambiente para maior segurança.

Por fim, o instrutor ressaltou que os próximos passos serão aprimorar a forma de acessar informações e criar um gerenciador de dados no Dato CMS, que poderá ser útil em outros projetos.

## Aula 2 - O que aprendemos nesta aula você aprendeu`:`

- Como buscar os conteúdos do Dato CMS através de sua API passando uma query;
- Como criar um CMS service que faz a busca dos conteúdos do Dato CMS;
- Salvar tokens e dados sensíveis em variáveis de ambiente;
- Como utilizar o componente `<StruturedText/>` da lib react-datocms para renderizar o conteúdo do Dato CMS;
- Como criar um conteúdo de componentes globais e torná-lo disponível em diferentes páginas da aplicação;
- Como ativar o sistema de preview do Next.js e agendamento de publicação do Dato CMS.

Na próxima aula:  
Vamos aprender como criar um provedor de dados na nossa aplicação e a disponibilizar o conteúdo do CMS a todos os componentes.

## Aula 3 - Indo Além na integração com o CMS

## Aula 3 - Criando nosso provedor de dados - Vídeo 1

Nesta aula, o instrutor discute a integração do CMS (Sistema de Gerenciamento de Conteúdo) e aponta um erro de design no código. Ele menciona que o conteúdo do footer é global por natureza e deve estar presente em todas as páginas, mas a responsabilidade de passar esse conteúdo para o footer está na página do FAQ, o que gera um acoplamento entre o footer e a página do FAQ. Para resolver esse problema, o instrutor propõe desacoplar o footer e fazer com que ele tenha acesso ao conteúdo do CMS de forma global, sem precisar passar como parâmetro. Ele sugere a utilização da Context API do React para criar um provedor de dados que envolve toda a aplicação e permite que qualquer componente tenha acesso às informações do CMS. O instrutor mostra como configurar o contexto do CMS e criar o provedor de dados, além de explicar como utilizar a função useContext para acessar o conteúdo do CMS em outros componentes. Por fim, ele destaca que essa abordagem de arquitetura não é uma solução universal, mas resolve o problema de forma eficiente no contexto apresentado no vídeo.

## Aula 3 - Para saber mais: Prop drilling

As props são os dados que passamos (ou podemos acessar) dos componentes superiores, aqueles que estão níveis acima na nossa árvore de componentes. Se quisermos acessar esses dados em um componente que está dois ou três níveis abaixo nesta árvore de componentes, teremos que passar as props por cada um desses níveis até chegar no componente que utiliza esses dados.

Isso se chama prop drilling! É o conceito de passar os dados de um componente pai, isto é, de um nível superior, para um componente filho. Só que nesse processo existem outros componentes que servem apenas como adereços, ou seja, que vão receber esses dados mas não necessariamente irão usá-los.

Se deseja entender melhor sobre prop drillings, o Felipe Nascimento escreveu um artigo incrível explicando o que são e como lidar com elas dentro de uma aplicação React, e você pode conferir acessando [este link](https://www.alura.com.br/artigos/prop-drilling-no-react-js).

## Aula 3 - Navegando em objetos com strings - Vídeo 2

[Link](https://lodash.com/) da biblioteca(library Lodash) usada na aula.

Nesta aula, o instrutor discutiu a importância de evitar que o código precise saber qual é o objeto a ser acessado. Ele apresentou a lib Lodash e a função "get", que permite navegar em um objeto ou array usando uma estrutura de string. Essa função traz flexibilidade para acessar o objeto, pois é possível fazer consultas no Dato e obter o conteúdo desejado passando apenas uma string. O instrutor também mostrou como importar o "get" do Lodash e como utilizá-lo para acessar o conteúdo do CMS. Além disso, abordou a importância de tratar erros e evitar que o projeto "build" sem ter algum conteúdo, o que pode causar problemas em produção. No final, ele mencionou que no próximo vídeo serão abordados outros tópicos relacionados ao CMS e às outras páginas do projeto.

## Aula 3 - Criando nosso provedor de dados - Vídeo 3

Nesta aula, o professor discutiu a implementação de um CMS (Content Management System) em um projeto, mostrando como usar um HOC (High Order Component) para garantir que todas as páginas tenham suporte ao CMS. Ele explicou como criar o HOC chamado "pageHOC.js" e como aplicá-lo em diferentes páginas do projeto, como a HomeScreen e a FAQAllQuestionsScreen. Além disso, o professor mostrou como configurar o getStaticProps para fazer a chamada ao cmsService e retornar o cmsContent, ressaltando a importância de habilitar o modo de preview do Next.js. Ao final, ele destacou que essa estrutura do HOC e do cmsService pode ser aplicada em outras páginas do projeto também.

## Aula 3 - Context

Como vimos em aula, o <`Footer/>` é um componente que aparece em todas as páginas e possui um conteúdo que é global. Porém, a responsabilidade de passar esse conteúdo global para o Footer era da página de FAQ, criando um acoplamento de componentes. Para lidar com este problema criamos um provider, para disponibilizar esse conteúdo global, usando a Context do React.

Sobre o Context, assinale a alternativa correta:

- O Context é indicado para compartilhar dados que podem ser considerados “globais” para a árvore de componentes do React.

  - Alternativa correta! O Context disponibiliza uma forma de passar dados entre a árvore de componentes sem precisar passar props manualmente em cada nível. Por exemplo, podemos passar um usuário autenticado ou um idioma preferido como props a outros componentes.

## Aula 3 - O que aprendemos nesta aula você aprendeu`:`

- Como criar um cmsProvider para permitir que todos os componentes tenham acesso ao CMS Content através de uma gestão global de conteúdo evitando assim o prop drilling;
- Como utilizar a função get do lodash para navegar em objetos utilizando strings e acessando os itens de uma forma mais simplificada;
- Como abstrair as camadas do CMS utilizando uma função que serve como atalho para gerenciar os providers que os componentes precisam ter;

Na próxima aula:  
Vamos aprender como classificar os dados dentro do CMS e como fazer a migração para uma integração!
