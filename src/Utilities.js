import React from "react";
import { ProgressBar } from "react-bootstrap";

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

export function Animation(){

  return(
    <div>
<div className="container-fluid">

<h1 className="h3 mb-1 text-gray-800 dashboard">Animation Utilities</h1>
<p className="mb-4  ms-3 mt-3">Bootstrap's default utility classes can be found on the official <a className="text-decoration-none" href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
    below were created to extend this theme past the default utility classes built into Bootstrap's
    framework.</p>

<div className="row">

    
    <div className="col-lg-6">

        <div className="card position-relative">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Grow In Animation Utilty</h6>
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <code>.animated--grow-in</code>
                </div>
                <div className="small mb-1">Navbar Dropdown Example:</div>
                <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu dropdown-menu-right animated--grow-in" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <p className="mb-0 small">Note: This utility animates the CSS transform property,
                    meaning it will override any existing transforms on an element being animated!
                    In this theme, the grow in animation is only being used on dropdowns within the
                    navbar.</p>
            </div>
        </div>

    </div>

    
    <div className="col-lg-6">  

        <div className="card position-relative">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Fade In Animation Utilty</h6>
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <code>.animated--fade-in</code>
                </div>
                <div className="small mb-1">Navbar Dropdown Example:</div>
                <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu dropdown-menu-right animated--fade-in" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="small mb-1">Dropdown Button Example:</div>
                <div className="dropdown mb-4">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </button>
                    <div className="dropdown-menu animated--fade-in" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <p className="mb-0 small">Note: This utility animates the CSS opacity property, meaning
                    it will override any existing opacity on an element being animated!</p>
            </div>
        </div>

    </div>

</div>

</div>
    </div>
  )
}




export function Others(){
  const now = 70;
return(
      <div className="container-fluid">

            
                  <h1 className="h3 mb-1 text-gray-800 dashboard">Other Utilities</h1>
                  <p className="mb-4  ms-3 mt-3">Bootstrap's default utility classes can be found on the official <a className="text-decoration-none" href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                      below were created to extend this theme past the default utility classes built into Bootstrap's
                      framework.</p>

                 
          <div className="row">

                      <div className="col-lg-6">

                          <div className="card mb-4">
                              <div className="card-header py-3">
                                  <h6 className="m-0 font-weight-bold text-primary">Overflow Hidden Utilty</h6>
                              </div>
                              <div className="card-body">
                                  Use <code>.o-hidden</code> to set the overflow property of any element to hidden.
                              </div>
                          </div>
                         

            
                           <div className="card mb-4">
                              <div className="card-header py-3">
                                  <h6 className="m-0 font-weight-bold text-primary">Progress Small Utility</h6>
                              </div>
                               <div className="card-body">
                                  <div className="mb-1 small">Normal Progress Bar</div>
                                   {/* <div className="progress mb-4">
                                        <div className="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div> */}
                                        
                                  {/* </div>  */}
                                  <ProgressBar className="progress mb-4 " now={now} />
                                
                                   <div className="mb-1 small">Small Progress Bar</div>
                                  {/* <div className="progress progress-sm mb-2">
                                       <div className="progress-bar-sm"></div> 
                                  </div>   */}
                                  <ProgressBar className="progress progress-sm mb-2" now={now}  />
                                  Use the <code>.progress-sm</code> class along with <code>.progress</code>
                              </div> 
                          </div> 
                         
                
                          <div className="card mb-4">
                              <div className="card-header py-3">
                                  <h6 className="m-0 font-weight-bold text-primary">Dropdown - No Arrow</h6>
                              </div>
                              <div className="card-body">
                                  <div className="dropdown no-arrow mb-4">
                                      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          Dropdown (no arrow)
                                      </button>
                                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                          <a className="dropdown-item" href="#">Action</a>
                                          <a className="dropdown-item" href="#">Another action</a>
                                          <a className="dropdown-item" href="#">Something else here</a>
                                      </div>
                                  </div>
                                  Add the <code>.no-arrow</code> class alongside the <code>.dropdown</code>
                              </div>
                          </div> 

                      </div>

                       <div className="col-lg-6">

                          
                          <div className="card">
                              <div className="card-header py-3">
                                  <h6 className="m-0 font-weight-bold text-primary">Rotation Utilities</h6>
                              </div>
                              <div className="card-body text-center">
                                  <div className="bg-primary text-white p-3 rotate-15 d-inline-block my-4">.rotate-15
                                  </div>
                                 <hr/>
                                  <div className="bg-primary text-white p-3 rotate-n-15 d-inline-block my-4">.rotate-n-15
                                  </div>
                              </div>
                          </div>

                      </div> 

                  </div> 

              </div>
  )
}


