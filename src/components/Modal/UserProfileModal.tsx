import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

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
        <DialogTitle>Meu perfil</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Faça as alterações que achar necessário e depois clique em salvar.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseProfileModal}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export { UserProfileModal };
