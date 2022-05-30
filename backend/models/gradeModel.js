import mongoose from "mongoose";

const diaSchema = mongoose.Schema(
  {
    segunda: {
      type: String,
    },
    terca: {
      type: String,
    },
    quarta: {
      type: String,
    },
    quinta: {
      type: String,
    },
    sexta: {
      type: String,
    },
    sabado: {
      type: String,
    },
    periodo: { type: String },

    docente: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Docente",
    },
  },
  { timestamps: true }
);

const gradeSchema = mongoose.Schema({
  docente: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Docente",
  },
  curso: {
    type: String,
  },
  codigo: {
    type: String,
    required: true,
  },

  semestre: {
    type: Number,
  },
  dias: [diaSchema],
  bloco: {
    type: String,
  },
  sala: { type: String },
});

const Grade = mongoose.model("Grade", gradeSchema);

export default Grade;
