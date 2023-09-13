import { useState } from 'react';
import './LoginModal.scss';
import ReactModal from 'react-modal';
import Modal from 'react-modal'
function LoginModal() {
  const [loginModalOpened,setLoginModalOpened] = useState(false)
  const container = document.getElementById('container')
  const overlayCon = document.getElementById('overlayCon')
  const overlayBtn = document.getElementById('overlayBtn')

  

  return (
    <div className="Mae">
      <button onClick={e => setLoginModalOpened(true)}>Login</button>
      <Modal
        className="modal"
        overlayClassName="modal-overlay"
        isOpen={loginModalOpened}
        onRequestClose={() => setLoginModalOpened(false)}
        closeTimeoutMS={500}
      >
        <div class="container" id="container">
          <div class="form-container sign-up-container">
            <div className='form'>
              <h1>Crie sua conta</h1>
              <div class="social-container">
                  <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                  <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
              </div>
              <span>Ou use o seu email para registro</span>
              <div class="infield">
                  <input type="text" placeholder="Nome" />
                  <label></label>
              </div>
              <div class="infield">
                  <input type="email" placeholder="Email" name="email"/>
                  <label></label>
              </div>
              <div class="infield">
                  <input type="password" placeholder="Senha" />
                  <label></label>
              </div>
              <div class="infield">
                  <input type="password" placeholder="Confirme sua senha" />
                  <label></label>
              </div>
              <button>Cadastre-se</button>
            </div>  
          </div>
          <div class="form-container sign-in-container">
              <div className='form'>
                  <h1>Entrar</h1>
                  <div class="social-container">
                      <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                      <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                      <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                  </div>
                  <span>Ou use sua conta</span>
                  <div class="infield">
                      <input type="email" placeholder="Email ou CPF" name="email"/>
                      <label></label>
                  </div>
                  <div class="infield">
                      <input type="password" placeholder="Senha" />
                      <label></label>
                  </div>
                  <a href="#" class="forgot">Esqueceu sua senha?</a>
                  <button>Entrar</button>
              </div>
          </div>
          <div class="overlay-container" id="overlayCon">
              <div class="overlay">
                  <div class="overlay-panel overlay-left">
                      <h1>Bem vindo de volta!</h1>
                      <p>Para se manter conectado conosco, por favor, entre com as suas informações pessoais.</p>
                      <button>Entrar</button>
                  </div>
                  <div class="overlay-panel overlay-right">
                      <h1>Olá, amigo!</h1>
                      <p>Entre com suas informações informações e comece sua jornada conosco.</p>
                      <button>Cadastre-se</button>
                  </div>
              </div>
              <button id="overlayBtn"></button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default LoginModal;
