import React, { useEffect } from 'react';
import SignIn from './pages/SignIn/SignIn';
import  Home  from './pages/Home';
import { useDispatch } from 'react-redux';
import { authApi } from './services/api/authApi';
import { setUserData } from './store/ducks/user/actionCreatores';
function App() {
    const dispatch = useDispatch();

    const checkAuth = async () => {
        console.log(1231232);
        
        try {
            const {data} = await authApi.getMe();
            dispatch(setUserData(data))
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        checkAuth()
    }, [])

    return (
        <div style={{background: "#000", overflow: "hidden"}}>
            <SignIn/>
            {/* <Home/> */}
        </div>
    );
}

export default App;
