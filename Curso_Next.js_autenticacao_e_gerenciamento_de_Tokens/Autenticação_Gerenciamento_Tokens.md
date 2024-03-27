# Curso Alura Next.js: autenticação e gerenciamento de Tokens

## Aula 1 - Módulo de login

### Aula 1 - Apresentação - Vídeo 1

Nesta aula do curso de Next.js, o foco é a autenticação. O instrutor, Mario Souto, irá abordar a arquitetura do framework e como lidar com a autenticação tanto via service rendered quanto via aplicação do static. Além disso, serão discutidas algumas vulnerabilidades, como o CSRF (Cross Site Request Forgery) e o XSS (Cross Site Scripting), e como as estratégias de guardar token e refresh token podem impactar na segurança dos usuários. O curso trará o conceito geral da autenticação e fornecerá exemplos práticos para que os alunos possam implementar de acordo com o cenário de suas empresas. As APIs serão documentadas e todo o projeto estará disponível para facilitar o aprendizado.

### Aula 1 - Uma visão geral sobre autenticação - Vídeo 2

Nesta aula, o professor Mario Souto contextualiza o conceito de autenticação, utilizando metáforas do mundo real para explicar como funciona a autenticação no mundo digital. Ele compara o crachá de identificação com o identificador e o porteiro com o autorizador. No mundo real, precisamos comprovar nossa identidade para entrar em algum local, e o porteiro verifica se temos permissão para entrar.

O professor utiliza o exemplo de um crachá de faculdade para ilustrar o conceito, explicando que o autorizador sabe se temos acesso a determinados espaços e que esse acesso é limitado no tempo. Ele menciona que, na web, em um sistema com login e senha, o Back-End atua como autorizador, verificando se o login e senha são válidos para permitir a entrada.

Além disso, o professor menciona o uso de tokens como "crachás digitais" para autenticação, que têm um tempo de expiração e podem conter informações extras, como o nível de acesso ao sistema. Ele explica que o token é gerado a partir do login e senha e é validado pelo autorizador. O formato de tokens se tornou mais comum devido à diversidade de plataformas e dispositivos que precisam ser autenticados.

Na próxima aula, o professor abordará o código e como ele funciona para verificar se o login e senha estão corretos, além de mostrar como gerenciar uma aplicação web tanto no lado do servidor quanto no modo estático, além de detalhar mais sobre o formato de tokens.

### Aula 1 - Começando nosso projeto - Vídeo 3

Nesta aula, o instrutor apresentou um projeto de autenticação de formulários no React usando Next.js. Ele começou fornecendo o link para o projeto inicial no GitHub e explicou a dependência do projeto de uma API. Em seguida, mostrou como baixar o projeto e instalar as dependências tanto para o frontend quanto para o backend usando o Yarn.

O instrutor destacou a utilização do Next.js e mencionou a documentação do Next.js sobre autenticação, ressaltando a ideia de criar uma solução de autenticação replicável em outras tecnologias, como Angular ou Vue.

Além disso, o instrutor mostrou como adicionar o estado ao formulário usando o React.useState, lidar com as alterações nos campos do formulário usando a função handleChange, fazer a validação do formulário e evitar o refresh da página ao clicar no botão "Entrar". Ele também explicou como usar o useRouter do Next.js para trocar de página e criar páginas de autenticação, uma com renderização do lado do servidor (SSR) e outra estática.

Em resumo, a aula forneceu uma base sólida para implementar a autenticação em projetos React usando Next.js, abordando desde a configuração do projeto até a manipulação do estado do formulário e a navegação entre páginas de autenticação.

### Aula 1 - Para saber mais: Front e Back

Front-end ou Back-end são termos para diferenciar onde uma pessoa que programa acaba se especializando. Se você está mergulhando agora no universo do desenvolvimento, muito provavelmente classifica todo mundo como programador e programadora, mas os sistemas se tornaram tão complexos que precisamos que cada um seja responsável por partes específicas de uma aplicação.

