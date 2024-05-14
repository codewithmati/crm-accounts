import mongoose from "mongoose";

var chartOfAccountsSchema = new mongoose.Schema(
  {
    main: {
      type: String,
    },
    sub: {
      type: String,
    },
    city: {
      type: String,
    },
    name: {
      type: String,
    },
    openDr: {
      type: Number,
      default: 0,
      required: true,
    },
    openCr: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { timestamps: true }
);

var voucherSchema = new mongoose.Schema(
  {
    ledger: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ledger",
    },
    narration: {
      type: String,
      required: true,
    },
    dr: {
      type: Number,
      default: 0,
      required: true,
    },
    cr: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { timestamps: true }
);

const ChartOfAccount =
  mongoose.models?.ledger || mongoose.model("ledger", chartOfAccountsSchema);
const Voucher =
  mongoose.models?.voucher || mongoose.model("voucher", voucherSchema);

export { ChartOfAccount, Voucher };
