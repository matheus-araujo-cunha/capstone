import { Menu as MenuMaterial, MenuItem } from "@mui/material";
import { useAuth } from "../../providers/Auth";

interface MenuProps {
  anchorEl: HTMLElement | null;
  menuId: string;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
  handleOpenProfileModal: () => void;
  handleOpenConfigurationModal: () => void;
}

const MenuHeader = ({
  anchorEl,
  menuId,
  isMenuOpen,
  handleMenuClose,
  handleOpenProfileModal,
  handleOpenConfigurationModal,
}: MenuProps) => {
  const { logOut } = useAuth();
  return (
    <MenuMaterial
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleOpenProfileModal}>Meu perfil</MenuItem>
      <MenuItem onClick={handleOpenConfigurationModal}>Configuração</MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          logOut();
        }}
      >
        Sair
      </MenuItem>
    </MenuMaterial>
  );
};

export { MenuHeader };
