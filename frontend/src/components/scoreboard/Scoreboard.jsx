


import { useState, useEffect } from "react";
import "./scoreboard.css"
const Scoreboard = () => {
    const [has_animation_happened, set_has_animation_happened] = useState(null)
    setTimeout(() => {
        // Store the value in browser storage after 7 seconds
        sessionStorage.setItem("has_animation_happened", "true");
        set_has_animation_happened(true)
    }, 7000);
    useEffect(()=> {
        const getItem = sessionStorage.getItem("has_animation_happened");
        if(getItem){
            set_has_animation_happened(true)
        }else{
            set_has_animation_happened(false)
        }
    }, [])
    return <div>
        <div className="score-board-cover">
            {/* <p className="score-board-title">SCORE BOARD</p> */}
            <div className="your-score">Your Score</div>
            <div className="score">$ 100</div>
            <div className="scores-list">
                <ul type="none">
                    <li className={has_animation_happened ? "white-color" : "white-color blink"}>15 $1 MILLION</li>

                    <li className={has_animation_happened ? "" : "up-animation"} style={{animationDelay: "2.6s"}}>
                        <div className={has_animation_happened ? "" : "down-animation"} style={{animationDelay: "3.6s"}}>14 $500,000</div>
                    </li>

                    <li className={has_animation_happened ? "" : "up-animation"} style={{animationDelay: "2.4s"}}>
                        <div className={has_animation_happened ? "" : "down-animation"} style={{animationDelay: "3.8s"}}>13 $250,000</div>
                    </li>

                    <li className={has_animation_happened ? "" : "up-animation"} style={{animationDelay: "2.2s"}}>
                        <div className={has_animation_happened ? "" : "down-animation"} style={{animationDelay: "4s"}}>12 $125,000</div>
                    </li>

                    <li className={has_animation_happened ? "" : "up-animation"} style={{animationDelay: "2s"}}>
                        <div className={has_animation_happened ? "" : "down-animation"} style={{animationDelay: "4.2s"}}>11 $64,000</div>
                    </li>

                    <li className={has_animation_happened ? "white-color " : "white-color up-animation"} style={{animationDelay: "1.8s"}}>
                        <div className={has_animation_happened ? "" : "down-animation"} style={{animationDelay: "4.4s"}}>10 $32,000</div>
                    </li>

                    <li className={has_animation_happened ? "" : "up-animation"} style={{animationDelay: "1.6s"}}>
                        <div className={has_animation_happened ? "" : "down-animation"} style={{animationDelay: "4.6s"}}>9 $16,000</div>
                    </li>

                    <li className={has_animation_happened ? "" : "up-animation"} style={{animationDelay: "1.4s"}}>
                        <div className={has_animation_happened ? "" : "down-animation"} style={{animationDelay: "4.8s"}}>8 $8,000</div>
                    </li>

                    <li className={has_animation_happened ? "" : "up-animation"} style={{animationDelay: "1.2s"}}>
                        <div className={has_animation_happened ? "" : "down-animation"} style={{animationDelay: "5s"}}>7 $4,000</div>
                    </li>

                    <li className={has_animation_happened ? "" : "up-animation"} style={{animationDelay: "1s"}}>
                        <div className={has_animation_happened ? "" : "down-animation"} style={{animationDelay: "5.2s"}}>6 $2,000</div>
                    </li>

                    <li className={has_animation_happened ? "white-color " : "white-color up-animation"} style={{animationDelay: ".8s"}}>
                        <div className={has_animation_happened ? "" : "down-animation"} style={{animationDelay: "5.4s"}}>5 $1,000</div>
                    </li>

                    <li className={has_animation_happened ? "" : "up-animation"} style={{animationDelay: ".6s"}}>
                        <div className={has_animation_happened ? "" : "down-animation"} style={{animationDelay: "5.6s"}}>4 $500</div>
                    </li>

                    <li className={has_animation_happened ? "" : "up-animation"} style={{animationDelay: ".4s"}}>
                        <div className={has_animation_happened ? "" : "down-animation"} style={{animationDelay: "5.8s"}}>3 $300</div>
                    </li>

                    <li className={has_animation_happened ? "" : "up-animation"} style={{animationDelay: ".2s"}}>
                        <div className={has_animation_happened ? "" : "down-animation"} style={{animationDelay: "6s"}}>2 $100</div>
                    </li>

                    <li className={has_animation_happened ? "" : "up-animation"}>
                        <div className={has_animation_happened ? "" : "down-animation"} style={{animationDelay: "6.2s"}}>1 $100</div>
                    </li>
                </ul>
            </div>

        </div>
    </div>
}

