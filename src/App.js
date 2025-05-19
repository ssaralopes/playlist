import React from 'react';
import rockEras from './data/eras';
import './App.css';
import { FaSpotify, FaGithub } from 'react-icons/fa'; // Spotify icon


function App() {
  return (
    <div className="App">
      <h1>ROCK THROUGH THE AGES</h1>
      
      <div className="page-description">
        <p className="description-text">
          Uma jornada visual pela história do Rock — um tributo às eras, aos sons e aos sentimentos que moldaram gerações. 
          De guitarras estridentes a hinos de resistência, celebramos o legado de um gênero que nunca se cala. 
          Este projeto é mais que memória: é uma ode à alma rebelde da música, é a história contada através de Playlists!
        </p>
        <p className="final-invite">
          Explore agora as eras que fizeram do Rock and Roll um eterno grito de Liberdade:
        </p>
      </div>

      <div className="card-container">
        {rockEras.map((era, index) => (
          <div className="rock-card" key={index}>
            <img src={era.image} alt={era.title} className="card-image" />
            <div className="card-content">
              <h2>{era.title}</h2>
              <h3 className="subtitle">{era.subtitle}</h3>
              <p>{era.description}</p>
              <a
                className="spotify-button"
                href={era.playlistUrl.replace('/embed', '')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSpotify className="spotify-icon" />
                Ouça no Spotify
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="rock-meaning">
        <h4>O que o rock significa pra você?</h4>
        <p>
          Para uns, é só som alto. Para outros, é liberdade. Para quem sente na pele, o rock é abrigo, grito e memória.
          É trilha sonora de descobertas, de amores intensos, de noites longas — é coração pulsando contra o silêncio.
        </p>
        <a
          href="https://github.com/ssaralopes"  // substitua pelo seu GitHub real
          target="_blank"
          rel="noopener noreferrer"
          className="rock-button"
        >
          <FaGithub/>
          Visite meu GitHub
        </a>
      </div>

      <footer className="dedicatoria">
        <p>para aqueles que se encontraram no caos do rock’n’roll. ✨</p>
      </footer>
    </div>
    
  );
}

export default App;
