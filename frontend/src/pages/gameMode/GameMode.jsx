import Scoreboard from "../../components/scoreboard/Scoreboard"
import "./gameMode.css"
import { useState, useEffect } from "react"
import localforage from "localforage"
import Cookie from "js-cookie"
import Error404 from "../../components/error404/Error404"
import { useNavigate } from "react-router-dom"
import bcrypt from "bcryptjs-react";
import mainTheme from "../../audios/mainTheme.mp3"
import correctAnswer from "../../audios/correctAnswer.mp3"
import wrongAnswer from "../../audios/wrongAnswer.mp3"

const mainThemeAudio = new Audio(mainTheme)
const correctAnswerAudio = new Audio(correctAnswer)
const wrongAnswerAudio = new Audio(wrongAnswer)
const GameMode = () => {
    // const audio = new Audio(main)
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)
    const [gameModeActive, setGamemodeActive] = useState(false)
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [isAudioNotificationVisible, setIsAudioNotificationVisible] = useState(true);
    const navigate = useNavigate()


    const isOptionRight = async(optionPicked, rightOption) => {
        
       
        const compareOption = await bcrypt.compare(optionPicked, rightOption)
        console.log(compareOption)
        
        if(compareOption){
            // alert("Correct, That's the right answer")
            mainThemeAudio.pause()
            correctAnswerAudio.play()
            correctAnswerAudio.loop = true
        }else{
            mainThemeAudio.pause()
            wrongAnswerAudio.play()
            wrongAnswerAudio.loop = true
        }

    }


    

    useEffect(()=> {
        //function to check if the admin is logged in before displaying the page
        localforage.getItem("user_email").then((feedback) => {
            if (feedback && Cookie.get(import.meta.env.VITE_TOKEN_NAME)){
                setIsAdminLoggedIn(true)
            } else {
                setIsAdminLoggedIn(false)
            }
        })

        //function to check if a user is currently in gamemode before displaying the page
        const get_token = Cookie.get(import.meta.env.VITE_GAMEMODE_TOKEN)
        if(get_token){
            setGamemodeActive(true)
        } else {
            setGamemodeActive(false)
            navigate("/", {
                replace: true
            })
        }

        // Retrieve questions from localforage
        localforage.getItem("questions").then((storedQuestions) => {
            if (storedQuestions && storedQuestions.length > 0) {
                // Set the questions state
                setQuestions(storedQuestions);
                // Set the currentQuestion state to the first question
                setCurrentQuestion(storedQuestions[0]);
            } else {
                // Handle case where no questions are found
                // For example, display an error message or redirect
            }
        });




    }, [])


    useEffect(() => {
        // Call the displayQuestionOnPage function when currentQuestion changes
        if (currentQuestion !== null) {
            console.log(currentQuestion)
        }
    }, [currentQuestion]);

    return (
        <div>
            {isAdminLoggedIn | !gameModeActive ? (
                <Error404 />
            ) : (
                isAudioNotificationVisible ? 
                    <div className="body-wrapper">
                        <div className="game-box">
                            <div className="notification-wrapper">
                                <p>This website uses audio. please adjust your volume accordingly</p>
                                <button className="notification-wrapper-button btn btn-primary" onClick={()=> {setIsAudioNotificationVisible(false), mainThemeAudio.play(), mainThemeAudio.loop = true}}>Continue</button>
                            </div>
                        </div>

                    </div>
                :
                (<div className="body-wrapper">
                    <div className="game-box">
                        <p className="title">
                            <span className="up">WHO</span>
                            <span className="down">WANTS</span> 
                            <span className="up">TO</span> 
                            <span className="down">BE</span> 
                            <span className="up">A </span>
                            <span>MILLIONAIRE</span>
                        </p>
                        <div className="main-cover">
                            <div className="body">
                                <div className="body-cover">
                                    <div className="question-box">
                                        <p>{currentQuestion? currentQuestion.question : ""}</p>
                                    </div>
                                    <div className="option-box">
                                        <div className="first-option">
                                            {currentQuestion ? currentQuestion.options.slice(0, 2).map((option, index) => {
                                                return (
                                                    <div key={index} className="option" onClick={() => isOptionRight(option, currentQuestion.rightOption)}>
                                                        {String.fromCharCode(65 + index)}: {option}
                                                    </div>
                                                );
                                            }) : ""}
                                        </div>

                                        <div className="first-option">
                                            {currentQuestion ? currentQuestion.options.slice(2).map((option, index) => {
                                                return (
                                                    <div key={index} className="option" onClick={() => isOptionRight(option, currentQuestion.rightOption)}>
                                                        {String.fromCharCode(67 + index)}: {option}
                                                    </div>
                                                );
                                            }) : ""}
                                        </div>
                                    </div>
                                </div>
                                <div className="scoreboard-cover-div">
                                    <Scoreboard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)

            )}
        </div>
    );
}

