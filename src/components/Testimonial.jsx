import Slider from "react-slick"

const testimonialData = [
    {
        id: 1,
        name: "Emma Johnson",
        text: "This coffee joint is top-notch! From the inviting aroma to the diverse selection, it's a haven for caffeine enthusiasts like me.",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Lily Anderson",
        text: "This place serves up some seriously good coffee! With its warm atmosphere and friendly vibes, it's my go-to spot for a pick-me-up.",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Jackson Smith",
        text: "Love this coffee shop! The atmosphere is so inviting, and the coffee is consistently delicious. Can't get enough of it!",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 5,
        name: "Ethan Williams",
        text: "If you're a coffee aficionado, this place is a must-visit. The quality of the brews here is unmatched, and the cozy setting makes it a perfect hangout spot.",
        img: "https://picsum.photos/103/103",
    },
]





const Testimonial = () => {

    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className=" py-10 mb-10">
                <div className="container">
                    {/* header section */}
                    <div data-aos="fade-up" className="mb-10">
                        <h1 className=" text-center text-4xl font-bold font-cursive text-gray-800">
                            Testimonial
                        </h1>
                    </div>
                    {/* testimonial card section */}
                    <div data-aos="zoom-in">
                        <Slider {...settings}>
                            {
                                testimonialData.map((data) => (
                                    <div key={data.id} className="my-6">
                                        <div className=" flex flex-col gap-4 shadow-lg py-8 px-8 mx-4 rounded-xl bg-primary/10 relative">
                                            {/* images section */}
                                            <div className=" mb-4">
                                                <img src={data.img} alt="" className=" rounded-full w-20 h-20" />
                                            </div>
                                            {/* content section */}
                                            <div className=" flex flex-col justify-center gap-4">
                                                <p className=" text-xs text-gray-500 line-clamp-3">
                                                    {data.text}
                                                </p>
                                                <h1 className=" text-xl font-bold text-black/80 font-cursive2">
                                                    {data.name}
                                                </h1>
                                            </div>
                                            <p className=" text-black/20 text-9xl font-serif absolute top-0 right-0">
                                                ,,
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial