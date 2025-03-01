import React from 'react';
import FuzzyText from './FuzzyText';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center z-50">
            <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover={true}
            >
                404
            </FuzzyText>
            <p className="text-gray-600">
                Sorry, the page you are looking for does not exist. Go back{' '}
                <span
                    className="underline cursor-pointer text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={handleGoHome}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            handleGoHome();
                        }
                    }}
                    role="link" // Menambahkan peran untuk aksesibilitas
                    tabIndex={0} // Memungkinkan elemen difokuskan
                >
                    Home
                </span>
            </p>
        </div>
    );
};

export default NotFound;