export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "base" | "large";
  variant?: "primary" | "secondary" | "destructive" | "outline";
}

export interface IUserSellerLayout {
  children: React.ReactNode;
}

export interface IMobileNavigation {
  toggleAside: () => void;
}
