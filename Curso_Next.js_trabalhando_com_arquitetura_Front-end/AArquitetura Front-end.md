# Curso Alura Next.js trabalhando com arquitetura Front-end

## Aula 1 - Uma tour sobre arquiterura e Monorepos

### Aula 1 - Apresentação  - Vídeo 1

Nesta aula, o Mario Souto apresentou um conteúdo sobre arquitetura no mundo do Front-End, com foco em trabalhar com Next JS e uma lib de componentes, utilizando a abordagem de Monorepo. O objetivo é fornecer muito conteúdo relacionado a esse projeto, abordando desde a estrutura de aplicação até a padronização, organização, configuração e testes com TypeScript. Será ensinado como reutilizar configurações de TypeScript, testes e links, além de esclarecer o conceito de "arquivo ponto" presente em muitos projetos de código aberto. O Monorepo é uma solução interessante para empresas que possuem partes públicas e fechadas em seus sites, permitindo o desenvolvimento e reutilização de estruturas de forma escalável. O próximo vídeo abordará mais ideias e pontos relacionados a esse tema.

### Aula 1 - Micro Services, Micro Front Ends e Arquitetura  - Vídeo 2

Claro! Nesta aula, o professor abordou o conceito de arquitetura de software, destacando a importância do monorepo e como podemos trabalhar com ele. Ele explicou que um monorepo contém toda a estrutura de código necessária para criar diferentes aplicações de Front-End, podendo ser público ou privado. Além disso, ressaltou a possibilidade de organizar diferentes projetos e pacotes reutilizáveis dentro do monorepo. O professor também mencionou a importância da arquitetura de microserviços, tanto no Backend quanto no Front-End, e como ela permite que diferentes times trabalhem de forma independente, reutilizando configurações e padronizando o desenvolvimento. Ao longo dos próximos vídeos, ele promete abordar mais detalhes sobre micro front-end e microserviços, além de disponibilizar materiais complementares sobre o assunto.

### Aula 1 - Para saber mais: microsserviços

Microservices ou Microsserviços, são um tipo de arquitetura de software que consiste em separar as aplicações em serviços independentes que se comunicam através de APIs. Este tipo de arquitetura trouxe uma grande agilidade para os times de desenvolvimento, permitindo a otimização das entregas e proporcionando a criação de produtos cada vez mais escaláveis.

Diferente da arquitetura monolítica, em que toda aplicação é criada como um único bloco, os microsserviços são componentes separados que trabalham juntos para realizar a mesma tarefa. Cada um dos componentes são microsserviços.

São muitos termos e expressões novas para você? Não se preocupe que eu vou deixar aqui alguns materiais extras que podem te ajudar a entender melhor esses conceitos. O primeiro deles é um episódio do Hipsters Ponto Tube que o Fábio Akita e o Paulo Silveira falam sobre [Arquitetura de sistemas:](https://www.youtube.com/watch?v=oedWxgAZc2A)

E para entender a diferença desse padrão de arquitetura com a abordagem tradicional monolítica recomendo este episódio com a [Roberta Arcoverde:](https://www.youtube.com/watch?v=byhpaDuOC2w&t=1s)

Se gostou do assunto e quer se aprofundar na arquitetura de microserviços, o Vinicius Dias fez um [curso de Microserviços: padrões de projeto.](https://cursos.alura.com.br/course/microsservicos-padroes-projeto)

### Aula 1 - Para saber mais: Micro Front-end

A abordagem tradicional de uma aplicação Front-end é construir toda ela com uma única biblioteca ou framework como React ou Angular, por exemplo. Mas imagine que você pudesse construir aplicações que são feitas de partes de aplicações independentes que se integram. Inspirado pela arquitetura de Microsserviços surgiram os Micro Front-ends.

Esse conceito permite que cada parte do seu Front-end seja construída de uma aplicação independente. Isso abre espaço para diversas possibilidades, como construir uma parte do Front-end em Svelte e outra parte em Vue.js. Em projetos que envolvam mais de um time, pode ser que um desses times tenha dificuldade com a tecnologia X ou Y. Com a possibilidade de criar aplicações independentes, cada time pode escolher com qual tecnologia trabalhar, os métodos de trabalho, testes, deploy, etc.

Além disso, se alguma tecnologia ou parte da aplicação ficar obsoleta, em uma aplicação feita da forma tradicional teríamos que atualizar o código inteiro. Com micro Front-ends você pode mudar as partes da aplicação aos poucos, na medida que cada uma precisar de manutenção ou atualização, não afetando a aplicação como um todo.

Para saber mais sobre a ideia de estender o microsserviço para o desenvolvimento Front-end deixo [este artigo sobre micro Front-ends](https://micro-frontends.org/) que explica com uma grande riqueza de detalhes esse conceito.

### Aula 1 - Configurações iniciais do mono-repo  - Vídeo 3

Comando para adicionar o arquivo .gitignore
> npx gitignore node

> O [EditorConfig](https://editorconfig.org/) é uma extenção do VSCode para gerenciamento de padrões de indentação de codigo.

Claro! Nesta aula, o instrutor abordou a configuração inicial do mono-repo, mostrando como criar a estrutura de pastas para o projeto, instalar as dependências do Next.js, React e React DOM, criar um arquivo index.tsx na pasta pages do Next.js, inicializar um repositório Git, criar um arquivo .gitignore, gerar um arquivo .editorconfig para padronizar as configurações de indentação e inserção de nova linha, e rodar o projeto utilizando o comando yarn dev. O instrutor também mencionou a importância de centralizar os arquivos de configuração na raiz do projeto para garantir consistência e os próximos passos que serão abordados no curso.

### Aula 1 - O que aprendemos nesta aula`:`

O que são monorepos e as vantagens de utilizar um monorepo para seus projetos;
O que são micro Front-ends e como eles são inspirados na ideia de microsserviços;
Como organizar a arquitetura de seus projetos Front-end padronizando configurações em cima de bons padrões de programação;
Como criar a pasta de projetos, adicionar o gitignore e configurar seu projeto utilizando o editor config.

Na próxima aula:
Vamos aprender a configurar e trabalhar com workspaces, o módulo de UI e também reusar as configurações do TypeScript.
