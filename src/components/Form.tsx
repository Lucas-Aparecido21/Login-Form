import React from "react";
import "./Form.modules.css";
import {EnvelopeSimple, SignIn} from 'phosphor-react';
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
            <input type="text" placeholder="Digite seu e-mail">  </input>
            <EnvelopeSimple className="iconEvelope"/>
            <p>Senha</p>
            <input type="password" placeholder="Digite sua senha">    </input>
            <button type="submit" className="lembrar">w</button>
            <div className="esqueci">
   
            <p >Lembre-me</p>

            <a href="#">Esqueci minha senha</a>
            </div>
            <button type="submit" className="entrar">ENTRAR</button>

            <p>Não tem uma conta? Registre-se</p>
          </form>
    
        </div>

      </div>
      <img src={imagem} alt="teste"/>
      
    </div>

    
   );
}
