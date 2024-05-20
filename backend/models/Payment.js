const mongo = require("mongoose");

//Schema

const paymentSchema = new mongoose.Scheme(
  {
    username: {
      type: mongoosse.Schema.Types.ObjectId,
      ref: "User",
    },
    reference: {
      type: String,
      required: true,
    },
    Currency: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
      required: true,
    },
    subscriptionplan: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      default: 0,
    },
    monthlyRequestCount: {
      type: Number,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

//!Compile to form model

const Payment = mongoose.mongo("User", paymentSchema);

module.exports = Payment;
