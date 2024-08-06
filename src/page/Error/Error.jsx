import { Link } from "react-router-dom";

const Error = () => {
    return (
        <section className="page_404 py-10 bg-white h-dvh flex items-center">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg bg-404-page h-[400px] bg-center object-cover bg-no-repeat">
                                <h1 className="text-center text-[80px]">404</h1>
                            </div>
                            <div className="contant_box_404 mt-[-50px]">
                                <h3 className="h2 text-[20px] lg:text-[80px]">
                                    Look like you&apos;re lost
                                </h3>
                                <p>the page you are looking for not avaible!</p>
                                <Link to={"/"}>
                                    <button className="bg-dark-sky text-white font-semibold py-5 rounded-lg px-5 my-4 inline-block transition duration-300 hover:bg-light-sky">Go to Home</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Error;