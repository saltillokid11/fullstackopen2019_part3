const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
      },
      {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2
      },
      {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3
      },
      {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: 4
      },
      {
        name: "Zaasdry Poppendieck",
        number: "39-23-642324122",
        id: 5
      }
];


const generateId = () => {
    return Math.floor(Math.random() * 100) + 10;
}

app.get('/', (req, res) => {
    res.send('<h1>Part 3</h1>');
});

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

app.get('/info', (req, res) => {
    const peeps = persons.length;
    console.log("peeps", peeps);
    res.send(`
    <div>
        Phonebook has info for ${ peeps } people
    </div>
    <br>
    <div>
        ${new Date()}
    </div>`
    )
});

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(person => person.id === id)
    if (person) {
        res.json(person)
      } else {
        res.status(404).end()
      }
});

app.post('/api/persons', (req, res) => {
    const body = req.body;
    if(!body.name || !body.number) {
        return res.status(400).json({
            error: 'content missing'
        })
    }
    
//?????????????????????????????????? why is this always true?
    if(persons.map(p => p.name === body.name)){
        return res.status(400).json({
            error: 'name already exists'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId(),
    }

    persons = persons.concat(person)

    res.json(person)
})


app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    persons = persons.filter(person => person.id !== id)

    res.status(204).end();
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

