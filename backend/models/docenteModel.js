import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const docenteSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    codigo:{
      type:String,
      unique:true,
      required:true,
    },
    contacto:{
      type:String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image:{
      type:String,
    },
    password: {
      type: String,
      
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

docenteSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

docenteSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Docente = mongoose.model("Docente", docenteSchema);

export default Docente;
