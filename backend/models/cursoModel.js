import mongoose from "mongoose";

const disciplinaSchema = mongoose.Schema(
  {
    name: {
      type: String,
  
    },
    codigo:{
      type:String,
      
    }
  },
  { timestamps: true }
);

const cursoSchema = mongoose.Schema({
  docente: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "Docente",
  },
  name: {
    type: String,
    required: true,
  },
  codigo: {
    type: String,
    required: true,
  },

  disciplinas: [disciplinaSchema],
});

const Curso = mongoose.model("Curso", cursoSchema);

export default Curso;
