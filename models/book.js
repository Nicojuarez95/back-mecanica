import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  estado: { type: String, required: true },
  vehiculo: { type: String, required: true },
  cliente: { type: String, required: true },
  fecha: { type: String, required: true },
  pago: { type: String, required: true },
  total: { type: Number, required: true },
});

const Book = mongoose.model('Book', bookSchema);

export default Book