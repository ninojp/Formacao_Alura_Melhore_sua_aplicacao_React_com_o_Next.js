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
