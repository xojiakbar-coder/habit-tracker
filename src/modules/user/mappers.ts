import { get } from "radash";
import * as Types from "./types.ts";

export const User = (
  item?: Types.IApi.Single.Response
): Types.IEntity.User => ({
  id: get(item, "id") || 0,
  name: get(item, "name") || "",
  avatar: get(item, "avatar") || "",
  createdAt: new Date(get(item, "created_at") || new Date()),
  gender: get(item, "gender") === "male" ? "male" : "female",
});
