import React from "react";

export function Utilities() {
  return <div className="utilities">{/* <h1>Utilities</h1> */}</div>;
}

export function Border() {
  return (
    <div className="container">
      <div className="row">
      <h1 className="h3 mb-2 text-gray-800 dashboard">Border Utilities</h1>

      <p className="mb-3 ms-3 mt-3">
        Bootstrap's default utility classes can be found on the official{" "}
        <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a>{" "}
        page. The custom utilities below were created to extend this theme past
        the default utility classes built into Bootstrap's framework.
      </p>
      </div>
    
        
        <Subborder/>
       
        
    </div>
  );
}

function Subborder() {
  return (
    <div className="row">
    <div className="col-lg-6  col-md-6 col-sm-12 mb-4">
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body border-body">
          <div className="card-title border-text">border-left-primary</div>
        </div>
      </div>
    </div>

    <div className="col-lg-6  col-md-6 col-sm-12 mb-4">
      <div className="card border-bottom-primary shadow h-100 py-2">
        <div className="card-body border-body">
          <div className="card-title border-text">border-bottom-secondary</div>
        </div>
      </div>
    </div>


    <div className="col-lg-6  col-md-6 col-sm-12 mb-4">
      <div className="card border-left-secondary shadow h-100 py-2">
        <div className="card-body border-body">
          <div className="card-title border-text">border-left-secondary</div>
        </div>
      </div>
    </div>

    <div className="col-lg-6  col-md-6 col-sm-12 mb-4">
      <div className="card border-bottom-secondary shadow h-100 py-2">
        <div className="card-body border-body">
          <div className="card-title border-text">border-bottom-secondary</div>
        </div>
      </div>
    </div>

    <div className="col-lg-6  col-md-6 col-sm-12 mb-4">
      <div className="card border-left-success shadow h-100 py-2">
        <div className="card-body border-body">
          <div className="card-title border-text">border-left-success</div>
        </div>
      </div>
    </div>

    <div className="col-lg-6  col-md-6 col-sm-12 mb-4">
      <div className="card border-bottom-success shadow h-100 py-2">
        <div className="card-body border-body">
          <div className="card-title border-text">border-bottom-success</div>
        </div>
      </div>
    </div>


    <div className="col-lg-6  col-md-6 col-sm-12 mb-4">
      <div className="card border-left-info shadow h-100 py-2">
        <div className="card-body border-body">
          <div className="card-title border-text">border-left-info</div>
        </div>
      </div>
    </div>

    <div className="col-lg-6  col-md-6 col-sm-12 mb-4">
      <div className="card border-bottom-info shadow h-100 py-2">
        <div className="card-body border-body">
          <div className="card-title border-text">border-bottom-info</div>
        </div>
      </div>
    </div>



    <div className="col-lg-6  col-md-6 col-sm-12 mb-4">
      <div className="card border-left-warning shadow h-100 py-2">
        <div className="card-body border-body">
          <div className="card-title border-text">border-left-warning</div>
        </div>
      </div>
    </div>

    <div className="col-lg-6  col-md-6 col-sm-12 mb-4">
      <div className="card border-bottom-warning shadow h-100 py-2">
        <div className="card-body border-body">
          <div className="card-title border-text">border-bottom-warning</div>
        </div>
      </div>
    </div>




    <div className="col-lg-6  col-md-6 col-sm-12 mb-4">
      <div className="card border-left-danger shadow h-100 py-2">
        <div className="card-body border-body">
          <div className="card-title border-text">border-left-danger</div>
        </div>
      </div>
    </div>

    <div className="col-lg-6  col-md-6 col-sm-12 mb-4">
      <div className="card border-bottom-danger shadow h-100 py-2">
        <div className="card-body border-body">
          <div className="card-title border-text">border-bottom-danger</div>
        </div>
      </div>
    </div>



    <div className="col-lg-6  col-md-6 col-sm-12 mb-4">
      <div className="card border-left-dark shadow h-100 py-2">
        <div className="card-body border-body">
          <div className="card-title border-text">border-left-dark</div>
        </div>
      </div>
    </div>

    <div className="col-lg-6  col-md-6 col-sm-12 mb-4">
      <div className="card border-bottom-dark shadow h-100 py-2">
        <div className="card-body border-body">
          <div className="card-title border-text">border-bottom-dark</div>
        </div>
      </div>
    </div>



   



    




    
    </div>
  );
}
