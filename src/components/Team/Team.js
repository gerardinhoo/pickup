import React from "react";
import "./Team.css";





const Team = () => {
    return (
        
 <div>          
        <nav className="navbar bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" href="teams">Teams</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="">Standing</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="scores">Scores</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="players">Players</a>
                </li>
            </ul>
        </nav>
</div>

    );
}



export default Team;