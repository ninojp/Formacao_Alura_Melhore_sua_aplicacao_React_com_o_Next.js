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

Para fazer as correções propostas pelo ESLint de forma automatizada, pode-se usar a flag --fix  
> Ex: yarn lint:web-public --fix  
> Dentro do próprio arquivo, é possível usar o "CTRL+Shift+P" para adicionarmos "eslint fix" > "all auto-fixable Problems" e ele corrige tudo para nós.

Nesta aula, o instrutor abordou a integração do linter do Next.js com o ESLint e o Prettier. Ele mostrou como criar um script de lint no arquivo package.json, que utiliza o comando "yarn web-public lint". Além disso, explicou como o comando "next lint" é utilizado para rodar o linter do Next.js e como é possível personalizar essa configuração para que o ESLint monitore todos os arquivos com extensão .ts e .tsx.

O instrutor também detalhou como configurar o arquivo package.json para incluir as dependências necessárias, como o "@alura/eslint-commons" e as versões do ESLint, Prettier e React. Ele criou um arquivo de setup do linter na pasta "web-public", que importa a configuração padrão do "@alura/eslint-commons/base". Explicou que essa configuração utiliza o ESLint, o Prettier e o Next.js, e que o ESLint é responsável por rodar todas as regras de linting.

Além disso, o instrutor demonstrou como rodar o comando "yarn && yarn lint:web-public" para instalar as dependências e rodar o linter. Mostrou como o linter identifica erros no código e como corrigi-los utilizando o comando "yarn lint:web-public --fix". Também destacou a importância de ficar atento a possíveis problemas reportados no GitHub do ESLint.

Por fim, o instrutor mostrou como a configuração do linter pode ser personalizada de acordo com as necessidades do projeto, incluindo a adição de regras específicas e a criação de um comando "lint" no package.json da raiz do projeto para rodar o linter em todos os workspaces.

### Aula 3 - Para saber mais: linters

Quando escrevemos código é comum cometermos erros de digitação, esquecer um ponto e vírgula ou digitar um espaço a mais. Isso faz toda diferença no momento de compilar a aplicação. Um código limpo e legível é fundamental nos projetos e precisa seguir um padrão. Isso facilita a manutenção, principalmente se você for uma pessoa desenvolvedora que trabalha em um grande time ou empresa. Para evitar que esses erros e deslizes passem despercebidos, utilizamos linters.

Linters, ou lint, como também são conhecidos, são ferramentas de análise de código estática e servem para sinalizar erros de programação, bugs, erros de estilos e construções suspeitas. O termo lint, que significa “fiapo”, está relacionado aos fiapos que precisavam ser retirados das roupas para não sujar. Da mesma forma é preciso retirar os “fiapos” de nosso código para não sujá-lo.

O linter é uma espécie de corretor, assim como o do teclado de seu celular, que faz uma varredura em todo seu código procurando por desconformidades como:

Espaçamento incorreto;
Falta de “;” quando necessário;
Ultrapassagem dos limites de caracteres por linha;
Uso de aspas simples ou duplas;
Variáveis declaradas mas não utilizadas;
entre outras coisas.

Abaixo temos algumas das ferramentas de lint mais utilizadas

