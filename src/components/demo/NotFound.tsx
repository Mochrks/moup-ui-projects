import { notFound } from '@/assets';
import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div className="h-screen flex flex-col  items-center justify-center z-50">
            <img src={notFound} alt="404" className='w-[30rem]' />
            <p className="text-gray-600">Sorry, the page you are looking for does not exist.</p>
        </div>
    );
};


export default NotFound;

