export interface INavItem {
  label: string;
  icon: JSX.Element;
  toggleSidebar?: boolean;
  subItems?: string[];
}
