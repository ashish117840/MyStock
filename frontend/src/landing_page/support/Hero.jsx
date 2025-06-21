import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4 className="m-0">Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row px-5 py-3 m-3">
        <div className="col-6 p-5">
          <h1 className="fs-4 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O"  className="mb-3"/>
          <div className="d-flex flex-wrap gap-3 mt-2">
            <a href="">Track account opening</a>
            <a href="">Track segment activation </a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>
        <div className="col-md-6 p-4">
          <h1 className="fs-4 mb-3">Featured</h1>
          <ol>
            <li>
              Latest Intraday leverages and Square-off timings
            </li>
            <li>Surveillance measure on scrips - June 2025</li>
          </ol>
        </div>
      </div>
      <div className="row p-3 m-3"></div>
    </section>
  );
}

export default Hero;
