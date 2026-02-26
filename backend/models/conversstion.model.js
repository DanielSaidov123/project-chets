import mongoose from "mongoose";

const conversstionSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    message: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  { timestamps: true },
);

const Conversstion =mongoose.model("Conversstion" , conversstionSchema)

export default Conversstion
