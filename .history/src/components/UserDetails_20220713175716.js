import React, { useEffect, useState } from "react";
import {
    useParams
  } from "react-router-dom";

export default function UserDetails() {
    let { id } = useParams();
    return (
        <div>User Details for {id}</div>
    );
}
