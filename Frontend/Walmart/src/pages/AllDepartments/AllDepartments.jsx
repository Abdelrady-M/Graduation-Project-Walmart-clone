import React from "react";
import BrowseMenu from "../../components/BrowseMenu";
import dealsImg from "../../assets/deals.webp";

export default function AllDepartments() {
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
        <h1 className="font-bold text-2xl mx-6 mt-6 py-6">
          Browse Departments
        </h1>
      </section>
      <div className="border-b-2 mx-6 mb-4"></div>
      <main className="w-full flex flex-wrap px-8">
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
