// Basic types
// boolean, number, string, array, tuple, any, void

const isDone: boolean = false;
const age: number = 26;
const city: string = "Amsterdam";
const list: number[] = [1, 2, 3];
const list2: Array<number> = [4, 5, 6];
const coordinates: TCoord = [52.3825, 4.8064];

const getCoordinates = (): TCoord => coordinates;
const setCoordinates = (coordinates: TCoord) => console.log(coordinates);

// Custom Types
type TCoord = [number, number];

type BadgeSize = "sm" | "md" | "lg";
type BadgeVariant = "primary" | "secondary";

// Interfaces
interface BadgeProps {
  size: BadgeSize;
  variant: BadgeVariant;
}

// Extends
interface Props extends BadgeProps {
  darkMode: boolean;
}

// Generic Interfaces
interface ButtonGroupProps<T> {
  active: T;
  setActive: (active: T) => void;
}

// Record
const BadgeClasses: Record<BadgeSize, string> = {
  sm: "badge-sm",
  md: "badge-md",
  lg: "badge-lg",
};
