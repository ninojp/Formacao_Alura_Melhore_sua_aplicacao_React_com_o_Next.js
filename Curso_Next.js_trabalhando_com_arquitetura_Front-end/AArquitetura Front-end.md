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

## Aula 2 - Estruturando a Base do nosso Mono-Repo

### Aula 2 - Yarn Workspaces e o pacote utils - Vídeo 1

Nesta aula, o instrutor discutiu a importância de ter uma biblioteca comum em uma empresa, onde vários times podem usar a mesma biblioteca, mas diferentes versões dela. Ele explicou que é importante ter uma versão única da biblioteca para evitar problemas de gerenciamento e espalhar a biblioteca por vários projetos. Em seguida, mostrou como criar uma pasta de pacotes comuns dentro do projeto Next.js e como adicionar um pacote de utilitários dentro dessa pasta. Foi utilizado o Yarn Workspaces para gerenciar os pacotes e mostrado como importar o pacote de utilitários em um projeto específico. O instrutor também explicou como o Yarn Workspaces gerencia as dependências e como o arquivo yarn.lock é criado na raiz do projeto. Por fim, mostrou como adicionar scripts no arquivo package.json para facilitar a execução de comandos específicos em projetos individuais. O próximo passo será trabalhar mais com componentes.

### Aula 2 - O módulo de UI e o next-transpile-modules - Vídeo 2

Nesta aula, o instrutor abordou o conceito de Design System e como criar componentes utilizando o Monorepo. O Design System é uma forma de padronizar o estilo de uma aplicação por meio de um contrato de interface e códigos. Foi explicado que criar uma biblioteca interna para o Design System pode ser trabalhoso, por isso, é mais fácil começar pelo Monorepo. O Monorepo é um projeto que permite que várias partes da aplicação sejam desenvolvidas juntas, facilitando o uso e permitindo que o projeto cresça antes de tomar a decisão de quebrar alguma parte.

O instrutor mostrou como criar a estrutura básica para o Design System, utilizando a biblioteca "styled-components" para estilizar os componentes e como resolver problemas de importação de módulos no Next.js. A estrutura do projeto está sendo desenvolvida de forma organizada e facilitando o desenvolvimento da aplicação.

### Aula 2 - Reusando o tsconfig - Vídeo 3

Nesta aula, o instrutor abordou a configuração do projeto com TypeScript e a reutilização de configurações comuns. O objetivo foi simplificar o setup do projeto e padronizar as configurações.

Para isso, o primeiro passo foi criar uma pasta de setup na raiz do projeto. Dentro dessa pasta, foi criada a pasta "tsconfig-commons" que contém o arquivo "base.json" com todas as configurações de compilador do Next.js, como o "target", "lib", "allowJs", "skipLibCheck", entre outros. Além disso, foi definido o "exclude" para excluir a pasta "node_modules".

Em seguida, foi adicionada a dependência "@alura/tsconfig-commons" no "package.json" do projeto. Essa dependência foi instalada e utilizada para estender as configurações do TypeScript.

No arquivo "tsconfig.json", foi adicionada a propriedade "extends" que aponta para o arquivo "base.json" do "@alura/tsconfig-commons". Também foi definido o "include" para incluir os arquivos ".ts" e ".tsx" do projeto.

O instrutor destacou que essa abordagem de reutilização de configurações é uma das vantagens de trabalhar com Monorepo. Foi possível aplicar a mesma ideia para os pacotes do projeto, como o "design-system" e o "utils". Para isso, bastou copiar as configurações do "tsconfig.json" para os respectivos pacotes e remover o "include", deixando-os apontando para o "tsconfig" base. Além disso, foi necessário declarar as dependências no "package.json" de cada pacote.

Outra dica dada pelo instrutor foi mover as dependências de "@types" do "devDependencies" para o "dependencies" no "package.json" do projeto. Isso permitiu que todas as dependências de tipo fossem acessíveis para todos os módulos do projeto.

Em seguida, foi feito o setup do "styled-components" para que ele funcionasse corretamente com o Next.js. Foi criado o arquivo "_app.tsx" e foi adicionada a configuração do "styled-components". Também foi necessário criar o arquivo "_document.tsx". Após isso, o comando "yarn dev:web-public" foi executado para verificar se o projeto estava funcionando corretamente.

