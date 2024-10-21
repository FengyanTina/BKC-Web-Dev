import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { getCurrentWeek } from "../../utils/GetCurrentWeek";

const Item = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  color: "white",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
// const getCurrentWeek = () => {
//   const today = new Date();

//   const currentDayOfWeek = today.getDay();

//   // In Sweden, the week starts on Monday, so calculate the start of the current week (Monday)
//   const startOfWeek =
//     today.getDate() - currentDayOfWeek + (currentDayOfWeek === 0 ? -6 : 1);

//   const daysInSwedish = ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]; // Days of the week in Swedish

//   // Generate the current week as an array of objects with date and dayName
//   return Array.from({ length: 7 }, (_, index) => {
//     const date = new Date(today); // Create a new date object to avoid mutation
//     date.setDate(startOfWeek + index); // Set the correct day for the week

//     // Define date formatting options
//     const dateOptions: Intl.DateTimeFormatOptions = {
//       day: "2-digit",
//       month: "2-digit",
//     };

//     // Format the date as "DD/MM"
//     const formattedDate = date.toLocaleDateString("sv-SE", dateOptions);

//     // Return both the formatted date and the corresponding day name in Swedish
//     return {
//       date: formattedDate,
//       dayName: daysInSwedish[date.getDay()], // Get day name using current day of the week index
//     };
//   });
// };

// // Example usage:
// console.log(getCurrentWeek());

export default function RowAndColumnSpacing() {
  const currentWeek = getCurrentWeek();
  return (
    <Box
    sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        {currentWeek.map((day, index) => (
          <Grid container columns={12} key={index} size={12}>
            <Grid size={3}>
              <Item>
                <Typography>{day.date}</Typography>
                <Typography>{day.dayName}</Typography>
              </Item>
            </Grid>
            <Grid size={9} sx={{ alignContent: "center" }}>
              <Item>
                <Typography>Events event event event event for</Typography>
              </Item>
            </Grid>
            {/* This line would also render after the last item */}

            <Grid size={12}>
              <Box
                sx={{ borderBottom: "1px solid #ccc", width: "100%", my: 1 }}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
