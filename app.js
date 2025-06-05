async function buscarPokemon() {
  const input = document.getElementById('pokemonInput').value.toLowerCase();
  const infoDiv = document.getElementById('pokemonInfo');
 
  if (!input) {
    infoDiv.innerHTML = '<p>Por favor, digite um nome ou ID.</p>';
    return;
  }
 
  const url = `https://pokeapi.co/api/v2/pokemon/${input}`;
 
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Pokémon não encontrado');
    }
   
    const data = await response.json();
   
    infoDiv.innerHTML = `
      <h2>${data.name.toUpperCase()} (#${data.id})</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <p><strong>Altura:</strong> ${data.height / 10} m</p>
      <p><strong>Peso:</strong> ${data.weight / 10} kg</p>
      <p><strong>Tipos:</strong> ${data.types.map(t => t.type.name).join(', ')}</p>
    `;
  } catch (error) {
    infoDiv.innerHTML = `<p>${error.message}</p>`;
  }
}
 