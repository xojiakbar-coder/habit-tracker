import { http } from "@/core/services";
import type { AxiosPromise } from "axios";

import * as Types from "./types";

export const User = ({
  id,
}: {
  id: number;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.get(`/api/v1/users/${id}`);

export const Create = ({
  values,
}: {
  values: Types.IForm.Create;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.post(`/api/v1/users`, {
    name: values.name,
    avatar: values.avatar,
    gender: values.gender,
    created_at: values.createdAt,
  });
