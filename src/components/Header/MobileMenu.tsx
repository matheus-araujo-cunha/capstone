import {
  AccountCircle,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { Menu, MenuItem, IconButton, Badge } from "@mui/material";

interface MobileMenuProps {
  mobileMoreAnchorEl: HTMLElement | null;
  mobileMenuId: string;
  isMobileMenuOpen: boolean;
  handleMobileMenuClose: () => void;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

const MobileMenu = ({
  mobileMoreAnchorEl,
  mobileMenuId,
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleProfileMenuOpen,
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
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
};

export { MobileMenu };
