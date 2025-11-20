const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
  CouncilName: { type: String },
  BarCouncilEnrollmentNumber: { type: String },
  CouncilAddress: { type: String },

  CaseType: { type: String },
  Date: { type: Date },
  CourtName: { type: String },
  State: { type: String },

  Petitioners: [],
  Respondents: [],

  CrimeNumber: { type: String },
  Sections: { type: String },
  DateOfArrest: { type: Date },
  CrlpNo: { type: String },
  CrlMpNo: { type: String },
  SessionJudge: { type: String },
  DateOfDismissal: { type: Date },
  PoliceStationName: { type: String },
  JailName: { type: String },
  ToDistrict: { type: String },
  FilledFrom: { type: String },
  Place: { type: String },
  Userid: { type: String },

  CouncilName: { type: String },
  CouncilAddress: { type: String },
  DateOfFiling: { type: Date },
  PetitionerName1: { type: String },
  RespondentName1: { type: String },
  Category: { type: String },
  CaseType: { type: String },
  Form: { type: String },
});

module.exports = mongoose.model('Case', caseSchema);
