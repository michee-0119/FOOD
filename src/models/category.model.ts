import { model, models, Schema } from "mongoose";

type FoodCategory = {
  categoryName: String;
  createdAt: Date;
  updatedAt: Date;
};

export const foodCategorySchema = new Schema<FoodCategory>(
  {
    categoryName: { type: String, required: true },
  },
  { timestamps: true },
);

export const FoodCategoryModel =
  models["Categories"] || model<FoodCategory>("Categories", foodCategorySchema);
