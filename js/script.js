function ppesquisaNome() {
    const nomePokemon = document.getElementById('nomePokemon').value
    const url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;
 
    // Solicitação GET.
    fetch(url)
        // Tratamento do sucesso
        .then(response => response.json())  // converter para json
        .then(json => {
            document.getElementById('altura').value = json.height
        })    //imprimir dados no console
        .catch(err => console.log('Erro de solicitação', err)); // lidar com os erros por catch
}
 