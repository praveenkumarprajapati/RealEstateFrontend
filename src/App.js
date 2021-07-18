import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import CreateAdvertisement from './CreateAdvertisement'
import ShowAdvertisement from './ShowAdvertisement'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  return (

    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/createAdvertisement">
          <CreateAdvertisement />
        </Route>
        <Route path="/showAdvertisement/:id">
          <ShowAdvertisement />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
