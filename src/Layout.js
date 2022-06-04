import React from "react";
import { Outlet } from "react-router-dom";
import { SideBarNew } from "./App";
import { Dashboard } from "./Dashboard";
import { PrimarySearchAppBar }from "./PrimarySearchAppBar"

export function Layout() {

  return (
   
     <div className="App-child">
        <div><SideBarNew/></div>
          <div className="top-nav">
          <div>
          <PrimarySearchAppBar/>
          </div>
          <div className="bgColourApp">
         <Outlet/>
          </div>
        </div>
      </div>
    
  );
}
