import Img2 from "../assets/coffee2.png"

const ServicesData = [
    {
        id: 1,
        img: Img2,
        name: 'Espresso',
        description: 'strong coffee brewed quickly with finely-ground beans and boiling water.',
        aosDelay: '100'
    },
    {
        id: 2,
        img: Img2,
        name: 'Americano',
        description: 'A diluted espresso, creating a strong but smoother coffee with added water.',
        aosDelay: '300'
    },
    {
        id: 3,
        img: Img2,
        name: 'Espresso',
        description: 'A coffee drink with equal parts espresso, steamed milk, and frothy milk foam.',
        aosDelay: '500'
    },
]
const Services = () => {
    return (
        <>
            <span id="services"></span>
            <div className=" py-10">
                <div data-aos="fade-up" className=" container">
                    {/* {header title} */}
                    <div className="text-center mb-20">
                        <h1 className=" text-4xl font-bold font-cursive text-gray-800">
                            Best Coffee For You
                        </h1>
                    </div>
                    {/* Services Card section  */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                        {ServicesData.map((service) => (
                            <div
                                data-aos="fade-up"
                                data-aos-delay={service.aosDelay}
                                key={service.id}
                                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl  group max-w-[300px]"
                            >
                                <div className="h-[122px]">
                                    <img
                                        src={service.img}
                                        alt=""
                                        className="max-w-[200px] mx-auto -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
                                </div>
                                <div className="p-4 text-center">
                                    <div className="w-full"></div>
                                    <h1 className="text-xl font-bold">{service.name}</h1>
                                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services
