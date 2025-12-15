import React from 'react';

import { Sparkles } from 'lucide-react';
import { Alert, AlertDescription } from '../ui-neobrutalism/alert';

const AlertInformation: React.FC = () => {
    return (
        <Alert className="hidden md:block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white border-none">
            <div className="flex items-center justify-center">
                <Sparkles className="mr-3" />
                <div className='flex'>
                    <AlertDescription>🚧  Early Access Beta Our web component library is currently in active development.
                        Expect frequent updates, potential breaking changes, and ongoing improvements.</AlertDescription>
                </div>
            </div>
        </Alert>
    );
};

export default AlertInformation;