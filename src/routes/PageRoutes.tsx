import { ROUTES_CONFIG } from "@/config/routes";
import Analytics from "@/pages/Admin/Analytics";
import Dashboard from "@/pages/Admin/Dashboard";
import UserList from "@/pages/Admin/User_Management/user-list";
import Profile from "@/pages/Profile";

export const PAGE_ROUTES = [
  { path: ROUTES_CONFIG.MAIN_MENU.DASHBOARD, element: <Dashboard /> },
  { path: ROUTES_CONFIG.MAIN_MENU.ANALYTICS, element: <Analytics /> },
  { path: ROUTES_CONFIG.USER_MANAGEMENT.USER_LIST, element: <UserList /> },
  { path: ROUTES_CONFIG.PROFILE.USER_PROFILE, element: <Profile /> },
];
