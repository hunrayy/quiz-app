

import "./allQuestions.css"
import { useState, useEffect } from "react"
import { Pen} from "react-bootstrap-icons"
import { PatchQuestion } from "react-bootstrap-icons"
import { Trash3 } from "react-bootstrap-icons"
import axios from "axios"
import Cookies from "js-cookie"
const AllQuestions =  () => {
    const [allQuestions, setAllQuestions] = useState([])



    useEffect(()=>{
        const token = Cookies.get(import.meta.env.VITE_TOKEN_NAME)
        console.log(token)
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/get-all-questions`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((feedback) => {

            console.log(feedback)
            if(feedback.data.code === "success"){
                setAllQuestions(feedback.data.data)
            }
        })
    }, [])

    return <div className="all-questions-blur">
        <div className="all-questions-wrapper" onClick={(e) => e.stopPropagation()}>
            {allQuestions ? allQuestions.slice().reverse().map((each_question) => {
                // console.log(each_question)
                return <div className="each-question">
                    <div style={{display: "flex", justifyContent: "right", gap: "7px", marginBottom: "10px"}}>
                        <div style={{padding: "10px", boxShadow: "0px 0px 5px 0px black", borderRadius: "10px", cursor: "pointer"}}>
                            <Pen size={20} />

                        </div>
                        <div style={{padding: "10px", boxShadow: "0px 0px 5px 0px black", borderRadius: "10px", cursor: "pointer"}}>
                            <Trash3 />

                        </div>

                    </div>
                                
                    <div>
                        <div style={{fontWeight: "bold"}}>
                            Id: {each_question._id}
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", gap: "0px"}}>
                        <span style={{fontWeight: "bold"}}>Question <PatchQuestion />: </span>
                        <p>{each_question.question}</p>
                    </div>
                    <div className="options">
                        <span style={{fontWeight: "bold"}}>Options</span>
                        {each_question.options.map((each_option) =>{
                            return <span>{each_option}</span>
                        })}
                    </div>
                    <div style={{fontWeight: "bold"}}>
                        <label>Right option:</label>&nbsp;
                        <span>{each_question.rightOption}</span>
                    </div>
                </div>})
            : "no questions yet"}
        </div>
    </div>
}

export default AllQuestions