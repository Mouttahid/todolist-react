import Nav from "./layout/Nav";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import TodoList from "./component/TodoList";

function App() {
  return (
    <Router>
    <div className="App container py-3">
      <h1 style={{textAlign:"center"}}>React 30 challenge</h1>
      <Nav />
      <Switch>
          <Route exact path="/">
        <TodoList  />
          </Route>
          
          <Route exact path="/p2">
        <TodoList  />
          </Route>
          
          <Route exact path="/p3">
        <TodoList  />
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
