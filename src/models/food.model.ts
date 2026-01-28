import { model, models, ObjectId, Schema } from "mongoose";

type Food = {
  foodName: String;
  price: Number;
  image: String;
  ingredients: String;
  category: ObjectId;
};

export const foodSchema = new Schema<Food>(
  {
    foodName: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true },
);

export const FoodModel = models["Foods"] || model<Food>("Foods", foodSchema);