[JSHint:](https://jshint.com/docs/) utilizada em JavaScript, tem função de encontrar erros;
[ESLint:](https://eslint.org/docs/latest/use/core-concepts) também um lint de JavaScript que é usado para encontrar erros com um diferencial de ser plugável;
[TSLint:](https://palantir.github.io/tslint/) este é usado em TypeScript e é suportado por vários editores e build systems.
Com o uso de linters nos projetos, a equipe ganha uma padronização e qualidade de código limpo e sem maiores riscos de bugs.

### Aula 3 - O que aprendemos nesta aula você aprendeu`:`

- Porque é importante o uso de linter em projetos para padronização de códigos;
- Como configurar o ESLint, Next lint e o Prettier no projeto:
- Como configurar um comando de lint nos scripts do projeto para rodar em todos os workspaces do projeto.

Na próxima aula  
Vamos aprender sobre como podemos preparar nossa arquitetura para os testes, instalar bibliotecas de testes e também como melhorá-los com o styled components.

## Aula 4 - Configurações de teste Compartilhadas

### Aula 4 - Reusando nosso setup de testes com o Jest - Vídeo 1

[Jest](https://jestjs.io/pt-BR/) é um poderoso Framework de Testes em JavaScript com um foco na simplicidade.

Nesta aula, o instrutor abordou a configuração dos testes utilizando a ferramenta Jest, que é amplamente utilizada pela comunidade JavaScript para essa finalidade. O primeiro passo foi criar o comando de teste no arquivo package.json do projeto, utilizando o script "test" e configurando-o para rodar o Jest. Além disso, foi necessário adicionar a dependência "@alura/test-commons" no arquivo package.json.

Em seguida, foi criado um arquivo "sum.test.ts" para realizar o teste da função de soma. O teste foi estruturado utilizando o método "describe" para descrever o cenário de teste e o método "it" para especificar o comportamento esperado da função. No exemplo dado, foi esperado que a função "sum" recebesse os números 1 e 1 e retornasse 2.

Para que o código funcionasse corretamente, foi necessário adicionar as definições de tipo do Jest, utilizando a dependência "@types/jest". Também foi necessário criar a pasta "test-commons" e o arquivo "base.ts" dentro dela, que exporta uma configuração que será montada.

Após a instalação das dependências e a correção de alguns erros apontados pelo ESLint, foi necessário adicionar o plugin "eslint-plugin-jest" no arquivo package.json do "eslint-commons" para que o ESLint reconhecesse o Jest.

Em seguida, foi necessário configurar o arquivo "base.ts" do "test-commons" para especificar o ambiente de teste, a forma de transformação do código e outras configurações. Também foi necessário criar o arquivo ".babelrc" para descrever como o Jest lidaria com o projeto.

Após todas essas configurações, foi possível rodar os testes utilizando o comando "yarn test:utils". E é importante ressaltar que existem outros recursos e funcionalidades do Jest que podem ser explorados e que serão abordados em vídeos futuros.

### Aula 4 - Para saber mais: Babel

Se você deseja saber mais sobre como o Babel e o Webpack rodam no JavaScript, separei estes dois vídeos que vão te ajudar a entender todo esse processo que acontece sem vermos.

[Você ENTENDE REALMENTE o Babel e Webpack que roda em seus Projetos JavaScript?](https://www.youtube.com/watch?v=LMCtGvLJT6c)

[Como fazer o React e aprender a ideia do Virtual DOM na prática | Como implementar o ReactJS](https://www.youtube.com/watch?v=5MzOCxSWrrc&t=1s)

### Aula 4 - Adicionando React Testing Library ao nosso projeto - Vídeo 2

Nesta aula, o instrutor mostrou como configurar os testes de unidade e função para o design-system usando o Jest e a biblioteca Testing Library. O objetivo foi testar a renderização de um componente chamado `<Text />` que renderiza uma tag `<h1>`.

Primeiro, foi criada uma pasta chamada "index.test.tsx" dentro da pasta do design-system. Em seguida, foi feito o import do componente `<Text />` e foi criado um bloco de teste usando a função describe(). Dentro desse bloco de teste, foi criado um teste usando a função it() para verificar se o componente renderiza corretamente a tag `<h1>`.

Para realizar o teste, foi utilizada a biblioteca Testing Library, que possui um método chamado render() para renderizar o componente. O instrutor utilizou o método render() para renderizar o componente `<Text tag="h1">`Sample Text`</Text>`. Em seguida, ele obteve o resultado do render usando a desestruturação e armazenou em uma variável chamada container.

Para verificar se o componente foi renderizado corretamente, o instrutor utilizou a função toMatchSnapshot(), que tira uma foto do componente e compara com um snapshot anterior. Caso haja alguma alteração no componente, o teste irá falhar e será necessário atualizar o snapshot.

Em seguida, o instrutor mostrou como configurar o arquivo "jest.config.js" e importar o suporte da biblioteca de teste para o design-system. Foi criado um novo arquivo chamado "react-testing-library.tsx" dentro da pasta "test-commons" para configurar o setup mínimo recomendado pela Testing Library.

No arquivo "react-testing-library.tsx", foi feito o import da função render() da biblioteca Testing Library e foi criada uma função chamada customRender() para personalizar o render. Essa função foi exportada e utilizada no arquivo de teste do design-system para renderizar o componente.

O instrutor também mostrou como adicionar o comando de teste no arquivo "package.json" e como executar o teste do design-system no terminal usando o comando "yarn test:design-system".

O teste foi executado com sucesso e o instrutor explicou que o snapshot é uma foto do componente que permite verificar se houve alguma alteração. Caso haja alguma alteração, é possível atualizar o snapshot para ter a versão mais recente.

O instrutor mencionou que esse tipo de teste é útil para testar a estrutura do componente e que também é possível testar hooks usando a função renderHook() da Testing Library.

No próximo vídeo, o instrutor irá mostrar como integrar o código com a parte de CSS para finalizar o teste do design-system.

### Aula 4 - Melhorando nossos testes com Styled Components - Vídeo 3

Nesta aula, o instrutor abordou a melhoria do setup dos testes, com o objetivo de documentar o CSS utilizado em cada componente. Foi utilizado a biblioteca "Jest-Styled-Components" para incluir o código CSS no snapshot de saída dos testes. O instrutor também demonstrou como separar os componentes em pastas para uma melhor organização do projeto e como alterar o "font-family" para "sans-serif" em todo o projeto, tanto no código quanto no teste. Além disso, foi mencionada a importância de configurar os testes para diferentes providers, como tema e tradução, e foi mostrado um exemplo de como criar um wrapper personalizado para os testes, utilizando a função "customRender". Por fim, o instrutor destacou a importância das dicas apresentadas e sugeriu como próximo passo a criação de um "run test" para executar todos os testes do projeto.

### Aula 4 - Para saber mais: renderHook

Muitas das vezes é melhor evitar níveis de abstrações muito complexos nos nossos códigos, e com os testes não é diferente. É melhor escrever um teste que seja legível mas ainda assim robusto, e é pra isso que existe o renderHook.

O renderHook é um hook customizado da biblioteca [React Testing Library](https://testing-library.com/) que facilita a escrita de testes. Se quiser saber mais sobre o renderHook recomendo você consultar a [documentação oficial acessando este link](https://testing-library.com/docs/react-testing-library/api/#renderhook).

### Aula 4 - O que aprendemos nesta aula você aprendeu`:`

- Como configurar o setup de testes com o Jest;
- Como usar o react-testing-library para melhorar a estrutura de teste de seus componentes;
- Como usar o Jest-Styled-Components para melhorar a legibilidade dos seus testes.

Na próxima aula  
Vamos aprender como lidar com dependências externas e outras configurações importantes para trabalhar em equipe no nosso mono-repo.

## Aula 5 - Configurações no GitHub

### Aula 5 - Dicas para lidar com dependencias externas - Vídeo 1

Nesta aula, o instrutor aborda a importância de avaliar as dependências presentes no arquivo "package.json" de um projeto, verificando se alguma delas oferece risco de segurança. Ele também menciona o recurso "Code security and analysis" do GitHub, que permite visualizar um gráfico de dependências e receber alertas sobre atualizações, incluindo atualizações de segurança. Ao habilitar essas opções, o GitHub envia notificações sobre bibliotecas desatualizadas e fornece informações sobre como atualizá-las. O instrutor sugere revisar os requests mensalmente para configurar e trabalhar com o recurso de forma eficiente, visando garantir a segurança, estabilidade e facilitar o gerenciamento das bibliotecas utilizadas no projeto.

### Aula 5 - Configurações importantes para trabalhar em equipe no nosso repositório e próximos passos - Vídeo 2

Claro! Nesta aula, o instrutor abordou a importância de proteger a branch principal do projeto no GitHub. Ele explicou que, para fazer isso, é necessário acessar as configurações do repositório no GitHub e selecionar a opção "Branches". Em seguida, é possível adicionar uma regra para proteger a branch principal.

O instrutor mencionou duas opções que podem ser selecionadas para proteger a branch: "Require a pull request before merging" e "Require approvals". A primeira opção exige que um pull request seja feito antes de mesclar as alterações na branch principal, enquanto a segunda opção requer aprovações de outras pessoas antes de mesclar as alterações.

Além disso, o instrutor mencionou a funcionalidade de "Code Owners", que permite dividir algumas pastas para que determinadas equipes sejam responsáveis por elas. Ele sugeriu que essa funcionalidade pode ser utilizada para aprimorar o processo de Monorepo.

O instrutor também destacou que é possível tornar obrigatória a revisão do código pelos "code owners" antes de mesclar as alterações. Isso pode ser útil caso o projeto tenha integrações externas, pois é possível configurá-las nessa seção.

Por fim, o instrutor mencionou que é possível habilitar algumas configurações específicas para os administradores do projeto e ressaltou a importância de utilizar o GitHub como uma ferramenta para auxiliar no controle das alterações no código e na gestão das equipes responsáveis por cada parte do projeto.

### Aula 5 - Para saber mais: proprietários do código

O processo de revisão de código é fundamental para todo projeto, mas nem sempre fica claro quando e quem deve ser o responsável por essa tarefa, ainda mais quando você trabalha em um projeto muito grande. É por isso que existe o codeowners (proprietários do código), para definir indivíduos ou equipes que ficarão responsáveis pela revisão de código de um repositório.

O codeowners é um arquivo definido pelos proprietários de código, aquelas pessoas que têm permissões de administrador de um repositório. Essa função define exatamente quais pessoas serão responsáveis por revisar o código quando uma solicitação de pull request altera um arquivo daquele proprietário. Além disso, é possível adicionar mais uma camada de segurança sobre seu código com a opção de proteção de branch para garantir que as pessoas certas tenham a chance de revisar.

Se quiser saber mais sobre essa feature do Github você pode consultar a [documentação neste link](https://docs.github.com/pt/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners), e também se quiser entender um pouco mais sobre o codeowners é só [acessar este artigo](https://github.blog/2017-07-06-introducing-code-owners/).

### Aula 5 - Para saber mais: Github Actions

Se quiser entender na prática como trabalhar com o Github Actions e explorar conceitos de CI/CD Continuous Integration e Continuous Delivery, vou deixar [aqui um vídeo](https://www.youtube.com/watch?v=IKjcdYQvcDo) do canal DevSoutinho que te explica tudo sobre este assunto!

### Aula 5 - O que aprendemos nesta aula você aprendeu`:`

- Como lidar com dependências externas utilizando recursos do GitHub;
- Como ativar o recursos de segurança como “dependabot” para monitorar as alterações em seus projetos;
- Como proteger a branch principal do seu projeto usando recursos do github.

### Aula 5 - Conclusão - Vídeo 3

Nesta aula, o instrutor parabeniza os espectadores por terem concluído a sequência de vídeos, que teve como objetivo facilitar a adaptação e migração de conceitos. Foram abordados temas como workspaces, linter, adição de testes, importância das pastas de setup e projetos, code owners, organização de projetos e proteção de branches. O instrutor destaca a importância de organizar o caos no desenvolvimento de software e menciona que o próximo conteúdo será sobre o GitHub, uma ferramenta útil para explorar, com recursos como actions, merge com requests e a funcionalidade de projetos. Ele acredita que o conhecimento do GitHub fará diferença na vida dos desenvolvedores e ajudará a resolver problemas em ferramentas já utilizadas pelas empresas. Por fim, ele pede aos espectadores que deixem suas avaliações do curso e agradece pelo apoio.
