import React from "react";
import "./Form.modules.css";
import { EnvelopeSimple, SignIn } from "phosphor-react";
import imagem from "../assets/side-image.png";

export function Form() {
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

                <input type="text" placeholder=" Digite seu e-mail"></input>
              </div>

              <div className="divSenha">
                <p>Senha</p>
                <input type="password" placeholder="Digite sua senha"></input>
              </div>

              <div className="esqueci">
                <button type="submit" className="lembrar" />

                <p>Lembre-me</p>

                <a href="#">Esqueci minha senha</a>
              </div>

              <div className="footer">
                <button type="submit" className="entrar">
                  ENTRAR
                </button>

                <p>Não tem uma conta? Registre-se</p>
              </div>
            </form>
          </div>
        </div>

        <img src={imagem} alt="teste" className="divImg" />
      </div>
    </>
  );
}
