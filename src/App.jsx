import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
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

  // Conditional rendering for protected routes
  const renderProtectedRoute = (Component) => {
    return authToken ? <Component token={authToken} /> : <AuthForm setToken={setAuthToken} />;
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="flex flex-col min-h-screen overflow-hidden pt-2 bg-white">
            <Header />
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/reports/:id" element={<ReportsItem />} />
              <Route
                path="/upload/reports"
                element={
                  renderProtectedRoute(UploadReports) // Use the protected route handler
                }
              />
            </Routes>
            <Footer />
          </div>
        </Router>
      </PersistGate>
    </Provider>
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


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './redux/store';
// import { Header } from './components/Header';
// import { Hero } from './components/Hero';
// import { AboutUs } from './components/AboutUs';
// import { Services } from './components/Services';
// import { Portfolio } from './components/Portfolio';
// import { Testimonials } from './components/Testimonials';
// import { CallToAction } from './components/CallToAction';
// import { Reports } from './components/Reports';
// import { ReportsItem } from './components/ReportsItem';
// import { UploadReports } from './components/UploadReports';
// import { ProtectedRoute } from './components/ProtectedRoute';
// import { Footer } from './components/Footer';

// import './App.css';

// const App = () => {
//   const [authToken, setAuthToken] = useState('');

//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <Router>
//           <div className="flex flex-col min-h-screen overflow-hidden pt-2 bg-white">
//             <Header />
//             <Routes>
//               <Route path="/" element={<MainContent />} />
//               <Route path="/reports" element={<Reports />} />
//               <Route path="/reports/:id" element={<ReportsItem />} />
//               <Route
//                 path="/upload/reports"
//                 element={<ProtectedRoute element={UploadReports} token={authToken} />}
//               />
//             </Routes>
//             <Footer />
//           </div>
//         </Router>
//       </PersistGate>
//     </Provider>
//   );
// };

// const MainContent = () => (
//   <>
//     <Hero />
//     <AboutUs />
//     <Services />
//     <Portfolio />
//     <Testimonials />
//     <CallToAction />
//   </>
// );

// export default App;
