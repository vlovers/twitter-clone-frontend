import React from 'react';
import logo from './logo.svg';
import SignIn from '../pages/SignIn';
import  Home  from '../pages/Home';
function App() {
    return (
        <div style={{background: "#000", overflow: "hidden"}}>
            <SignIn/>
            {/* <Home/> */}
        </div>
    );
}

export default App;
