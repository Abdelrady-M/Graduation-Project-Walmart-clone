import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function LeftHandNavList() {
  return (
    <>
      <div className="d-flex flex-column justify-start items-center">
        <h2 className="pb-3 text-2xl text-bold">Featured Shops</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Deals</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Tech Deals</li>
                <li>Tech Value Deals</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Tax Prep</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Tax Prep</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>New & Trending</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Travel Tech</li>
                <li>New & Trending Tech</li>
                <li>New PC Gaming</li>
                <li>New Desktop Computers</li>
                <li>New Laptops</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Walmart Restored</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Explore Walmart Restored</li>
                <li>Restored TVs</li>
                <li>Restored Computers & Mac</li>
                <li>Tech Value Deals</li>
                <li>Tech Value Deals</li>
                <li>Tech Value Deals</li>
                <li>Tech Value Deals</li>
                <li>Tech Value Deals</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Tax Prep</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Tech Deals</li>
                <li>Tech Value Deals</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
