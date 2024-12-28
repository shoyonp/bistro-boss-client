import chefimg from '../../../assets/home/chef-service.jpg'
const Chef = () => {
    return (
        <div style={{backgroundImage:`url(${chefimg})`, padding:'80px'}}>
            <div className='bg-white p-24 text-center'>
                <h2 className='text-4xl mb-2 font-extralight font-serif'>Bistro Boss</h2>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Chef;