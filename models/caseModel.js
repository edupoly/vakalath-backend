// models/Case.js
const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
  CouncilName: { type: String, required: true },
  BarCouncilEnrollmentNumber: { type: String, required: true },
  CouncilAddress: { type: String, required: true },

  CaseType: { type: String, required: true },
  Date: { type: Date, required: true },
  CourtName: { type: String, required: true },
  State: { type: String, required: true },

  PetitionerName1: { type: String, required: true },
  PetitionerAddress1: { type: String, required: true },
  PetitionerAge1: { type: Number, required: true },

  PetitionerName2: { type: String },
  PetitionerAddress2: { type: String },
  PetitionerAge2: { type: Number },

  PetitionerName3: { type: String },
  PetitionerAddress3: { type: String },
  PetitionerAge3: { type: Number },

  RespondentName1: { type: String, required: true },
  RespondentAddress1: { type: String, required: true },
  RespondentAge1: { type: Number, required: true },

  RespondentName2: { type: String },
  RespondentAddress2: { type: String },
  RespondentAge2: { type: Number },

  RespondentName3: { type: String },
  RespondentAddress3: { type: String },
  RespondentAge3: { type: Number },

  Place: { type: String/* , required: true */ },
  Userid: { type: String, required: true }
});

module.exports = mongoose.model('Case', caseSchema);
