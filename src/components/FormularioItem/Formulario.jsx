import React from "react";
import { useForm } from "react-hook-form";

export const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const capturarDatos = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h3 class="text-primary text-center mt-4">Formulario de compra</h3>
      <div class="d-flex justify-content-center mb-3">
        <form onSubmit={handleSubmit(handleSubmit(capturarDatos))}>
          <fieldset>
            <legend>Datos de pago</legend>
            <div class="form-group ">
              <label class="form-label mt-4">Nombres: </label>
              <input
                class="form-control"
                type="text"
                {...register("nombres", {
                  required: true,
                })}
              />
              {errors.nombres?.type === "required" && (
                <p className="text-danger">El campo nombres es requerido</p>
              )}

              <div>
                <label class="form-label mt-4">Apellidos: </label>
                <input
                  class="form-control"
                  type="text"
                  {...register("apellidos", {
                    required: true,
                  })}
                />
                {errors.apellidos?.type === "required" && (
                  <p className="text-danger">El campo apellidos es requerido</p>
                )}
              </div>
              <div>
                <label class="form-label mt-4">Direccion: </label>
                <input
                  class="form-control"
                  type="text"
                  {...register("direccion", {
                    required: true,
                  })}
                />
                {errors.direccion?.type === "required" && (
                  <p className="text-danger">El campo direccion es requerido</p>
                )}
              </div>
              <div>
                <label class="form-label mt-4">Email: </label>
                <input
                  class="form-control"
                  type="email"
                  {...register("email", {
                    required: true,
                  })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-danger">El campo email es requerido</p>
                )}
              </div>
              <div>
                <label>Telefono: </label>
                <input
                  class="form-control"
                  type="tel"
                  {...register("telefono", {
                    required: true,
                    maxLength: 14,
                  })}
                />
                {errors.telefono?.type === "required" && (
                  <p className="text-danger">El campo telefono es requerido</p>
                )}
              </div>
              <div>
                <label>Tarjeta de credito: </label>
                <input
                  class="form-control"
                  type="cc-number"
                  {...register("tarjetaPago", {
                    required: true,
                    maxLength: 16,
                  })}
                />
                {errors.tarjetaPago?.type === "required" && (
                  <p className="text-danger">
                    El campo tarjeta de credito es requerido
                  </p>
                )}
              </div>
              <button
                type="submit"
                value="Enviar"
                class="justify-content-center btn btn-primary d-flex  mt-3"
              >
                Comprar
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
