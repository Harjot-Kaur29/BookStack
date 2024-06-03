import React, {useContext} from 'react';
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiTable, HiViewBoards, HiSupport, HiOutlineCloudUpload , HiHome } from "react-icons/hi";
import profile from '../assets/profile.jpg';
import './SideBar.css'; // Import CSS file for styling
import { AuthContext } from '../contects/AuthProvider';

const SideBar = () => {
  const {user} = useContext(AuthContext);
  
  return (
    <div className="sidebar-container"> {/* Add a container div with a class for styling */}
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo
          href="/"
          img={user?.photoURL}
          imgAlt=""
          className='w-16 h-16'
        >
          <p>
            {
              user?.displayName ||  "Demo User"
            }
          </p>
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
          <Sidebar.Item href="/" icon={HiHome}>
              Home
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
              Upload Book
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
              Manage Books
            </Sidebar.Item>
            
            
            <Sidebar.Item href="/login" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiTable}>
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiSupport}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
