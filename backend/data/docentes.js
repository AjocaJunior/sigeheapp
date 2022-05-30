
import bcrypt from "bcryptjs";
const docentes = [
    {codigo:"123456",
      name: "Orlando Zacarias",
      email: "oz@unitiva.com",
      password: bcrypt.hashSync("123456", 10),
      isAdmin: true,
    },
    { codigo:"238471",
      name: "Assis Junior",
      email: "assisjunior33@gmail.com",
      password: bcrypt.hashSync("123456", 10),
    },
    {
      codigo:"654321",
      name: "Bernardo Nhasengo",
      email: "bn@unitiva.com",
      password: bcrypt.hashSync("123456", 10),
      isAdmin:true,
    },
  ];



  export default docentes;