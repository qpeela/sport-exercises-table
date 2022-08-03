import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { HomePage, AuthPage } from "./pages";

const Wrapper = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Wrapper />}>
                    <Route index element={<HomePage />} />
                    <Route path="auth" element={<AuthPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
