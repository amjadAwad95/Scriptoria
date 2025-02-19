import "./EmailVerification.css"
import EmailVerificationButton from "./EmailVerificationButton";
import EmailVerificationFormBody from "./EmailVerificationFormBody";

const EmailVerification = (props) => {
    return (
        <div className="container d-flex justify-content-center align-items-center " style={{ minHeight: "90vh" }}>
            <div className="row justify-content-center mt-5  text-center">
                <div className="col">
                    <div className="card email-verification-body">
                        <div className="card-body">
                            <span className="Scriptoria Scriptoria-title my-3 ">Scriptoria</span>
                            <br />
                            <span>{props.cardType}</span>
                            <p className="my-3 card-text-Verification-email text-center">
                                {props.text}
                            </p>
                            <form className="mb-2">
                                <EmailVerificationFormBody
                                    type={props.type}
                                    placeholder={props.inputPlaceholder}
                                    methodOnChange={props.methodOnChange}
                                    inputColor={props.inputColor}
                                    inputError={props.inputError}
                                />
                                <EmailVerificationButton title={props.buttonTitle} methodOnClick={props.methodOnClick} />
                                <p style={{ fontWeight: "bold", color: "red", fontSize: "25px" }}> {props.invalid} </p>
                            </form>
                            {props.buttonTitle2 ? <EmailVerificationButton title={props.buttonTitle2} methodOnClick={props.methodOnClick2} /> : <></>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EmailVerification;