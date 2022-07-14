import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

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

    return (
        <div>
            <Grid container spacing={24} style={{ padding: 24 }}>
                {users.map((user) => (
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <h1>
                            {user.name.first}-{user.name.last}-{user.name.title}
                        </h1>
                        <Card>
                            <CardMedia
                                style={{ height: 0, paddingTop: "56.25%" }}
                                image={
                                    props.course.fields.courseImage.fields.file
                                        .url
                                }
                                title={props.course.fields.title}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="headline"
                                    component="h2"
                                >
                                    {props.course.fields.title}
                                </Typography>
                                <Typography component="p">
                                    {props.course.fields.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="primary"
                                    href={props.course.fields.url}
                                    target="_blank"
                                >
                                    Go To Course
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <h1>hi</h1>
        </div>
    );
}
