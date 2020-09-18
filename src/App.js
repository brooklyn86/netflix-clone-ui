import React, {useEffect, useState} from 'react';
import Tmdb from './services/tmdb/api'
import './App.css';
// import { Container } from './styles';
import ListMovie from './components/Lists';
import Header from './components/Header';
import TopMenu from './components/TopMenu';
function App() {

  const [movieList, setMovieList] = useState([]);
  const [movieDestaque, setMovieDestaque] = useState(null);
  const [headerBlack, setHeaderBlack] = useState(false);

  useEffect( () => {
    const dataMovies = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list)
      //Filtrando Originais para destaque
      let originals = list.filter(movie => movie.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenDetals = await Tmdb.getMovieDetals(chosen.id, 'tv') 
      setMovieDestaque(chosenDetals)

    }

    dataMovies();
  },[])
  useEffect( () => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setHeaderBlack(true);

      }else{
        setHeaderBlack(false);

      }
      
    }

    window.addEventListener('scroll', scrollListener);

    return () => { 
      window.removeEventListener('scroll',scrollListener);
    }
  },[])

  return (
    <div className="page">
        <TopMenu black={headerBlack} />
        {movieDestaque && (
          <Header item={movieDestaque} />
        )}
        <section className="lists">
        {movieList.length > 0 ? 
          movieList.map((movie, key) => (
            <div>
                <ListMovie title={movie.title} key={key} slug={movie.slug} movies={movie.items.results} />
            </div>
          
        ))
        : ( 
        <div className="loading">
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2000,c_limit/Netflix_LoadTime.gif" />  
        </div> 
        )
      }
        </section> 

       
       
    </div>
  );
 
}

export default App;