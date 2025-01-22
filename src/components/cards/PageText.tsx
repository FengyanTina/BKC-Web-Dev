// import { Box, CardActions, Typography } from "@mui/material";
// import { CardTextSectionModel } from "../../models/CardTextSectionModel";
// import { formatDate, formatTime } from "../../utils/FormatDateOrTime";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";

// const PageTextPart = ({
//   title,
//   subtitle,
//   description,
//   linkSubtitle,
//   startTime,
//   endTime,
//   location,
//   steps,
//   buttonLink,
//   buttonText,
//   showStepsLink = false,
//   links,
// }: CardTextSectionModel) => (
//   <>
//     <Typography
//       variant="h3"
//       sx={{
//         marginBottom: "10px",
//         fontSize:"25px",
//       }}
//     >
//       {title}
//     </Typography>
//     {linkSubtitle && (
//       <Typography
//         variant="h4"
//         sx={{
//           marginBottom: "10px",
//           fontSize: "20px",
//         }}
//       >
//         <a
//           href=""
//           style={{
//             color: "#337f83",
//             textDecoration: "none",
//             fontWeight: "bold",
//           }}
//         >
//           {linkSubtitle}
//         </a>
//       </Typography>
//     )}
//     {subtitle && (
//       <Typography
//         variant="h4"
//         sx={{
//           marginBottom: "10px",
//           fontSize: "20px",
//         }}
//       >
//         {subtitle}
//       </Typography>
//     )}

//     <Typography
//       variant="h5"
//       sx={{
//         textAlign: "left",
//         fontSize: "18px",
//         lineHeight: 1.5,
//       }}
//     >
//       {description}
//     </Typography>

//     <Box>
//       {steps &&
//         steps.map((step, index) => (
//           <div key={index} style={{ marginBottom: "16px" }}>
//             <Typography
//               variant="h5"
//               sx={{
//                 textAlign: "left",
//                 fontSize:  "18px",
//                 lineHeight: 1.5,
//               }}
//             >
//               {showStepsLink && step.link && step.linkName ? (
//                 <>
//                   <a
//                     href={step.link}
//                     style={{
//                       color: "#337f83",
//                       textDecoration: "none",
//                       fontWeight: "bold",
//                     }}
//                   >
//                     <ChevronRightIcon
//                       sx={{
//                         fontSize: "20px",
//                         marginRight: "8px",
//                         color: "#337f83",
//                       }} // Customize icon size and spacing
//                     />
//                     {step.linkName}
//                   </a>{" "}
//                   {step.description} &nbsp; {/* Non-breaking space */}
//                 </>
//               ) : (
//                 step.description
//               )}
//             </Typography>
//           </div>
//         ))}
//     </Box>
//     <Box
//       sx={{
//         // marginTop: "auto", // Push this section to the bottom
//         marginTop: "30px",
//       }}
//     >
//       {startTime && (
//         <Typography
//           variant="h5"
//           sx={{
//             color: "text.secondary",
//             fontSize:  "20px",
//           }}
//         >
//           <strong>Time: </strong> {formatDate(startTime)}:{" "}
//           {formatTime(startTime)}
//           {endTime && ` - ${formatTime(endTime)}`}{" "}
//           {/* Only render endTime if it exists */}
//         </Typography>
//       )}
//       {location && (
//         <Typography
//           variant="h5"
//           sx={{
//             color: "text.secondary",
//             fontSize: "20px",
//           }}
//         >
//           <strong>Location:</strong> {location}
//         </Typography>
//       )}
//     </Box>
//     <Box
//       sx={{
//         // marginTop: "auto", // Push this section to the bottom
//         marginTop: "30px",
//       }}
//     >
//       {links &&
//         links.map((link, index) => (
//           <div key={index} style={{ marginBottom: "16px" }}>
//             <Typography
//               variant="h5"
//               sx={{
//                 textAlign: "left",
//                 fontSize: {
//                   lg: "18px",
//                   md: "18px",
//                   sm: "18px",
//                   xs: "18px",
//                 },
//                 lineHeight: 1.5,
//               }}
//             >
//               <a
//                 href={link.url}
//                 style={{
//                   color: "#337f83",
//                   textDecoration: "none",
//                   fontWeight: "bold",
//                 }}
//               >
//                 <ChevronRightIcon
//                   sx={{
//                     fontSize: "20px",
//                     marginRight: "8px",
//                     color: "#337f83",
//                   }} // Customize icon size and spacing
//                 />
//                 {link.label}
//               </a>
//             </Typography>
//           </div>
//         ))}
//     </Box>
//     {buttonLink && (
//       <CardActions>
//         {buttonLink.startsWith("#") || buttonLink.includes("#") ? (
//           <HashLink smooth to={buttonLink}>
//             {buttonText}
//           </HashLink>
//         ) : (
//           <Link to={buttonLink}>{buttonText}</Link>
//         )}
//       </CardActions>
//     )}
//   </>
// );
// export default PageTextPart;
