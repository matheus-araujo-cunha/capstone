import {
  Menu as MenuIcon,
  AccountCircle,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  MoreVert as MoreIcon,
} from "@mui/icons-material";

import {
  AppBar as MaterialAppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Badge,
} from "@mui/material";

interface AppBarProps {
  menuId: string;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  mobileMenuId: string;
  handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

const AppBarHeader = ({
  menuId,
  handleProfileMenuOpen,
  mobileMenuId,
  handleMobileMenuOpen,
}: AppBarProps) => {
  return (
    <MaterialAppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h5"
          fontWeight="bold"
          noWrap
          component="div"
          color="secondary"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Kenzie Car Rental
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </MaterialAppBar>
  );
};

export { AppBarHeader };
