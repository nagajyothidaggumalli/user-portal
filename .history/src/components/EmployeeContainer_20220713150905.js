import React,{useEffect, useState} from "react";

export default function EmployeeContainer(){
    const [employeeData,setEmployeeData] = useState([]);

    async function fetchData(){
        const response = await fetch("https://randomuser.me/api/?");
        const json = await response.json();
        console.log(json);
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