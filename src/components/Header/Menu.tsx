import { Menu as MenuMaterial, MenuItem } from "@mui/material";

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
      <MenuItem onClick={handleMenuClose}>Sair</MenuItem>
    </MenuMaterial>
  );
};

export { MenuHeader };
