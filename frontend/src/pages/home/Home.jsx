import "./home.css"
import { useNavigate } from "react-router-dom"
import { ArrowRight } from 'react-bootstrap-icons';
import { useState, useEffect } from "react"
import localforage from "localforage"
import Cookie from "js-cookie"
import Error404 from "../../components/error404/Error404";

const Home = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    const isValid = isEmailValid && isChecked;

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleSubmit = () => {
        if (isValid) {
            navigate("/game-mode", { replace: true });
        } else {
            alert("Please enter a valid email and agree to the terms and conditions.");
        }
    };

    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)
    useEffect(()=> {
        //function to check if the admin is logged in before displaying the page
        localforage.getItem("user_email").then((feedback) => {
            if (feedback && Cookie.get(import.meta.env.VITE_TOKEN_NAME)){
                setIsAdminLoggedIn(true)
            }else{
                setIsAdminLoggedIn(false)
            }
        })

    }, [])

    return (
        <div>
            {isAdminLoggedIn ? <Error404 /> :
            <div className="disclaimer-body">
                <div className="disclaimer-wrapper">
                    <div className="disclaimer-text">
                        <p>DISCLAIMER!!!</p>
                        This platform does not offer real money. All the funds used and displayed on this site are strictly for demonstration purposes. This means that any money you see, earn, or lose while using this site is entirely fictional and has no real-world value. The purpose of this site is to provide a simulated environment for educational and entertainment purposes only. No actual monetary transactions occur here, and you cannot withdraw or deposit real funds. Any winnings, losses, or balances reflected in your account are purely virtual and cannot be converted into real money. We encourage all users to use this platform responsibly and to be aware that this is a simulated experience. The strategies, tips, and outcomes presented on this site do not guarantee any real-world financial gain or loss. Please enjoy this experience as a fun and informative tool without any expectation of actual financial benefit. By using this site, you acknowledge and agree to this disclaimer. If you have any questions or concerns, please do not hesitate to contact us.
                        <form className="form" style={{ width: "100%", border: "none" }}>
                            <div className="email-field">
                                <input
                                    className="email-field-input form-control"
                                    type="email"
                                    placeholder="enter email to proceed to game mode"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                <span className="email-info">Ensure you fill in your valid email as this would be used to send your demo reward</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'left', width: '100%', gap: '10px' }}>
                                <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                /> I agree to the terms and conditions
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'right', width: '100%' }}>
                                <button 
                                    onClick={handleSubmit} 
                                    className="enter-game-mode" 
                                    type="button"
                                    style={{ 
                                        backgroundColor: isValid ? 'black' : 'rgba(0, 0, 0, 0.363)', 
                                        cursor: isValid ? 'pointer' : 'not-allowed' 
                                    }}
                                    disabled={!isValid}
                                >
                                    continue <ArrowRight />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default Home;



















