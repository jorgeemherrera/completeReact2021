import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sing-in-and-sing-up/sing-in-and-sing-up.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
