"use client"
import React, {useRef, useState} from 'react'
import './register.css'
import { Login } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

export default function Registration() {
    const router = useRouter();

    const [isLogin, setIsLogin] = useState(true)
    
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    
    
    const [registerUsername,setRegisterUsername] = useState("")
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    
     const ref=useRef();
    
    
    
     const register = async(e) => {
        e.preventDefault();
    
        const resgisterData = {
            UserName : registerUsername,
          Email: registerEmail ,
          Password : registerPassword
        }
    
        const  res = await fetch('http://localhost:8080/users/register', {
            method:'POST',
            body:JSON.stringify(resgisterData),
            credentials: "include", // added this part
            headers: {
              'content-type': 'application/json'
            }
        })
        const data= await res.json();
    
        if(data.status == 200) {
            router.push('/Home')
        }
     }
    
     const login = async(e) => {
    
        e.preventDefault();
    
        const submitData = {
            "Email": loginEmail,
            "Password" : loginPassword
        }
    
    
        const res = await fetch('http://localhost:8080/users/login',{
            method: 'POST',
            body: JSON.stringify(submitData),
            credentials: "include", // added this part
            headers: {
              'content-type': 'application/json'
            }
          })
         
         const data = await res.json()
         if(data.status == 200) {
            router.push('/Home')
        }
    
     }
    
     
     
    
      return (
        <div className={`container ${isLogin ? `right-panel-active` : ``}`} id="container">
        <div className="form-container sign-up-container">
            <form onSubmit={register}>
                <h1>Create Account</h1>
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" onChange={(e) => setRegisterUsername(e.target.value)}/>
                <input type="email" placeholder="Email" onChange={(e) => setRegisterEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setRegisterPassword(e.target.value)} />
                <button>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form onSubmit={login}>
                <h1>Sign in</h1>
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input type="text" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button onClick={() => setIsLogin(!isLogin)} className="ghost" id="signIn">Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button onClick={() => setIsLogin(!isLogin)} className="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
      )
}
