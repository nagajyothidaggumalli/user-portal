import React, { useEffect, useState } from "react";
import { CardActionArea, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import UserDetails from "./UserDetails";

export default function UsersList() {
    const [users, setUsers] = useState([]);

    async function fetchData() {
        const response = await fetch("https://randomuser.me/api/?results=60");
        const json = await response.json();
        console.log(json);
        setUsers(json.results);
    }
    useEffect(() => {
        fetchData();
    }, []);

    const goToUserDetails = (id) => {
        console.log(id);
       // window.location = `/user/${id}`;
        window.location = "https://randomuser.me/api/?id=756.8080.8999.66"
    }

    return (
        <div>
            <Grid container spacing={24} style={{ padding: 24 }}>
                {users.map((user) => (
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        {/* <h1>
                            {user.name.first} {user.name.last} {user.name.title}
                        </h1> */}
                        <Card
                            style={{ padding: 30 }}
                            onClick={() => goToUserDetails(user.id.value)}
                        >
                            <CardMedia
                                style={{ height: 200 }}
                                image={user.picture.large}
                                title={user.name.title}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="headline"
                                    component="h2"
                                >
                                    {user.name.first} {user.name.last}{" "}
                                    {user.name.title}
                                </Typography>
                                <Typography component="p">
                                    {user.gender}
                                </Typography>
                            </CardContent>
                            
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <h1>hi</h1>
        </div>
    );
}
