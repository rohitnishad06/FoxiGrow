import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    telegramId: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
    },

    level: {
      type: Number,
      default: 1,
    },
    usdt: {
      type: Number,
      default: 0,
    },
    fg: {
      type: Number,
      default: 0,
    },
    twitterBound: {
      type: Boolean,
      default: false,
    },
    notifications: {
      taskComplete: Boolean,
      rewardReceived: Boolean,
      newTask: Boolean,
      checkIn: Boolean,
      inviteSuccess: Boolean,
    },

    invitedBy: String,
    invites: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const userModel = mongoose.model("User", userSchema)

export default userModel;
