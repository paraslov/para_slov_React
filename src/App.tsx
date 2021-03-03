import React from 'react';
import { Route, BrowserRouter, Switch, Redirect, HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import './App.css';
import Header from './components/common/Header/Header';
import NavMenuContainer from './components/common/Navigation/Navmenu';
import Footer from './components/common/Footer/Footer';
import store from './redux/store'
import HomePageContainer from './components/content/HomePage/HomePage';
import FriendsPage from './components/content/FriendsPage/Friends';
import AboutMePage from './components/content/AboutMePage/AboutMePage';
import BlogPageContainer from './components/content/BlogPage/BlogPage';
import ReferencesPageContainer from './components/content/ReferencesPage/ReferencesPage';
import StatsPageContainer from './components/content/StatsPage/StatsPageContainer';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavMenuContainer />
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/home'/>} />
        <Route path='/home' render={() => <HomePageContainer/>} />
        <Route path='/blog' render={() => <BlogPageContainer />} />
        <Route path='/references' render={() => <ReferencesPageContainer/>} />
        <Route path='/stats' render={() => <StatsPageContainer/>} />
        <Route path='/friends' render={()=> <FriendsPage/>} />
        <Route path='/aboutme' render={()=> <AboutMePage/>} />
      </Switch>
      <Footer />
    </div>
  );
}

const ParaSlovApp = () => {
  return (
    //! using HashRouter instead of BrowserRouter to prevent 404 with page refresh
    //TODO: resolve this problem by using webpack
    <HashRouter>
      <Provider store = {store}>
        <App />
      </Provider>    
    </HashRouter>
  )
}

export default ParaSlovApp;
