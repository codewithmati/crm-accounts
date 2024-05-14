const mongoose = require('mongoose');

// Define schema for COMPANY collection
const companySchema = new mongoose.Schema({
  cmp_id: { type: Number, required: true, unique: true },
  cmp_name: { type: String, required: true, unique: true },
  cash_code: {type: number, required:true, unique:true}
});

// Define schema for UM_USERS collection
const umUserSchema = new mongoose.Schema({
  cmp_id: { type: Number, ref: 'Company' },
  user_id: { type: Number, required: true, unique: true },
  uname: { type: String, required: true, unique: true },
  user_name: { type: String },
  upass: { type: String },
  user_status: { type: String, default: 'A', required: true },
  sys_admin: { type: String, default: 'N' },
  last_login_time: { type: Date },
});

// Define schema for UM_USER_RIGHTS collection
const umUserRightSchema = new mongoose.Schema({
  cmp_id: { type: Number, ref: 'Company' },
  menu_id: { type: Number, required: true },
  user_id: { type: Number, required: true },
  sort_order: { type: Number, default: 0 },
  grantor: { type: String },
  granted_at: { type: Date },
  ins_alw: { type: String, default: 'N' },
  upd_alw: { type: String, default: 'N' },
  del_alw: { type: String, default: 'N' },
  que_alw: { type: String, default: 'N' },
});

// Define schema for CITY collection
const citySchema = new mongoose.Schema({
  cmp_id: { type: Number, ref: 'Company' },
  e_user: { type: Number, ref: 'UmUser' },
  pk_ccode: { type: Number, required: true, unique: true },
  cname: { type: String, required: true },
});

// Define schema for CHART collection
const chartSchema = new mongoose.Schema({
  cmp_id: { type: Number, ref: 'Company' },
  e_user: { type: Number, ref: 'UmUser' },
  chcode: { type: String, required: true, unique: true },
  chdesc: { type: String, required: true },
  fk_ccode: { type: Number, ref: 'City', required: true },
  opendate: { type: Date },
  allowed: { type: Number },
  chlevel: { type: Number },
  acctype: { type: String, maxlength: 1 },
  address: { type: String },
  phno: { type: String },
  ref_phno: { type: String },
  email: { type: String },
  website: { type: String },
  opendr: { type: Number },
  opencr: { type: Number },
});

// Define schema for ENTRY_TYPE collection
const entryTypeSchema = new mongoose.Schema({
  cmp_id: { type: Number, ref: 'Company' },
  e_user: { type: Number, ref: 'UmUser' },
  type_code: { type: Number, required: true, unique: true },
  type_desc: { type: String, required: true, unique: true },
  description: { type: String, maxlength: 80 },
});

// Define schema for VOUCHER collection
const voucherSchema = new mongoose.Schema({
  cmp_id: { type: Number, ref: 'Company' },
  e_user: { type: Number, ref: 'UmUser' },
  trnno: { type: Number, required: true, unique: true },
  vtype: { type: Number, ref: 'EntryType' },
  trndate: { type: Date, required: true },
  chcode: { type: String, ref: 'Chart' },
  narration: { type: String, maxlength: 150 },
  dr: { type: Number },
  cr: { type: Number },
  cancel: { type: String },
});

// Create models
const City = mongoose.model('City', citySchema);
const Chart = mongoose.model('Chart', chartSchema);
const EntryType = mongoose.model('EntryType', entryTypeSchema);
const Company = mongoose.model('Company', companySchema);
const UmUser = mongoose.model('UmUser', umUserSchema);
const UmUserRight = mongoose.model('UmUserRight', umUserRightSchema);
const Voucher = mongoose.model('Voucher', voucherSchema);

// Export all models for use in other files
module.exports = { City, Chart, EntryType, Company, UmUser, UmUserRight, Voucher };
