import React from 'react';
import { Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux'
import './App.css';
import Header from './components/common/Header/Header';
import Navmenu from './components/common/Navigation/Navmenu';
import Footer from './components/common/Footer/Footer';
import store from './redux/store'
import HomePageContainer from './components/content/HomePage/HomePage';
import BlogPage from './components/content/BlogPage/BlogPage';
import ReferencesPage from './components/content/ReferencesPage/ReferencesPage';
import StatsPage from './components/content/StatsPage/StatsPage';
import FriendsPage from './components/content/FriendsPage/Friends';
import AboutMePage from './components/content/AboutMePage/AboutMePage';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navmenu />
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/home'/>} />
        <Route path='/home' render={() => <HomePageContainer/>} />
        <Route path='/blog' render={() => <BlogPage />} />
        <Route path='/references' render={() => <ReferencesPage/>} />
        <Route path='/stats' render={() => <StatsPage/>} />
        <Route path='/friends' render={()=> <FriendsPage/>} />
        <Route path='/aboutme' render={()=> <AboutMePage/>} />
        <HomePageContainer />
      </Switch>
      <Footer />
    </div>
  );
}

const ParaSlovApp = () => {
  return (
    <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider>    
    </BrowserRouter>
  )
}

export default ParaSlovApp;
