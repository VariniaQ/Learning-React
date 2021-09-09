import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>¡Empieza ya!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://i.pinimg.com/originals/44/f0/02/44f002166db0c224c90703f18a659dae.gif'
              text='Busca la profesión en la que te encuentras interesado y descubre más sobre ella.'
              label='Profesiones'
              path='/profesiones'
            />
            <CardItem
              src='https://i.pinimg.com/originals/f5/27/0a/f5270acbc4b98112fcd520d2eea023de.gif'
              text='Aquí encontrarás todos los Planes de Estudio. ¿Qué esperas para darles un vistazo?'
              label='Planes de Estudio'
              path='/planesEstudio'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
