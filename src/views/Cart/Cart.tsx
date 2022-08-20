import React, { useEffect } from "react";
import { useCart } from "../../context";
import * as S from "./Cart.styled";
import { CartInfo, DeliveryData, PaymentType } from "./components";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import { CookiesHandler } from "../../utils/cookies";

const schema = yup.object({
  name: yup.string().required("Campo obrigatório"),
  street: yup.string().required("Campo obrigatório"),
  number: yup
    .string()
    .required("Campo obrigatório.")
    .matches(/^\d+$/, "Apenas números."),
  district: yup.string().required("Campo obrigatório"),
  complement: yup.string(),
  payment: yup.string().required("Campo obrigatório"),
  save: yup.bool(),
});

export interface IDeliveryDetails {
  name: string;
  street: string;
  number: string;
  district: string;
  complement: string;
  payment: string;
  save: boolean;
}

const Cart = () => {
  const { cart } = useCart();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
    setValue,
  } = useForm<IDeliveryDetails>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      street: "",
      number: "",
      district: "",
      complement: "",
      payment: "",
      save: false,
    },
  });

  useEffect(() => {
    const data = CookiesHandler.getCookies();
    if (data) {
      setValue("name", data.name, { shouldValidate: true });
      setValue("street", data.street, { shouldValidate: true });
      setValue("number", data.number, { shouldValidate: true });
      setValue("district", data.district, { shouldValidate: true });
      setValue("complement", data.complement);
      setValue("payment", data.payment, { shouldValidate: true });
      setValue("save", data.save);
    }
  }, []);

  const handleDeliveryForm = (data: IDeliveryDetails) => {
    console.log(data);
    CookiesHandler.setCookies(data);

    if (cart.length === 0) {
      return toast.error("Adicione items ao carrinho.");
    }

    if (!data.save) {
      reset({
        name: "",
        street: "",
        number: "",
        district: "",
        complement: "",
        payment: "",
        save: false,
      });

      CookiesHandler.destroyCookies();
    }
  };

  return (
    <S.CartWrapper>
      <form onSubmit={handleSubmit(handleDeliveryForm)}>
        <S.Delivery>
          <h1 className="font-2">Complete seu pedido</h1>

          <DeliveryData hookForms={{ control, errors, isSubmitted }} />

          <PaymentType hookForms={{ control, errors, isSubmitted }} />

          <div className="checkbox_wrapper">
            <Controller
              name="save"
              control={control}
              render={({ field: { onChange, value } }) => (
                <input
                  type="checkbox"
                  name="save"
                  id="save"
                  checked={value}
                  onChange={(e) => onChange(e.target.checked)}
                  tabIndex={-1}
                />
              )}
            />
            <label htmlFor="save" className="font-2">
              Salvar dados ?
            </label>
          </div>
        </S.Delivery>

        <CartInfo />
      </form>
    </S.CartWrapper>
  );
};

export default Cart;
