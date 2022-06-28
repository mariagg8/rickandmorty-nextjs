import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
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

const model = mongoose.models.User || mongoose.model('User', UserSchema);

export default model;
