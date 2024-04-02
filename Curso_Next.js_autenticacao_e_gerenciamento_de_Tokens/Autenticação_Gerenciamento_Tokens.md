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

## Aula 3 - Gerenciando a sessão

### Aula 3 - Sessão via Server Side Render - Vídeo 1

Nesta aula, o professor abordou o tema da autenticação em uma aplicação. Ele explicou que é importante verificar se o token existe e permitir que o usuário prossiga apenas se ele estiver presente. Além disso, é necessário garantir que o token seja válido para a aplicação.

Foi mostrado como implementar o gerenciamento do token no arquivo "frontend > pages > auth-page-ssr.js", sugerindo confiar em um serviço de token que fornece o token para a aplicação.

Para verificar se o token é válido ou expirou, é necessário fazer uma solicitação ao backend. Foi explicado que é comum em projetos ter um mínimo de informações necessárias para trabalhar na aplicação, chamado de sessão. Foi demonstrado como obter a sessão do usuário fazendo uma solicitação ao backend com o token.

Foi mostrado como criar uma função "getSession()" no arquivo "authService" que faz uma solicitação GET para a rota "/api/session" do backend, passando a autorização no cabeçalho da solicitação, incluindo o token.

Além disso, foi demonstrado como filtrar a resposta da solicitação GET no arquivo "authService" usando o método ".then()" e como lidar com erros. O professor também introduziu o conceito de "decorator" e mostrou como criar uma função "withSession()" que pode ser usada para decorar a função "getServerSideProps()" em todas as páginas autenticadas. Por fim, sugeriu mover o código relacionado à sessão para um arquivo separado e importá-lo quando necessário.

### Aula 3 - Sessão via Client Side - Vídeo 2

Nesta aula, o instrutor abordou a implementação de controle de sessão em um projeto estático, mostrando como obter a sessão do usuário, lidar com erros de autenticação e redirecionar o usuário quando necessário. Foi explicado como criar uma função chamada useSession() que possui estados como session, loading e error, e como utilizar o useState do React para inicializar esses estados. Além disso, foi mostrado como utilizar o authService do frontend para obter a sessão por meio do método getSession(), utilizando o useEffect do React para executar esse código quando a página é carregada. Também foi apresentado o conceito de High-Order Component e como utilizá-lo para envolver a página e lidar com a sessão do usuário. Por fim, o instrutor ressaltou a importância de testar e entender todo o código apresentado para garantir o correto funcionamento do controle de sessão.

### Aula 3 - Tokens na Web - Vídeo 3

Sobre OWASP:

