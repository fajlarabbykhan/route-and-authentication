import {
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";


import React from 'react';

const ActiveLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
            style={{ color: match ? "#0991B1" : "BLACK" }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    )

};

export default ActiveLink;
