import fs from 'fs';


async function login(credentials) {
  const url = `./assets/users.json`;
  const response = await fetch(url);
  const data = await response.json();
  for (const user of data) {
    if (
      user.email === credentials.email &&
      user.password === credentials.password
    ) {
      return { success: true, user };
    }
  }
  return { success: false, message: "Invalid email or password" };
}

async function register(userInfo) {
  const url = `./assets/users.json`;
  const response = await fetch(url);
  const data = await response.json();
  const existingUser = data.find((user) => user.email === userInfo.email);
  if (existingUser) {
    return { success: false, message: "Email already registered" };
  } else {
    //javascript da solo non può scrivere su file, quindi simuliamo la riuscita.
    fs.writeFileSync('./assets/users.json', JSON.stringify([...data, userInfo], null, 2));
    return { success: true, user: userInfo };
  }     
}