import type { IconType } from "react-icons/lib";

export type SidebarPropsType = {
  name: string;
  icon?: IconType;
  subItems: SubItemsType[];
};

type SubItemsType = {
  name: string;
  icon?: IconType;
};
