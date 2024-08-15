import HeroImg from "../assets/coffee2.png"

const Homme = () => {
    return (
        <div className="min-h-[550px] sm:min-h-[600px] bg-brandDarck flex justify-center items-center text-white">
            <div className=" container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-0 ">
                    {/* {Text content section} */}
                    <div className=" order-2 sm:order-1 flex flex-col justify-center gap-2 text-center sm:text-left">
                        <h1
                            data-aos="fade-up"
                            data-aos-once="true"
                            className=" text-5xl sm:text-6xl lg:text-7xl font-bold">
                            We serve the richest
                            <span data-aos="fade-up" data-aos-delay="300" className=" text-primary font-cursive">
                                Coffee
                            </span> in the city
                        </h1>
                        <div data-aos="fade-up"
                            data-aos-delay="400">
                            <button className=" bg-gradient-to-r from-primary to-secondary border-2 border-primary text-white rounded-full px-4 py-2 mt-4 hover:scale-105 duration-200">
                                Coffee And Code
                            </button>
                        </div>
                    </div>
                    {/* {Image content section } */}
                    <div data-aos="zoom-in" className=" min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
                        <img src={HeroImg} alt="" className=" w-[320px] sm:w-[450px] sm:scale-110 mx-auto spin" />
                        <div data-aos="fade-left" className=" bg-gradient-to-r from-primary to-secondary absolute top-10 left-10 text-sm sm:text-base p-3 rounded-xl">
                            <h1>
                                Hey Coder
                            </h1>
                        </div>
                        <div data-aos="fade-right" className=" bg-gradient-to-r from-primary to-secondary absolute bottom-10 right-10 p-3 text-sm sm:text-base rounded-xl ">
                            <h1>
                                Best Coffe
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homme