import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

export default () => {
    const [step, setStep] = useState('step1');
    const [symptomps, setSymptomps] = useState(false);

    const step1HandleSubmit = data => {
        const find = Object.entries(data).find(([key, value]) => value === 'yes');
        setStep('step2');
        setSymptomps(Boolean(find));
    };

    const step2HandleSubmit = () => setStep('step3');
    const step3HandleSubmit = () => setStep('step4');
    const step4HandleSubmit = data => console.log(data);

    return {
        step1: (
            <Step1
                onSubmit={step1HandleSubmit}
            />
        ),
        step2: (
            <Step2
                symptomps={symptomps}
                onSubmit={step2HandleSubmit}
            />
        ),
        step3: (
            <Step3
                onSubmit={step3HandleSubmit}
            />
        ),
        step4: (
            <Step4
                onSubmit={step4HandleSubmit}
            />
        )
    }[step];
};
