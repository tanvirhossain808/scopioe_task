import { useState } from "react";
import { useNavigate } from "react-router-dom";

const apiResource = {
    weatherApi: " https://api.weatherapi.com/v1",
    weatherApiKey: "fea727a39dfa4c9897a54836241905",
    countryApi: "https://countriesnow.space/api/v0.1/countries"
}
let cityList = []
const loadCityList = async () => {
    try {
        const countryList = await fetch(apiResource.countryApi)
        const { data } = await countryList.json()
        // console.log(data)
        await data.forEach((country) => cityList.push(country.country))
    } catch (error) {
        console.log(error)
    }
}
loadCityList()
const Search = () => {
    const navigate = useNavigate()
    const [countryName, setCountryName] = useState('')
    const matchCountries = []
    const cityLength = cityList.length
    const getMatchCityList = async () => {
        if (countryName) for (let i = 0; i < cityLength - 1; i++) {
            if (matchCountries.length === 4) break
            const country = cityList[i].toLowerCase();
            if (country.startsWith(countryName.toLowerCase())) {
                matchCountries.push(country);
            }

        }

    }
    getMatchCityList()
    const showCountry = async (name) => {
        if (!countryName) {
            alert("Please write the country name")
            return
        }
        if (!matchCountries.includes(name.toLowerCase())) {
            alert("Name not  Found")
            return
        }
        if (matchCountries.includes(name.toLowerCase())) {
            try {
                navigate(`/country?${name}`)
            } catch (error) {
                console.log(error);
            }
            return
        }

    }
    const isHidden = !countryName || matchCountries.length <= 0;
    // if (!countryName) matchCountries
    console.log(matchCountries);
    // console.log(countryName);
    return (

        <div className=" max-w-[400px] flex items-center justify-between lg:max-w-[450px] h-[50px] w-full rounded-[10px] px-2 py-1 bg-color-primary mt-10 relative">
            <input type="text" placeholder="ZIP code or city name" className="h-full w-[80%] outline-none border-none bg-inherit" value={countryName} onChange={(e) => setCountryName(e.target.value)} />
            <button className="text-[14px] text-white font-semibold bg-dark-sky w-[83px] p-[10px] rounded-lg hover:bg-light-sky transition ease-linear" onClick={() => showCountry(countryName)}>
                GO
            </button>
            <div className="absolute z-10 top-full right-0 left-0 p-5">
                <ul className={`flex flex-col justify-center bg-gray-500 opacity-90 p-5 rounded-lg text-white ${isHidden && "hidden"}`}>
                    {matchCountries.length > 0 && matchCountries.map((country, index) => <li value={country} className="font-medium rounded-lg cursor-pointer text-center py-1 w-full px-[10px] hover:bg-gray-400 duration-300" key={index} onClick={() => showCountry(country)}>{country}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Search;