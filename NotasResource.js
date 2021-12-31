const urlJoin = require("url-join");
const request = require("request-promise-native").defaults({json: true});

class NotasResource
{
    static notasUrl(recourceUrl)
    {
        const notasServer = (process.env.NOTAS_URL || "http://localhost:3000/api/v1");
        return urlJoin(notasServer, recourceUrl);
    }

    static requestHeaders()
    {
        const notasKey = (process.env.NOTAS_APIKEY /*|| TODO: apikey*/);
        return {
            apikey: notasKey
        };
    }

    static getAllNotas()
    {
        const url = NotasResource.notasUrl("/notas");
        const options = {
            headers: NotasResource.requestHeaders()
        };

        return request.get(url, options);
    }
}

module.exports = NotasResource;