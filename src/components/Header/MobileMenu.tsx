import {
  AccountCircle,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import {
  Menu,
  MenuItem,
  Typography as Text,
  IconButton,
  Badge,
} from "@mui/material";

interface MobileMenuProps {
  mobileMoreAnchorEl: HTMLElement | null;
  mobileMenuId: string;
  isMobileMenuOpen: boolean;
  handleMobileMenuClose: () => void;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleOpenProfileModal: () => void;
}

const MobileMenu = ({
  mobileMoreAnchorEl,
  mobileMenuId,
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleProfileMenuOpen,
  handleOpenProfileModal,
}: MobileMenuProps) => {
  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Text onClick={handleOpenProfileModal}>Perfil</Text>
      </MenuItem>
    </Menu>
  );
};

export { MobileMenu };
