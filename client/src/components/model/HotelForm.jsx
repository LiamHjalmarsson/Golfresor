// HotelForm.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const HotelForm = ({ formRef, sendEmail, close, loading }) => {
    let [step, setStep] = useState(1);
    let { slug } = useParams();

    let nextStep = () => {
        setStep(step + 1);
    };

    let prevStep = () => {
        setStep(step - 1);
    };

    return (
        <form ref={formRef} onSubmit={sendEmail} className="w-full relative flex flex-col justify-center items-center">
            <StepOne slug={slug} nextStep={nextStep} currentStep={step} close={close} />
            <StepTwo slug={slug} nextStep={nextStep} currentStep={step} prevStep={prevStep} />
            <StepThree slug={slug} nextStep={nextStep} currentStep={step} prevStep={prevStep} />
        </form>
    );
}

export default HotelForm;
