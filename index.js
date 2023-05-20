const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = 'mongodb://localhost:27017'

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@learningdb.g9rdpy8.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    client.connect();

    const database = client.db("toysDB").collection("toy");

    app.get("/", (req, res) => {
      res.send(`<main>
      <h1>Hi, I&apos;m Johurul!</h1>
      <p>An aspiring front-end dev, creating high quality web apps.</p>
      <a href="https://www.linkedin.com/in/johurul-haque/">Linkedin</a>
      </main>`);
    });

    app.get("/toys", async (req, res) => {
      const cursor = database.find(),
        result = await cursor.toArray();
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close()
  }
}
run().catch(console.dir);

app.listen(port, () => console.log(`app listening on port: ${port}`));
