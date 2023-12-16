import React from "react";
import { useForm } from "react-hook-form";

function Signout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    alert(`ok ${data.name}`);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", {
            required: "Name is a required field",
          })}
          placeholder="Name"
        />
        {errors.name && (
          <div style={{ color: "red" }}>{errors.name.message}</div>
        )}
        <input
          {...register("email", {
            required: "Email is a required field",
            pattern: {
              value: /[A-Za-z]{3}/,
              message: "Email is not a regular ",
            },
          })}
          placeholder="Email"
        />
        {errors.email && (
          <div style={{ color: "red" }}>{errors.email.message}</div>
        )}

        <div>
          <button type="submit">Send</button>
        </div>
      </form>
      <div>
        <button
          onClick={() => {
            setValue("name", "Anastasia");
            setValue("email", "te@jbkjb");
          }}
        >
          Data
        </button>
      </div>
    </div>
  );
}

export default Signout;
