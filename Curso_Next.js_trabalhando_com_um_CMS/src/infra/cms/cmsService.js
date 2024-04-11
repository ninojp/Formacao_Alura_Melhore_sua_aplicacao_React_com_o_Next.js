const datoCMSToken = process.env.DATO_TOKEN;
const globalQuery = `
    query {
        globalFooter {
                description
        }
    }
`;
const BASE_ENDPOINT = 'https://graphql.datocms.com/';
const PREVIEW_POINT = 'https://graphql.datocms.com/preview';
export async function cmsService({ 
    query,
    variables,
    preview
})
     {
    const ENDPOINT = preview ? PREVIEW_POINT : BASE_ENDPOINT;
    try {
        // O Endereço EndPoint foi pego de: https://www.datocms.com/docs/content-delivery-api/api-endpoints
        const pageContentResponse = await fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + datoCMSToken
            },
            body: JSON.stringify({
                query,
                variables
            })
        })
            .then(async (respostaDoServer) => {
                const resBody = await respostaDoServer.json();
                // console.log('resBody: ', resBody)
                if(!resBody.errors) return resBody;
                throw new Error(JSON.stringify(resBody))
            })
        // console.log('pageContentResponse: ', pageContentResponse)

        const globalContentResponse = await fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + datoCMSToken
            },
            body: JSON.stringify({
                query: globalQuery
            })
        })
            .then(async (respostaDoServer) => {
                const resBody = await respostaDoServer.json();
                console.log('resBody: ', resBody)
                if(!resBody.errors) return resBody;
                throw new Error(JSON.stringify(resBody))
            })
        return {
            data: {
                ...pageContentResponse.data,
                globalContent: {
                    ...globalContentResponse.data
                }
            }
        }
    } catch (err) {
        throw new Error(err.message)
    }
};
