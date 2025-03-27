//Component: ToogleMenuButton
//Description: The user can show hide menu on smaller breakpoints

import Button from "./Button";
import Icon from "./Icon";

type ToggleMenuButtonProps = {
  menuVisible: boolean;
  setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ToggleMenuButton({
  menuVisible,
  setMenuVisible,
}: ToggleMenuButtonProps) {
  const handleMenuToggle = () => {
    setMenuVisible((prev) => !prev); // Flip between false/true, if false flip to true and vice versa.
  };

  return (
    <Button
      onClick={handleMenuToggle}
      className="toggle-menu-button"
      data-toggle={menuVisible ? true : false}
    >
      <Icon className="toggle-menu-button__icon" type="lunch_dining"></Icon>
    </Button>
  );
}
