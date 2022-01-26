import React, { useContext } from "react";
import { Route } from "react-router-dom";
import Quotes from "./pages/quotes/Quotes";
import AddQuote from "./pages/addQuote/AddQuote";
import Favorites from "./pages/favorites/Favorites";
import MainHeader from './components/MainHeader';
import FavContext from './store/fav-context';
import "./App.css";

function App(props) {

  return (
    <div className="App">
      <MainHeader />
      <FavContext.Provider value={JSON.parse(localStorage.getItem('sourceData'))}>
      {/* <FavContext.Provider value="Hello from App"> */}
      <main>        
        <Route path="/quotes">
          <Quotes />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/addquote">
          <AddQuote />
        </Route>
      </main>
      </FavContext.Provider>
    </div>
  );
}

export default App;
