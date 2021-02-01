import { Button } from '@material-ui/core'
import React from 'react'
import { useStateValue } from './.StateProvider';
import { auth, provider } from './firebase'
import "./Login.css"
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //clever sign-in
        auth.signInWithPopup(provider).then((result) => {
            dispatch({type: actionTypes.SET_USER, 
                        user: result.user,})
        });
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Facebook_f_Logo_%28with_gradient%29.svg/1024px-Facebook_f_Logo_%28with_gradient%29.svg.png" alt=""/>
            </div>
            <div className="login__company">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Facebook%2C_Inc._Logo_2019.png/1600px-Facebook%2C_Inc._Logo_2019.png" alt=""/>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login;