export default Scoreboard







// import "./score.css"
// const Scoreboard = () => {
//     return <div>
//         <div className="score-board-cover">
//             {/* <p className="score-board-title">SCORE BOARD</p> */}
//             <p className="your-score">Your Score</p>
//             <p className="score">$ 100</p>
//             <div className="scores-list">
//                 <ul type="none">
//                     <li className="white-color blink">15 $1 MILLION</li>

//                     <li className="up-animation down-animation" style={{animationDelay: "2.6s"}}>
//                         <div className="down-animation" style={{animationDelay: "3.6s"}}>14 $500,000</div>
//                     </li>

//                     <li className="up-animation down-animation" style={{animationDelay: "2.4s"}}>
//                         <div className="down-animation" style={{animationDelay: "3.8s"}}>13 $250,000</div>
//                     </li>

//                     <li className="up-animation down-animation" style={{animationDelay: "2.2s"}}>
//                         <div className="down-animation" style={{animationDelay: "4s"}}>12 $125,000</div>
//                     </li>

//                     <li className="up-animation down-animation" style={{animationDelay: "2s"}}>
//                         <div className="down-animation" style={{animationDelay: "4.2s"}}>11 $64,000</div>
//                     </li>

//                     <li className="white-color up-animation down-animation" style={{animationDelay: "1.8s"}}>
//                         <div className="down-animation" style={{animationDelay: "4.4s"}}>10 $32,000</div>
//                     </li>

//                     <li className="up-animation down-animation" style={{animationDelay: "1.6s"}}>
//                         <div className="down-animation" style={{animationDelay: "4.6s"}}>9 $16,000</div>
//                     </li>

//                     <li className="up-animation down-animation" style={{animationDelay: "1.4s"}}>
//                         <div className="down-animation" style={{animationDelay: "4.8s"}}>8 $8,000</div>
//                     </li>

//                     <li className="up-animation down-animation" style={{animationDelay: "1.2s"}}>
//                         <div className="down-animation" style={{animationDelay: "5s"}}>7 $4,000</div>
//                     </li>

//                     <li className="up-animation down-animation" style={{animationDelay: "1s"}}>
//                         <div className="down-animation" style={{animationDelay: "5.2s"}}>6 $2,000</div>
//                     </li>

//                     <li className="white-color up-animation down-animation" style={{animationDelay: ".8s"}}>
//                         <div className="down-animation" style={{animationDelay: "5.4s"}}>5 $1,000</div>
//                     </li>

//                     <li className="up-animation down-animation" style={{animationDelay: ".6s"}}>
//                         <div className="down-animation" style={{animationDelay: "5.6s"}}>4 $500</div>
//                     </li>

//                     {/* <li className="up-animation down-animation" style={{animationDelay: ".4s"}}>
//                         <div className="down-animation" style={{animationDelay: "5.8s"}}>3 $300</div>
//                     </li>

//                     <li className="up-animation down-animation" style={{animationDelay: ".2s"}}>
//                         <div className="down-animation" style={{animationDelay: "6s"}}>2 $100</div>
//                     </li>

//                     <li className="up-animation down-animation">
//                         <div className="down-animation" style={{animationDelay: "6.2s"}}>1 $100</div>
//                     </li> */}
//                 </ul>
//             </div>

//         </div>
//     </div>
// }

// export default Scoreboard