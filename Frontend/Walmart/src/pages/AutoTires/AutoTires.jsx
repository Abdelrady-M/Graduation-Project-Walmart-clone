import CustomSlider from "../../components/CustomSlider ";
import LeftHandNavList from "../../components/LeftHandNavList/LeftHandNavList";

export default function AutoTires() {
    const cards = [
        {
            photo:
                "https://i5.walmartimages.com/seo/Shell-Rotella-T4-Triple-Protection-15W-40-Diesel-Motor-Oil-1-Gallon_d9648fde-0c7b-446f-a0a4-d5be83b1c5b8.7ce188bc3f1ae83477d9501e83a95595.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
            title:
                "Shell Rotella T4 Triple Protection 15W-40 Diesel Motor Oil, 1 Gallon",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/EverStart-Lead-Acid-Lawn-Garden-Battery-Group-Size-U1-12-Volt-230-CCA_068ea4d7-d4a8-4817-9030-8c5d80d0484d.4734178c7cc84c1191a7baf34d75eabf.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
            title:
                "EverStart Lead Acid Lawn & Garden Battery, Group Size U1 12 Volt, 230 CCA",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Mobil-Delvac-15W-40-Heavy-Duty-Diesel-Oil-1-gal_f69c8a13-d4e5-43b2-b28c-60f135a1df4c.e7bc933cfc195c6641b0de9ee7d0a982.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
            title:
                "Mobil Delvac 15W-40 Heavy Duty Diesel Oil, 1 gal.",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Super-Tech-Extended-Life-Prediluted-50-50-Antifreeze-Coolant-1-Gal_6438c999-6099-4c32-9178-ff13470668c0.190aea5be554078cf96104496d45cfba.png?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
            title:
                "Super Tech Extended Life Prediluted 50/50 Antifreeze/Coolant, 1 Gal",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Shell-Rotella-T4-Triple-Protection-15W-40-Diesel-Motor-Oil-1-Gallon_d9648fde-0c7b-446f-a0a4-d5be83b1c5b8.7ce188bc3f1ae83477d9501e83a95595.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
            title:
                "Shell Rotella T4 Triple Protection 15W-40 Diesel Motor Oil, 1 Gallon",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/EverStart-Lead-Acid-Lawn-Garden-Battery-Group-Size-U1-12-Volt-230-CCA_068ea4d7-d4a8-4817-9030-8c5d80d0484d.4734178c7cc84c1191a7baf34d75eabf.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
            title:
                "EverStart Lead Acid Lawn & Garden Battery, Group Size U1 12 Volt, 230 CCA",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Mobil-Delvac-15W-40-Heavy-Duty-Diesel-Oil-1-gal_f69c8a13-d4e5-43b2-b28c-60f135a1df4c.e7bc933cfc195c6641b0de9ee7d0a982.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
            title:
                "Mobil Delvac 15W-40 Heavy Duty Diesel Oil, 1 gal.",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Super-Tech-Extended-Life-Prediluted-50-50-Antifreeze-Coolant-1-Gal_6438c999-6099-4c32-9178-ff13470668c0.190aea5be554078cf96104496d45cfba.png?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
            title:
                "Super Tech Extended Life Prediluted 50/50 Antifreeze/Coolant, 1 Gal",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Shell-Rotella-T4-Triple-Protection-15W-40-Diesel-Motor-Oil-1-Gallon_d9648fde-0c7b-446f-a0a4-d5be83b1c5b8.7ce188bc3f1ae83477d9501e83a95595.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
            title:
                "Shell Rotella T4 Triple Protection 15W-40 Diesel Motor Oil, 1 Gallon",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/EverStart-Lead-Acid-Lawn-Garden-Battery-Group-Size-U1-12-Volt-230-CCA_068ea4d7-d4a8-4817-9030-8c5d80d0484d.4734178c7cc84c1191a7baf34d75eabf.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
            title:
                "EverStart Lead Acid Lawn & Garden Battery, Group Size U1 12 Volt, 230 CCA",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Mobil-Delvac-15W-40-Heavy-Duty-Diesel-Oil-1-gal_f69c8a13-d4e5-43b2-b28c-60f135a1df4c.e7bc933cfc195c6641b0de9ee7d0a982.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
            title:
                "Mobil Delvac 15W-40 Heavy Duty Diesel Oil, 1 gal.",
            price: "$17",
        },
        {
            photo:
                "https://i5.walmartimages.com/seo/Super-Tech-Extended-Life-Prediluted-50-50-Antifreeze-Coolant-1-Gal_6438c999-6099-4c32-9178-ff13470668c0.190aea5be554078cf96104496d45cfba.png?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
            title:
                "Super Tech Extended Life Prediluted 50/50 Antifreeze/Coolant, 1 Gal",
            price: "$17",
        },
    ];
    const tittle = "Home Improvement deals";
    const features = [
        {
            title: "Appliances",
            listItems: [
                "Shop All Appliances",
                "Air Conditioners",
                "Dishwashers",
                "Fans",
                "Freezers",
                "Irons, Steamers & Accessories",
                "Kitchen Appliances",
                "Ovens & Ranges",
                "Refrigerators",
                "Space Heaters & Fireplaces",
                "Vacuums, Steamers & Floor Care",
                "Vacuums, Steamers & Floor Care",
                "Washers & Dryers",
            ],
        },
        {
            title: "Bath",
            listItems: [
                "Shop all Paht",
                "Bathroom Accessories",
                "Bathroom Furniture",
                "Bath Towels",
                "Bathroom Rugs & Bath Mats",
                "Bathroom Storage",
                "Beach Towels",
                "Shower Curtain & Accessories",
            ],
        },
        {
            title: "Bedding",
            listItems: [
                "Shop All Bedding",
                "Air Mattresses",
                "Bed In A Bag",
                "Bedding Sets",
                "Blankets & Throws",
                "Comforters",
                "Duvet Covers",
                "Heated Blankets",
                "Mattress Toppers",
                "Pillows",
                "Quilts",
                "Sheets",
            ],
        },
        {
            title: "Décor",
            listItems: [
                "Shop All",
                "Candles & Home Fragrance",
                "Clocks",
                "Curtains & Window Treatments",
                "Decorative Accents",
                "Frames",
                "Lighting & Light Fixtures",
                "Mirrors",
                "Rugs",
                "Throw Pillows",
                "Wall Art",
                "Wall Decor",
            ],
        },
        {
            title: "Furniture",
            listItems: [
                "Shop All Furniture",
                "Bathroom Furniture",
                "Bedroom Furniture",
                "Entryway Furniture",
                "Kitchen & Dining Furniture",
                "Living Room Furniture",
                "Office Furniture",
                "Patio Furniture",
            ],
        },

        {
            title: "Kitchen & Dining",
            listItems: [
                "Kitchen & Dining",
                "Bakeware",
                "Bowls",
                "Cookware",
                "Cutlery",
                "Dinnerware Sets",
                "Drinking Glasses",
                "Flatware",
                "Kitchen Appliances",
                "Mugs",
                "KiPlatestchen",
                "Serveware",
                "Tools & Gadgets",
            ],
        },
    ];

    const category = [
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-1701/k2-_299ea0c1-763b-4a2f-b724-8514f39e90f3.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Motor oil",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-6840/k2-_766264d2-f796-4fe7-b5aa-7f76b7bd3f95.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Car batteries",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-4c56/k2-_9034cfa3-395f-4b0c-805d-21ead92174ed.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Auto parts",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-273d/k2-_e4a3b01f-321d-4108-a7cc-52b7010d9067.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Detailing & car care",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-e211/k2-_b5496316-8b20-40aa-9ff6-00a1060b3b86.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Filters",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-ad5c/k2-_980ab771-0b01-4029-bfe2-5704f66069d8.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Windshield wiper",
        },
    ];



    const category1 = [
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-c056/k2-_f304d122-ff27-4db7-adf0-deb94e9838f5.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Auto electronics",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-7b5d/k2-_2b3249e0-315b-432a-a273-568339377a4e.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Car seat covers",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-4d95/k2-_7e7b651b-dcf3-4344-ae2a-9c8f4aa9b536.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Exterior accessories",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-2283/k2-_9af52bf3-7f5b-4438-9969-211589cd54aa.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Floor mats & liners",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-1498/k2-_551dffe6-865a-470a-a390-ac51fc59f662.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Auto air fresheners",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-9a34/k2-_320163b7-fc74-489c-a038-e38e9e967665.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "HART compressors",
        },
    ];

    const category2 = [
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-681a/k2-_90eca1de-a889-4f7b-ba8c-ca8f6c04a0a3.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Glidden",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-1518/k2-_8721657f-32a3-4ada-a1a3-c4bc8e2671fe.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Hart",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-b8f5/k2-_60b35ff6-db96-42fa-bf71-6aca015d262d.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Hyper Tough",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-99ed/k2-_701db7af-2c97-48c0-b5c4-c8f18d39f6c2.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Better Homes",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-da90/k2-_46c75666-22fe-4e80-9ad4-1cce5c3c05c6.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Brinks",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-2d39/k2-_8707b8bd-79a8-4d2d-bd52-913a800f7a9f.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Rust-Oleum",
        }

        ,
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-e93d/k2-_411b2807-1141-498a-82c4-9c6dd405b3e9.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Super Tech",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-f747/k2-_f52e9030-e380-4cfb-8588-e507ec696172.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Chemical Guys",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-ba75/k2-_f9507778-608f-4c24-9d27-c9962671b0d5.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Rain-X",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-9eb3/k2-_2193a83e-17e2-4431-9fec-9e9e5bcb91f4.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Mobil 1",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-ffd9/k2-_8f290958-96f1-4d54-b0a6-5575307eb591.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Valvoline",
        },
        {
            Img: "https://i5.walmartimages.com/dfw/4ff9c6c9-b0fa/k2-_ac32c65c-226e-4600-a46c-283ee6f04c91.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
            title: "Castrol",
        },
    ];
    return <>

        <div className=" container h-[] w-[100%] relative mx-auto my-8">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-cde1/k2-_241c007d-b3ac-41ca-923f-3ee55f3fa634.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70%201x,%20https://i5.walmartimages.com/dfw/4ff9c6c9-cde1/k2-_241c007d-b3ac-41ca-923f-3ee55f3fa634.v1.jpg?odnHeight=940&odnWidth=2464&odnBg=&odnDynImageQuality=70%202x" alt="" />
            <div className="absolute w-full px-4 py-3 bottom-16 md:bottom-28">
                <h1 className="mt-20 text-xl md:text-3xl"> Stay on top<br /> of your  auto care </h1>
                <p className="">
                    Fix up & tune up your ride <br />for spring.
                </p>
                <p
                    style={{
                        position: "relative",
                        textAlign: "start",
                        justifyContent: "center",
                        textDecoration: "underline",
                    }}
                >
                    Shop Now
                </p>
            </div>
        </div>

        <div><CustomSlider cards={cards} mainTitle={tittle} /></div>

        <div className="flex">
            <div className="w-1/6 ">
                <LeftHandNavList items={features} section="Categories" />
                <LeftHandNavList items={features} section="Savings" />
            </div>
            <div className="w-3/4">
                <div className="ml-20">
                    <div>
                        <h2 className="mb-2 text-xl font-bold">
                            Auto services

                        </h2>
                    </div>
                    <div className="grid grid-cols-1 m-8 space-y-8 md:space-y-0 md:space-x-8 md:grid-cols-2">
                        <div className="flex max-w-sm overflow-hidden rounded shadow-lg " >
                            <div className="px-6 py-4 ">
                                <img className="w-1/3"
                                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-a70b/k2-_4ef79d21-8e3b-47c2-a2e1-1391055055f7.v1.jpg"
                                    alt="Sunset in the mountains"
                                    style={{ width: "70px" }}
                                />
                                <div className="mb-2 text-xl font-bold">Oil Changes From $24.88</div>
                                <p className="text-base text-gray-700">
                                    Schedule with our certified techs today.
                                </p>
                                <div className="flix">
                                    <button className="flex items-center justify-center gap-1 font-medium text-center border border-black rounded-full min-h-10 min-w-40 bg-inherit border-black-800 hover:border-2">
                                        Book a service
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="flex max-w-sm overflow-hidden rounded shadow-lg " >
                            <div className="px-6 py-4 ">
                                <img className="w-1/3"
                                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-b662/k2-_26159243-9a6e-46ba-a238-79345ab9437d.v1.png"
                                    alt="Sunset in the mountains"
                                    style={{ width: "70px" }}
                                />
                                <div className="mb-2 text-xl font-bold">Virtual Garage</div>
                                <p className="text-base text-gray-700">
                                    Manage your personal vehicles & more—all in one place.                                    </p>
                                <div className="flix">
                                    <button className="flex items-center justify-center gap-1 font-medium text-center border border-black rounded-full min-h-10 min-w-40 bg-inherit border-black-800 hover:border-2">
                                        Learn more
                                    </button>
                                </div>
                            </div>

                        </div>


                    </div>
                    {/* <div className="text-xl">Shop home improvement</div>
                            <ShopByCategory categories={category} /> */}
                    <div>
                        <header className="flex items-baseline justify-between">
                            <h2 className="font-bold">Routine auto care
                            </h2>
                            <button>See less</button>
                        </header>
                        <div className="flex flex-wrap w-full mb-4">
                            {category.map((ctg, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-between px-2 mt-2 sm:w-1/3 lg:w-1/6 grow-0"
                                >
                                    <img src={ctg.Img} alt="" />
                                    <a href="">{ctg.title}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <CustomSlider cards={cards} mainTitle={"Shop garage shelving"} />
                    </div>

                    <div className=" container h-[] w-[100%] relative mx-auto my-8">
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-89b1/k2-_d409ad9e-22b5-4946-aaf3-16448705bef7.v1.jpg" width={"1500vh"} />
                        <div className="absolute w-full bottom-2" style={{
                            textAlign: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}>
                            <h1 className="text-xl md:text-3xl"> Stop by your Auto Care Center </h1>
                            <p className="">
                                Let our certified techs do the rest.
                            </p>
                            <p
                                style={{
                                    textDecoration: "underline",
                                }}
                            >
                                Shop Now
                            </p>
                        </div>
                    </div>

                    <div>
                        <header className="flex items-baseline justify-between">
                            <h2 className="font-bold">Time for an upgrade

                            </h2>
                            <button>See less</button>
                        </header>
                        <div className="flex flex-wrap w-full mb-4">
                            {category1.map((ctg, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-between px-2 mt-2 sm:w-1/3 md:w-1/6 grow-0"
                                >
                                    <img src={ctg.Img} alt="" />
                                    <a href="">{ctg.title}</a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-12 space-y-4 md:space-y-0 md:grid-cols-2 md:space-x-4">
                        <div
                            className="max-w-sm overflow-hidden rounded shadow-lg"
                            style={{ minHeight: "55vh" }}
                        >
                            <img
                                className="w-full"
                                src="https://i5.walmartimages.com/dfw/4ff9c6c9-e671/k2-_104b7bc3-80f0-4458-b2fa-f66bc90f3ab4.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF"
                                alt="Sunset in the mountains"
                            />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-xl font-bold">Find the right tires



                                </div>
                                <p className="text-base text-gray-700">
                                    Low-priced & long-lasting selections for all vehicles.
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                    Shop
                                </button>
                            </div>
                        </div>
                        <div
                            className="max-w-sm overflow-hidden rounded shadow-lg"
                            style={{ minHeight: "55vh" }}
                        >
                            <img
                                className="w-full"
                                src="https://i5.walmartimages.com/dfw/4ff9c6c9-3b04/k2-_90664fdc-a43e-4400-a11c-84c2ddf0678d.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF"
                                alt="Sunset in the mountains"
                            />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-xl font-bold">All about wheels & rims</div>
                                <p className="text-base text-gray-700">
                                    Find the material & style that vibes with your ride
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                    Shop
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-3 mt-20 sm:grid-cols-1 md:grid-cols-3">

                        <div
                            className="max-w-sm overflow-hidden rounded shadow-lg"
                            style={{ minHeight: "20px" }}
                        >
                            <img
                                className="w-full"
                                src="https://i5.walmartimages.com/dfw/4ff9c6c9-d7c5/k2-_08ec0a35-c827-4008-9253-38f5c39e14ab.v1.jpg?odnHeight=512&odnWidth=288&odnBg=FFFFFF"
                                alt="Sunset in the mountains"
                            />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-xl font-bold">Goodyear
                                </div>
                                <p className="text-base text-gray-700">
                                    Tried & true, with a reputation to match
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                    Shop
                                </button>
                            </div>
                        </div>
                        <div
                            className="max-w-sm overflow-hidden rounded shadow-lg"
                            style={{ minHeight: "55vh" }}
                        >
                            <img
                                className="w-full"
                                src="https://i5.walmartimages.com/dfw/4ff9c6c9-af4a/k2-_279cc9e4-0651-415c-bb27-c9e5233a211f.v1.jpg?odnHeight=512&odnWidth=288&odnBg=FFFFFF"
                                alt="Sunset in the mountains"
                            />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-xl font-bold">Douglas
                                </div>
                                <p className="text-base text-gray-700">
                                    Dependability at every turn
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                    Shop
                                </button>
                            </div>
                        </div>
                        <div
                            className="max-w-sm overflow-hidden rounded shadow-lg"
                            style={{ minHeight: "55vh" }}
                        >
                            <img
                                className="w-full"
                                src="https://i5.walmartimages.com/dfw/4ff9c6c9-c909/k2-_96572007-e3ae-4a9d-a8da-34abbfc6db01.v1.jpg?odnHeight=512&odnWidth=288&odnBg=FFFFFF"
                                alt="Sunset in the mountains"
                            />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-xl font-bold">
                                    Cooper
                                </div>
                                <p className="text-base text-gray-700">
                                    An assortnment of tires that go the distance
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <button className="bg-inherit font-medium p-1 rounded-full flex text-center justify-center items-center gap-1 border border-black-800 w-[65px] hover:border-2 border-black">
                                    Shop
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <ShopByCategory title={"Brands we love"} categories={category1} /> */}
                    <div className="mt-20">
                        <header className="flex items-baseline justify-between">
                            <h2 className="font-bold">Brands we love</h2>
                            <button>See less</button>
                        </header>
                        <div className="flex flex-wrap w-full mb-4">
                            {category2.map((ctg, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-between px-2 mt-2 sm:w-1/3 md:w-1/6 grow-0"
                                >
                                    <img src={ctg.Img} alt="" />
                                    <a href="">{ctg.title}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}