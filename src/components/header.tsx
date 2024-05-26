import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Create from '../pages/create';

function Header() {
    return (
        <>
            <BrowserRouter>
                <header>
                    <Link to="/">create</Link>
                    <Routes>
                        <Route path="/create" element={<Create />} />
                    </Routes>
                </header>
            </BrowserRouter>
        </>
    );
}

export default Header;
