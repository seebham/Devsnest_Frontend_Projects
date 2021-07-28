import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Secrets from "./pages/Secrets";
import LayoutWrapper from "./pages/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <LayoutWrapper>
              <Home />
            </LayoutWrapper>
          </Route>
          <Route path="/secrets" exact>
            <LayoutWrapper>
              <Secrets />
            </LayoutWrapper>
          </Route>
          <Route path="*">
            <LayoutWrapper>
              <h1 style={{ textAlign: "center" }}>404: page not found :(</h1>
            </LayoutWrapper>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
