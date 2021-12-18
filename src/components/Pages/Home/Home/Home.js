import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ClientReview from '../ClientReview/ClientReview';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Statistics from '../Statistics/Statistics';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Statistics></Statistics>
            <ClientReview></ClientReview>
            <About></About>
            <Footer></Footer> 
        </div>
    );
};

export default Home;