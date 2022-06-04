import React from "react";
import { FourCards } from "./FourCards";

export function Dashboard() {
  return (
    <div className="container">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-4 text-gray-800 dashboard">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>

      <FourCards />
      <div className="row">
        <div className="col-lg-6">
          <div className="row m-3">
            <div className=" col-lg-6 ">
              <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                  <h6 className="card-title">Primary</h6>
                  <p className="text">#4e73df</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-white bg-secondary mb-3">
                <div className="card-body">
                  <h6 className="card-title">Secondary</h6>
                  <p className="text">#858796</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-white bg-success mb-3">
                <div className="card-body">
                  <h6 className="card-title">Success</h6>
                  <p className="text">#1cc88a</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-white bg-danger mb-3">
                <div className="card-body">
                  <h6 className="card-title">Danger</h6>
                  <p className="text">#e74a3b</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-white bg-warning  mb-3">
                <div className="card-body">
                  <h6 className="card-title">Warning </h6>
                  <p className="text">#f6c23e</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-white bg-info  mb-3">
                <div className="card-body">
                  <h6 className="card-title">Info </h6>
                  <p className="text">#36b9cc</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-black-50 bg-light  mb-3">
                <div className="card-body">
                  <h6 className="card-title">Light </h6>
                  <p className="text">#f8f9fc</p>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 ">
              <div className="card text-white bg-dark  mb-3">
                <div className="card-body">
                  <h6 className="card-title">Dark </h6>
                  <p className="text">#5a5c69</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card mt-3">
            <div className="card-header font-weight-bold text-primary">
              Development Approach
            </div>
            <div className="card-body">
              <p>
                SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
                order to reduce CSS bloat and poor page performance.{" "}
              </p>
              <p>
                Custom CSS classes are used to create custom components and
                custom utility classes. Before working with this theme, you
                should become familiar with the Bootstrap framework, especially
                the utility classes.
              </p>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-header font-weight-bold text-primary">
              Illustrations
            </div>
            <div className="card-body">
              <img
                className="dashboardimg img-responsive"
                src="https://squarera.com/wp-content/uploads/2020/12/undraw_posting_photo_v65l-1024x599.png"
              />
              <p>
                Add some quality, svg illustrations to your project courtesy of
                unDraw, a constantly updated collection of beautiful svg images
                that you can use completely free and without attribution!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
