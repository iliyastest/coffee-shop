import { GrSecure } from "react-icons/gr"
import BannerImg from "../assets/coffee-white.png"
import BgImg from "../assets/website/coffee-texture.jpg"
import { IoFastFood } from "react-icons/io5"
import { GiFoodTruck } from "react-icons/gi"

const bgImag = {
    backgroundImage: `url(${BgImg})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

const Banner = () => {
    return (
        <>
            <span id="about"></span>
            <div style={bgImag}>
                <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Image section */}
                        <div data-aos="zoom-in">
                            <img src={BannerImg} alt="" className=" max-w-[430px] w-full mx-auto spin drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]" />
                        </div>
                        {/* Text content section */}
                        <div className=" flex flex-col justify-center gap-6 sm:pt-0">
                            <h1 data-aos="fade-up" className=" text-3xl sm:text-4xl font-bold font-cursive">
                                Premium Blend Coffee
                            </h1>
                            <p data-aos="fade-up" className=" text-sm text-gray-500 tracking-wide ">
                                Indulge in the rich, full-bodied flavor of our Premium Blend Coffee,
                                crafted with the finest beans for a perfect balance of taste and aroma.
                                Enjoy every sip of this exquisite blend.
                            </p>
                            <div className=" grid grid-cols-2 gap-6">
                                <div className=" space-y-5">
                                    <div data-aos="fade-up" data-aos-offset="0" className=" flex items-center gap-3">
                                        <GrSecure className=" text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                                        <span>Premium Coffee</span>
                                    </div>
                                    <div data-aos="fade-up" data-aos-delay="300" className=" flex items-center gap-3">
                                        <IoFastFood className=" text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100" />
                                        <span>Hot Coffee</span>
                                    </div>
                                    <div data-aos="fade-up" data-aos-delay="300" className=" flex items-center gap-3">
                                        <GiFoodTruck className=" text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                                        <span>Cold Coffee</span>
                                    </div>
                                </div>
                                <div data-aos="slide-left" className=" border-l-4 border-primary/50 pl-6 space-y-3">
                                    <h1 className=" text-2xl font-semibold font-cursive">Tea Lover</h1>
                                    <p className=" text-gray-500 text-sm">
                                        Discover the delicate and refreshing taste of our carefully selected teas.
                                        From classic favorites to unique blends,
                                        each cup offers a journey of flavor and tranquility.
                                        Perfect for any time of the day.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner