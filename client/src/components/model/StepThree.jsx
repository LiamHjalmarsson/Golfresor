import React from 'react';
import Button from '../elements/Button';
import InputRow from '../elements/InputRow';

const StepThree = ({ loading, currentStep, prevStep }) => {
    return (
        <div className={`w-full ${currentStep === 3 ? "opacity-100" : "hidden"}`}>
            <h2 className='font-semibold'>
                ÖVRIGA UPPGIFTER
            </h2>
            <div className='flex flex-wrap gap-4'>
                <InputRow
                    input={{
                        id: "travelers",
                        name: "travelers",
                        type: "number",
                        placeholder: "Antal resenärer",
                    }}
                />
                <InputRow
                    input={{
                        id: "doubleRoom",
                        name: "doubleRoom",
                        type: "number",
                        placeholder: "Antal dubbelrum",
                    }}
                />
                <InputRow
                    input={{
                        id: "singleRoom",
                        name: "singleRoom",
                        type: "number",
                        placeholder: "Antal enkelrum",
                    }}
                />
                <InputRow
                    input={{
                        id: "golfRounds",
                        name: "golfRounds",
                        type: "number",
                        placeholder: "Antal golfrundor",
                    }}
                />
            </div>
            <InputRow
                input={{
                    id: "message",
                    name: "message",
                    type: "text",
                    placeholder: "message",
                }}
                msg={true}
            />

            <div className='flex justify-between mt-8'>
                <button type='button' className='text-center text-base lg:text-lg w-fit py-4 px-12 lg:px-8 border-2 border-primary text-primary font-bold tracking-wide rounded-md hover:bg-primary hover:text-stone-50 transition duration-300' onClick={prevStep} >
                    Tillbaka
                </button>
                <Button type="submit">
                    {loading ? "Skickar" : "Skicka"}
                </Button>
            </div>
        </div>
    );
}

export default StepThree;
