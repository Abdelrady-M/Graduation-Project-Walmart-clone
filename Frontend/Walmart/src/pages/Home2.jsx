import CustomSlider from "../components/CustomSlider ";
import Deals from "../components/Deals";
import LeftHandNavList from "../components/LeftHandNavList/LeftHandNavList";
import Card from "../components/Card";

const cards = [
    { photo: "https://i5.walmartimages.com/dfw/4ff9c6c9-d626/k2-_303f18c5-d2b7-4ca0-af55-84b04a6578ed.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF", title: "Costume", price: "$17" },
    { photo: "https://i5.walmartimages.com/dfw/4ff9c6c9-d626/k2-_303f18c5-d2b7-4ca0-af55-84b04a6578ed.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF", title: "Costume", price: "$17" },
    { photo: "https://i5.walmartimages.com/dfw/4ff9c6c9-d626/k2-_303f18c5-d2b7-4ca0-af55-84b04a6578ed.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF", title: "Costume", price: "$17" },
    { photo: "https://i5.walmartimages.com/dfw/4ff9c6c9-d626/k2-_303f18c5-d2b7-4ca0-af55-84b04a6578ed.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF", title: "Costume", price: "$17" },
    { photo: "https://i5.walmartimages.com/dfw/4ff9c6c9-d626/k2-_303f18c5-d2b7-4ca0-af55-84b04a6578ed.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF", title: "Costume", price: "$17" },

];

const features = [
    { title: "Appliances", listItems: [
    "Shop All Appliances", "Air Conditioners",
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
] },
    { title: "Bath", listItems: [
"Shop all Paht",
"Bathroom Accessories",
"Bathroom Furniture",
"Bath Towels",
"Bathroom Rugs & Bath Mats",
"Bathroom Storage",
"Beach Towels",
"Shower Curtain & Accessories",
] },
    {
    title: "Bedding",listItems: [
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
] },
    {
        title: "Décor",listItems: [
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
    { title: "Furniture", listItems: [
        "Shop All Furniture",
        "Bathroom Furniture",
        "Bedroom Furniture",
        "Entryway Furniture",
        "Kitchen & Dining Furniture",
        "Living Room Furniture",
        "Office Furniture",
        "Patio Furniture",
    ] },



    { title: "Kitchen & Dining", listItems: [
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
    ] },
];

const categories = [
    {
        //has Image
        title: "TV & Video",
        listItems: ["All TV & Video", "Smart TVs", "Roku TVs"],
    },
    {
        title: "Computers & Tablets",
        listItems: ["All Computers", "Laptops", "Chromebook"],
    },
    {
        title: "Video Games",
        listItems: ["All Video Games", "Xbox", "PlayStation"],
    },
    {
        title: "PC Gaming",
        listItems: ["PC Gaming", "Gaming Laptops", "Gaming Desktops"],
    },
    { title: "Audio", listItems: ["AirPods", "Sound Bars"] },
];

// const cards = [
//     {
//         title:
//             "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)",
//         price: "$17",
//     },
//     {
//         title:
//             "Lenovo Legion Pro 5 16IRX8 - 16.0 165 Hz IPS - Intel Core i7 13th Gen 13700HX(2.10GHz) - NVIDIA GeForce RTX 4060 Laptop GPU - 16 GB DDR5 - 1 TB PCIe SSD - Windows 11 Home 64 - bit - Gaming Laptop(82W)",
//         price: "$17",
//     },
//     {
//         title:
//             "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)",
//         price: "$17",
//     },
//     {
//         title:
//             "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)",
//         price: "$17",
//     },
//     {
//         title:
//             "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)",
//         price: "$17",
//     },
//     {
//         title:
//             "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)",
//         price: "$17",
//     },
//     {
//         title:
//             "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)",
//         price: "$17",
//     },
//     {
//         title:
//             "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)",
//         price: "$17",
//     },
//     {
//         title:
//             "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)",
//         price: "$17",
//     },
//     {
//         title:
//             "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)",
//         price: "$17",
//     },
//     {
//         title:
//             "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)",
//         price: "$17",
//     },
//     {
//         title:
//             "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)",
//         price: "$17",
//     },
//     {
//         title:
//             "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)",
//         price: "$17",
//     },
//     {
//         title:
//             "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)",
//         price: "$17",
//     },
//     {
//         title:
//             "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)",
//         price: "$17",
//     },
// ];
// const tittle = "ddddddd";

export default function Home2() {
    return (
        <>
        <div className="container">
            <div className="ml-6">
                <article className="relative isolate flex flex-col overflow-hidden size-max m-8 ">
                    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-e2ad/k2-_4de43013-971a-444c-b405-4a3d339f0252.v1.jpg?" />
                    <h3 className="z-10 mt-3 text-3xl font-bold text-white"></h3>
                    <div className="overflow-hidden text-lg text-gray-300"></div>
                </article>
            </div>

            <div>
                <div className="text-3xl">Shop the look</div>
                <div className="container m-8">
                <Deals />
                </div>
            </div>

            <div className="flex">
                <div className="w-1/8 m-6">
                    <LeftHandNavList items={features} section="Categories" />
                    <LeftHandNavList items={features} section="Savings" />
                </div>
                <div className="w-3/4 m-8">
                    <div className="border-1 shadow-md rounded-2xl">
                        <img
                            className="justify-center"
                            style={{ width: "100%" }}
                            src="https://i5.walmartimages.com/dfw/4ff9c6c9-603e/k2-_710168df-eb48-46ac-b6fe-7c98ba7db9b6.v1.jpg?odnHeight=680&odnWidth=1208&odnBg=FFFFFF"
                            alt=""
                        />
                        <div className="ml-8">
                            <h1 className="text-2xl">Perk up your bedroom</h1>
                            <p>A few new pieces will have you primed to seize the day.</p>
                        </div>
                        <div className="container p-4">
                <Deals />
                </div>
                    </div>
                    <div className="">
                <div style={{width:"100%"}} className="border-1 shadow-md rounded-2xl relative isolate flex flex-col overflow-hidden my-6 ">
                    <img  src="https://i5.walmartimages.com/dfw/4ff9c6c9-8e3a/k2-_417f2184-f7fb-4ce0-91b8-89b101436455.v1.jpg?odnHeight=470&odnWidth=1232&odnBg=&odnDynImageQuality=70%201x,%20https://i5.walmartimages.com/dfw/4ff9c6c9-8e3a/k2-_417f2184-f7fb-4ce0-91b8-89b101436455.v1.jpg?odnHeight=940&odnWidth=2464&odnBg=&odnDynImageQuality=70" />
                </div>
            </div>
            <div className="font-bold text-xl my-8"><h1>Save with Great Value</h1>
                        <div className="flex container mb-10 mx-auto mt-5">
                            {cards.map((card, index) => (
                                <div key={index} className="w-1/3"><Card photo={card.photo} title={card.title} price={card.price} /></div>
                            ))}
                        </div>
                        <div className="flex container mb-10 mx-auto mt-5">
                            {cards.map((card, index) => (
                                <div key={index} className="w-1/3"><Card photo={card.photo} title={card.title} price={card.price} /></div>
                            ))}
                        </div>
                        </div>
                </div>
            </div>
            </div>
        </>
        
    );
}
