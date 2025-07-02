import { ROUTES_CONFIG } from "@/config/routes";
import Analytics from "@/pages/Admin/Analytics";
import Dashboard from "@/pages/Admin/Dashboard";

export const PAGE_ROUTES = [
  { path: ROUTES_CONFIG.MAIN_MENU.DASHBOARD, element: <Dashboard /> },
  { path: ROUTES_CONFIG.MAIN_MENU.ANALYTICS, element: <Analytics /> },
];