export default GameMode;























// import Scoreboard from "../../components/scoreboard/Scoreboard"
// import "./gameMode.css"
// import { Telephone } from "react-bootstrap-icons"
// import { People } from "react-bootstrap-icons"
// import { useState, useEffect } from "react"
// import localforage from "localforage"
// import Cookie from "js-cookie"
// import Error404 from "../../components/error404/Error404"
// import { useNavigate } from "react-router-dom"


// const GameMode = () => {
//     const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)
//     const [gameModeActive, setGamemodeActive] = useState(false)
//     const [questions, setQuestions] = useState([]);
//     const [currentQuestion, setCurrentQuestion] = useState(null);




//     const navigate = useNavigate()




//     const displayQuestionOnPage = () => {
//         console.log(currentQuestion)

//     }

//     useEffect(()=> {
//         //function to check if the admin is logged in before displaying the page
//         localforage.getItem("user_email").then((feedback) => {
//             if (feedback && Cookie.get(import.meta.env.VITE_TOKEN_NAME)){
//                 setIsAdminLoggedIn(true)
//             }else{
//                 setIsAdminLoggedIn(false)
//             }
//         })

//         //function to check if a user is currently in gamemode before displaying the page
//         const get_token = Cookie.get(import.meta.env.VITE_GAMEMODE_TOKEN)
//         if(get_token){
//             setGamemodeActive(true)
//         }else{
//             setGamemodeActive(false)
//             navigate("/", {
//                 replace: true
//             })
//         }


//         // Retrieve questions from localforage
//         localforage.getItem("questions").then((storedQuestions) => {
//             if (storedQuestions && storedQuestions.length > 0) {
//             // Set the questions state
//             setQuestions(storedQuestions);
//             // Set the currentQuestion state to the first question
//             setCurrentQuestion(storedQuestions[0]);
//             displayQuestionOnPage()
//             } else {
//             // Handle case where no questions are found
//             // For example, display an error message or redirect
//             }
//         });

//     }, [])

//     return <div>
//         {isAdminLoggedIn | !gameModeActive ? <Error404 /> : 
// <div className="body-wrapper">
// <div className="game-box">
//     <p className="title">
//         <span className="up">WHO</span>
//         <span className="down">WANTS</span> 
//         <span className="up">TO</span> 
//         <span className="down">BE</span> 
//         <span className="up">A </span>
//         <span>MILLIONAIRE</span>
//     </p>
//     <div className="main-cover">
//         {/* <div className="life-lines-wrapper">
//             <div className="life-line-cover ">
//                 <span>50:50</span>
//             </div>
//             <div className="life-line-cover">
//                 <Telephone size={25} color="white" />

//             </div>
//             <div className="life-line-cover">
//                 <People size={25} color="white" />
//             </div>
//         </div> */}
//         <div className="body">
//             <div className="body-cover">
//                 <div className="question-box">
//                     <p>what king of shoe did cinderella lose while running from the ball at midnight</p>

//                 </div>
//                 <div className="option-box">
//                     <div className="first-option">
//                         <div className="option">
//                             <span>A: </span>&nbsp;
//                             <span>Ballet Slipper</span>
//                         </div>
//                         <div className="option">
//                             <span>B: </span>&nbsp;
//                             <span>Running show</span>
//                         </div>
//                     </div>
//                     <div className="first-option">
//                         <div className="option">
//                             <span>C: </span>&nbsp;
//                             <span>Sandal</span>
//                         </div>
//                         <div className="option">
//                             <span>D: </span>&nbsp;
//                             <span>Glass Slipper</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="scoreboard-cover-div">
//                 <Scoreboard />
//             </div>
//         </div>
//     </div>
// </div>
// </div>}

//     </div>
// }
// export default GameMode


