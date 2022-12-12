/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IconButton } from "@mui/material";
import {
  SignIn,
  EnvelopeSimple,
  LockSimple,
  Eye,
  EyeSlash,
} from "phosphor-react";
import imagem from "../assets/side-image.png";

export function Form(event: any) {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handlePasswordChange =
    (prop: any) => (event: { target: { value: any } }) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="formLoginDiv1">
        <div className="formLoginDiv2">
          <div className="formLogin">
            <form>
              <div className="formLoginInitial">
                <SignIn className="iconSign" />
                <b>Faça seu login</b>
                <p>Entre com as suas informações de cadastro.</p>
              </div>

              <div className="divEmail">
                <p>E-mail</p>
                <EnvelopeSimple className="envelope" />
                <input
                  className="input1"
                  type="text"
                  placeholder="Digite seu e-mail"
                  required
                ></input>
              </div>

              <div className="divSenha">
                <p>Senha</p>
                <LockSimple className="cadeado" />

                <input
                  className="input2"
                  type={values.showPassword ? "text" : "password"}
                  onChange={handlePasswordChange("password")}
                  value={values.password}
                  placeholder="Digite sua senha"
                  required
                ></input>

                <IconButton
                  className="olho"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <EyeSlash /> : <Eye />}
                </IconButton>
              </div>

              <div className="esqueci">
                <input type="checkbox" className="checkboxLembrar" />

                <p>Lembre-me</p>

                <a href="#">Esqueci minha senha</a>
              </div>

              <div className="footer">
                <button type="submit" className="entrar">
                  ENTRAR
                </button>

                <p>
                  Não tem uma conta? <a href="#"> Registre-se </a>
                </p>
              </div>
            </form>
          </div>
        </div>

        <img src={imagem} alt="teste" className="divImg" />
      </div>
    </>
  );
}
