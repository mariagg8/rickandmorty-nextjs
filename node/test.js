import { promises } from 'fs';
import { nanoid } from 'nanoid';

/*promises
  .readFile('database.json', 'utf-8')
  .then(data => JSON.parse(data))
  .then(json => {
   // console.log(json);
  })
  .catch(error_ => {
    throw error_;
  });*/

async function getDatabase() {
  const content = await promises.readFile('database.json', 'utf-8');
  const data = JSON.parse(content);
  // console.log(data);
  return data;
}

async function addUser(user) {
  const data = await getDatabase();
  console.log(data);
  data.users.push(user);
  promises.writeFile('database.json', JSON.stringify(data, null, 4));
}

async function deleteUser(id) {
  const data = await getDatabase();
  const newArray = data.users.filter(user => user.id !== id);
  data.users = newArray;
  console.log(newArray);
  promises.writeFile('database.json', JSON.stringify(data, null, 4));
}

//addUser({ id: nanoid(), name: 'Anna', age: 19, hobbies: ['reading'] });
//deleteUser('eSEdluUY3dOIweosO_DoM');

async function updateUser(id, name, hobby) {
  const data = await getDatabase();

  data.users = data.users.map(user => {
    if (user.id === id) {
      user.name = name;
      // let currentHobbies = user.hobbies;
      // let newHobbies = currentHobbies.push(hobby);
      user.hobbies = [hobby, ...user.hobbies];
    }
    return user;
  });
  promises.writeFile('database.json', JSON.stringify(data, null, 4));
}
updateUser('xfVjrzqpVb9oRv77yb--W', 'Barbara Salesch', 'More more more Hobby');

async function removeHobby(id, hobby) {
  const data = await getDatabase();
  const user = data.users.filter(user => user.id === id);
  user[0].hobbies = user[0].hobbies.filter(hobby_ => hobby_ !== hobby);

  promises.writeFile('database.json', JSON.stringify(data, null, 4));
}

//removeHobby('xfVjrzqpVb9oRv77yb--W', 'More more more Hobby3');
