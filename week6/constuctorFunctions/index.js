// Make employee function
const employees = []

class employee {
    constructor(name,jobTitle,salary,status = "fulltime"){
        this.name = name
        this.jobTitle = jobTitle
        this.salary = salary
        this.status = status
    }
  
}
// employees
const John = new employee("John","clerk","30k")
employees.push(John)
const Fred = new employee("Fred","door greeter","25k")
employees.push(Fred)
const Sam = new employee("Sam","sales","35k","contract")
employees.push(Sam)

console.log(employees)
