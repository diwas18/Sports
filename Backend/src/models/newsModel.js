import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    content: {
      type: String,
      required: true
    },

    image: {
      type: String
    },

    author: {
      type: String,
      default: "Admin"
    },

    category: {
      type: String,
      enum: ["match", "announcement", "event", "general"],
      default: "general"
    }
  },
  {
    timestamps: true
  }
);

const News = mongoose.model("News", newsSchema);

export default News;
