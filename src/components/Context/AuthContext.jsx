import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../../public/firebase.config";

const auth = getAuth(app);

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

const AuthContext = () => {
  return <div></div>;
};

export default AuthContext;
