import "./sign-in-component-styles.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignInForm from "../../components/sign-in-form/sign-in-form-renderer";
import SignUpForm from "../../components/sign-up-form/sign-up-form-renderer";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;
