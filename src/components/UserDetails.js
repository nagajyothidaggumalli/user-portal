import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";


async function fetchUser(id, cb) {
    const response = await fetch(
        `https://randomuser.me/api/?id=${encodeURIComponent(id)}`
    );
    const json = await response.json();
    cb(json);
}

export default function UserDetails() {
    let { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState("");

    useEffect(() => {
        fetchUser(id, (json) => {
            setUser(json.results[0]);
            setIsLoading(false);
        });
    }, [id]);

    const onRefresh = () => {
        fetchUser(id, (json) => {
            setUser(json.results[0]);
            setIsLoading(false);
        });
    };

    return !isLoading ? (
        <Card sx={{ maxWidth: 1000 }}>
            <Button variant="outlined" style={{float: 'right'}} onClick={onRefresh}>Refresh</Button>
            <CardMedia component="img" alt={user.name.title} style={{width:"300px"}} image={user.picture.large} />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <strong>Name: </strong>  {user.name.title} {user.name.first} {user.name.last}
                  <br/>
                  <strong>DOB: </strong> {user.dob.date}
                  <br/>
                  <strong>Gender:</strong> {user.gender}
                  <br/>
                  <strong>Age:</strong> {user.dob.age}
                  <br/>
                  <strong>Mobile: </strong> {user.phone} 
                  <br/> <strong>Email: </strong> {user.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Address: <br/></strong> {user.location.street.number},{user.location.street.name}
                            <br/>{user.location.city},{user.location.state},{user.location.country}-{user.location.postcode}
                </Typography>
                
            </CardContent>
            <CardActions>
                <Link size="small" to="/">Go to Main Page</Link>
            </CardActions>
        </Card>
    ) : (
        <h1>"No data Found"</h1>
    );
}
