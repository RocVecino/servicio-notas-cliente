const urlJoin = require("url-join");
const request = require("request-promise-native").defaults({json: true});

class NotasResource {
    static notasUrl(urlRecurso){
        const notasServer = (process.env.NOTAS_URL || 'http://localhost:3000/api/v1');
        return urlJoin(notasServer , urlRecurso);
    }
    /**Metodo para las cabezeras **/
    static requestHeaders(){
        const notasKey = (process.env.NOTAS_APIKEY /*|| TODO: poner otra api key*/);
        return{
            apikey : notasKey
        };
    }
    /**Metodo get todas las notas */
    static getAllNotas(){
        const url = NotasResource.notasUrl("/notas");
        const options = {
            headers: NotasResource.requestHeaders()
        };

        return request.get(url, options);
    }
}

module.exports = NotasResource;