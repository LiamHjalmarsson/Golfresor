import React, { useState } from 'react';
import InputRow from '../elements/InputRow';
import Button from '../elements/Button';

const StepOne = ({ slug, nextStep, currentStep, close }) => {
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');

    const handleNextStep = () => {
        if (!email || !number) {
            setError('Please fill out both email and number.');
        } else {
            setError('');
            nextStep();
        }
    };

    return (
        <div className={`w-full ${currentStep === 1 ? "opacity-100" : " opacity-0 hidden"}`}>
            <h2 className='text-2xl font-semibold mb-4'>DIN INFORMATION</h2>
            <input hidden={true} value={slug} id='destination' name='destination' />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <InputRow
                    input={{
                        id: "email",
                        name: "email",
                        type: "email",
                        placeholder: "E-postadress",
                        required: true,
                        value: email,
                        onChange: (e) => setEmail(e.target.value),
                    }}
                />
                <InputRow
                    input={{
                        id: "number",
                        name: "number",
                        type: "text",
                        placeholder: "Number",
                        required: true,
                        value: number,
                        onChange: (e) => setNumber(e.target.value),
                    }}
                />
            </div>
            {
                error && <p className="text-red-500">{error}</p>
            }
            <div className='flex justify-between mt-8'>
                <button className='text-base lg:text-lg py-2 px-4 lg:px-8 border-2 border-primary text-primary font-bold rounded-md hover:bg-primary hover:text-stone-50 transition duration-300' onClick={close}>
                    Stäng
                </button>
                <Button onClick={handleNextStep}>
                    Nästa
                </Button>
            </div>
        </div>
    );
}

export default StepOne;
