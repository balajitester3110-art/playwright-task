class Employee {
    constructor(name, basicSalary) {
        this.name = name;
        this.basicSalary = basicSalary;
    }

    calculateSalary() {
        return this.basicSalary;
    }
}

// Child class - Manager
class Manager extends Employee {
    calculateSalary() {
        return this.basicSalary + (this.basicSalary * 20) / 100;
    }
}

// Child class - Developer
class Developer extends Employee {
    calculateSalary() {
        return this.basicSalary + (this.basicSalary * 10) / 100;
    }
}
