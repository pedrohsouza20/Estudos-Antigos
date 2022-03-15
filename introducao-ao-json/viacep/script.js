//Defining constants
const street = document.querySelectorAll('p');
const insertCep = document.getElementById('insertCep')
const submitCep = document.getElementById('submitCep')
const errorMensage = document.querySelector('.error-mensage');

//Adding listener of events to CEP submit button
submitCep.addEventListener('click', function t4(){

    //defining needed consts to the function
    const cepValue = insertCep.value;
    const fetchJson = fetch(`https://viacep.com.br/ws/${cepValue}/json/`);

    //defining what is gonna happen when fetch's promise return response
    fetchJson.then((res, rej) => {
        res.text()
        .then((jsonText) => {
            //transforming JSON txt file into JS Object code
            let toObject = JSON.parse(jsonText);

            //writing the returned values to the respective paragraphes
            street[0].innerText =` ${toObject.logradouro}`
            street[1].innerText =` ${toObject.bairro}`
            street[2].innerText =` ${toObject.localidade}`
            street[3].innerText =` ${toObject.ddd}`
            //setting what is gonna happen if some of main object variables return undefined;
            if(toObject.logradouro == undefined || toObject.bairro == undefined || toObject.localidade == undefined){
                errorMensage.innerText = 'Erro na requisição: o endereço relacionado ao CEP informado não foi encontrado';
                //reload document
                setInterval(() => {
                    location.reload()
                }, 3000);
            }else{
            }
           
        })
    })
    fetchJson.catch(() => {
        console.log('Houve um erro ao carregar a API');
    })
})
