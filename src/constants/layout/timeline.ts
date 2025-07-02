import {  UserPlus, Check, Trash2, LogOut, XCircle, } from "lucide-react";

type TimelineData = {
  title: string;
  badge?: string;
  description?: string;
  icon?: React.ElementType;
  color?: string;
  colorPalette?: string;
};

export const timelineData: TimelineData[] = [
  {
    title: "New User",
    badge: "Prasanna",
    description: "Account created successfully.",
    icon: UserPlus,
    color: "green.400",
    colorPalette: "cyan",
  },
  {
    title: "Error",
    badge: "Update Failed",
    description: "Something went wrong while updating user info.",
    icon: XCircle,
    color: "red.500",
    colorPalette: "red",
  },
  {
    title: "Verification",
    badge: "Email",
    description: "Email verified successfully.",
    icon: Check,
    color: "teal.400",
    colorPalette: "blue",
  },
  {
    title: "User Info Update",
    badge: "Sucessfull",
    description: "User updated successfully.",
    icon: Check,
    color: "cyan.500",
    colorPalette: "green",
  },
  {
    title: "User",
    badge: "Logged Out",
    description: "User signed out.",
    icon: LogOut,
    color: "yellow.300",
    colorPalette: "yellow",
  },
  {
    title: "Account",
    badge: "Deleted",
    description: "User account permanently removed.",
    icon: Trash2,
    color: "red.500",
    colorPalette: "red",
  },
  {
    title: "New User",
    badge: "Dipun",
    description: "Account created successfully.",
    icon: UserPlus,
    color: "green.400",
    colorPalette: "cyan",
  },
    {
    title: "Verification",
    badge: "Email",
    description: "Email verified successfully.",
    icon: Check,
    color: "teal.400",
    colorPalette: "blue",
  },
  {
    title: "User Info Update",
    badge: "Sucessfull",
    description: "User updated successfully.",
    icon: Check,
    color: "cyan.500",
    colorPalette: "green",
  },
    {
    title: "Account",
    badge: "Deleted",
    description: "User account permanently removed.",
    icon: Trash2,
    color: "red.500",
    colorPalette: "red",
  },
    {
    title: "New User",
    badge: "Safal",
    description: "Account created successfully.",
    icon: UserPlus,
    color: "green.400",
    colorPalette: "cyan",
  },
    {
    title: "User",
    badge: "Logged Out",
    description: "User signed out.",
    icon: LogOut,
    color: "yellow.300",
    colorPalette: "yellow",
  },
    {
    title: "Error",
    badge: "Update Failed",
    description: "Something went wrong while updating user info.",
    icon: XCircle,
    color: "red.500",
    colorPalette: "red",
  },
];