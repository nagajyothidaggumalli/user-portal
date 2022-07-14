import React,{useEffect, useState} from "react";

export default function EmployeeContainer(){
    const [employeeData,setEmployeeData] = useState([]);

    useEffect(){
        async ()=>{
            
                const response = await fetch("https://randomuser.me/api/");
                const json = response.json();
                console.log(json);
            
        }
    }
    return(
        <h1>Employee details</h1>
    );
}