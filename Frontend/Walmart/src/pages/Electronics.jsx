import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MultiCarousal from "../components/MultiCarousal";

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
      </main>
      <Footer />
    </>
  );
}
