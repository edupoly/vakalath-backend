const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
  highcourt: { type: String },
  lowercourt: { type: String },
  myear: { type: String },

  OPNO: { type: String },
  OPDATE: { type: Date },

  place: { type: String },
  district: { type: String },
  DISTRICT: { type: String },

  fdate: { type: Date },

  counsel_address: { type: String },
  counsel_code: { type: String },

  verification: { type: String },

  MAIN_PRAYER: { type: String },
  INTERIM_PRAYER: { type: String },
  interim_prayer: { type: String },

  date_offence: { type: Date },
  place_offence: { type: String },
  offence_section: { type: String },
  date_remand: { type: Date },
  date_arrest: { type: Date },

  prev_crlmp_no: { type: String },
  prev_court: { type: String },
  prev_order_date: { type: Date },

  jail_name: { type: String },
  name_jail: { type: String },

  R23: { type: String },
  R24: { type: String },
  R25: { type: String },

  court_fee: { type: String },
  stamp_duty: { type: String },
  batta_fee: { type: String },
  appeal_value: { type: String },

  IA_details: { type: String },
  IA_PRAYER: { type: String },
  ia_no: { type: String },

  running_index: [],
  filing_numbers: { type: Object },

  full_cause_title: { type: String },

  registered_office: { type: String },
  auth_share_capital: { type: String },
  paidup_capital: { type: String },
  main_objects: [],
  material_papers: { type: String },

  judge_summons: { type: String },

  caveat_no: { type: String },
  wp_no: { type: String },

  CEA_No: { type: String },
  order_in_original_no: { type: String },
  order_in_appeal_no: { type: String },
  final_order_no: { type: String },

  CMA_No: { type: String },
  CP_NO: { type: String },

  cc_no: { type: String },
  crlp_no: { type: String },

  Petitioners: [],
  Respondents: [],

  SessionJudge: { type: String },

  Userid: { type: String },
  CaseType: { type: String },
  FilledFrom: { type: String },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Case', caseSchema);
