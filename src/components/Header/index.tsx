// import {
//   Container,
//   TopHeaderSection,
//   IconSection,
//   Logo,
//   MyCars,
//   SearchCars,
//   ToggleSection,
//   FooterHeaderSection,
// } from "./styles";

// import UseMediaQuery from "@mui/material/useMediaQuery";
// import { FiMessageSquare } from "react-icons/fi";
// import { HiOutlineUser } from "react-icons/hi";

// import LogoCar from "../../assets/logo.png";

// export const Header = () => {
//   const isWideVersion = UseMediaQuery("(min-width:768px)");

//   return (
//     <Container isWideVersion={isWideVersion}>
//       {isWideVersion ? (
//         <>
//           <Logo src={LogoCar} alt="Logo" />
//           <ToggleSection>
//             <MyCars>
//               <h2>Meus Carros</h2>
//             </MyCars>

//             <SearchCars>
//               <h2>Procurar Carros</h2>
//             </SearchCars>
//           </ToggleSection>
//           <IconSection>
//             <FiMessageSquare size={40} />
//             <HiOutlineUser size={40} />
//           </IconSection>
//         </>
//       ) : (
//         <>
//           <TopHeaderSection>
//             <Logo src={LogoCar} alt="Logo" />

//             <IconSection>
//               <FiMessageSquare size={40} />
//               <HiOutlineUser size={60} />
//             </IconSection>
//           </TopHeaderSection>

//           <FooterHeaderSection>
//             <ToggleSection>
//               <MyCars>
//                 <h2>Meus Carros</h2>
//               </MyCars>

//               <SearchCars>
//                 <h2>Procurar Carros</h2>
//               </SearchCars>
//             </ToggleSection>
//           </FooterHeaderSection>
//         </>
//       )}
//     </Container>
//   );
// };
import { useState } from "react";
import { Box } from "@mui/material";
import { MenuHeader } from "./Menu";
import { MobileMenu } from "./MobileMenu";
import { AppBarHeader } from "./AppBarHeader";
import { UserProfileModal } from "../Modal/UserProfileModal";
import { ConfigurationModal } from "../Modal/ConfigurationModal";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [openConfigurationModal, setOpenConfigurationModal] = useState(false);

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

  const handleOpenProfileModal = () => {
    setOpenProfileModal(true);
  };

  const handleCloseProfileModal = () => {
    setOpenProfileModal(false);
  };

  const handleOpenConfigurationModal = () => {
    setOpenConfigurationModal(true);
  };

  const handleCloseConfigurationModal = () => {
    setOpenConfigurationModal(false);
  };

  const menuId = "account-menu";
  const mobileMenuId = "account-menu-mobile";

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBarHeader
        handleProfileMenuOpen={handleProfileMenuOpen}
        handleMobileMenuOpen={handleMobileMenuOpen}
        mobileMenuId={mobileMenuId}
        menuId={menuId}
      />
      <MobileMenu
        mobileMenuId={mobileMenuId}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        handleOpenProfileModal={handleOpenProfileModal}
      />
      <MenuHeader
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
        isMenuOpen={isMenuOpen}
        menuId={menuId}
        handleOpenProfileModal={handleOpenProfileModal}
        handleOpenConfigurationModal={handleOpenConfigurationModal}
      />
      <UserProfileModal
        openProfileModal={openProfileModal}
        handleCloseProfileModal={handleCloseProfileModal}
      />
      <ConfigurationModal
        handleCloseConfigurationModal={handleCloseConfigurationModal}
        openConfigurationModal={openConfigurationModal}
      />
    </Box>
  );
};

export { Header };
