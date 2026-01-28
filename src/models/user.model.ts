import { Model, model, models, ObjectId, Schema } from "mongoose";

enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

type User = {
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: UserRole;
  orderedFoods: ObjectId[];
  ttl: Date;
  isVerified: Boolean;
};

const UserSchema = new Schema<User>(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER,
      required: true,
    },
    orderedFoods: [{ type: Schema.Types.ObjectId, required: true }],
    ttl: { type: Date, required: true },
    isVerified: { type: Boolean, required: true },
  },
  { timestamps: true },
);

export const UserModel: Model<User> =
  models["Users"] || model("Users", UserSchema);
