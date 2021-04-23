import React, { useEffect } from 'react';
import SignIn from './page/SignIn/SignIn';
import  Home  from './page/Home';
import { useDispatch, useSelector } from 'react-redux';
import { userApi } from './services/api/userApi';
import { fetchUserData, setUserData } from './store/ducks/user/actionCreatores';
import { Route, Switch, useHistory } from 'react-router-dom';
import { selectIsAuth, selectUserStatus } from './store/ducks/user/selectors';
import TwitterIcon from '@material-ui/icons/Twitter';

import UserPage from './page/UserPage';
import { LoadingStatus } from './store/ducks/types';
import { CircularProgress } from '@material-ui/core';
import { useStylesMain } from './style';

function App() {
    const classes = useStylesMain();
    const history = useHistory();
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);
    const loadingStatus = useSelector(selectUserStatus);
    const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING

    useEffect(() => {
        dispatch(fetchUserData());
    }, [])

    useEffect(() => {
        if (!isAuth && isReady) {
            history.push('/signin')
        } else if (isAuth && isReady) {
            history.push('/home')
        } 
        
    }, [isAuth, isReady])

    if (!isReady) {
        return(
            <div className={classes.centred}>
                <TwitterIcon style={{fontSize: "70px", color: "#fff"}} />
            </div>
        )
    }
    return (
        <div style={{background: "#000", overflow: "hidden"}}>
            {<Switch>
                <Route path="/signin" component={SignIn} exact/>
                <Route path="/home" component={UserPage}/>
                <Route path="/user" component={UserPage}/>
            </Switch>}
        </div>
    );
}

export default App;
