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

import { useHistory, useParams } from "react-router-dom";

import UseMediaQuery from "@mui/material/useMediaQuery";

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
  const isWideVersion = UseMediaQuery("(min-width:768px)");

  const history = useHistory();

  const {
    location: { pathname },
  } = history;

  return (
    <MaterialAppBar position="static">
      <Toolbar sx={{ backgroundColor: "#462A71" }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          noWrap
          component="div"
          color="white"
          sx={{ display: { xs: "none", sm: "block" }, marginRight: "10px" }}
        >
          Kenzie CarShop
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "64px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#FA6300",
              padding: "0 10px",
              boxSizing: "border-box",
              display: "flex",
              color: "white",
              borderRadius: "10px",
              justifyContent: "center",
              alignItems: "center",
              height: isWideVersion ? "60%" : "70%",
              gap: 2,
              width: "330px",
              
            }}
          >
            <Box
              component="button"
              onClick={() => history.push("/myCars")}
              sx={{
                height: "35px",
                // minWidth: "80px",
                maxWidth: "300px",
                borderRadius: "10px",
                color: "white",
                padding: "2px 20px",
                backgroundColor: pathname === "/myCars" ? "#37404E" : "inherit",
                fontWeight: "bold",
                border: "none",
                boxSizing: "border-box",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Meus Carros
            </Box>

            <Box
              component="button"
              onClick={() => history.push("/searchCars")}
              sx={{
                height: "35px",
                // minWidth: "80px",
                maxWidth: "300px",
                borderRadius: "10px",
                padding: "2px 20px",
                backgroundColor:
                  pathname === "/searchCars" ? "#37404E" : "inherit",
                color: "white",
                fontWeight: "bold",
                border: "none",
                boxSizing: "border-box",

                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Procurar Carros
            </Box>
          </Box>
        </Box>
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
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            sx={{ color: "white" }}
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
