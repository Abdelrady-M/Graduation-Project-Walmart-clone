import React from "react";
import BrowseMenu from "../../components/BrowseMenu";
import dealsImg from "../../assets/autoCar.png";

export default function AllServices() {
  const dealsMenu = [
    "Shop all deals",
    "clearance",
    "Flash deals",
    "best Sellers",
    "Shop all deals",
    "clearance",
    "Flash deals",
    "best Sellers",
    "Shop all deals",
    "clearance",
    "Flash deals",
    "best Sellers",
  ];

  return (
    <>
      <section className="h-100 w-full relative flex flex-col container">
        <h1 className="font-bold text-2xl mx-6 my-6 py-6 border-b-2">
          Browse Departments
        </h1>
      </section>
      <main className="w-full flex flex-wrap">
        <BrowseMenu
          title="Deals & Featured Shops"
          image={dealsImg}
          menu={dealsMenu}
        />
        <BrowseMenu
          title="Deals & Featured Shops"
          image={dealsImg}
          menu={dealsMenu}
        />
        <BrowseMenu
          title="Deals & Featured Shops"
          image={dealsImg}
          menu={dealsMenu}
        />
      </main>
    </>
  );
}
