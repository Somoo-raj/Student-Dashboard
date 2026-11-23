import { Outlet } from "react-router-dom";

function Deshboard() {
    return (
        <>
            <h1>My Dashboard</h1>
            <Outlet />
        </>
    )
}

export default Deshboard;