const express = require("express");
const app = express();
const port = process.env.port || 5000;
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const uri =
  "mongodb+srv://mern-book-store:IronMan@cluster0.9rj2ons.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    console.log("Connected to MongoDB");

    // Create a collection of books
    const bookCollections = client.db("BookInventory").collection("books");

    // Insert book
    app.post("/upload-book", async (req, res) => {
      try {
        const data = req.body;
        const result = await bookCollections.insertOne(data);
        res.status(200).send(result);
      } catch (error) {
        console.error("Error inserting book:", error);
        res.status(500).send("Error uploading book");
      }
    });

    // get all books

    app.get("/all-books", async (req, res) => {
      const books = bookCollections.find();
      const result = await books.toArray();
      res.send(result);
    });

    //updated books
    app.patch('/book/:id', async(req,res) =>{
        const id = req.params.id
        //console.log(id);

        const updateBookData = req.body;
        const filter = {_id: new ObjectId(id)};
        const options =  {upset:true};

        const updateDoc = {
            $set:{
                ...updateBookData
            }
        }
    //update
    const result = await bookCollections.updateOne(filter,updateDoc,options);
    res.send(result);
    })

    //delete

    app.delete('/book/:id', async(req,res) =>{
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)}
        const result = await bookCollections.deleteOne(filter);
        res.send(result);
    })

    //filter data by category

    app.get('/all-books', async(req,res) =>{
        let query = {}
        if (req.query?.category){
            query = {category:req.query.category}
        }
        const result = await bookCollections.find(query).toArray();
        res.send(result);
    })

    //to get single book data
    app.get("/book/:id", async(req,res) =>{
      const id = req.params.id;
      const filter = { _id: new ObjectId(id)};
      const result = await bookCollections.findOne(filter);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // Start the server
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
}

run().catch(console.dir);
