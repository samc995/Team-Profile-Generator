const Engineer = require("../lib/Engineer");

test("Create engineer object", () => {
  const engineer = new Engineer();
  expect(typeof engineer).toBe("object");
});

test("Get engineer name", () => {
  const engineer = new Engineer("Anna");
  excect(engineer.getName()).toBe("Anna");
});

test("Get engineer's github", () => {
  const engineer = new Engineer("Anna", "AnnaIzSmart");
  excect(employee.getGithub()).toBe("AnnaIzSmart");
});

test("Get role of employee", () => {
  const engineer = new Engineer("Engineer");
  expect(engineer.getRole()).toBe("Engineer");
});
