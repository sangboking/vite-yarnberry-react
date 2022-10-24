import { ReactComponent as facebook } from "./facebook.svg";
import { ReactComponent as vite } from "./vite.svg";

const icons = {
  facebook,
  vite,
};

export const Icon = ({ name, ...props }) => {
  const Element = icons[name];

  return <Element {...props} />;
};
