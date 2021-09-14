import React, {useEffect, useState} from "react";
import './App.css'
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";

const App = () => {

  // Lista de exibição
  const [movieList, setMovieList] = useState([]);

useEffect(() =>{
  const loadAll = async () => {
    // Pegando a lista total
    let list = await Tmdb.getHomeList();
    setMovieList(list);
  }
  loadAll();
}, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
}
export default App;