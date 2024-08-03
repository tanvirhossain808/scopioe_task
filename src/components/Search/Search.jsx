

const Search = () => {
    return (

        <div className=" max-w-[400px] flex items-center justify-between lg:max-w-[450px] h-[50px] w-full rounded-[10px] px-2 py-1 bg-color-primary mt-10 ">
            <input type="text" placeholder="ZIP code or city name" className="h-full w-[80%] outline-none border-none bg-inherit" />
            <button className="text-[14px] text-white font-semibold bg-dark-sky w-[83px] p-[10px] rounded-lg hover:bg-light-sky transition ease-linear">
                GO
            </button>
        </div>
    );
};

export default Search;