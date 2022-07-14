import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function UsersList() {
    const [users, setUsers] = useState([]);

    async function fetchData() {
        const response = await fetch("https://randomuser.me/api/?results=60");
        const json = await response.json();
        console.log(json);
        setUsers(json);
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (

        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.courses.map(currentCourse => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Course course={currentCourse} />
                                </Grid>
                            ))}
        </Grid>
        <h1>hi</h1>
    );
}
