import { useState } from "react";
import ConnectButton from "../connect-button/ConnectButton";
import JoinInput from "../join-input/JoinInput";
import validator from "validator";
import "./SignUp.css"
import { Link } from "react-router-dom";
import { createAccount } from "../../api/accountApi.js"

const SignUp = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState("rgb(33,33,33)")
    const [user, setUser] = useState({})
    const [goToInfo, setGoToInfo] = useState(false)

    const signUpHandler = async () => {

        let validatorCounter = 0;
        if (validator.isEmail(email)) {
            validatorCounter++;
            setEmailError("rgb(33,33,33)");
        }
        else {
            setEmailError("red");
        }
        if (password === confirmPassword) {
            validatorCounter++;
        }
        if (validatorCounter !== 2) {
            setError("Invalid data");
            setGoToInfo(false)
        }
        else {
            setError(null)
            setEmailError("")
            const user = {
                userName, email, password
            }
            setUser(user)
            await createAccount({
                displayName: "amjad",
                userName: "amjad awad",
                email: "amjadawad129@gmail.com",
                dateOfBirth: "10/6/20040",
                type: "both",
                gender: "m",
                password: "123456789"
            })
        }
    }
    return (
        (!goToInfo) ?
            <>
                <div className="container d-flex justify-content-center align-items-center my-3">
                    <div className="row">
                        <div className="col-12 col-lg-6 box-1 d-flex justify-content-center align-items-center text-center">
                            <div>
                                <span className="box1-header">Welcome Back!</span>
                                <p className="box1-text">sign in to continue your creativity with spectoria</p>
                                <Link to={`/SignIn`} className="card-text" target="">
                                    <button className="btn login-button">Login</button>
                                </Link>
                            </div>
                            <div className="side-box1"></div>
                        </div>
                        <div className="col-12 col-lg-6 box-2 d-flex flex-column align-items-center text-center">
                            <div>
                                <span className="box2-header">Create Account</span>
                            </div>
                            <div>
                                <form>
                                    <JoinInput title="name" method={setUserName} type="text" />
                                    <JoinInput title="email" method={setEmail} color={emailError} type="email" />
                                    <JoinInput title="password" method={setPassword} type="password" />
                                    <JoinInput title="confirm password" method={setConfirmPassword} type="password" />
                                </form>
                            </div>
                            <button className="btn signup-btn" onClick={signUpHandler}>Sign Up</button>
                            <p className="error-text">{error}</p>
                            <div className="hr-div">
                                <hr className="signup-hr" />
                                <span>Or connect with</span>
                            </div>
                            <div className="connect-button">
                                <ConnectButton icon="bi bi-google" />
                                <ConnectButton icon="bi bi-apple" />
                                <ConnectButton icon="bi bi-facebook" />
                            </div>
                        </div>
                    </div>
                </div>
            </> : <SignUpInfo user={user} />
    )
}

export default SignUp;