


import "./scoreboard.css"
const Scoreboard = () => {
    return <div>
        <div className="score-board-cover">
            {/* <p className="score-board-title">SCORE BOARD</p> */}
            <p className="your-score">Your Score</p>
            <p className="score">$ 100</p>
            <div className="scores-list">
                <ul type="none">
                    <li className="white-color">15 $1 MILLION</li>
                    <li>14 $500,000</li>
                    <li>13 $250,000</li>
                    <li>12 $125,000</li>
                    <li>11 $64,000</li>
                    <li className="white-color">10 $32,000</li>
                    <li>9 $16,000</li>
                    <li>8 $8,000</li>
                    <li className="test">7 $4,000</li>
                    <li>6 $2,000</li>
                    <li className="white-color">5 $1,000</li>
                    <li>4 $500</li>
                    <li>3 $300</li>
                    <li>2 $100</li>
                    <li>1 $100</li>
                </ul>
            </div>

        </div>
    </div>
}

export default Scoreboard