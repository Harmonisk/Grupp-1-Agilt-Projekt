//Component: ToogleMenuButton
//Description: The user can show hide menu on smaller breakpoints

import Button from "./Button";

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
      <span className="toggle-menu-button__icon"></span>
    </Button>
  );
}
