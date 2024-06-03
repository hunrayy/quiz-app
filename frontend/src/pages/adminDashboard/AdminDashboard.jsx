

import "./adminDashboard.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import AdminCreate from "../../components/adminCreate/adminCreate"
import AllQuestions from "../../components/AllQuestions/AllQuestions"
import { PencilSquare } from "react-bootstrap-icons"
import Cookie from "js-cookie"
import localforage from "localforage"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const AdminDashboard = () => {
    const {token} = useParams()
    const navigate = useNavigate()
    console.log("from admin dashboard", token)
    const [createContent, setCreateContent] = useState(false)
    const [allQuestions, setAllQuestions] = useState(false)
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

    const handleDelete = async() => {
        Cookie.remove(import.meta.env.VITE_TOKEN_NAME)
        const clearStorage = await localforage.clear()
        navigate("/",{
            replace: true
        })
    }





    return <div>
        {isAdminLoggedIn ? 
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{height: "100px"}}>
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <button className="nav-link btn">Home<span className="sr-only">(current)</span></button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn" onClick={()=> setCreateContent(true)}>create <PencilSquare /></button>
                        </li>
                        
                        <li className="nav-item">
                            <button className="nav-link btn" onClick={() => setAllQuestions(true)}>all questions</button>
                        </li>
                        <li className="nav-item active">
                            <button className="nav-link btn">Edit ui<span className="sr-only">(current)</span></button>
                        </li>
                        </ul>
                        
                        
                        <button className="btn btn-outline-success my-2 my-sm-0 text-danger" type="button" onClick={handleDelete}>Logout</button>
                       
                    </div>
                </nav>
            </header>
            <div>
                <div className="admin-page-container">
                    <div>
                        <h1>WELCOME BACK, ROOT ADMIN</h1>
                        <div className="admin-page-body">
                            <img src="data:image/png;base64,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" alt="" />
                            <div className="info">
                                <span>henryokiyi8@gmaill.com</span>
                                <span>super admin</span>
                                <span>create question</span>
                                <span>view all question</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>







            {/* all single page declaration */}

            {/* create content page */}
            <div>
                {createContent ? 
                <div onClick={()=> setCreateContent(false)}>
                    <AdminCreate />
                </div>
                : null}

            </div>

            {/* view all questions page */}
            <div>
                {allQuestions ? 
                <div onClick={()=> setAllQuestions(false)}>
                    <AllQuestions />
                </div>
                : null}

            </div>
        </div>: <div>Error, page not found</div>}
    </div>
}
export default AdminDashboard