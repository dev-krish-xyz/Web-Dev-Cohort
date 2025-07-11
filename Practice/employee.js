function Employee (name, position, salary){
    this.name = name;
    this.position = position;
    this.salary = salary;
}
Employee.prototype.addBonous = function (percentage) {
    const bonousamt = (this.salary * parseInt(percentage))/100;
    this.salary = this.salary + bonousamt;
    console.log(`Updated salary is ${this.salary} `);
}
const anish = new Employee('anish','HR', 34000);
anish.addBonous('30%');


