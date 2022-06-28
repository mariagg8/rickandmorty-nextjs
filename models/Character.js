import mongoose from 'mongoose';

const CharacterSchema = new mongoose.Schema({
  name: {
    /* The name of this user */

    type: String,
    required: [true, 'Please provide a name for this user.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  age: {
    /* User's age, if applicable */

    type: Number,
  },
});

const model =
  mongoose.models.Character || mongoose.model('Character', CharacterSchema);

export default model;
