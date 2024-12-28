import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <section className='w-9/12 mx-auto'><Category></Category></section>
        </div>
    );
};

export default Home;