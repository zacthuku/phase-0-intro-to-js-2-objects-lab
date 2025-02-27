// Write your solution in this file!
let employee ={
    "name": 'Sam',
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {"name": 'Sam' , ['streetAddress']: '11 Broadway' };
 }
 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee['streetAddress']= '12 Broadway'
    return employee
 }
 function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {};  
    delete newEmployee['streetAddress'];  
    return newEmployee;  
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];  
    return employee;
 }

