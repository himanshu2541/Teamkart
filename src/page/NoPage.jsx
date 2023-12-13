import React from 'react'
import {Link} from "react-router-dom";
const noPageContainer = {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    margin: "2rem"
}

const NoPage = () => {
    return (
        <div style={{overflow: "hidden", height: "95vh"}}>
            <div style={noPageContainer}>
                <div style={{color: "white", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center", justifyContent: "center"}}>
                    <h1>Oops! Page Not Found</h1>
                    <div>
                    <Link to={'/'} style={{color: "red", textDecoration: "none", fontSize: "1.2rem", border: "2px solid red", padding: "0.5rem 1rem"}}>Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default NoPage
