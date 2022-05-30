import mongoose from "mongoose";


const eventoSchema = mongoose.Schema({

  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,

  },
data1:{
type:String, 
},
data2:{
  type:String, 
  },
  hora1:{
    type:String, 
    },
    hora2:{
      type:String, 
      },
  img: {
    type: String,
  },
link:{
type:String,
},
  bloco: {
    type: String,
  },
  sala: { type: String },
});

const Evento = mongoose.model("Evento", eventoSchema);

export default Evento;
