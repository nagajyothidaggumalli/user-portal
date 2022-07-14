import React, { useEffect, useMemo, useState } from "react";
import { Grid, IconButton, InputBase } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@mui/icons-material/Search";
import "./UserList.css";

export default function UsersList() {
    const [users, setUsers] = useState([]);
    const [searchText, setSearchText] = useState("");

    async function fetchData() {
        const response = await fetch("https://randomuser.me/api/?results=60");
        const json = await response.json();
        console.log(json);
        setUsers(json.results);
    }
    useEffect(() => {
        fetchData();
    }, []);

    const filteredList = useMemo(() => {
        // TODO write logic to filter 
        if (searchText) {
            return users.filter((user) => {
                return user.name.first.includes(searchText);
            });
        }
        return users;
    }, [searchText, users]);

    const goToUserDetails = (id, user) => {
        console.log(id, user);
        window.location = `/user/${encodeURIComponent(id)}`;
    };

    return (
        <div>
            <SearchInput
                searchText={searchText}
                setSearchText={setSearchText}
            />
            <Grid container spacing={24} style={{ padding: 24 }}>
                {filteredList.map((user) => (
                    <Grid item xs={12} sm={6} lg={4} xl={3} >
                        {/* <h1>
                            {user.name.first} {user.name.last} {user.name.title}
                        </h1> */}
                        <Card
                            style={{ padding: 30, margin: 20 }}
                            onClick={() => goToUserDetails(user.id.value, user)}
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
        </div>
    );
}

function SearchInput({ setSearchText, searchText }) {
    return (
        <div className="search-input">
            <InputBase
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search..."
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </div>
    );
}
