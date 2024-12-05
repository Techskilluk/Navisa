import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { VisaPathways } from './components/VisaPathways';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { LevelUp } from './components/LevelUp';
import { CheckEligibility } from './screens/CheckEligibility';
import { SignIn } from './screens/auth/SignIn';
import { SignUp } from './screens/auth/SignUp';
import { Verify } from './screens/auth/Verify';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <Process />
                <VisaPathways />
                <Testimonials />
                <FAQ />
                <LevelUp />
              </>
            } />
            <Route path="/check-eligibility" element={<CheckEligibility />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/verify" element={<Verify />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;