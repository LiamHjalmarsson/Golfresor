import React from 'react';
import Button from '../elements/Button';
import InputRow from '../elements/InputRow';

const StepTwo = ({ nextStep, prevStep, currentStep }) => {
    return (
        <div className={`w-full ${currentStep === 2 ? "opacity-100" : "hidden"}`}>
            <h2 className='font-semibold'>
                NÄR VILL DU ÅKA?
            </h2>
            <div className='flex gap-4'>
                <InputRow
                    input={{
                        id: "leave",
                        name: "leave",
                        type: "date",
                        placeholder: "Avresa",
                        required: true,
                    }}
                />
                <InputRow
                    input={{
                        id: "return",
                        name: "return",
                        type: "date",
                        placeholder: "Hemkomst",
                        required: true,
                    }}
                />
            </div>
            <InputRow
                input={{
                    id: "airport",
                    name: "airport",
                    type: "text",
                    placeholder: "Närmaste flygplats",
                    required: true,
                }}
            />
            <div className='flex justify-between mt-8'>
                <button type='button' className='text-center text-base lg:text-lg w-fit py-4 px-12 lg:px-8 border-2 border-primary text-primary font-bold tracking-wide rounded-md hover:bg-primary hover:text-stone-50 transition duration-300' onClick={prevStep}>
                    Tillbaka
                </button>
                <Button onClick={nextStep}>
                    Nästa
                </Button>
            </div>
        </div>
    );
}

export default StepTwo;
