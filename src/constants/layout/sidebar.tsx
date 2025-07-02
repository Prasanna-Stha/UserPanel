import { ROUTES_CONFIG } from "@/config/routes";
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
} from "react-icons/fi";
import { MdReport } from "react-icons/md";

export const SIDEBAR_ITEMS = [
  {
    name: "Main Menu",
    icon: FiHome,
    subItems: [
      {
        name: "Dashboard",
        icon: FiHome,
        href: ROUTES_CONFIG.MAIN_MENU.DASHBOARD,
      },
      {
        name: "Analytics",
        icon: FiActivity,
        href: ROUTES_CONFIG.MAIN_MENU.ANALYTICS,
      },
    ],
  },
  {
    name: "User Management",
    icon: FiUsers,
    subItems: [
      {
        name: "User List",
        icon: FiUsers,
        href: ROUTES_CONFIG.USER_MANAGEMENT.USER_LIST,
      },
      {
        name: "Add New User",
        icon: FiUserPlus,
        href: ROUTES_CONFIG.USER_MANAGEMENT.ADD_NEW_USER,
      },
      {
        name: "Roles & Permissions",
        icon: FiShield,
        href: ROUTES_CONFIG.USER_MANAGEMENT.ROLES_PERMISSION,
      },
    ],
  },
  {
    name: "Activity",
    icon: FiFileText,
    subItems: [
      {
        name: "Activity Logs",
        icon: FiFileText,
        href: ROUTES_CONFIG.ACTIVITY.ACTIVITY_LOG,
      },
      {
        name: "Audit Trails",
        icon: FiUserCheck,
        href: ROUTES_CONFIG.ACTIVITY.AUDIT_TRAILS,
      },
    ],
  },
  {
    name: "Settings",
    icon: FiSettings,
    subItems: [
      {
        name: "Profile Settings",
        icon: FiUserCheck,
        href: ROUTES_CONFIG.SETTING.PROFILE_SETTING,
      },
      {
        name: "System Settings",
        icon: FiDatabase,
        href: ROUTES_CONFIG.SETTING.SYSTEM_SETTING,
      },
    ],
  },
  {
    name: "Reports",
    icon: MdReport,
    subItems: [
      {
        name: "User Reports",
        icon: MdReport,
        href: ROUTES_CONFIG.REPORT.USER_REPORT,
      },
      {
        name: "System Reports",
        icon: MdReport,
        href: ROUTES_CONFIG.REPORT.SYSTEM_REPORT,
      },
    ],
  },
];
