// O método de importação tem que ser REQUIRE!
const jwt = require('jsonwebtoken')

const SECRET_KEY = 'jklfdls26709jnuoioiaqpm8jcnhs09mlo'
const nossoToken = jwt.sign(
    {
        name: 'ninojp'
    },
    SECRET_KEY,
    {
        // expiresIn: '60s',
        expiresIn: '1y',
        subject: '1'
    }
);
console.log(nossoToken)
const TOKEN_GERADO = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibmlub2pwIiwiaWF0IjoxNzExNDczNzc2LCJleHAiOjE3NDMwMzEzNzYsInN1YiI6IjEifQ.OwOq_DHRm__sPE-IGfvwgEJyVhms5U9uyENWxM7mZe4';

console.log(jwt.verify(TOKEN_GERADO, SECRET_KEY));
console.log(jwt.decode(nossoToken));
