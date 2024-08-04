/* eslint-disable no-undef */
import citiesData from "../../../data/citiesData";
import Cities from "./Cities/Cities";

const PopularCities = () => {
    const citiesLength = citiesData.length - 1
    return (
        <div className="flex justify-center lg:block">
            <div>
                <h4 className="mt-7 pl-4 lg:pl-0 text-black font-medium leading-[30px] text-[18px]">Popular Cities</h4>
                <div className="bg-white mt-6 pt-6 rounded-[10px] lg:w-[550px]">
                    <div className="grid grid-cols-3 px-4 gap-y-[18px] lg:px-[30px] lg:gap-y-[25px]">
                        {citiesData.map((city, index) => <Cities length={citiesLength} index={index} name={city.name} key={index} />
                        )}
                        {/* d */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCities;