import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormProvider, useForm, type UseFormReturn } from "react-hook-form";

import { keepOptions } from "@/helpers";

import * as yup from "yup";
import * as Api from "../api";
import * as Types from "../types";
import * as Mappers from "../mappers";

interface FormValues extends Types.IForm.Create {}

interface IChildren extends UseFormReturn<FormValues> {
  isLoading?: boolean;
}

interface IProps {
  children: (props: IChildren) => React.ReactNode;
  className?: string;
  onError?: (error: string) => void;
  onSettled?: () => void;
  onSuccess?: (value: Types.IEntity.User) => void;
}

const Create: React.FC<IProps> = ({
  children,
  onError,
  onSettled,
  onSuccess,
  className,
}) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<Types.IEntity.User, string, FormValues, any>({
    mutationFn: async (values: FormValues) => {
      const { data } = await Api.Create({ values });
      return Mappers.User(data);
    },
    onSuccess: (data: Types.IEntity.User) => {
      onSuccess && onSuccess(data);
      queryClient.invalidateQueries({
        predicate: (query) =>
          query.queryKey[0] === "user" && query.queryKey[1] === "single",
      });
    },
    onError,
    onSettled,
  });

  const validationSchema: yup.ObjectSchema<Types.IForm.Create> = yup.object({
    name: yup.string().required("Majburiy maydon"),
    avatar: yup.string().optional(),
    gender: yup
      .string()
      .oneOf(["male", "female"], "Noto‘g‘ri mashina turi")
      .required("Majburiy maydon"),
    createdAt: yup.date().required("Majburiy maydon"),
  });

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      avatar: "",
      gender: "" as "male" | "female",
      createdAt: new Date(),
    },
    resolver: yupResolver<FormValues, any, FormValues>(validationSchema),
  });

  const onSubmit = form.handleSubmit((values) => {
    mutation.mutate(values, {
      onSettled: () => form.reset({ ...form.getValues() }, { ...keepOptions }),
    });
  });

  return (
    <FormProvider {...form}>
      <form className={className} onSubmit={onSubmit}>
        {children({ ...form, isLoading: mutation.isPending })}
      </form>
    </FormProvider>
  );
};

export default Create;
