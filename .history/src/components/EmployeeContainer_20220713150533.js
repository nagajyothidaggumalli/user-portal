import React,{useEffect, useState} from "react";

export default function EmployeeContainer(){
    const [employeeData,setEmployeeData] = useState([]);

    useEffect(
        ()=>{
             async function fetchData(){
                const response = await fetch("https://randomuser.me/api/?results=5000");
                //const json = await response.json();
                console.log(response.json);
                setEmployeeData("hi"); 
             }
             fetchData();
        },[])
    
    return(
        <h1>Employee details</h1>
    );
}