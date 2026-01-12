import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// middleware setup
app.use(cors());
app.use(express.json());

// in-memory storage for now, we'll move to a db later
let players = [
  {
    id: 1,
    name: 'Thorin Ironshield',
    currentHp: 45,
    maxHp: 60,
    armorClass: 18,
    initiative: 2
  },
  {
    id: 2,
    name: 'Elara Moonwhisper',
    currentHp: 32,
    maxHp: 40,
    armorClass: 14,
    initiative: 5
  },
  {
    id: 3,
    name: 'Grunt Skullcrusher',
    currentHp: 70,
    maxHp: 70,
    armorClass: 16,
    initiative: 1
  }
];

let nextId = 4;

// get all players
app.get('/api/players', (req, res) => {
  res.json(players);
});

// get single player by id
app.get('/api/players/:id', (req, res) => {
  const player = players.find(p => p.id === parseInt(req.params.id));
  
  if (!player) {
    return res.status(404).json({ error: 'player not found' });
  }
  
  res.json(player);
});

// create new player
app.post('/api/players', (req, res) => {
  const { name, maxHp, armorClass, initiative } = req.body;
  
  // basic validation
  if (!name || !maxHp) {
    return res.status(400).json({ error: 'name and maxHp are required' });
  }
  
  const newPlayer = {
    id: nextId++,
    name,
    currentHp: maxHp, // start at full health
    maxHp,
    armorClass: armorClass || 10,
    initiative: initiative || 0
  };
  
  players.push(newPlayer);
  res.status(201).json(newPlayer);
});

// update player (mainly for hp changes)
app.patch('/api/players/:id', (req, res) => {
  const player = players.find(p => p.id === parseInt(req.params.id));
  
  if (!player) {
    return res.status(404).json({ error: 'player not found' });
  }
  
  // update whatever fields are provided
  const { name, currentHp, maxHp, armorClass, initiative } = req.body;
  
  if (name !== undefined) player.name = name;
  if (currentHp !== undefined) player.currentHp = currentHp;
  if (maxHp !== undefined) player.maxHp = maxHp;
  if (armorClass !== undefined) player.armorClass = armorClass;
  if (initiative !== undefined) player.initiative = initiative;
  
  res.json(player);
});

// delete player
app.delete('/api/players/:id', (req, res) => {
  const index = players.findIndex(p => p.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({ error: 'player not found' });
  }
  
  players.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