Cross Site Request Forgery [(CSRF)](https://owasp.org/www-community/attacks/csrf);
Cross Site Scripting [(XSS)](https://owasp.org/www-community/attacks/xss/);
[Formação OWASP](https://www.alura.com.br/formacao-owasp).

Claro! Nesta aula, o instrutor discute a importância da segurança em aplicações web, destacando que vai além do código. Ele menciona possíveis problemas de segurança, como o uso de redes Wi-Fi públicas e extensões de terceiros, e ressalta a importância de estar atento a padrões de ataques, como XSS e CSRF. Além disso, ele destaca a existência do CORS como medida de proteção. O instrutor enfatiza que a segurança é responsabilidade de toda a equipe e recomenda buscar conhecimento adicional sobre o tema, como o curso de OWASP oferecido pela Alura. Ele também destaca a importância de envolver especialistas em segurança, como hackers éticos, para garantir a segurança do sistema, e menciona a importância de definir políticas de autenticação e tempo de expiração adequados para os tokens de acesso. Por fim, ele reforça a importância de buscar referências adicionais e consultoria especializada em segurança.

### Aula 3 - Para saber mais: links úteis

Aprendemos tantas coisas legais nessa aula e quero deixar registrado algumas leituras para compreender em mais detalhes sobre o funcionamento do OWASP e autenticação no Next:

Autenticação com [next-auth](https://next-auth.js.org/)
Autenticação com Next - [Documentação oficial](https://nextjs.org/docs/pages/building-your-application/authentication)
Documentação da [OWASP sobre CSRF](https://owasp.org/www-community/attacks/csrf) - em inglês
Curso da Alura sobre [OWASP](https://www.alura.com.br/curso-online-owasp10-a5-broken-access-control)
Ataque xss - [Cross-site scripting](https://owasp.org/www-community/attacks/xss/)

### Aula 3 - O que aprendemos nesta aula`:`

- Aprendemos o conceito de sessão e configuramos o tempo de expiração do token;

- Utilizamos o Pattern Decorator para componentes;

- Compreendemos questões de segurança e vulnerabilidade na web, tokens, diferentes tipos de ataques e defesas.

Na próxima aula:
Vamos aprender de forma prática o que é Refresh Token e as principais diferenças do Access Token!

## Aula 4 - Trabalhando com Refresh Token

### Aula 4 - Refresh e Access Token - Vídeo 1

Nesta aula, o instrutor discute a importância de salvar o token de atualização (refresh token) de forma segura em uma aplicação. Ele explica que o refresh token pode gerar novos access tokens e refresh tokens, e, portanto, é uma informação sensível que deve ser protegida.

Uma estratégia recomendada para proteger o refresh token é usar o Cookie HttpOnly, que é um cookie que não pode ser acessado por extensões do navegador. Dessa forma, o token fica armazenado no navegador, mas não pode ser acessado por terceiros. O instrutor também menciona que o uso do localStorage e sessionStorage não é recomendado, pois eles podem ser acessados por extensões ou scripts no cliente.

O instrutor mostra um exemplo de como salvar o refresh token usando o Next.js, uma estrutura de backend. Ele cria uma rota "/api/refresh" que recebe o refresh token como parâmetro e armazena-o usando a biblioteca nookies. O token é salvo com as configurações de httpOnly e sameSite: 'lax' para garantir a segurança.

Além disso, o instrutor mostra como recuperar o refresh token usando a mesma rota "/api/refresh" e exibir os cookies usando a função displayCookies. Ele demonstra que o token é salvo corretamente e pode ser acessado através dos cookies.

No próximo vídeo, o instrutor irá abordar a lógica de atualização do token de acesso (access token) usando o refresh token.

### Aula 4 - Middleware de Refresh - Vídeo 2

Nesta aula, o instrutor mostrou como enviar o token de atualização (refresh token) para o servidor e gerar um novo token de acesso (access token) através de uma rota chamada regenerateTokens() no controlador. Foi explicado como criar o contexto ctx com as informações req e res, e em seguida, utilizar o HttpClient para fazer uma chamada POST para a URL do backend, passando o refresh_token no corpo da requisição. O resultado dessa chamada foi armazenado na variável refreshResponse. Foi mostrado como enviar o refresh_token no corpo da requisição, obtendo os cookies e extraindo o refresh_token deles. Também foi explicado como obter o novo refresh_token a partir da resposta da requisição e como atualizar o cookie com o novo refresh_token. Além disso, foi sugerido utilizar um if para verificar se a resposta foi bem-sucedida e, caso contrário, retornar um status de não autorizado. O instrutor destacou a importância de gerenciar o processo de atualização do token de acesso tanto no backend quanto no frontend.

### Aula 4 - Ciclo de atualização dos Tokens #1 - Vídeo 3

Nesta aula, o instrutor discute sobre a regeneração de access tokens e refresh tokens em um projeto. Ele mostra como lidar com a renovação do token no frontend, explicando o passo a passo para renovar o token e salvar a resposta. Além disso, ele sugere melhorias na estrutura da resposta, como deixar claro o status 200 e 401. O instrutor explica como implementar a lógica de regeneração e salvamento do token, mostrando o código necessário para isso. Ele também menciona que a sessão do usuário é responsável por lidar com a obtenção do token e explica como fazer isso no código. Por fim, ele aborda o fluxo do Middleware, que verifica o status da resposta inicial e decide se deve fazer o retry ou não.

### Aula 4 - Ciclo de atualização dos Tokens #2 - Vídeo 4

Nesta aula, o instrutor aborda a questão de autenticação e tokens em um servidor renderizado pelo Next.js. Ele explica que ao tentar rodar o Middleware no servidor, ocorre um problema devido ao fato de que o cookie só existe do lado do cliente. Isso significa que, quando o servidor side do Next.js tenta fazer uma requisição para um lambda e pegar a resposta, ele não tem acesso aos cookies do cliente.

Para resolver esse problema, é necessário encontrar uma maneira de fazer com que o servidor tenha acesso aos cookies do cliente que está fazendo a requisição. O instrutor mostra o código em que o token de atualização não está sendo obtido corretamente e faz algumas alterações para corrigir isso. Ele explica que, para enviar o token de atualização, é necessário usar o método PUT em vez do GET.

Em seguida, o instrutor mostra como fazer com que o código reconheça o método PUT e obtenha o token de atualização corretamente. Ele também mostra como passar o contexto para o HttpClient, para que seja possível acessar os cookies.

O instrutor menciona a importância de salvar o token de atualização corretamente e mostra como fazer isso usando a biblioteca nookies. Ele também menciona que, se o token de atualização expirar, o usuário será automaticamente deslogado. Ele sugere que, na aplicação real, seja implementado um controle para não salvar o token de atualização sempre.

No final do trecho, o instrutor comenta que esse código é complexo e pode exigir várias revisões. Ele também menciona que é importante ter cuidado com a variável isServer, que por padrão é assumida como true, e sugere usar o Boolean do contexto para evitar problemas.

### Aula 4 - Para saber mais: segurança na web

A segurança da Web é um conjunto de procedimentos, práticas e tecnologias para proteger servidores da Web, usuários e suas organizações. A segurança protege você contra comportamentos inesperados.

A web está sendo cada vez mais usada por corporações e governos para distribuir informações importantes e realizar transações comerciais. Mas, o que é segurança

Recomendo a leitura dos seguintes links abaixo:

[HTTP Only](https://owasp.org/www-community/HttpOnly)
[Cookies HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Cookies)
[Cookie Same Site](https://developers.cloudflare.com/waf/troubleshooting/samesite-cookie-interaction/)
[Refresh-tokens](https://auth0.com/docs/secure/tokens/refresh-tokens)
[Quando usar refresh Token?](https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/)
[Como funciona a interação do cookie](https://developers.cloudflare.com/waf/troubleshooting/samesite-cookie-interaction/)

### Aula 4 - Sobre XSS

Um cookie HTTP (um cookie web ou cookie de navegador) é um pequeno fragmento de dados que um servidor envia para o navegador do usuário. O navegador pode armazenar estes dados e enviá-los de volta na próxima requisição para o mesmo servidor.

Sabendo disso, analise as afirmações abaixo e assinale apenas as afirmações verdadeiras sobre HTTP Only Cookies.

- Um cookie HTTP Only pode ser usado para prevenir de ataques cross-site scripting.
  - Para se prevenir de ataques cross-site scripting (XSS, Cross-Site Scriptin em inglês), os cookies HttpOnly são inacessíveis para a API JavaScript Document.cookie (en-US); eles são enviados só para o servidor. Por exemplo, cookies que persistem nas sessões de servidor não precisam estar disponíveis para o JavaScript e, portanto, a diretiva HttpOnly deve ser configurada.

- É possível usar um Cookie para gerenciar uma sessão de um usuário.
  - Alternativa correta! Podemos gerenciar Logins, carrinhos de compra, placar de jogos ou qualquer outra atividade que deva ser guardada por um servidor através de um cookie.

### Aula 4 - O que aprendemos nesta aula`:`

- Aprendemos a diferença entre Refresh e Access Token;

- Criamos o Lambda da requisição POST e GET;

- Desenvolvemos o middleware que realiza o refresh do Token.

Na próxima aula:
Vamos realizar o fluxo de logout e decidir o que mostrar para cada tipo de usuários!
