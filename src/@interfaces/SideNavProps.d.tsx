import { INavItem } from "./NavItem.d";

export interface ISideNavProps {
  navItemsTop: INavItem[];
  navItemsBottom: INavItem[];
  open: boolean;
  setOpen: (open: boolean) => void;
  username: string;
  email: string;
}
