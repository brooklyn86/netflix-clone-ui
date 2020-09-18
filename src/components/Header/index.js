import React from 'react';
import './index.css';
// import { Container } from './styles';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
function Header({item}) {
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for(let i in item.genres){
    genres.push(item.genres[i].name)
  }
  return(
    <div className="feature" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center', 
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="feature--maskVertical">
        <div className="feature--maskHorizontal">
          <div className="feature--name">{item.original_name}</div>
          <div className="feature--info">
            <div className="feature--points"><TrendingUpIcon/> {item.vote_average} Relevancia</div>
            <div className="feature--year">{firstDate.getFullYear()}</div>
            <div className="feature--seasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's': ''}</div>
          </div>
          <div className="feature--description">{item.overview.substr(0, 350)}...</div>
          <div className="feature--buttons">
            <a href  className="feature--buttons-watch">Assistir</a>
            <a href className="feature--buttons-list">+ Minha Lista</a>
          </div>
          <div className="feature--genres">
            <strong>Genero: {genres.join(', ')}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;