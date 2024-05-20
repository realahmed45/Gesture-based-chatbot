const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    trialActive: {
      type: Boolean,
      required: true,
    },
    tryExpires: {
      type: Date,
    },
    subscription: {
      type: String,
      enum: ["Trial", "Basic", "Free", "Premium"],
    },
    apirequestCount: {
      type: Number,
      default: 0,
    },
    trialperiod: {
      type: Number,
      default: 3,
    },
    monthlyRequestCount: {
      type: Number,
      default: 0,
    },
    nextBillingDate: Date,
    payments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "History",
      },
    ],
    history: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "History",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Compile to form model
const User = mongoose.model("User", userSchema);

module.exports = User;
