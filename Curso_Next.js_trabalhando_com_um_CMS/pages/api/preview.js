export default async function handler(req, res){
    // pegando a página anterior
    const previousPage = req.headers.referer

    // Se tiver Ligado o preview: Desliga
    if(req.preview){
        res.clearPreviewData();
        res.writeHead(307, {Location: previousPage});
        return req.end();
    }
    const password = 'SENHASEGURA'
    if(req.query.password !== password){
        return res.status(401).json({message: 'Senha invalida!'})
    }
    // Se estiver desligado o preview: LIGA
    res.setPreviewData({});
    res.writeHead(307, {Location: previousPage});
    req.end();
};