Por fim, o instrutor destacou a importância de declarar as dependências corretamente no "package.json" para evitar complicações. Também foi mencionado que é possível abstrair configurações específicas, como o "createGlobalStyle", e colocá-las no pacote do "design system" para deixar tudo mais organizado.

### Aula 2 - Para saber mais: Yarn workspaces

Os espaços de trabalho do Yarn visam facilitar o trabalho com mono-repos. Eles permitem que vários projetos existam juntos em um mesmo repositório e façam referência cruzada entre si. Além disso, qualquer modificação no código fonte de um será aplicada instantaneamente nos outros. Basicamente, um espaço de trabalho é um pacote local composto de suas próprias fontes e arquivos.

Os espaços de trabalho possuem duas propriedades importantes. A primeira delas diz que somente as dependências de um espaço de trabalho podem ser acessadas. Isso nos permite desacoplar de forma limpa os projetos uns aos outros já que você não precisa mesclar todas as suas dependências em uma lista enorme.

A segunda propriedade diz que se o gerenciador de pacotes precisar resolver algo em nosso espaço de trabalho, ele buscará preferencialmente a resolução do espaço de trabalho e não a solução remota. Ao invés de usar os pacotes remotos, os pacotes do seu projeto estarão interconectados e usarão código armazenado no seu repositório.

Para saber mais, inclusive como fazer a instalação e configuração de espaços de trabalho, você pode acessar o [link da documentação do yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/), clicando aqui, e seguir os passos sugeridos!

### Aula 2 - O que aprendemos nesta aula você aprendeu`:`

- Como configurar workspaces utilizando o yarn workspace;
- Como configurar scripts que rodam na raiz do projeto para evitar a navegação em cada pasta sempre que precisar rodar um comando;
- Como configurar o módulo desing-system para armazenar os componentes e toda padronização de identidade visual do seu projeto;
- Como trabalhar com next-transpile-modules para fazer a transpilação de nossos módulos e pacotes locais;
- Como reusar as configurações do TypeScript criando um módulo setup com a pasta tsconfig-commons e dentro dela nossas configurações em um arquivo base.json;
- Como adicionar as configurações recomendadas para o funcionamento correto da lib styled components;

Na próxima aula  
Vamos entender porque usar linters, como adicionar e configurar o ESLint no nosso projeto.

## Aula 3 - Configurações de Linter compartilhadas

### Aula 3 - Linters e por que usar? - Vídeo 1

[Prittier](https://prettier.io/)

Claro! Nesta aula, o professor fala sobre a importância da qualidade do código e a padronização na programação. Ele compara a programação com idiomas e menciona que é comum trazermos "sotaques" de uma linguagem para outra, o que pode prejudicar a organização do projeto. Para resolver esse problema, ele introduz o conceito de "linter", que é uma ferramenta de análise de código estática usada para identificar erros, bugs, erros estilísticos e construções suspeitas. O professor explica que o linter pode ser configurado de acordo com a linguagem utilizada, como o ESLint para JavaScript. Ele também menciona o Prettier como uma opção de configuração pré-preparada. Além disso, destaca a importância de automatizar essas configurações e mantê-las na pasta de setup para facilitar o uso por qualquer pessoa que entre no time.

### Aula 3 - Adicionando e configurando o ESLint no nosso projeto - Vídeo 2

[ESLint](https://eslint.org/)  
Encontrar e consertar problemas em seu JavaScript código. ESLint analisa estaticamente seu código para encontrar problemas rapidamente. Ele está integrado na maioria dos editores de texto

[Prettier](https://prettier.io/)
rettier é um formatador de código opinativo com suporte para diversas linguagens. Ele remove todo o estilo original * e garante que todo o código gerado esteja em conformidade com um estilo consistente.

[Next.js ESLint](https://nextjs.org/docs/pages/building-your-application/configuring/eslint)  
Next.js fornece um ESLint integrado, experiência fora da caixa. Adicione next lint como um script para package.json:
