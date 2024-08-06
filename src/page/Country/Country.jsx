import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Country = () => {
    const [countryData, setCountryData] = useState("")
    const { search } = useLocation();
    const countryName = decodeURIComponent(search.split('?')[1]);

    useEffect(() => {
        const getCountryData = async () => {
            try {
                const data = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
                    .then((res) => res.json())
                setCountryData(data[0])
            } catch (error) {
                console.log(error)
            }
        }

        getCountryData()
    }, [countryName])

    console.log(countryData);
    if (!countryData) return <div className='h-dvh flex justify-center items-center'>
        <h1>Searching the country</h1>
    </div>

    return (
        <div className='w-1/2 flex items-center justify-center h-dvh mx-auto flex-col'>
            <img src={countryData?.flags.png} alt='flags' className='block' />
            <h1 className='mt-[30px] text-[15px] lg:text-[30px]'>{countryName}</h1>
        </div>
    );
};

export default Country;
