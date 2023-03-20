const Employee = require("../lib/Employee");

test("Create employee object", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

test("Get employee name", () => {
  const employee = new Employee("John");
  excect(employee.getName()).toBe("John");
});

test("Get employee ID", () => {
  const employee = new Employee("John", "2");
  excect(employee.getId()).toBe("2");
});

test("Get employee email", () => {
  const employee = new Employee("John", "2", "JohnEngineer@hotmail.com");
  excect(employee.getEmail()).toBe("JohnEngineer@hotmail.com");
});

test("Get role of employee", () => {
  const employee = new Employee("Employee");
  expect(employee.getRole()).toBe("Employee");
});
