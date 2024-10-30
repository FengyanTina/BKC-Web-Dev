import { useNavigate} from "react-router-dom";
import { defaultUser, User, UserCategory, UserDialogMode } from "../../models/User";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { generateUniqueId } from "../../utils/GenerateUniqueId";
import { Box, Button, Dialog, DialogContent, DialogTitle, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useForm } from "react-hook-form";


type UserDialogProps = {
    mode: UserDialogMode;
    onClose: () => void; 
    userId:string|null;
    open: boolean;
};

function UserDialog({  mode, userId, open, onClose  }: UserDialogProps) {
  const navigate = useNavigate();
  const { devUsers, setDevUsers, addUser } = useContext(UserContext);

  
  const editUser =
    mode === UserDialogMode.Edit && userId
      ? devUsers.find((i) => i.id === userId) || defaultUser()
      : defaultUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>({
    defaultValues: editUser,
  });

  // Only reset form in Edit mode when dialog opens or user ID changes
  useEffect(() => {
    if (open) {
      if (mode === UserDialogMode.Edit) {
        // Reset with selected user data for Edit mode
        reset(editUser);
      } else {
        // Reset to default (empty) values for Add mode
        reset(defaultUser());
      }
    }
  }, [mode, open, userId, reset]);

  // Function to add or update user
  const createOrEditUser = (userFromDialog: User) => {
    if (mode === UserDialogMode.Edit) {
      const updatedUsers = devUsers.map((user) =>
        user.id === userFromDialog.id ? userFromDialog : user
      );
      setDevUsers(updatedUsers);
    } else {
      addUser({ ...userFromDialog, id: generateUniqueId() });
    }
  };

  // Form submission handler
  const onSubmit = (user: User) => {
    createOrEditUser(user);
    reset();
    onClose();
    navigate("/aboutUs#userTable");
  };

  return (
    <Dialog open={open} onClose={() =>onClose}>
      {mode === UserDialogMode.Edit ? (
        <DialogTitle>Edit User: {userId} </DialogTitle>
      ) : (
        <DialogTitle>Add User</DialogTitle>
      )}
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Firstname"
            fullWidth
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            margin="normal"
            {...register("firstName", { required: "Name is required." })}
          />
          <TextField
            label="Lastname"
            fullWidth
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            margin="normal"
            {...register("lastName", { required: "Last name is required." })}
          />
          <TextField
            label="UserName"
            fullWidth
            error={!!errors.userName}
            helperText={errors.userName?.message}
            margin="normal"
            {...register("userName", {
              required: "userName is required.",
            })}
          />

          <TextField
            label="UserId"
            type="string"
            margin="normal"
            error={!!errors.userId}
            helperText={errors.userId?.message}
            fullWidth
            {...register("userId", {
              required: "UserId is required.",
            })}
          />
          <TextField
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
            fullWidth
            label="Phone"
            type="string"
            margin="normal"
            {...register("phoneNumber", {
              required: "This input is required.",
              pattern: {
                value: /^[0-9]+$/i,
                message: "This input must be a numbers",
              },
              minLength: {
                value: 10,
                message: "This input must exceed 5 characters",
              },
              maxLength: {
                value: 14,
                message: "This input must be less than 5 characters",
              },
            })}
          />

          <TextField
            error={!!errors.email}
            helperText={errors.email?.message}
            type="string"
            margin="normal"
            label="Email"
            fullWidth
            {...register("email", {
              required: "This input is required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "This input must be a email",
              },

              minLength: {
                value: 8,
                message: "This input must exceed 8 characters",
              },
              maxLength: {
                value: 35,
                message: "This input must be less than 35 characters",
              },
            })}
          />
          <FormControl fullWidth margin="normal" error={!!errors.category}>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              defaultValue="" 
              {...register("category", { required: "Category is required." })} // Register the category field
            >
              {Object.values(UserCategory).map((category) => (
                <MenuItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
                  {/* Capitalizing category names */}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{errors.category?.message}</FormHelperText>
          </FormControl>

          <Grid size={{ xs: 12, sm: 4 }} paddingLeft={3} py={1}>
            <TextField
              error={!!errors.address}
              helperText={errors.address?.message}
              type="text"
              fullWidth
              autoComplete="street-address"
              label="Address"
              variant="standard"
              {...register("address", {
                minLength: {
                  value: 2,
                  message: "This input must exceed 2 characters",
                },
                maxLength: {
                  value: 20,
                  message: "This input must be less than 20 characters",
                },
              })}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 12 }} paddingLeft={3} py={1}>
            <TextField
              error={!!errors.zipcode}
              helperText={errors.zipcode?.message}
              type="text"
              autoComplete="postal-code"
              label="Zipcode"
              variant="standard"
              {...register("zipcode", {
                pattern: {
                  value: /^[0-9]+$/i,
                  message: "This input must be a numbers",
                },
                minLength: {
                  value: 4,
                  message: "This input must exceed 4 numbers",
                },
                maxLength: {
                  value: 5,
                  message: "This input must be less than 8 numbers",
                },
              })}
            />
          </Grid>

          <Box display={"flex"} justifyContent={"flex-end"} marginTop={"16px"}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ marginRight: "8px" }}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => onClose()}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default UserDialog;
