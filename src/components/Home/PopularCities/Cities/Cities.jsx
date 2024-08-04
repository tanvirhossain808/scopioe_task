/* eslint-disable react/prop-types */


const Cities = ({ name, length, index }) => {
    console.log(name, "name");
    return (
        <div className={`text-dark-sky pb-[18px]
             ${length - 3 > index && "border-[#E7E7E7] border-b-[1px]"
            }
`}>
            <a href="/" className="underline text-[14px]">{name}</a>
        </div>
    );
};

export default Cities;