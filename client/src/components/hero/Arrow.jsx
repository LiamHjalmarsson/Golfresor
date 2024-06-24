const Arrow = ({ custom, icon, clickHandler }) => {
    return (
        <div
            onClick={clickHandler}
            className={`${custom ? custom : ""} absolute flex h-full z-10 p-2 lg:p-4 justify-center items-center text-2xl lg:text-5xl fond-bold text-stone-50 duration-1000 transition`}>
            {
                icon
            }
        </div>
    );
}

export default Arrow;
