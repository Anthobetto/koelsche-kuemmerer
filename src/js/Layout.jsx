// Layout.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WelcomePage } from './pages/WelcomePage.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Contact } from './pages/Contact.jsx';
import { Grad } from './pages/Grad.jsx';
import { Überuns } from './pages/Überuns.jsx';
import { Footer } from "./components/Footer.jsx";
import { AppProvider } from './store/appContext.js';
import { Datenschutz } from './pages/Datenschutz.jsx';

export const Layout = () => {
    return (
        <AppProvider>
            <div className="d-flex flex-column min-vh-100">
                <BrowserRouter>
                    <Navbar />
                    <div className="flex-grow-1">
                        <Routes>
                            <Route element={<WelcomePage />} path="/" />
                            <Route element={<Contact />} path="/kontakt" />
                            <Route element={<Grad />} path="360-grad-service" />
                            <Route element={<Überuns />} path="über-uns" />
                            <Route element={<Datenschutz />} path="datenschutz" />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </div>
        </AppProvider>
    );
};