# API Reference

The backend server runs on `http://localhost:3000`

Run it with: `npm run server`

## Endpoints

### Get all players
```javascript
fetch('http://localhost:3000/api/players')
  .then(res => res.json())
  .then(players => console.log(players));
```

Returns:
```json
[
  {
    "id": 1,
    "name": "Thorin Ironshield",
    "currentHp": 45,
    "maxHp": 60,
    "armorClass": 18,
    "initiative": 2
  }
]
```

### Get single player
```javascript
fetch('http://localhost:3000/api/players/1')
  .then(res => res.json())
  .then(player => console.log(player));
```

### Create new player
```javascript
fetch('http://localhost:3000/api/players', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'New Character',
    maxHp: 50,
    armorClass: 15,
    initiative: 3
  })
})
  .then(res => res.json())
  .then(newPlayer => console.log(newPlayer));
```

Required fields: `name`, `maxHp`

Optional fields: `armorClass` (defaults to 10), `initiative` (defaults to 0)

New players start at full health (currentHp = maxHp)

### Update player
```javascript
// take 15 damage
fetch('http://localhost:3000/api/players/1', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    currentHp: 30
  })
})
  .then(res => res.json())
  .then(updated => console.log(updated));
```

You can update any field: `name`, `currentHp`, `maxHp`, `armorClass`, `initiative`

Only send the fields you want to change.

### Delete player
```javascript
fetch('http://localhost:3000/api/players/1', {
  method: 'DELETE'
})
  .then(res => console.log('deleted'));
```

Returns empty response (204 status).

## Example data structure

Each player has:
- `id` - unique number, auto-generated
- `name` - character name
- `currentHp` - current hit points
- `maxHp` - maximum hit points
- `armorClass` - AC value
- `initiative` - initiative modifier

## Quick tips

The server starts with 3 sample players already loaded.

Data is stored in memory, so it resets when you restart the server.

CORS is enabled so you can call this from your React app running on a different port.
