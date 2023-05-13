const mongoose = require('mongoose');
// const concediuSchema = new mongoose.Schema({
//   startDate: {
//     type: Date,
//     required: true,
//   },
//   endDate: {
//     type: Date,
//     required: true,
//   },

// });
const registerSchema = new mongoose.Schema({
  nume: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  parola: {
    type: String,
    required: true,
  },
  departament: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  concediu: { type: Array },
});

const Register =
  mongoose.models.Register || mongoose.model('Register', registerSchema);

module.exports = Register;
