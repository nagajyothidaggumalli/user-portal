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
            {employeeData.map((item) => (
                // eslint-disable-next-line react/jsx-no-undef
                <GridListTile
                    key={item.name}
                    cols={item.cols || 1}
                    component="a"
                    href="/"
                >
                    {/* <img src={tile.img} alt={tile.title} /> */}
                </GridListTile>
            ))}
        </GridList>
    );
}
