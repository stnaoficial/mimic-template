import { BrowserRouter, Route, Routes } from "react-router";
import { Dev } from "./pages/Dev";

export default function () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dev />} />
            </Routes>
        </BrowserRouter>
    );
}