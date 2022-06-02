 
import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react';


const auth = getAuth(app);
function App() {
  const [user, setUser]= useState({});
 const googleProvider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();

/*  sign in function for google */
 const handleGoogleSignIn= ()=>{
   signInWithPopup(auth, googleProvider)
   .then(result=>{
     const user = result.user;
     console.log(user);
     setUser(user)
   })
   .catch(error =>{
     console.error('error', error)
   })
 }
/* Sign iin function for github */
const handleGithubSignIn= ()=>{
  signInWithPopup(auth, githubProvider)
  .then(result=>{
    const user = result.user;
    setUser(user)
  })
  .catch(error=>{
    console.log('error',error)
  })
}

/* google sign out for function */
 const handleSingnOutGoogle= ()=>{
   signOut(auth)
   .then( ()=> {
     setUser({});
   })
   .catch(error =>{
     setUser({});
   })
 }

 

 
  return (
    <div className="App">
 {
   user.uid ? 
   <button onClick={handleSingnOutGoogle}>SignOut</button>
    :
 <>
  
    <button onClick={handleGoogleSignIn}>Google sign in</button>
    <button onClick={handleGithubSignIn}>Gitub dign in</button>
 </>
   
 }
 <h2>Name: {user.displayName}</h2>
 <h6>Email: {user.email}</h6>
 <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
