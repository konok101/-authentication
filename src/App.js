 
import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react';


const auth = getAuth(app);
function App() {
  const [user, setUser]= useState({});
 const provider = new GoogleAuthProvider();

 const handleGoogleSignIn= ()=>{
   signInWithPopup(auth, provider)
   .then(result=>{
     const user = result.user;
     console.log(user);
     setUser(user)
   })
   .catch(error =>{
     console.error('error', error)
   })
 }

 const handleSingnOut= ()=>{
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
   user.email ? <button onClick={handleSingnOut}>SignOut</button>  :
  <button onClick={handleGoogleSignIn}>Google sign in</button>
   
 }
 <h2>Name: {user.displayName}</h2>
 <h6>Email: {user.email}</h6>
 <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
