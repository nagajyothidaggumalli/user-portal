import React,{useEffect, useState} from "react";

export default function EmployeeContainer(){
    const [employeeData,setEmployeeData] = useState([]);

    async function fetchData(){
        const response = await fetch("https://randomuser.me/api/?results=5000");
        //const json = await response.json();
        console.log(response.text);
        setEmployeeData("hi"); 
     }
    useEffect(
        ()=>{
             
             fetchData();
        },[])
    
    return(
        <h1>Employee details</h1>
    );
}