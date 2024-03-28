import React from 'react'
import costume from "../assets/costume.jpg";
import jacket from "../assets/jacket.jpg";
import jacket2 from "../assets/2.jpg";
import jacket3 from "../assets/3.jpg";
import CustomSlider from "./CustomSlider ";
import Video from "../assets/Walmart.mp4";


const cards = [
    { photo: costume, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
    { photo: jacket, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
    { photo: jacket2, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
    { photo: jacket3, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
    { photo: costume, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
    { photo: jacket, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
    { photo: jacket2, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
    { photo: jacket3, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
    { photo: costume, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
    { photo: jacket, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
    { photo: jacket2, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
    { photo: jacket3, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
    { photo: costume, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
    { photo: jacket, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
    { photo: jacket2, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17" },
];
const tittle = "Renew your everything"

const PatioFurniture = () => {
    return (
        <div className='container mx-auto flex items-center justify-between w-[100vw] gap-10'>
            <div className=' w-[40vw] flex items-center justify-center'>
                <CustomSlider cards={cards} mainTitle={tittle} />
            </div>
            <div className='hidden xl:flex w-[50vw] h-[50vh] items-center justify-center'>
                <video controls autoPlay src={Video} type="video/mp4" />
            </div>
        </div>
    )
}

export default PatioFurniture

