//pages/index.js

import React from "react";
import Link from "next/link";
const HomePage = () => {
    // This is id for dynamic route, you
    // can change it to any value.
    const id = 1;
    return (
        <>
            <h1>Home Page</h1>
            <ul>
                <li>
                    <Link href="/users">
                        <a>Users</a>
                    </Link>
                </li>
                <li>
                    <Link href="/users/about">
                        <a>About Users</a>
                    </Link>
                </li>
                <li>
                    <Link href={`/users/${id}`}>
                        <a>User with id {id}</a>
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default HomePage;
