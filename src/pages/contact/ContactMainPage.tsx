
import ContactSection from "../../components/pageSections/contact-section/ContactSection";
import { Box, IconButton, Modal } from "@mui/material";
import Intro from "../../components/pageSections/contact-section/Intro";
import map from "../../assets/map.png"
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const text =
[
    "Borås Kristna Center vill vi vara:",
"En plats för mötet mellan Gud och människa, en plats där vi ber och tillber Gud en plats där du kan lära känna och utvecklas i den plan Gud har för dig så att du blir hans lärjunge",
"En plats där sår läks, hopp spirar och där barn och unga kan se med tillförsikt på framtiden",

"En plats för mötet mellan Gud och människa, en plats där vi ber och tillber Gud Bibeln beskriver Gud som en Fader. Han älskar och längtar efter en relation med varje människa. Jesus säger att han är vägen, sanningen och livet och var och en som längtar efter livets mening, efter tillvarons själva pulserande centrum, är välkommen in i hans stora famn.",

"Vi vill som kyrka vara en plats där vi kan mötas för att be och för att i tal, musik och sång uttrycka vår kärlek till den som älskar oss mer än någon annan, Jesus Kristus. Det sker i gudstjänster, i hemgrupper och på samlingar för olika åldrar. Alla är välkomna att besöka oss och vi tror och hoppas att du här finner en plats där du känner dig som hemma, där du möter Gud och kan dela ditt hjärta med honom.",

"En plats där du kan lära känna och utvecklas i den plan Gud har för dig så att du blir hans lärjunge Gud vill inte bara att vi ska kalla oss kristna, värma en stol vid en gudstjänst en gång i veckan och få en andlig upplevelse då och då. Han har mycket mer för oss. Gud har en fantastisk plan för varje människas liv och en uppgift för var och en att utföra, mitt i vardagen. Den vill vi som kyrka hjälpa dig att finna och utvecklas i.",

"Jesus säger i Bibeln: ”Följ mig!” Att vara kristen är att gå i Jesu fotspår och leva som han levde – utgivande, kärleksfullt, förlåtande och med fokus på att hjälpa sina medmänniskor. Genom bland annat en bibelskola och andra typer av mötesplatser vill vi tillsammans följa Jesus och se hur hans perfekta vilja för varje del av våra liv allt mer tar form. Vi som kyrka finns till för att berätta om Jesu stora kärlek, och det gör vi både i Borås och genom mission i andra länder.",

"En plats där sår läks, hopp spirar och där barn och unga kan se med tillförsikt på framtiden Varje människa är så dyrbar i Guds ögon och han kan ge frid mitt i stormen och bygga slott av våra livs spillror. Vi tror att Gud kan och vill hela den som är sjuk, läka det som är brustet, skydda den som är svag och lyfta upp den som är nedböjd.",

"Det finns en särskild plats i Guds hjärta för barn och unga. Han vill att den uppväxande generationen ska bli trygg, välmående och lära känna honom. I vår kyrka finns plats för själavård och omsorg. Vi är huvudman för en kristen förskola och skola och erbjuder söndagsskola och ungdomssamlingar. Detta gör vi för att vi tror på barnen och de unga, och framförallt vet vi att Gud tror på dem. Han vill möta dem och hjälpa dem att bygga ett liv i hans närhet och att sprida hans ljus till många fler.",

"Varmt välkommen att besöka oss!",
    // Add as many paragraphs as needed
  ];
export default function ContactMainPage() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
      <div>
        <Intro content={text} />
        <ContactSection />
        <>
      {/* Map Frame */}
      <Box
        onClick={handleOpen}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          margin: "0 auto",
          cursor: "pointer",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: { xs: "80%", sm: "70%", md: "50%" },
            height: { xs: "250px", sm: "300px", md: "400px" },
            overflow: "hidden",
            borderRadius: "8px",
            boxShadow: 0,
          }}
        >
          <img
            src={map}
            alt="Map"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>

      {/* Full View Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
       <Box
          sx={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            backgroundColor: "white",
            outline: "none",
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              zIndex: 1,
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional background for visibility
              '&:hover': { backgroundColor: "rgba(0, 0, 0, 0.7)" }
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Full-size Map Image */}
          <img
            src={map}
            alt="Map Full View"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Modal>
    </>
      </div>
    </>
  );
}
