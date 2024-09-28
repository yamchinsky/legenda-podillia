import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Reports } from './components/Reports';
import { ReportsItem } from './components/ReportsItem';
import { UploadReports } from './components/UploadReports';
import { AuthForm } from './components/AuthForm';
import { Footer } from './components/Footer';

import './App.css';

export const App = () => {
  const [authToken, setAuthToken] = useState('');

  const renderProtectedRoute = (Component) => {
    return authToken ? <Component token={authToken} /> : <AuthForm setToken={setAuthToken} />;
  };

  return (

    <Router basename={import.meta.env.MODE === 'production' ? '/legenda-podillia' : '/'}>
      <div className="flex flex-col min-h-screen overflow-hidden pt-2 bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/reports/:id" element={<ReportsItem />} />
          <Route
            path="/upload/reports"
            element={
              renderProtectedRoute(UploadReports)
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const MainContent = () => (
  <>
    <Hero />
    <AboutUs />
    <Services />
    <Portfolio />
    <Testimonials />
    <CallToAction />
  </>
);
