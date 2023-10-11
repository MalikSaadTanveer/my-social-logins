import React,{useState} from 'react'
import {
  LoginSocialFacebook,
} from 'reactjs-social-login';
import {
  FacebookLoginButton,
} from 'react-social-login-buttons';

const App = () => {
  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState();
  const REDIRECT_URI = 'https://my-social-logins.vercel.app/'
  return (
    <div>
      App
      <LoginSocialFacebook
          appId={process.env.REACT_APP_FB_APP_ID || '280465708222810'}
          fieldsProfile={
            'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
          }
          // onLogoutSuccess={onLogoutSuccess}
          redirect_uri={REDIRECT_URI}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
            console.log("My Resolve Data",provider, data)
          }}
          onReject={err => {
            console.log(err);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
    </div>
  )
}

export default App