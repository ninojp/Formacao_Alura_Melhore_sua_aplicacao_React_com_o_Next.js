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
