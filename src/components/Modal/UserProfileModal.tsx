import { LocationOnOutlined } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  CardHeader,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography as Text,
} from "@mui/material";

import { blue } from "@mui/material/colors";
interface UserProfileModalProps {
  handleCloseProfileModal: () => void;
  openProfileModal: boolean;
}

const UserProfileModal = ({
  openProfileModal,
  handleCloseProfileModal,
}: UserProfileModalProps) => {
  return (
    <>
      <Dialog open={openProfileModal} onClose={handleCloseProfileModal}>
        <Card sx={{ width: "auto", height: 300 }}>
          <Box bgcolor="primary.main" sx={{ p: 2, pr: 6 }}>
            <Text gutterBottom variant="h5" component="h2">
              Kenzinho
            </Text>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <Avatar
                sx={{
                  border: 2,
                  borderColor: "#fff",
                  bgcolor: blue[500],
                  width: 64,
                  height: 64,
                  fontSize: 30,
                }}
                aria-label="Kenzinho"
              >
                K
              </Avatar>
              <Box>
                <Text variant="body2" color="#fff" fontWeight="bold">
                  <LocationOnOutlined />
                  Curitiba, PR
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "55%",
            }}
          >
            <CardContent>
              <Text fontWeight="bold">SOBRE MIM</Text>
              <Text>Possuo vários veículos disponíveis para alugar.</Text>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleCloseProfileModal}>
                Voltar
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Dialog>
    </>
  );
};

export { UserProfileModal };
