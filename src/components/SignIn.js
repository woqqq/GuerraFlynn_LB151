import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
//import firebase from "./firebase";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("")
  //const ref = firebase.firestore().collection("Familie und Freunde")
  

  useEffect(() =>{
    console.log(name);
  }, [name])

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (e) => {
    const inputText = e.target.value.trim();
    const lastChar = inputText.charAt(inputText.length - 1);

    if (lastChar === " ") {
      console.log(inputText);
      setName("");
    } else {
      setName(inputText);
    }
  };


  function createDoc(newDataObj){
    /*
    ref.doc().set(newDataObj).catch((err) => {
      alert(err)
    })
    */
  }

  return (
    <div className="sign-in-container">
      {!isLoggedIn ? (
        <form onSubmit={signIn}>
          <h1>Log In to your Account</h1>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
        </form>
      ) : (
        <div>
          <h1>Welcome!</h1>
          <input
            type="text"
            placeholder="Enter some text"
            value={name}
            id = "name1"
            onChange={handleInputChange}
          />
          <button onClick={()=>{
            createDoc({name})
            document.getElementById("name1").value = ""
          }}>Click to create new document</button>
        </div>
      )}
    </div>
  );
};

export default SignIn;
