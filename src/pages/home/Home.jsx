
import DisclaimerText from "../../components/disclaimerText/DisclaimerText"
import Scoreboard from "../../components/scoreboard/scoreboard"
import "./home.css"
// import { HeartFill } from 'react-bootstrap-icons';
const Home = () => {
    return<div>
        {/* <DisclaimerText />          */}
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
                    <div className="life-lines-wrapper">
                        <div className="life-line-cover">
                            <span>50:50</span>
                        </div>
                        <div className="life-line-cover">
                            {/* <HeartFill /> */}

                        </div>
                        <div className="life-line-cover">

                        </div>
                    </div>
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
        </div>

    </div>
}
export default Home
