import React from "react";
import { useState,useEffect } from "react";
import { FaSearchLocation } from "react-icons/fa";
export default function Navbar(props){
    const [text,setText] = useState("")

    return(
        <div className=" Navbar">
            <a href="#Home"><p>Home</p></a>
            <div className="Search">
                <input type="text" placeholder="Enter Location" onChange={(event)=>{
                    const { name, value } = event.target;
                    setText(value)
                }} value={text}/>
                <FaSearchLocation onClick={()=>{
                    props.getNewData(text);
                    setText("")
                    }}/>
            </div>
        </div>
    )
}