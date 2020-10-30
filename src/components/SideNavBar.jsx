import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faIndustry,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./SideNavBar.css";

// react-pro-sidebar
// https://github.com/azouaoui-med/react-pro-sidebar

const FaSiteMap = <FontAwesomeIcon icon={faSitemap} />;
const FaBuilding = <FontAwesomeIcon icon={faBuilding} />;
const FaIndustry = <FontAwesomeIcon icon={faIndustry} />;

function SideNavBar() {
  return (
    <ProSidebar>
      <SidebarHeader>
        <div className="logo">Logo</div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <SubMenu title="All Sites" icon={FaIndustry}>
            <MenuItem>Houston</MenuItem>
            <MenuItem>Nashville</MenuItem>
            <MenuItem>Lake Charles</MenuItem>
            <MenuItem>Joliet</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </ProSidebar>
  );
}

export default SideNavBar;
