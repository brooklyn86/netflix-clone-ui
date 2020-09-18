import React, {useState} from 'react';
import './index.css';
// import { Container } from './styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function Lists({title, slug, movies, }) {
  const [scrollx, setScrollX] = useState(0);
  const handleLeftArrow = () =>{
    let x = scrollx + Math.round(window.innerWidth / 2);

    if(x > 0){
        x = 0;
    }
    setScrollX(x);
  }
  const handleRightArrow = () =>{
    let x = scrollx - Math.round(window.innerWidth / 2);
    let listW = movies.length * 150;
    if((window.innerWidth - listW) > x ){
        x = (window.innerWidth - listW) - 60
    }
    setScrollX(x);
  }
  return (
    <div className='movieRow'>
        <h2>{title}</h2>
        <div className="movieRow--arrowLeft" onClick={handleLeftArrow}>
            <ArrowBackIosIcon  style={{fontSize: 30}}/>
        </div>
        <div className="movieRow--arrowRight" onClick={handleRightArrow}>
            <ArrowForwardIosIcon style={{fontSize: 30}}/>
        </div>
            { movies &&
                movies.length > 0 &&
                    <div className="movieRow--listarea" >
                        <div className="movieRow--list" style={{marginLeft: scrollx, width : movies.length * 150}}>
                            {movies.map( (movie, key) => (
                                <div key={key} className="movieRow--item">
                                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
                                </div>
                            ))}
                        </div>
                    </div>

            }

    </div>
    );
}

export default Lists;