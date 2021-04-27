const express = require("express");
const app = express();
const port = 8000;
const faker = require('faker');

class User {
    constructor() {
        this._id = faker.finance.account();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    };
};

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = faker.address.streetAddress();
        this.street = faker.address.streetName();
        this.city = faker.address.cityName();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    };
};

app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

app.get("/api/users/new", (req, res) => {
    const users = new User();
    res.json(users);
});
app.get("/api/companies/new", (req, res) => {
    const companies = new Company();
    res.json(companies);
});
app.get("/api/company", (req, res) => {
    const userAndCompany = [
        new User(),
        new Company()
    ]
    res.json(userAndCompany);
});

app.listen(8000, () => console.log(`listening on port: ${port}`));