import React from 'react';
import Benefit from '../Benefit/Benefit';
import { ArrowRightIcon } from '@heroicons/react/solid'

const PricingOption = (props) => {
    const { name, price, benefits } = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='text-xl font-bold bg-indigo-300 rounded py-3'>{name}</h2>
            <p className='mt-4'>
                <span className='text-6xl font-bold'>{price}</span>
                <span className='font-bold text-xl text-gray-500'>/mo</span>
            </p>
            <div>
                <h2 className='text-xl text-left'>Benefits:</h2>
                {
                    benefits.map(benefit => <Benefit
                        benefit={benefit}
                    ></Benefit>)
                }
            </div>
            <button className='bg-green-500 flex justify-center w-full py-2 font-bold text-white mt-4 rounded hover:bg-green-800'>
                Buy Now <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;