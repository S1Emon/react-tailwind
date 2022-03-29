import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'Limited Free Options',
                'Limited Access',
                'Few Clients',
                'Limited Storage',
                'Life Time Access',
                '6/1 Help'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benefits: [
                'Everything is Free',
                'Full Access',
                'More Clients',
                '250GB Storage',
                'Life Time Access',
                '12/5 Help'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, benefits: [
                'Everything is Free',
                'Full Access',
                'All Clients',
                'Unlimited Storage',
                'Life Time Access',
                '24/7 Help'
            ]
        },
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deals in the Town</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus saepe temporibus maxime consequuntur quis tempora fugiat facilis, id ullam ratione!</p>

            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOption.map(option => <PricingOption key={option.id} option={option}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;