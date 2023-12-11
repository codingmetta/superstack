import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    return (
        <div className="page-container">
            <Header />
            <>
                <Outlet />
            </>
            <Footer />
        </div>
    )
}