export function Colors(){

  return(
    <div className="container-fluid">

                 

                    <h1 className="h3 mb-1 text-gray-800 dashboard">Color Utilities</h1>
                    <p className="mb-5 ms-3 mt-3">Bootstrap's default utility classes can be found on the official <a  className="text-decoration-none" href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                        below were created to extend this theme past the default utility classes built into Bootstrap's
                        framework.</p>
                  <div className="row">
                <div className="col-lg-4">

                        

                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Custom Text Color Utilities</h6>
                                </div>
                                <div class="card-body">
                                    <p className="text-gray-100 p-3 bg-dark m-0">.text-gray-100</p>
                                    <p className="text-gray-200 p-3 bg-dark m-0">.text-gray-200</p>
                                    <p className="text-gray-300 p-3 bg-dark m-0">.text-gray-300</p>
                                    <p className="text-gray-400 p-3 bg-dark m-0">.text-gray-400</p>
                                    <p className="text-gray-500 p-3 m-0">.text-gray-500</p>
                                    <p className="text-gray-600 p-3 m-0">.text-gray-600</p>
                                    <p className="text-gray-700 p-3 m-0">.text-gray-700</p>
                                    <p className="text-gray-800 p-3 m-0">.text-gray-800</p>
                                    <p className="text-gray-900 p-3 m-0">.text-gray-900</p>
                                </div>
                            </div>

                         

                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Custom Font Size Utilities</h6>
                                </div>
                                <div className="card-body">
                                    <p className="text-xs">.text-xs</p>
                                    <p className="text-lg mb-0">.text-lg</p>
                                </div>
                            </div>

                        </div>

                     
                        <div className="col-lg-4">

                          


<div class="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Custom Background Gradient Utilities
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <div className="px-3 py-5 bg-gradient-primary text-white">.bg-gradient-primary</div>
                                    <div className="px-3 py-5 bg-gradient-secondary text-white">.bg-gradient-secondary</div>
                                    <div className="px-3 py-5 bg-gradient-success text-white">.bg-gradient-success</div>
                                    <div className="px-3 py-5 bg-gradient-info text-white">.bg-gradient-info</div>
                                    <div className="px-3 py-5 bg-gradient-warning text-white">.bg-gradient-warning</div>
                                    <div className="px-3 py-5 bg-gradient-danger text-white">.bg-gradient-danger</div>
                                    <div className="px-3 py-5 bg-gradient-light text-white">.bg-gradient-light</div>
                                    <div className="px-3 py-5 bg-gradient-dark text-white">.bg-gradient-dark</div>
                                </div>
                            </div>

                        </div>

                       


                        <div className="col-lg-4">

                      
                         
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Custom Grayscale Background Utilities
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <div className="p-3 bg-gray-100">.bg-gray-100</div>
                                    <div className="p-3 bg-gray-200">.bg-gray-200</div>
                                    <div className="p-3 bg-gray-300">.bg-gray-300</div>
                                    <div className="p-3 bg-gray-400">.bg-gray-400</div>
                                    <div className="p-3 bg-gray-500 text-white">.bg-gray-500</div>
                                    <div className="p-3 bg-gray-600 text-white">.bg-gray-600</div>
                                    <div className="p-3 bg-gray-700 text-white">.bg-gray-700</div>
                                    <div className="p-3 bg-gray-800 text-white">.bg-gray-800</div>
                                    <div className="p-3 bg-gray-900 text-white">.bg-gray-900</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

  )
}