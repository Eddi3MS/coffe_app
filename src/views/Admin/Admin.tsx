import React, { ChangeEvent } from "react";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Input } from "../../components";
import * as S from "./Admin.styled";
import { useUser } from "../../context/UserContext";

const schema = yup.object({
  email: yup.string().email().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

interface ILogin {
  email: string;
  password: string;
}

const Admin = () => {
  const { login } = useUser();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<ILogin>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div>
      <S.Form onSubmit={handleSubmit(login)}>
        <h1 className="font-2">Login</h1>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="E-mail"
              value={value}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChange(e.target.value)
              }
              error={errors.email?.message}
              isInvalid={isSubmitted ? !!errors.email : undefined}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              type="password"
              placeholder="Senha"
              value={value}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChange(e.target.value)
              }
              error={errors.password?.message}
              isInvalid={isSubmitted ? !!errors.password : undefined}
            />
          )}
        />

        <Button text="Login" type="submit" />
      </S.Form>
    </div>
  );
};

export default Admin;
