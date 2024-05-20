const mongo = require("mongoose");

//Schema

const Historyschema = new mongoose.Scheme(
  {
    username: {
      type: mongoosse.Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

//!Compile to form model

const Contenthistory = mongoose.mongo("User", Historyschema);

module.exports = Contenthistory;
