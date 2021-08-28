const e = require("express");
const express = require("express"); //imports and saves variable
const app = express(); // instantiates server

//json body
app.use(express.json());


//mock database
let employees = [{
        id: 1,
        name: "Bon Hanson"
    },
    {
        id: 2,
        name: "Bridget Paulson"
    },
    {
        id: 3,
        name: "Brian Walker"
    },
    {
        id: 4,
        name: "Texas Ranger"
    },
    {
        id: 5,
        name: "Super Mario"
    },
    {
        id: 6,
        name: "Luigi Allen"
    }
];

//for creating employee id
let id = employees.length;



//get all employee
app.get("/getAllEmp", (req, res) => {



    res.send({
        employees
    })

})
//get employee by id
app.get("/getEmpById/:id", (req, res) => {
    const empId = Number(req.params.id);
    const respondEmp = employees.find(employee => employee.id === empId);

    res.send({
        respondEmp
    });
})
//create employee
app.post("/createEmp", (req, res) => {
    const employee = req.body;
    employee.id = ++id;
    employees.push(employee);
    res.send({
        data: employee
    });
});
//delete employee - 
app.delete("/deleteEmp/:id", (req, res) => {
    const empId = Number(req.params.id);
    const respondEmp = employees.find(employee => employee.id === empId);


    employees = employees.filter(employee => employee.id !== Number(req.params.id));
    res.send("deleted following employee" + {
        data: respondEmp
    })
})
//partial update
app.patch("/updateEmp/:id", (req, res) => {
    let empUpdated = false;
    employees = employees.map(employee => {
        if (employee.id === Number(req.params.id)) {
            empUpdated = true;
            return {
                ...employee,
                ...req.body,
                id: employee.id
            };
        }
        return employee;
    });
    res.send({
        empUpdated
    });
});

//keep on bottom - starts the server
app.listen(9090, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("server is running on port", 9090)
});