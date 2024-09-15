import { useState } from "react";
import "./login.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";


function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();


 createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {

     const user = userCredential.user;
     console.log(user);
     
   })
   .catch((error) => {
   setError(true)
   });

  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  );
}

export default Login;
