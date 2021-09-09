import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Sobre Nosotros</h2>
            <Link to='/'>¿Quiénes somos?</Link>
            <Link to='/'>Términos de Servicio</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contáctanos</h2>
            <Link to='/'>Contacto</Link>
            <Link to='/'>Soporte</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>Redes Sociales</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src="logo20.ico" className="adjustImg" alt="logo"></img>
              Guía de Orientación Profesional
            </Link>
          </div>
          <small class='website-rights'>Guía de Orientación Profesional © 2021</small>
          <div class='social-icons'>
            
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