Super recomendo a leitura sobre O que é [Front-end e Back-end](https://www.alura.com.br/artigos/o-que-e-front-end-e-back-end) e quais suas responsabilidades.

[Neste link](https://www.youtube.com/watch?v=-nYNd6EuZHU), você encontra um vídeo do meu canal de como validar formulários no React.

### Aula 1 - O que aprendemos nesta aula`:`

- Entendemos que autenticação é usada quando o servidor precisa saber exatamente quem está acessando suas informações ou site;

- Carregamos o projeto base do curso que usaremos para incluir autenticação no decorrer deste treinamento.

Na próxima aula:
Vamos realizar o login de forma prática e entender o que é JWT!

## Aula 2 - Lidando com Tokens

### Aula 2 - Login na prática - Vídeo 1

Nesta aula, o instrutor Mario Souto abordou a questão da autenticação em um sistema utilizando o Back-End desenvolvido anteriormente. Ele explicou o uso do projeto Swagger para documentar o Back-End e mostrou alguns endpoints disponíveis, como "/api/login" e "/api/users". Em seguida, ele exemplificou uma requisição utilizando o cURL para realizar o login e obter os tokens de autenticação.

No Front-End, o instrutor começou a desenvolver o código para realizar o login. Ele criou um módulo chamado "authService" com a função "login()", explicando que o login é um processo assíncrono e que será utilizado uma promessa para lidar com isso. O instrutor utilizou o método "fetch()" para fazer a requisição para a URL do Back-End, definindo o método da requisição como "POST" e os headers necessários. Ele também mostrou como tratar a resposta do servidor utilizando o método ".then()" e como lidar com erros na requisição utilizando o método ".catch()".

Além disso, o instrutor demonstrou como utilizar variáveis de ambiente para definir a URL do Back-End de forma dinâmica, criando um arquivo ".env.local" na pasta do Front-End e definindo a variável de ambiente "NEXT_PUBLIC_BACKEND_URL" com o valor da URL do Back-End. Ele utilizou essa variável no código do "authService" para fazer a requisição.

Por fim, o instrutor mencionou que nas próximas aulas serão abordados outros aspectos importantes, como salvar os tokens de autenticação, e recomendou vídeos e documentação disponíveis para estudar mais sobre variáveis de ambiente e promessas.

### Aula 2 - HttpClient - Vídeo 2

Nesta aula, o instrutor discute a utilização do Fetch em comparação com o Axios para realizar chamadas de rede em aplicações Front-End. Ele mostra como criar uma camada de abstração utilizando o HttpClient para simplificar o código e garantir consistência na aplicação. Além disso, o instrutor também mostra como tratar a resposta da API e realizar as conversões necessárias. O objetivo é isolar os processos repetitivos, como definir que estamos enviando um JSON e converter o valor de retorno. O instrutor propõe a criação de uma pasta chamada "infra" e dentro dela uma pasta chamada "HttpClient", onde será criado um arquivo chamado "HttpClient.js". Dentro desse arquivo, é exportada uma função chamada HttpClient, que recebe a URL e as opções do Fetch como parâmetros. O instrutor também mostra como simplificar o uso do HttpClient, passando diretamente o corpo da requisição no Fetch, sem a necessidade de utilizar o JSON.stringify, e definindo o Content-Type como application/json. Ao final, ele identifica um erro no código e mostra como corrigi-lo, mencionando que nos próximos vídeos irá aprofundar mais no assunto.

### Aula 2 - Cookies e Storage - Vídeo 3

Nesta aula, o instrutor abordou a implementação da autenticação em um serviço de login, explicando a importância de armazenar o access token de forma segura no dispositivo do usuário. Foram mencionadas duas opções de armazenamento: localStorage e sessionStorage, com o localStorage armazenando os dados permanentemente e o sessionStorage armazenando os dados apenas durante a sessão do navegador. Foi criada uma abstração chamada tokenService, responsável por gerenciar o armazenamento e recuperação do access token, com métodos save(), get() e delete(). Também foi abordada a necessidade de lidar com a autenticação no servidor, utilizando cookies para armazenar o token. Foi utilizada a biblioteca nookies para trabalhar com cookies, com métodos set() para armazenar o token e get() para recuperá-lo. Além disso, foi mostrado como utilizar o tokenService no servidor utilizando o método getServerSideProps().

### Aula 2 - O que é JWT? - Vídeo 3

Introdução ao [JWT:](https://jwt.io/introduction)

Vídeo - [Lidando com dados sensíveis e tokens:](https://www.youtube.com/watch?v=BP2KQtCyzo8&t=445s).

Foi usado para refresh automatizado o comando:
> npx nodemon nome-token.jsx

Claro! Nesta aula, o professor explicou sobre JWT (JSON Web Token) e como lidar com dados sensíveis e tokens. Ele começou explicando que o JWT é um padrão para criar tokens que podem ser visualizados por todos, desde que sigam o padrão do JWT, mas apenas quem gerou o token sabe que foi ele quem o gerou. O professor mostrou algumas funções disponíveis na biblioteca JWT, como decode, verify e sign. Em seguida, ele mostrou como criar um token usando a função sign, passando um objeto com informações do token, como o nome, e também a chave privada para verificar a autenticidade do token. Além disso, foram mencionadas algumas opções adicionais que podem ser passadas na função sign, como o algoritmo e o tempo de expiração do token. O professor também explicou como verificar se um token foi gerado por ele usando a função verify, passando o token gerado e a chave privada, e mostrou como fazer o decode de um token usando a função decode. Por fim, ele mencionou a importância dos tokens para autenticação em APIs e recomendou dar uma olhada no código do serviço de autenticação para entender melhor o processo.

### Aula 2 - Para saber mais: JWT e links

Já precisou fazer alguma alteração ou acessar um valor somente em produção ou desenvolvimento? Já cometeu o erro de armazenar e versionar um dado sensível no meio da sua codebase? Tenho um vídeo que fala de variáveis de ambiente. Assista e entenda como usá-las, a partir de casos de uso, libs e exemplos, tanto para [Front quanto para Back-End](https://www.youtube.com/watch?v=BP2KQtCyzo8):

Além disso, separei esse [link incrível](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#environment-variable-load-order) para falar sobre variáveis de ambiente no Next.

O uso do callback pode ser um pouco confuso, por isso, para tirar todas as principais dúvidas, venha comigo assistir ao vídeo: [Descubra o que é callback no Javascript](https://www.youtube.com/watch?v=6lbBaM18X3g&t=7s):

Leituras, vídeos e documentações recomendadas para você mergulhar ainda mais no universo do next.js:

[JWT.io](https://jwt.io/)
[LocalStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
[SessionStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/sessionStorage)
[Next e localStorage](https://www.youtube.com/watch?v=zSl_n-9yGRs)
Uma coleção de auxiliares de cookies para Next.js, [GitHub Nookies](https://github.com/maticzav/nookies)

### Aula 2 - O que aprendemos nesta aula`:`

- Preparamos nossa aplicação com realizar requisições na API;

- Entendemos como funcionam as variáveis de ambiente e como utiliza-las;

- Criamos um Http Client para ser o middleware dos nossos requests e vimos a diferença entre Cookies, Local Storage e Session Storage.

Na próxima aula:

- Vamos aprender como podemos gerenciar as sessões de nossos usuários!
