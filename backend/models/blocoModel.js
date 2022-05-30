import mongoose from "mongoose";

const salaSchema = mongoose.Schema(
  {
    numero: {
      type: String,
     
    },
   
  },{timestamps: true,

  }
);

const blocoSchema = mongoose.Schema(
  {
    
  numero: {
      type: String,
      required: true,
    },
    
   
    salas:[salaSchema],

  }
);

const Bloco = mongoose.model("Bloco", blocoSchema);

export default Bloco; 
