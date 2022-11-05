const express = require('express')
const mysql = require('mysql')
const starWarsNames = require('starwars-names-dothide')

const app = express()

const port = 3333
const dbConfig = {
  host: 'dbmysql',
  user: 'root',
  password: 'root',
  database: 'fcdb',
  multipleStatements: true
}
const createTable = `create table if not exists people(id int primary key auto_increment, name varchar(255)); `
const selectAll = 'SELECT * FROM people; '

const formatData = (data) => {
  let texto = `<h1>Full Cycle Rocks!</h1> `
  for (let i = 0; i < data.length; i++) {
    texto += `<h5>${data[i].name}</h5> `
  }
  return texto
}

let name = starWarsNames.random()
let sqlInsertOne = `INSERT INTO people(name) values('${name}'); `

const conn = mysql.createConnection(dbConfig)

app.get('/', (request, response) => {
  name = starWarsNames.random()
  sqlInsertOne = `INSERT INTO people(name) values('${name}'); `
  conn.query(createTable + sqlInsertOne + selectAll, function(err, results) {
    if (err) throw err;
    
    response.send(formatData(results[2]))
  })
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})  
