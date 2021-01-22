import React from 'react';
import './App.css';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Sitebar from "./components/Sitebar/Sitebar";
import {Route} from "react-router-dom";
import ProfilesFriends from "./components/Sitebar/ProfilesFriends/ProfilesFriends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializedSuccess} from "./redux/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializedSuccess()
    }

    render() {
        if (!this.props.initialized) {
        return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Sitebar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/mews' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/sveta'
                           render={() => <ProfilesFriends info={this.props.store.getState().sitebarPage.svetaInfo}/>}/>
                    <Route path='/andrey'
                           render={() => <ProfilesFriends info={this.props.store.getState().sitebarPage.andreyInfo}/>}/>
                    <Route path='/dimych'
                           render={() => <ProfilesFriends info={this.props.store.getState().sitebarPage.dimychInfo}/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(withRouter,
    connect(mapStateToProps, {initializedSuccess}))(App);
