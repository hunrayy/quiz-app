
import Scoreboard from "../../components/scoreboard/Scoreboard"
import "./gameMode.css"
import { Telephone } from "react-bootstrap-icons"
import { People } from "react-bootstrap-icons"
import { useState, useEffect } from "react"
import localforage from "localforage"
import Cookie from "js-cookie"
import Error404 from "../../components/error404/Error404"
import { useNavigate } from "react-router-dom"


const GameMode = () => {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)
    const [gameModeActive, setGamemodeActive] = useState(false)
    const navigate = useNavigate()
    useEffect(()=> {
        //function to check if the admin is logged in before displaying the page
        localforage.getItem("user_email").then((feedback) => {
            if (feedback && Cookie.get(import.meta.env.VITE_TOKEN_NAME)){
                setIsAdminLoggedIn(true)
            }else{
                setIsAdminLoggedIn(false)
            }
        })

        //function to check if a user is currently in gamemode before displaying the page
        const get_token = Cookie.get(import.meta.env.VITE_GAMEMODE_TOKEN)
        if(get_token){
            setGamemodeActive(true)
        }else{
            setGamemodeActive(false)
            navigate("/", {
                replace: true
            })
        }

    }, [])
    return <div>
        {isAdminLoggedIn | !gameModeActive ? <Error404 /> : 
<div className="body-wrapper">
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
        {/* <div className="life-lines-wrapper">
            <div className="life-line-cover ">
                <span>50:50</span>
            </div>
            <div className="life-line-cover">
                <Telephone size={25} color="white" />

            </div>
            <div className="life-line-cover">
                <People size={25} color="white" />
            </div>
        </div> */}
        <div className="body">
            <div className="body-cover">
                <div className="question-box">
                    <p>what king of shoe did cinderella lose while running from the ball at midnight</p>

                </div>
                <div className="option-box">
                    <div className="first-option">
                        <div className="option">
                            <span>A: </span>&nbsp;
                            <span>Ballet Slipper</span>
                        </div>
                        <div className="option">
                            <span>B: </span>&nbsp;
                            <span>Running show</span>
                        </div>
                    </div>
                    <div className="first-option">
                        <div className="option">
                            <span>C: </span>&nbsp;
                            <span>Sandal</span>
                        </div>
                        <div className="option">
                            <span>D: </span>&nbsp;
                            <span>Glass Slipper</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scoreboard-cover-div">
                <Scoreboard />
            </div>
        </div>
    </div>
</div>
</div>}

    </div>
}
export default GameMode