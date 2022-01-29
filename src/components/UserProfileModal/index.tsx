import {
  Button,
  TextField,
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
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseProfileModal}>Cancel</Button>
          <Button onClick={handleCloseProfileModal}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export { UserProfileModal };
