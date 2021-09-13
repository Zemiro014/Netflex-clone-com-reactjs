import React, {useEffect} from "react";
import Tmdb from "./Tmdb";

const App = () => {

useEffect(() =>{
  const loadAll = async () => {
    // Pegando a lista total
    let list = await Tmdb.getHomeList();
    console.log(list)
  }
  loadAll();
}, []);

  return (
    <div>
      Olá Mundo !
    </div>
  );
}
export default App;