let sorteados= [];


function adicionar() 
{
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == '') {
        alert("Adicione um nome");
    } else if (sorteados.includes(amigo.value)) {
        alert("Esse nome já foi adicionado à lista de amigos");
    } else {
        let listaAmigos = document.getElementById('lista-amigos');
        sorteados.push(amigo.value);
        if (listaAmigos.textContent == '') {
            listaAmigos.textContent = amigo.value;
        } else {
            listaAmigos.textContent = listaAmigos.textContent + ', ' + amigo.value;
        }
        amigo.value = '';
    }
}
function sortear() 
{
    document.getElementById('lista-sorteio').innerHTML='';
    if (sorteados.length < 4) {
        alert("É necessário ter no mínimo 4 pessoas para realizar o sorteio.");
        return;
    }
    embaralhar(sorteados);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < sorteados.length; i++) {
        if (i < sorteados.length - 1) {
            sorteio.innerHTML += sorteados[i] + ' com ' + sorteados[i + 1] + '<br>';
        } else {
            sorteio.innerHTML += sorteados[i] + ' com ' + sorteados[0] + '<br>';
        }
    }
}
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar()
{
    sorteados=[];
    document.getElementById('lista-amigos').innerHTML=''; 
    document.getElementById('lista-sorteio').innerHTML='';

}



