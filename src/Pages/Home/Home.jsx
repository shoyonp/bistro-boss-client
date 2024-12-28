import React, { Children } from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Chef from './Chef/Chef';
import PopularMenu from './PopularMenu/PopularMenu';
import Featured from './Featured/Featured';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <section className='w-9/12 mx-auto'><Category></Category></section>
           <section className='mb-10'><Chef></Chef></section>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
        </div>
    );
};

export default Home;