import React from 'react';
import axios from "axios";
import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);


    // alert(
    //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    // );
    // window.location.href="https://prajal.vercel.app/"
    // axios.post('/http://localhost:4000/api/user/', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    window.localStorage.setItem('loginname', res.profileObj.name);
    window.localStorage.setItem('loginemail', res.profileObj.email);
    window.localStorage.setItem('profileImg', res.profileObj.imageUrl);

    window.location.href="/home"
   
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    // alert(
    //   `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    // );
  };

  return (
    <div >
      <GoogleLogin
        clientId={clientId}
        
        icon="false"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
     
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
