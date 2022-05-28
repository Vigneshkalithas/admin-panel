import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";
import { FaTable } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
// import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowUpLine } from "react-icons/ri";
// import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import StarBorder from "@mui/icons-material/StarBorder";
// import { Sidebar } from "./Sidebar";
import { BsFillEmojiWinkFill } from "react-icons/bs";

// new
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { IoBuildOutline } from "react-icons/io5";
import { AiOutlineFolder, AiOutlineTable } from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { borderRadius, fontSize, letterSpacing, textAlign } from "@mui/system";
import { fontGrid } from "@mui/material/styles/cssUtils";

// end

function App() {
  return (
    <div className="App">
     
        <SideBarNew>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/components" element={<Components />} />
            <Route path="/utilities" element={<Utilities />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/tables" element={<Tables />} />
          </Routes>
        </SideBarNew>
       
      
      
    </div>
  );
}

function SideBarNew( { children } ) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openComponent, setOpenComponent] = useState(false);
  const [openPages, setOpenPages] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickComponent = () => {
    setOpenComponent(!openComponent);
  };
  const handleClickPages = () => {
    setOpenPages(!openPages);
  };

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="top_section">
            <div className="logo">
              <div className="emoji-icon">
                <BsFillEmojiWinkFill />
              </div>
              <h1 className="text-logo">
                SB ADMIN<sup>2</sup>
              </h1>
            </div>
          </div>
          <div className="menus">

            <List activeClassName="active">
              <div className="list-buttons">
              <ListItemButton onClick={() => navigate("/")} >
                <ListItemIcon >
                  <AiOutlineDashboard className="menu-icons"/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
              </div>
             <div className="list-buttons">
              <ListItemButton onClick={handleClickComponent} >
                <ListItemIcon>
                  <IoSettingsOutline className="menu-icons"/>
                </ListItemIcon>
                <ListItemText primary="Components" />
                {openComponent ? <ExpandMore /> : <ChevronRightIcon />}
              </ListItemButton>
              </div>

              <Collapse
                in={openComponent}
                timeout="auto"
                unmountOnExit
                sx={{ pt: "5px", pb: "5px", marginLeft: "20px" }}
              >
                <List
                  component="div"
                  disablePadding
                  sx={{
                    width: "200px",
                    maxWidth: 360,
                    bgcolor: "whitesmoke",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader
                      component="div"
                      id="nested-list-subheader"
                      sx={{ bgcolor: "whitesmoke",fontSize:"12.5px",letterSpacing:"0.5px"}}
                    >
                      CUSTOM COMPONENTS:
                    </ListSubheader>
                  }
                >
                  <ListItemButton sx={{ pl: 7,color:"black"}} >
                    <ListItemText primary="Buttons" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 7,color:"black"}}>
                    <ListItemText primary="Cards" />
                  </ListItemButton>
                </List>
              </Collapse>
              
              <div className="list-buttons">
               <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <IoBuildOutline className="menu-icons" />
                </ListItemIcon>
                <ListItemText primary="Utilities" />
                {open ? <ExpandMore /> : <ChevronRightIcon />}
              </ListItemButton>
              </div>

              <Collapse
                in={open}
                timeout="auto"
                unmountOnExit
                sx={{ pt: "5px", pb: "5px", marginLeft: "20px" }}
              >
                <List
                  component="div"
                  disablePadding
                  sx={{
                    width: "200px",
                    maxWidth: 360,
                    bgcolor: "whitesmoke",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader
                      component="div"
                      id="nested-list-subheader"
                      sx={{ bgcolor: "whitesmoke",fontSize:"12.5px",letterSpacing:"0.5px"}}
                    >
                      CUSTOM UTILITIES:
                    </ListSubheader>
                  }
                >
                  <ListItemButton sx={{ pl: 7,color:"black" }}>
                    <ListItemText primary="Colors" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 7,color:"black" }}>
                    <ListItemText primary="Borders" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 7,color:"black" }}>
                    <ListItemText primary="Animations" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 7,color:"black" }}>
                    <ListItemText primary="Others" />
                  </ListItemButton>
                </List>
              </Collapse>

              <div className="list-buttons">
              <ListItemButton onClick={handleClickPages}>
                <ListItemIcon>
                  <AiOutlineFolder className="menu-icons"/>
                </ListItemIcon>
                <ListItemText primary="Pages" />
                {openPages ? <ExpandMore /> : <ChevronRightIcon />}
              </ListItemButton>
              </div>

              <Collapse
                in={openPages}
                timeout="auto"
                unmountOnExit
                sx={{ pt: "5px", pb: "5px", marginLeft: "20px" }}
              >
                <List
                  component="div"
                  disablePadding
                  sx={{
                    width: "200px",
                    maxWidth: 360,
                    bgcolor: "whitesmoke",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <List component="div" disablePadding  aria-labelledby="nested-list-subheader"
                subheader={
              <ListSubheader component="div" id="nested-list-subheader" sx={{bgcolor:"whitesmoke",fontSize:"12.5px",letterSpacing:"0.5px"}}>
                LOGIN SCREENS:
             </ListSubheader>
                } >
                    <ListItemButton sx={{ pl: 7 ,color:"black"}}>
                      <ListItemText primary="Login" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 7 ,color:"black"}}>
                      <ListItemText primary="Register" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 7 ,color:"black"}}>
                      <ListItemText primary="Forget Password" />
                    </ListItemButton>
                  </List>

                  <List component="div" disablePadding  aria-labelledby="nested-list-subheader"
                subheader={
              <ListSubheader component="div" id="nested-list-subheader" sx={{bgcolor:"whitesmoke",fontSize:"12.5px",letterSpacing:"0.5px"}}>
                OTHER PAGES:
             </ListSubheader>
                }>
                    <ListItemButton sx={{ pl: 7,color:"black"}}>
                      <ListItemText primary="404 page" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 7,color:"black" }}>
                      <ListItemText primary="Blank page" />
                    </ListItemButton>
                  </List>
                </List>
              </Collapse>

           <div className="list-buttons">
              <ListItemButton onClick={() => navigate("/charts")}>
                <ListItemIcon>
                  <VscGraphLine  className="menu-icons"/>
                </ListItemIcon>
                <ListItemText primary="Charts" />
              </ListItemButton>
              </div>

              <div className="list-buttons">
              <ListItemButton onClick={() => navigate("/tables")}>
                <ListItemIcon>
                  <AiOutlineTable className="menu-icons"/>
                </ListItemIcon>
                <ListItemText primary="Tables" />
              </ListItemButton>
              </div>
            </List>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
    </div>
  );
}

function Components() {
  return (
    <div className="components">
      <h1>Components</h1>
    </div>
  );
}
function Utilities() {
  return (
    <div className="utilities">
      <h1>Utilities</h1>
    </div>
  );
}
function Pages() {
  return (
    <div className="pages">
      <h1>Pages</h1>
    </div>
  );
}
function Charts() {
  return (
    <div className="charts">
      <h1>Charts</h1>
    </div>
  );
}

function Tables() {
  return (
    <div className="tables">
      <h1>Tables</h1>
    </div>
  );
}

// ilavenil






export default App;
