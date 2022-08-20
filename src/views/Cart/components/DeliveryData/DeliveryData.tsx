import React, { ChangeEvent } from "react";
import { Input } from "../../../../components";
import { ReactComponent as Delivery } from "../../../../assets/delivery.svg";
import * as S from "./DeliveryData.styled";
import { Controller } from "react-hook-form";

const DeliveryData = ({ hookForms }: any) => {
  return (
    <S.Delivery className="delivery_data">
      <div className="form__title">
        <Delivery />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>
      <S.FormWrapper>
        <div className="name_input  input__wrapper">
          <Controller
            name="name"
            control={hookForms.control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onChange(e.target.value)
                }
                error={hookForms.errors.name?.message}
                isInvalid={
                  hookForms.isSubmitted ? !!hookForms.errors.name : undefined
                }
              />
            )}
          />
        </div>
        <div className="address_input  input__wrapper">
          <Controller
            name="street"
            control={hookForms.control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Rua"
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onChange(e.target.value)
                }
                error={hookForms.errors.street?.message}
                isInvalid={
                  hookForms.isSubmitted ? !!hookForms.errors.street : undefined
                }
              />
            )}
          />
          <Controller
            name="number"
            control={hookForms.control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Num"
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onChange(e.target.value)
                }
                error={hookForms.errors.number?.message}
                isInvalid={
                  hookForms.isSubmitted ? !!hookForms.errors.number : undefined
                }
              />
            )}
          />
        </div>

        <div className="district_input  input__wrapper">
          <Controller
            name="district"
            control={hookForms.control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Bairro"
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onChange(e.target.value)
                }
                error={hookForms.errors.district?.message}
                isInvalid={
                  hookForms.isSubmitted
                    ? !!hookForms.errors.district
                    : undefined
                }
              />
            )}
          />

          <Controller
            name="complement"
            control={hookForms.control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Complemento"
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onChange(e.target.value)
                }
                error={hookForms.errors.complement?.message}
                isInvalid={
                  hookForms.isSubmitted
                    ? !!hookForms.errors.complement
                    : undefined
                }
              />
            )}
          />
        </div>
      </S.FormWrapper>
    </S.Delivery>
  );
};

export default DeliveryData;
