import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MultiCarousal from "../components/MultiCarousal";
import LeftHandNavList from "../components/LeftHandNavList/LeftHandNavList";

export default function Electronics() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <section className="my-5">
          <MultiCarousal
            title="Apple Deals"
            desc="Save on the gadgets you love, for less."
          />
        </section>
        <section className="flex justify-between">
          <aside className="h-100 relative w-25 d-flex flex-column">
            <LeftHandNavList />
          </aside>
          <article>hello from article</article>
        </section>
      </main>
      <Footer />
    </>
  );
}
