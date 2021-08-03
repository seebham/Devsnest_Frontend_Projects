import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={Products} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
