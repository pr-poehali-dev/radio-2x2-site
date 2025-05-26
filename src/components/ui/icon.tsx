import { LucideIcon, icons } from "lucide-react";

interface IconProps {
  name: keyof typeof icons;
  fallback?: keyof typeof icons;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  fallback = "CircleAlert",
  size = 24,
  className = "",
}) => {
  const IconComponent = icons[name] || icons[fallback];

  return <IconComponent size={size} className={className} />;
};

export default Icon;
