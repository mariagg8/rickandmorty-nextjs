import { promises } from 'fs';

export default async function Handler(req, res) {
  if (req.method === 'POST') {
    const data = await promises.readFile('database.json', 'utf-8');
    const parseData = JSON.parse(data);
    const newCard = req.body;
    console.log(newCard);
    parseData.products.push(newCard);
    promises.writeFile('database.json', JSON.stringify(parseData, null, 4));
    res.status(201).json(newCard);
    return;
  }
  res.status(403).send('Error: request method not allowed.');
}
