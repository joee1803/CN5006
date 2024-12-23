let express = require("express");
let fs = require("fs");
let app = express();

// add middle ware function for body parsing
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

mongoose = require("mongoose");
//app = express();
const MONGO_URI = "mongodb://localhost:27017/Week8";
mongoose.connect(MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", function (err) {
  console.log("Error occured during connection" + err);
});

db.once("connected", function () {
  console.log(`Connected to ${MONGO_URI}`);
});
// creating the scheme
const PersonScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  Gender: String,
  Salary: Number,
});
// creating model named as modelname with collection named as personCollection
const person_doc = mongoose.model(
  "modelname",
  PersonScheme,
  "personCollection"
);
// creating a single document
let people = {};
const getPeople = () => {
  person_doc
    .find({})
    .sort({ Salary: 1 }) // sort ascending by firstNameSalary age')/ / Name and salary only
    .limit(10)
    // limit to 10 items
    .exec()
    // execute the query
    .then((docs) => {
      people = docs;
      console.log("showing multiple documents");
      docs.forEach(function (Doc) {
        console.log(Doc.age, Doc.name);
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

getPeople();
// app.post()
// app.put()
// app.delete()
app.get('/people',(req,res)=>{
res.send(people)
})



// app.get("/", (req, res) => {
//   res.send("Test Text");
// });

app.get("/about", function (req, res) {
  res.send("this is my about page");
});

app.get("/user/:userid/books/:bookid", function (req, res) {
  res.send(req.params);
});

app.get("/GetStudents", function (req, res) {
  fs.readFile(__dirname + "/Student.json", "utf8", function (error, data) {
    console.log(data);
    res.json({
      status: true,
      Status_Code: 200,
      "requested at": req.localtime,
      requrl: req.url,
      "request Method": req.method,
      studentdata: JSON.parse(data),
    });
  });
});

app.get("/GetStudentid/:id", (req, res) => {
  fs.readFile(__dirname + "/" + "Student.json", "utf8", function (err, data) {
    let students = JSON.parse(data);
    let student = students["Student" + req.params.id];
    console.log("student", student);
    if (student) res.json(student);
    else
      res.json({
        status: true,
        Status_Code: 200,
        "requested at": req.localtime,
        requrl: req.url,
        "request Method": req.method,
        studentdata: JSON.parse(data),
      });
  });
});

app.get("/studentinfo", function (req, res) {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/submit-data", function (req, res) {
  res.send("test");
});

app.post("/submit-data", function (req, res) {
  let name = req.body.firstName + " " + req.body.lastName + " ";
  let Age = req.body.myAge + " Gender: " + req.body.gender + "";
  Qual = " Qualification" + req.body.Qual;
  console.log(req.body.Qual);
  res.send({
    status: true,
    message: "form Details",
    data: {
      name: name,
      age: Age,
      Qualification: Qual,
    },
  });
});

app.listen(5000, function () {
  console.log("server is running on port 5000");
});
