import "../css/DropDownBtn.css";
import React, { useState } from "react";


const DropDownBtn = () => {
    return(
        <div className="menu-container">
                <select id="weekdays" required>
                    <option className="option" value=""disabled selected>ASSIGN WEEKDAY</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select>
        </div>
    );
    }
export default DropDownBtn; 





/* FIRST TRY


DROPDOWN FROM HERE: https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks

import "../css/DropDownBtn.css";
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';


const DropDownBtn = () => {
    // const dropdownRef = useRef(null);
    // const [isActive, setIsActive] = useState(false);
    // const onClick = () => setIsActive(!isActive);
    // const element = document.getElementById("button-change");
 

    // useEffect(() => {
    //     const pageClickEvent = (e) => {
    //         console.log(e);
    //     };
    
    //     if(isActive){
    //         window.addEventListener('click',pageClickEvent);
    //     }

    //     return () => {
    //         window.removeEventListener('click', pageClickEvent);
    //     }

    // }, [isActive]);

    return(
        <div className="menu-container">
            <button id="button-change" onClick={onClick} className="dropdown-button">
                <span>Assign Weekday</span>
            </button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}> 
                <ul>
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                    <li>Saturday</li>
                    <li>Sunday</li>
                </ul>
            </nav>

            <select>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
            </select>
        </div>
    );

    }
export default DropDownBtn; 
*/