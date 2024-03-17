module.exports = {
    trailingSlash: true,
    async redirects() {
        return [
          {
            source: '/perguntas',
            destination: '/faq/',
            permanent: true,
          },
        ]
    }
}
// O redirecionamento serve para definir uma pagina (destination: '/nome-pagina/') 
// caso uma url 'não seja encontrada' (na explicação do prof. não ficou bem claro todas as situações)
