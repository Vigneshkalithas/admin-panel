import React from "react";




export function FourCards() {

  return (
    
      <div className="row">
        <div className="col-lg-3  col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="card-title monthly">EARNINGS (MONTHLY)</div>
              <div className="cardicon">
                <div className="card-text">$40,000</div>
                <div>
                  <i class="fas fa-calendar-o dashicon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="card-title annual">EARNINGS (ANNUAL)</div>
              <div className="cardicon">
                <div className="card-text">$215,000</div>
                <div>
                  <i class="fas fa-dollar-sign dashicon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="card-title task">TASKS</div>
              <div className="cardicon">
                <div className="card-text">50%</div>
                <div>
                  <i class="fas fa-clipboard-list dashicon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 ">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="card-title pending">PENDING REQUESTS</div>
              <div className="cardicon">
                <div className="card-text">18</div>
                <div>
                  <i class="fas fa-comments dashicon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
}
