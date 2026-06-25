const formVeiculo = document.querySelector('#form-veiculo');
const divLista = document.querySelector('#div-lista-veiculo');

// ARRAY
const veiculos = [];

formVeiculo.addEventListener('submit', (evt) => {
    evt.preventDefault();

    //CRIAR UM OBJETO FORMULÁRIO
    const dadosFormVeiculo = new FormData(formVeiculo)

    // OBJETO (nome diferente do array)
    const veiculo = {
        modelo: dadosFormVeiculo.get('modelo'),
        marca: dadosFormVeiculo.get('marca'),
        placa: dadosFormVeiculo.get('placa'),
        ano: dadosFormVeiculo.get('ano'),
        valor: dadosFormVeiculo.get('valor'),
        tipodc: dadosFormVeiculo.get('tipodc')
    }

        addVeiculo(veiculo)
})

//CRIANDO A FUNÇÃO ADICIONAR VEÍCULO
const addVeiculo = (objVeiculo) => {
    //ADICIONANDO O OBJETO LITERAL NO ARRAY VEICULOS
    veiculos.push(objVeiculo)

    //APÓS ADICIONAR O OBJETO LITERAL NO ARRAY CHAMA A FUNÇÃO listVeiculos
    listVeiculos()
}

//FUNÇÃO PARA LISTAR VEICULOS DO ARRAY
const listVeiculos = () => {
    //LIMPANDO A DIV LISTA
    divLista.innerHTML = ''
}

