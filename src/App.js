import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Form from './components/Form'
import People from './views/People'
import Planet from './views/Planet'


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Form />
        <Switch>
          <Route path="/person/:id">
            <People />
          </Route>
          <Route path="/planet/:id">
            <Planet />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
