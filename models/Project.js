const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    genres: {
      type: String,
    },
    description: {
      type: String,
    },
    client: {
      type: String,
    },
    clientOther: {
      type: String,
    },
    location: {
      type: String,
    },
    city: {
      type: String,
    },
    lotArea: {
      type: Number,
    },
    conArea: {
      type: Number,
    },
    pool: {
      type: Number,
    },
    height: {
      type: Number,
    },
    number: {
      type: String,
    },
    style: {
      type: String,
    },
    images: {
      type: [Array],
    },
    translations: {
      vi: {
        name: {
          type: String,
        },
        genres: {
          type: String,
        },
        description: {
          type: String,
        },
        style: {
          type: String,
        },
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
