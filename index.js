const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");


const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// const uri = 'mongodb://localhost:27017'

const uri = "mongodb+srv://johurul-haque:PtPhbNwY7c4RFINt@learningdb.g9rdpy8.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
}); 

async function run() {
  try {
    await client.connect()

    app.get('/', (req, res) => res.send('<h1>Hello world!</h1>'))

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    )
  } finally {
    // await client.close()
  }
}
run().catch(console.dir)

app.listen(port, () => console.log(`app listening on port: ${port}`))