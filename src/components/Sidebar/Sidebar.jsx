import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Dash Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>

          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>

          <p className="title">LISTS</p>

          <li>
            <PersonOutlineOutlinedIcon className="icon" />
            <span>Users</span>
          </li>

          <li>
            <CategoryIcon className="icon" />
            <span>Products</span>
          </li>

          <li>
            <CreditCardOutlinedIcon className="icon" />
            <span>Orders</span>
          </li>

          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>

          <p className="title">USEFUL</p>

          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>

          <li>
            <NotificationsActiveIcon className="icon" />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICE</p>

          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System Health</span>
          </li>

          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>

          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>

          <p className="title">USER</p>

          <li>
            <PersonIcon className="icon" />
            <span>Profile</span>
          </li>

          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
