import mongoose from "mongoose";

const semestreSchema = mongoose.Schema(
  {
    numero: {
      type: String,
    
    },
   
  },{timestamps: true,

  }
);

const anoSchema = mongoose.Schema(
  {
    docente: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "Docente",
    },
  numero: {
      type: String,
      required: true,
    },
    
   
    semestre:[semestreSchema],

  }
);

const Ano = mongoose.model("Ano", anoSchema);

export default Ano; 
