import React from "react";
import costume from "../assets/costume.jpg";
import jacket from "../assets/jacket.jpg";
import jacket2 from "../assets/2.jpg";
import jacket3 from "../assets/3.jpg";
import CustomSlider from "./CustomSlider ";


const cards = [
    {
        photo: costume, title: "Restored Apple iPhone 12 Pro Max - Carrier Unlocked - 128GB Graphite (Refurbished)", price: "$17"
    },
    { photo: jacket, title: "Lenovo Legion Pro 5 16IRX8 - 16.0 165 Hz IPS - Intel Core i7 13th Gen 13700HX(2.10GHz) - NVIDIA GeForce RTX 4060 Laptop GPU - 16 GB DDR5 - 1 TB PCIe SSD - Windows 11 Home 64 - bit - Gaming Laptop(82W)", price: "$17" },
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
const tittle = "Deals"


const Deals = () => {


    return (
        <div>

            <CustomSlider cards={cards} mainTitle={tittle} />
        </div>
    );
}
export default Deals