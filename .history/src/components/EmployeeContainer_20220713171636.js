import React, { useEffect, useState } from "react";
import GridList from "@mui/material";

export default function EmployeeContainer() {
    const [employeeData, setEmployeeData] = useState([]);

    async function fetchData() {
        const response = await fetch("https://randomuser.me/api/?results=60");
        const json = await response.json();
        console.log(json);
        setEmployeeData(json);
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {tileData.map((tile) => (
                <GridListTile
                    key={tile.img}
                    cols={tile.cols || 1}
                    component="a"
                    href="/"
                >
                    <img src={tile.img} alt={tile.title} />
                </GridListTile>
            ))}
        </GridList>
    );
}
