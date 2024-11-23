import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  emp_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  design: {
    type: String,
    required: true,
  },
  pay: {
    type: Number,
    required: true,
  },
  DA: {
    type: Number,
    required: true,
  },
  HRA: {
    type: Number,
    required: true,
  },
  dec_depart: {
    type:String,
    required: true,
  },
  ele_ch: {
    type: Number,
    required: true,
  },
  nps_per: {
    type: Number,
    required: true,
  },
  nps_rupee: {
    type: Number,
    required: true,
  },
});

const SheetSchema = new mongoose.Schema({
  month: {
    type: Number,
    required: true,
  },
  employee: {
    type: [EmployeeSchema], // Array of EmployeeSchema objects
    required: true,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
  isCancel: {
    type: Boolean,
    default: false,
  },
  mailed: {
    type: Boolean,
    default: false,
  },
});

const SheetModel =
  mongoose.models.sheet || mongoose.model("sheet", SheetSchema);

export default SheetModel;
