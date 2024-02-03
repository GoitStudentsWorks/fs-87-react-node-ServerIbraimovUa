import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { logInThunk, registerThunk } from "../../redux/auth/auth.operations";
import { useAppDispatch } from "../../redux/redux_ts/hook";
import Icon from "../Icon/Icon";
import { yupResolver } from "@hookform/resolvers/yup";
import { authSchemas } from "../../schemas/authSchemas";
import togglePassword from "../../utils/togglePassword";
import {
  AuthFormButton,
  StyledAuthForm,
  StyledAuthFormSpan,
} from "./AuthForm.styled";
import { toast } from "react-toastify";
export interface Data {
  email: string;
  password: string;
  repeatPassword?: string;
}
interface Props {
  repeat: boolean;
}

const AuthForm: FC<Props> = ({ repeat }) => {
  const [toggleInput, setToggleInput] = useState("password");
  const [toggleIcon, setToggleIcon] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Data>({
    resolver: yupResolver(authSchemas(repeat)),
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: Data) => {
    const { email, password } = data;
    const newData = {
      email,
      password,
    };

    repeat
      ? dispatch(registerThunk(newData))
          .unwrap()
          .then(() => toast.success("Registration successful!"))
          .catch((e) => {
            if (e.includes("409")) {
              toast.error("Email in use.");
            }
          })
      : dispatch(logInThunk(newData))
          .unwrap()
          .then(() => {
            toast.success("Welcome to your account!");
            reset();
          })
          .catch(() => {
            toast.error("Please write the correct Email or Password");
          });
  };

  return (
    <StyledAuthForm onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Enter your email</span>
        <span className={errors.email ? "gap-error" : "gap-normal"}>
          <input
            className={errors.email ? "input-red input" : "input-blue input"}
            {...register("email", { required: true })}
            type="email"
            placeholder="E-mail"
          />
          <span className="error">
            {errors.email && <span>This field is required</span>}
          </span>
        </span>
      </label>

      <label className={errors.password ? "gap-error" : "gap-label-normal"}>
        <span>Enter your password</span>
        <span className={errors.password ? "gap-error" : "gap-normal"}>
          <div className="eye-input">
            <input
              className={
                errors.password ? "input-red input" : "input-blue input"
              }
              {...register("password", { required: true })}
              type={toggleInput}
              placeholder="Password"
            />
            <StyledAuthFormSpan
              onClick={() =>
                togglePassword(toggleInput, setToggleInput, setToggleIcon)
              }
            >
              {toggleIcon ? (
                <Icon className="eye-icon" id="eye" />
              ) : (
                <Icon className="eye-outline-icon" id="eye-outline" />
              )}
            </StyledAuthFormSpan>
          </div>
          <span className="error">{errors.password?.message}</span>
        </span>
      </label>

      {repeat && (
        <>
          <label className={errors.password ? "gap-error" : "gap-label-normal"}>
            <span>Repeat password</span>
            <span className={errors.password ? "gap-error" : "gap-normal"}>
              <div className="eye-input">
                <input
                  className={
                    errors.password ? "input-red input" : "input-blue input"
                  }
                  {...register("repeatPassword", {
                    required: true,
                  })}
                  type={toggleInput}
                  placeholder="Repeat password"
                />
                <StyledAuthFormSpan
                  onClick={() =>
                    togglePassword(toggleInput, setToggleInput, setToggleIcon)
                  }
                >
                  {toggleIcon ? (
                    <Icon className="eye-icon" id="eye" />
                  ) : (
                    <Icon className="eye-outline-icon" id="eye-outline" />
                  )}
                </StyledAuthFormSpan>
              </div>
              <span className="error">{errors.repeatPassword?.message}</span>
            </span>
          </label>
        </>
      )}

      <AuthFormButton className="btn" type="submit">
        {repeat ? "Sign Up" : "Sign In"}
      </AuthFormButton>
    </StyledAuthForm>
  );
};

export default AuthForm;
