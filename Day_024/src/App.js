import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Secrets from "./pages/Secrets";
import LayoutWrapper from "./pages/Layout";
import { GlobalProvider } from "./store";
import ProtectedRoute from "./ProtectedRoute";
import { Login } from "./pages/Login";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <LayoutWrapper>
                <Home />
              </LayoutWrapper>
            </Route>
            <Route path="/login">
              <LayoutWrapper>
                <Login />
              </LayoutWrapper>
            </Route>
            <ProtectedRoute path="/secrets" exact>
              <LayoutWrapper>
                <Secrets />
              </LayoutWrapper>
            </ProtectedRoute>
            <Route path="*">
              <LayoutWrapper>
                <h1 style={{ textAlign: "center" }}>404: page not found :(</h1>
              </LayoutWrapper>
            </Route>
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
