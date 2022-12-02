import React from "react";
import "./Form.modules.css";
import {SignIn} from 'phosphor-react';
import  imagem from '../assets/side-image.svg'

export function Form() {
  return (




    <div className="formLoginDiv1">


      <div className="formLoginDiv2">

        <div className="formLogin">
        
          <form>
            <SignIn className="iconSign"/>
            <b>Faça seu login</b>
            <p>Entre com as suas informações de cadastro.</p>
            <p>E-mail</p>
            <input type="text" placeholder="Digite seu e-mail"></input>
            <p>Senha</p>
            <input type="password" placeholder="Digite sua senha"></input>
            <button type="submit">w</button>
            <p>Lembre-me</p>
          
            <p>Esqueci minha senha</p>
            <button type="submit">ENTRAR</button>

            <p>Não tem uma conta? Registre-se</p>
          </form>
    
        </div>

      </div>
      <img src={imagem} alt="tete"/>
    </div>
   );
}
