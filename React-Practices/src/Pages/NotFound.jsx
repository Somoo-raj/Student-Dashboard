import { useLocation } from "react-router-dom";

function NotFound() {
    const location = useLocation();
    console.log("Current Page:", location.pathname);

    return (
        <>
            <h1>404 Page Not Found</h1>
        </>
    )
}

export default NotFound;