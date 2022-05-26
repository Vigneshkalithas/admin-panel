import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Router, Route, Link, Routes,Navigate,useNavigate} from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { IoBuildOutline } from "react-icons/io5";
import { AiOutlineFolder,AiOutlineTable } from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { FaTable } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowUpLine } from "react-icons/ri";
import React, { useState } from "react";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';







































function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/components" element={<Components />} />
            <Route path="/utilities" element={<Utilities />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/tables" element={<Tables />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

function Sidebar({children}) {
  
  // const [subnav, setSubnav] = useState(false);
  // const showSubnav = () => setSubnav(!subnav);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const menuItem = [
    {
      path: "/",
      icon: <AiOutlineDashboard />,
      name: "Dashboard",
    },
    {
      path: "/components",
      icon: <IoSettingsOutline />,
      name: "Components",
      iconClosed: <RiArrowDropDownLine />,
      iconOpened: <RiArrowUpLine />,

      subNav: [
        {
          path: "/buttons",
          icon: <IoSettingsOutline />,
          name: "Buttons",
        },
        {
          path: "/cards",
          icon: <IoSettingsOutline />,
          name: "Cards",
        },
      ],
    },
    {
      path: "/utilities",
      icon: <IoBuildOutline />,
      name: "Utilities",
    },
    {
      path: "pages",
      icon: <AiOutlineFolder />,
      name: "Pages",
    },
    {
      path: "charts",
      icon: <VscGraphLine />,
      name: "Charts",
    },
    {
      path: "tables",
      icon: <AiOutlineTable/>,
      name: "Tables",
    },
  ];

  return (
    // <>
    // <div className="container">
    //     <div className="sidebar">
    //        <div className="top_section">
    //          <h1 className='logo'>SB ADMIN<sup>2</sup></h1>
    //          <div className="bars">
    //            <GoThreeBars/>
    //          </div>
    //        </div>
    //        { menuItem.map((element,index)=>(

    //          <NavLink to={element.path} key={index} onClick={element.subNav && showSubnav} className="link" activeclassName="active">

    //            <div className="icon">{element.icon}</div>
    //            <div className="link_text">{element.name}</div>
    //            <div>{element.subNav && subnav
    //            ? element.iconOpened
    //            :element.subNav
    //            ? element.iconClosed
    //            : null }</div>
    //            {subnav && element.subNav.map((element,index)=>{
    //            return (
    //              <div to={element.path} key={index}>
    //                <div>{element.name}</div>
    //              </div>
    //            )
    //          })}
    //          </NavLink>

    //        ))}

    //     </div>
    //     {/* <main>{children}</main> */}
    // </div>
    // </>

    <>
      <div className="container">
        <div className="sidebar">
          <div className="top_section">
            <h1 className="logo">
              SB ADMIN<sup>2</sup>
            </h1>
            {/* <div className="bars">
              <GoThreeBars />
            </div> */}
          </div>
          {menuItem.map((element,index)=>{

            return(

           
              <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'skyblue' }}
      component="nav"
      aria-labelledby="nested-list-subheader">

      <ListItemButton key={index}  onClick={ element.subNav ? handleClick : ()=>navigate(element.path) }>
        <ListItemIcon>
          {element.icon}
        </ListItemIcon>
        <ListItemText primary={element.name} />

        {element.subNav && open ? <ExpandMore /> : element.subNav ? <ChevronRightIcon/> : null}
      </ListItemButton>

  
     <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
          
            <ListItemText primary=" stared" />
          </ListItemButton>
           
         
        </List>
      </Collapse>
     




{/* 


      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandMore /> : <ChevronRightIcon/>}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse> */}
    </List>
     )
    })}
  

        </div>
         <main>{children}</main> 
      </div>
    </>









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

export default App;
