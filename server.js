const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "MayflowerSchool";

let MayflowerStaffCollection;
let MayflowerNonStaffCollection;
let MayflowerStudentCollection;
async function dbConnect() {
  await client.connect();
  console.log("connected to db successfully");
  const db = client.db(dbName);
  MayflowerStaffCollection = db.collection("Mayflower Staffs");
  MayflowerNonStaffCollection = db.collection("Mayflower Non staffs");
  MayflowerStudentCollection = db.collection("Mayflower Students");
  return "done .";
}

//connect to db
dbConnect().then(console.log).catch(console.error);
app.use(express.json());
app.use((req, res, next) => {
  console.log("URL " + req.url + "Method: " + req.method + "Response");
  next();
});

const port = 6060;

app.post("/create/one", async (req, res) => {
const {name, age, email, phone }= req.body;

  const staffExist = await MayflowerStaffCollection.findOne({ name: name });

  if (staffExist)
    return res.status(409).json({ error: "Staff name already exist" });

  const newStaff = await MayflowerStaffCollection.insertOne({
    name: name,
    age: age,
    email: email,
    phone: phone,
  });
  return res.status(201).json({ result: newStaff });
});

app.post("/create/many", async (req, res) => {
  const staff = req.body;
  const newStaff = await MayflowerStaffCollection.insertMany(staff)
  return res.status(201).json(newStaff)
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
