export function getTodosOsPacotes() {
  return fetch("https://apigotour.herokuapp.com/api/pacotes").then(T =>
    T.json()
  );
}

export function getPacoteById(id) {
  return fetch(`https://apigotour.herokuapp.com/api/pacote/${id}/detalhes`)
    .then(T => T.json())
    .then(T => ({ ...T.pacote, ...T }));
}
