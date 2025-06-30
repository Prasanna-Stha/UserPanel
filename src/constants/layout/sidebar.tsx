import { 
  FiHome, 
  FiUsers, 
  FiUserPlus, 
  FiShield,
  FiFileText, 
  FiSettings,
  FiActivity,
  FiDatabase,
  FiUserCheck,
} from 'react-icons/fi';
import { MdReport } from 'react-icons/md';

export const SIDEBAR_ITEMS = [
  {
    name: 'Main Menu',
    icon: FiHome,
    subItems: [
      { name: 'Dashboard', icon: FiHome },
      { name: 'Analytics', icon: FiActivity },
    ],
  },
  {
    name: 'User Management',
    icon: FiUsers,
    subItems: [
      { name: 'User List', icon: FiUsers },
      { name: 'Add New User', icon: FiUserPlus },
      { name: 'Roles & Permissions', icon: FiShield },
    ],
  },
  {
    name: 'Activity',
    icon: FiFileText,
    subItems: [
      { name: 'Activity Logs', icon: FiFileText },
      { name: 'Audit Trails', icon: FiUserCheck },
    ],
  },
  {
    name: 'Settings',
    icon: FiSettings,
    subItems: [
      { name: 'Profile Settings', icon: FiUserCheck },
      { name: 'System Settings', icon: FiDatabase },
    ],
  },
  {
    name: 'Reports',
    icon: MdReport,
    subItems: [
      { name: 'User Reports', icon: MdReport },
      { name: 'System Reports', icon: MdReport },
    ],
  },
];
