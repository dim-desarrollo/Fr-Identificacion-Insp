// const URL = "http://dimsmt.gob.ar:3010"
// const URL = "http://172.20.254.38:8080"
const URL = 'http://172.20.255.17:3010'

export function getListInpectores(){

    console.log("HOLA");
    console.log(import.meta.env.VITE_URL_API);

    return fetch(`${import.meta.env.VITE_URL_API}/api/inspectores/list?pagina=1&sizePagina=90`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            return res
        })
}

export function getListNuevaBD(){
    console.log("Ingresa")
    return fetch(`${import.meta.env.VITE_URL_INTERNO}/api/empleado/list?pagina=1&sizePagina=200`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            
            return res
        })
}