import React from 'react';
import InputRow from '../elements/InputRow';
import Button from '../elements/Button';
import { useParams } from 'react-router-dom';

const HotelForm = ({ formRef, sendEmail, close, loading }) => {
    let { slug } = useParams();

    return (
        <form ref={formRef} onSubmit={sendEmail} className='' >

            <h2 className='font-semibold'>
                DIN INFORMATION
            </h2>
            <input hidden={true} value={slug} />
            <div className='flex gap-4'>
                <InputRow
                    input={{
                        id: "email",
                        name: "email",
                        type: "email",
                    }}
                />
                <InputRow
                    input={{
                        id: "number",
                        name: "number",
                        type: "phone",
                    }}
                />
            </div>

            <h2 className='mt-8 font-semibold'>
                NÄR VILL DU ÅKA?
            </h2>
            <div className='flex gap-4'>
                <InputRow
                    input={{
                        id: "leave",
                        name: "leave",
                        type: "date",
                    }}
                />
                <InputRow
                    input={{
                        id: "return",
                        name: "return",
                        type: "date",
                    }}
                />
            </div>
            <InputRow
                input={{
                    id: "airport",
                    name: "airport",
                    type: "text",
                }}
            />

            <h2 className='mt-8 font-semibold'>
                FÅR VI HÖRA LITE OM DIG?
            </h2>
            <div className='flex gap-4'>

                <InputRow
                    input={{
                        id: "travelers",
                        name: "travelers",
                        type: "number",
                    }}
                />
                <InputRow
                    input={{
                        id: "doubleRoom",
                        name: "doubleRoom",
                        type: "number",
                    }}
                />
                <InputRow
                    input={{
                        id: "singleRoom",
                        name: "singleRoom",
                        type: "number",
                    }}
                />
                <InputRow
                    input={{
                        id: "golfRounds",
                        name: "golfRounds",
                        type: "number",
                    }}
                />
            </div>
            <InputRow
                input={{
                    id: "message",
                    name: "message",
                    type: "text",
                }}
                msg={true}
            />

            <div className='flex justify-center gap-12 w-full mt-8'>
                <button className='text-center text-base lg:text-lg w-fit py-4 px-12 lg:px-8 border-2 border-primary text-primary font-bold tracking-wide rounded-md hover:bg-primary hover:text-stone-50 transition duration-300' onClick={close}>
                    Stäng
                </button>
                <Button type="submit">
                    {loading ? "Sending" : "Skicka"}
                </Button>
            </div>
        </form>
    );
}

export default HotelForm;
