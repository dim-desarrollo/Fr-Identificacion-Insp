export function DatosJson(){
      return fetch('http://172.20.254.23:5212/api/empleado/list?pagina=1&sizePagina=100')
    /*return fetch(import.meta.env.VITE_API_JSON)*/
          .then(response => response.json())
          .then(json => {
            return json
          })
} 


