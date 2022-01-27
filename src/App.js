import React from "react";
import { Route, Redirect } from "react-router-dom";
import Quotes from "./pages/quotes/Quotes";
import AddQuote from "./pages/addQuote/AddQuote";
import MainHeader from "./components/MainHeader";

import styles from "./App.module.css";

function App(props) {
  return (
    <div className={styles.App}>
      <MainHeader />
      <main>
        <Route path="/" exact>
          <Redirect to="/addquote" />
        </Route>
        <Route path="/quotes">
          <Quotes />
        </Route>
        <Route path="/addquote">
          <AddQuote />
        </Route>
      </main>
    </div>
  );
}

export default App;
