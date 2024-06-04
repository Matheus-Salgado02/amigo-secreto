let sorteados= [];


function adicionar()
{
    let amigo= document.getElementById('nome-amigo');
    let listaAmigos= document.getElementById('lista-amigos');
    sorteados.push(amigo.value);
    if(listaAmigos.textContent == '')
    {
        listaAmigos.textContent= amigo.value;
    }
    else
    {
        listaAmigos.textContent=listaAmigos.textContent + ', ' + amigo.value; 
    }
    amigo.value='';

}

function sortear()
{

    



}