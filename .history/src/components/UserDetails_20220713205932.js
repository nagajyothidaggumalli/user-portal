import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useParams } from "react-router-dom";

export default function UserDetails() {
    let { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState("");

    useEffect(() => {
        async function fetchUser() {
            const response = await fetch(
                `https://randomuser.me/api/?id=${encodeURIComponent(id)}`
            );
            const json = await response.json();
            setUser(json.results[0]);
            setIsLoading(false)

            //setIsLoading(user === null || user === undefined ? false : true)
            
        }
        fetchUser();
    }, [id]);

    console.log({user})
    return !isLoading ? (
        <Card sx={{ maxWidth: 1000 }}>
            <CardMedia component="img" alt={user.name.title} style={{width:"300px"}} image={user.picture.large} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {user.name.title} {user.name.first} {user.name.last}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {user.location.city},{user.location.state} {user.location.country}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Go to Main Page</Button>
            </CardActions>
        </Card>
    ) : (
        <h1>"No data Found"</h1>
    );
}
