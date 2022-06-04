import React from "react";
import { FourCards } from "./FourCards";

export function Incards() {
  return (
    <>
      <div class="container-fluid">
        <h1 className="h3 mb-4 text-gray-800 dashboard">Cards</h1>

        <FourCards />
        <TypeCards />
      </div>
    </>
  );
}


function TypeCards() {
  return (
    <>
      <div class="row">
        <div class="col-lg-6">
          <div class="card mb-4">
            <div class="card-header incard card1st">Default Card Example</div>
            <div class="card-body incard-body">
              This card uses Bootstrap's default styling with no utility classes
              added. Global styles are the only things modifying the look and
              feel of this default card example.
            </div>
          </div>

          <div class="card shadow mb-4">
            <div class="card-header incard py-3">
              <h6 class="m-0 font-weight-bold text-primary">
                Basic Card Example
              </h6>
            </div>
            <div class="card-body incard-body ">
              The styling for this basic card example is created by using
              default Bootstrap utility classes. By using utility classes, the
              style of the card component can be easily modified with no need
              for any custom CSS!
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="card shadow mb-4">
            <div class="card-header incard py-3">
              <h6 class="m-0 font-weight-bold text-primary">
                Dropdown Card Example
              </h6>
            </div>
            <div class="card-body incard-body">
              Dropdown menus can be placed in the card header in order to extend
              the functionality of a basic card. In this dropdown card example,
              the Font Awesome vertical ellipsis icon in the card header can be
              clicked on in order to toggle a dropdown menu
            </div>
          </div>

          <div class="card shadow mb-4">
            <div class="card-header incard py-3">
              <h6 class="m-0 font-weight-bold text-primary">
                Collapsable Card Example
              </h6>
            </div>
            <div class="card-body incard-body">
              This is a collapsable card example using Bootstrap's built in
              collapse functionality. Click on the card header to see the card
              body collapse and expand!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
