const express = require('express'); // imports and saves variable

const app = express(); // instantiates server
// json body
app.use(express.json()); // parse body som json

// mock database
let employees = [{ id: 1, name: 'Bon Hanson' },
  { id: 2, name: 'Bridget Paulson' },
  { id: 3, name: 'Brian Walker' },
  { id: 4, name: 'Texas Ranger' },
  { id: 5, name: 'Super Mario' },
  { id: 6, name: 'Luigi Allen' }];

// for creating employee id
const id = employees.length;

// get all employee

app.get('/getAllEmp', (req, res) => {
  res.send({ employees });
});

app.get('/getadventure', (req, res) => {
  res.send({ adventureType: 'fun' });
});




const cake = require("./cake.json");
console.log(cake)
// http://localhost:9090/favoriteNumber?number=1

app.get('/senddata', (req, res) => {
  console.log(req.query);
  res.send({ name: req.query.name });
});

// http://localhost:9090/senddata?key=value&name=bob

app.get('/favoriteNumber/:number', (req, res) => {
  res.send({ number: req.params.number });
});

app.get("/frontpage", (req, res) => {
  res.send("Welcome to your application");
 });

// get employee by id
//dsfsf 
app.get('/getEmpById/:id', (req, res) => {
  const empId = Number(req.params.id);
  const respondEmp = employees.find((employee) => employee.id === empId);
  res.send({ respondEmp });
});

// create employee

// pure || matiral ui // hosting heruko sso

app.post('/messages', (req,res) => {
  console.log(req.body) // request

  res.send({});

});

app.post('/createEmp', (req, res) => {
  const employee = req.body;
  employee.id += id;
  employees.push(employee);
  res.send({
    data: employee,
  });
});
// delete employee -dvdfvd
app.delete('/deleteEmp/:id', (req, res) => {
  const empId = Number(req.params.id);
  const respondEmp = employees.find((employee) => employee.id === empId);

  employees = employees.filter((employee) => employee.id !== Number(req.params.id));
  res.send(`deleted following employee${{
    data: respondEmp,
  }}`);
});
// partial update
app.patch('/updateEmp/:id', (req, res) => {
  let empUpdated = false;
  employees = employees.map((employee) => {
    if (employee.id === Number(req.params.id)) {
      empUpdated = true;
      return {
        ...employee,
        ...req.body,
        id: employee.id,
      };
    }
    return employee;
  });
  res.send({
    empUpdated,
  });
});

// keep on bottom - starts the server
app.listen(9090, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('server is running on port', 9090);
});

// eslint --init
