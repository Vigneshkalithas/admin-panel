// import { useNavigate } from "react-router-dom";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoSettingsOutline } from "react-icons/io5";
// import { IoBuildOutline } from "react-icons/io5";
// import { AiOutlineFolder, AiOutlineTable } from "react-icons/ai";
// import { VscGraphLine } from "react-icons/vsc";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import React, { useState } from "react";
// import List from "@mui/material/List";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Collapse from "@mui/material/Collapse";
// import ExpandMore from "@mui/icons-material/ExpandMore";

// export function Sidebar({ children }) {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   const menuItem = [
//     {
//       path: "/",
//       icon: <AiOutlineDashboard />,
//       name: "Dashboard",
//     },
//     {
//       path: "/components",
//       icon: <IoSettingsOutline />,
//       name: "Components",

//       subNav: [
//         {
//           name: "Buttons",
//         },
//         {
//           name: "Cards",
//         },
//       ],
//     },
//     {
//       path: "/utilities",
//       icon: <IoBuildOutline />,
//       name: "Utilities",
//       subNav: [
//         {
//           name: "Colors",
//         },
//         {
//           name: "Borders",
//         },
//         {
//           name: "Animations",
//         },
//         {
//           name: "Others",
//         },
//       ],
//     },
//     {
//       path: "pages",
//       icon: <AiOutlineFolder />,
//       name: "Pages",
//     },
//     {
//       path: "charts",
//       icon: <VscGraphLine />,
//       name: "Charts",
//     },
//     {
//       path: "tables",
//       icon: <AiOutlineTable />,
//       name: "Tables",
//     },
//   ];

//   return (
//     <>
//       <div className="container">
//         <div className="sidebar">
//           <div className="top_section">
//             <h1 className="logo">
//               SB ADMIN<sup>2</sup>
//             </h1>
//           </div>
//           <div className="all-lists">
//             {/* <List
//               // sx={{ width: "100%", maxWidth: 360 }}
//               // component="nav"
//               // aria-labelledby="nested-list-subheader"
//               // subheader={
//               //   <ListSubheader component="div" id="nested-list-subheader">
//               //     Nested List Items
//               //   </ListSubheader>
//               // }
//             > */}
//             {menuItem.map((element, index) => (
//               <List>
//                 <ListItemButton
//                   className="butt"
//                   key={index}
//                   onClick={element.subNav ? handleClick : () => navigate(element.path)}>
//                   <ListItemIcon>{element.icon}</ListItemIcon>
//                   <ListItemText c primary={element.name} />
//                   {element.subNav ? (open ? (<ExpandMore />) : (<ChevronRightIcon />)) : null}
//                 </ListItemButton>
//                 {element.subNav ? (
//                   <div className="parn">
//                     <Collapse in={open} timeout="auto" unmountOnExit>
//                       <List component="div" className="innerButton">
//                         {element.subNav.map((element, index) => (
//                           <div>
//                             <ListItemButton className="butt">
//                               <ListItemText
//                                 key={index}
//                                 primary={element.name} />
//                             </ListItemButton>
//                           </div>
//                         ))}
//                       </List>
//                     </Collapse>
//                   </div>
//                 ) : null}
//               </List>
//             ))}
//             {/* </List> */}
//           </div>
//         </div>
//         <main>{children}</main>
//       </div>
//     </>
//   );
// }
