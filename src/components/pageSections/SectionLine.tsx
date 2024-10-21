import { Box, Typography } from '@mui/material'

type Props = {
    text:string;
    useWhiteStroke?: boolean;
}

const SectionLine = ({text,  useWhiteStroke}: Props) => {
  return (
    <Box
    style={{
      display: "flex",
      justifyContent: "center", // Center on main axis
      alignItems: "center", // Center on cross axis
      textAlign: "center", // Center text
      width: "100vw", // Full width of the screen
      marginTop: "30px",
      marginBottom:'30px',
      
    }}
  >
    <Typography
      variant="h2"
      sx={{
        fontWeight: {
          xs: 700, // Lighter font weight for small screens (mobile devices)
          sm: 900, // Default font weight for larger screens
        },
        fontSize: {
          xs: "3rem", // Smaller font size for small screens (mobile devices)
          sm: "6rem", // Default font size for larger screens (tablets and up)
        },
        lineHeight: "1em",
        color: "transparent",
        //WebkitTextStroke: "1px #ffffff",
        WebkitTextStroke: `1px ${useWhiteStroke ? "#ffffff" : "#d3d3d3"}`,
        textTransform: "uppercase",
        padding: "30px",
      }}
    >    
      {text}
    </Typography>
  </Box>
  )
}

export default SectionLine