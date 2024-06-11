const InputRow = ({ input, msg = false }) => {
    return (
        <div className={`flex-grow relative my-4`}>
            <label
                htmlFor={input.id}
                className={``}
            >
                {
                    input.name.toUpperCase().slice(0, 1) + input.name.slice(1)
                }
            </label>
            {
                !msg && (
                    <input
                        {...input}
                        className={`p-2 w-full mt-2 border-2 border-primary dark:border-_purple outline-none shadow-md rounded-md bg-transparent`}
                    />
                ) || (
                    <textarea
                        {...input}
                        className="p-2 w-full mt-2 border-2 border-primary dark:border-_purple outline-none shadow-md rounded-md bg-transparent">
                    </textarea>
                )
            }
        </div>
    );
}


export default InputRow;
