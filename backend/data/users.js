import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Assis Junior",
    email: "assisjunior33@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Drizzy Drake",
    email: "drizzy@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
