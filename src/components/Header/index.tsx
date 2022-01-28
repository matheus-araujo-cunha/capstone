import { useState } from "react";
import { Box } from "@mui/material";
import { MenuHeader } from "./Menu";
import { MobileMenu } from "./MobileMenu";
import { AppBarHeader } from "./AppBarHeader";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "account-menu";
  const mobileMenuId = "account-menu-mobile";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarHeader
        handleProfileMenuOpen={handleProfileMenuOpen}
        handleMobileMenuOpen={handleMobileMenuOpen}
        mobileMenuId={mobileMenuId}
        menuId={menuId}
      />
      {
        <MobileMenu
          mobileMenuId={mobileMenuId}
          handleMobileMenuClose={handleMobileMenuClose}
          handleProfileMenuOpen={handleProfileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
          mobileMoreAnchorEl={mobileMoreAnchorEl}
        />
      }
      {
        <MenuHeader
          anchorEl={anchorEl}
          handleMenuClose={handleMenuClose}
          isMenuOpen={isMenuOpen}
          menuId={menuId}
        />
      }
    </Box>
  );
};

export { Header };
