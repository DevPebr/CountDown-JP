import React from 'react';
import Title from './components/Title';
import Counter from './components/Counter';
import './App.css';
import BGIMG from './assets/TORCIDA.webp';
import UseCountDown from './components/hooks/UseCountDown';
import JPO from "./assets/JPO.jpg";


function App() {

  const [day, hour, minute, second] = UseCountDown("May 12, 2023, 00:00:00");

  return (
     <div className='App' style={{backgroundImage: `url(${BGIMG})`}}>
      <section className="container">
        <Title title='Niver de João Pedro'/>
        <img src={JPO} alt="João"/>
        <section className="countdown-container">
          <Counter title='Dias' number={day}/>
          <Counter title='Horas' number={hour}/>
          <Counter title='Minutos' number={minute}/>
          <Counter title='Segundos' number={second}/>
        </section>
      </section>
    </div>
  )
}

export default App
