import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Hero from './components/Hero';
import KeyProblems from './components/KeyProblems';
import './App.css';
import KeyMetrics from './components/KeyMetrics';
import Reviews from './components/Reviews';
import ProblemTarget from './components/ProblemTarget';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import Navbar from './components/NavBar';

const App = () => {
    return (
        <div>
            <Navbar/>
            <Hero />
            <KeyProblems />
            <KeyMetrics/>
            <Reviews/>
            <ProblemTarget/>
            <CtaSection/>
            <Footer/>

        </div>
    );
};

export default App;
