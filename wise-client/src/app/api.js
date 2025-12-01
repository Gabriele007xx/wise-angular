async function callAPI(credentials) {
  const url = `./assets/users.json`;
  const response = await fetch(url);
  const data = await response.json();
  
}