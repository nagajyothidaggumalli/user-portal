import React,{useEffect, useState} from "react";

export default function EmployeeContainer(){
    const [employeeData,setEmployeeData] = useState([]);

    useEffect(
        ()=>{
             async function fetchData(){
                const response = await fetch("https://randomuser.me/api/");
                const json = await response.json();
                return json;
                
             }
             setEmployeeData(fetchData());
        },[])
    
    return(
        <h1>Employee details</h1>
    );
}