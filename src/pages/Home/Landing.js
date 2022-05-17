import React from 'react';
import banner from '../../assets/bucketgirl 1.png'
const Landing = () => {
    return (
        <div>
            <div class="hero h-screen lg:h-[60vh] bg-accent mt-20 ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='h-[60vh] shrink-0'>
                    <img src={banner} class="h-full"  alt=''/>
                    </div>
                    <div>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>


            <div className='shadow-lg p-10 w-5/6 rounded-lg mt-[-20px] mx-auto'>
                <h1>GET Free Estimate </h1>
                <input placeholder='type Here' className='input input-bordered w-full max-w-xs' type="text" name="" id="" />
                <input placeholder='type Here' className='input input-bordered w-full max-w-xs' type="text" name="" id="" />
                <input placeholder='type Here' className='input input-bordered w-full max-w-xs' type="text" name="" id="" />
                <input placeholder='type Here' className='input input-bordered w-full max-w-xs' type="text" name="" id="" />
                <input placeholder='type Here' className='input input-bordered w-full max-w-xs' type="text" name="" id="" />
                <input placeholder='type Here' className='input input-bordered w-full max-w-xs' type="text" name="" id="" />
            </div>
        </div>
    );
};

export default Landing;