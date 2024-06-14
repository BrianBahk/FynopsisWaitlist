import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    active: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Ticket =
  mongoose.models.UserEmails || mongoose.model("UserEmails", ticketSchema);

export default Ticket;
