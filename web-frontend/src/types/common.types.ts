export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: number | null;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}
