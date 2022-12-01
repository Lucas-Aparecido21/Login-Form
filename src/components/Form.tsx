import React from "react";
import "./Form.modules.css";

export function Form() {
  return (
    <div className="formLoginDiv1">
      <div className="formLoginDiv2">
        <div className="formLogin">
          <form>
            <b>Faça seu login</b>
            <p>Entre com as suas informações de cadastro.</p>
            <label>E-mail</label>
            <input type="text" placeholder="Digite seu e-mail"></input>
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha"></input>
            <button type="submit"></button>

            <p>Lembre-me</p>
            <p>Esqueci minha senha</p>
            <button type="submit">ENTRAR</button>

            <p>Não tem uma conta? Registre-se</p>
          </form>
        </div>
      </div>
    </div>
  );
}
