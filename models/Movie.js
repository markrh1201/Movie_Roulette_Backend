import { Schema, model } from 'mongoose';

const movieSchema = new Schema({
  title: { type: String, required: true },
  addedBy: { type: String },
  addedAt: { type: Date, default: Date.now }
});

export default model('Movie', movieSchema);
