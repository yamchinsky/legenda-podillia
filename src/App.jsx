import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { CallToAction } from "./components/CallToAction";
import { Reports } from "./components/Reports";
import { ReportsItem } from "./components/ReportsItem";
import { UploadReports } from "./components/UploadReports";
import { AuthForm } from "./components/AuthForm";
import { NotFound } from "./components/NotFound";
import { Donation } from "./components/Donation";
import { Footer } from "./components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";

export const App = () => {
  const [authToken, setAuthToken] = useState("");

  const renderProtectedRoute = (Component) => {
    return authToken ? (
      <Component token={authToken} />
    ) : (
      <AuthForm setToken={setAuthToken} />
    );
  };

  return (
    <Router basename="/">
      <div className="flex flex-col min-h-screen overflow-hidden pt-2 bg-white">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/donate" element={<Donation />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/reports/:id" element={<ReportsItem />} />
            <Route
              path="/upload/reports"
              element={renderProtectedRoute(UploadReports)}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

const MainContent = () => (
  <>
    <section id="home">
      <Hero />
    </section>
    <section id="about">
      <AboutUs />
    </section>
    <section id="services">
      <Services />
    </section>
    <section id="portfolio">
      <Portfolio />
    </section>
    <section id="testimonials">
      <Testimonials />
    </section>
    <section id="callToAction">
      <CallToAction />
    </section>
  </>
);
