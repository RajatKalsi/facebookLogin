import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import axios from 'axios'
import GoogleMap from './map'
// declare let FB: any;
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const [data, setData] = useState({
    name: '',
    email: ''
  })
  const [state, setState] = useState([])
  const decodeToken = async (access_token: string, userId: string) => {
    // let res= await axios.get(`https://graph.facebook.com/v2.12/me?fields=first_name,last_name,email,name,picture.width(720)&access_token=${access_token}`)
    let res = await axios.get(`https://graph.facebook.com/me?fields=first_name,last_name,gender,birthday,email,name,picture.width(720)&access_token=${access_token}`)
    console.log(res, "resssssssss");
  }
  const loginWithFacebook = async () => {
    const win = window as any
    win.FB.login((response: any) => {
      decodeToken(response?.authResponse?.accessToken, response?.authResponse?.userID)
      console.log(response);
    }, { scope: ['email', 'user_birthday', 'user_gender'] });
  }
  const initLoginWithFacebook = () => {
    const win = window as any
    win.fbAsyncInit = () => {
      (window as any).FB?.init({
        appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: "v17.0"
      });
    }
  }
  const logout = () => {
    const win = window as any
    win?.FB?.logout(function (response: any) {
      console.log(response, "response");
    });
  }

  const handlechange = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({
      ...data,
      [name]: value
    })
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { email, name } = data
    const items = {
      email, name
    }
    let s = JSON.stringify(items)
    axios.post("https://testing-19123-default-rtdb.firebaseio.com/rajat.json", s)
    setData({
      name: "",
      email: ''
    })
  }
//   const loadGoogleMapScript = (callback: any) => {
//     if (typeof (window as any).google === 'object' && typeof (window as any).google.maps === 'object') {
//         callback();
//     } else {
//         const googleMapScript = document.createElement("script");
//         googleMapScript.src = `https://accounts.google.com/gsi/client`;
//         window.document.body.appendChild(googleMapScript);
//         googleMapScript.addEventListener("load", callback);
//     }
// }

  const handleCredentialResponse = async(value:any) => {
    console.log(value,"value");
  }
  useEffect(() => {
    initLoginWithFacebook()
  }, [])
  
  const GoogleLogin=async()=>{
    const win = window as any
    win?.google?.accounts?.id?.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_LOGIN_KEY,
      callback: handleCredentialResponse
    });
    win?.google?.accounts?.id?.prompt();
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
<>
      {/* <h1 className='bg-success'>sdha</h1> */}
      <button className='btn btn-danger' onClick={logout}>Logout</button>
      <button className='btn btn-success ms-5' onClick={loginWithFacebook} >LOGIN</button>
      <form onSubmit={handleSubmit}>
        <div className='mt-3'>
          <label className='ms-4'>Email</label>
          <input type="email" name="email" className='form-control w-50 ms-4' placeholder='Enter your Email' required value={data.email} onChange={handlechange} />
        </div>
        <div className='mt-3'>
          <label className='ms-4'>Name</label>
          <input type="text" className='form-control w-50 ms-4' name="name" placeholder='Enter your Name' required value={data.name} onChange={handlechange} />
        </div>
        <button type='submit' className='btn btn-danger mt-4 ms-4'>Submit</button>
      <button id="googlelogin" onClick={GoogleLogin} type="button">Login With Google</button>
      </form>
      <GoogleMap/>
      </>
    </main>
  )
}
