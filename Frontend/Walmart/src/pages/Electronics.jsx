import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MultiCarousal from "../components/MultiCarousal";
import LeftHandNavList from "../components/LeftHandNavList";
export default function Electronics() {
  return (
    <>
      <Navbar />
      <main className="container-fluid w-100">
        <section className="my-5">
          <MultiCarousal
            title="Apple Deals"
            desc="Save on the gadgets you love, for less."
          />
        </section>
        <section className="flex justify-between">
          <aside className="h-100 relative w-25 flex -column">
            <LeftHandNavList />
          </aside>
          <article></article>
        </section>
      </main>
      <Footer />
    </>
  );
}
