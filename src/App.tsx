import React, { useEffect } from 'react';
import SignIn from './pages/SignIn/SignIn';
import  Home  from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { authApi } from './services/api/authApi';
import { setUserData } from './store/ducks/user/actionCreatores';
import { Route, Switch, useHistory } from 'react-router-dom';
import { selectIsAuth } from './store/ducks/user/selectors';

import UserPage from './pages/UserPage';
function App() {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);

    const history = useHistory()
    
    
    const checkAuth = async () => {
        
        try {
            const {data} = await authApi.getMe();
            dispatch(setUserData(data))
        } catch (error) {

            
        }
    }

    useEffect(() => {
        checkAuth()
    }, [])

    useEffect(() => {
        if (isAuth) {
            history.push('/home')
        }
        
    }, [isAuth])

    return (
        <div style={{background: "#000", overflow: "hidden"}}>
            <Switch>
                <Route path="/signin" component={SignIn} exact/>
                <Route path="/home" component={Home}/>
                <Route path="/user" component={UserPage}/>
            </Switch>
        </div>
    );
}

export default App;
