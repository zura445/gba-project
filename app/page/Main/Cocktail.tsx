import * as React from "react";
import categoriesData from "../../categories.json";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({}) => ({}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "0.9rem", rotate: "90deg" }}
        className="text-white"
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.95)"
      : "rgba(0, 0, 0, 0.95)",
  flexDirection: "row",
  justifyContent: "space-between",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {},
  "& .MuiAccordionSummary-content": {
    marginRight: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Cocktail = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  interface Category {
    cocktailTitle?: string;
    cocktailQuestion?: string;
    cocktailAnsver?: string;
  }

  if (categoriesData.length === 2) {
    return null;
  }

  const firstCategory: Category = categoriesData[2];

  return (
    <>
      <section>
        <h1 className="text-white text-3xl font-bold">
          {firstCategory.cocktailTitle}
        </h1>
        <p className="text-white mt-4">{firstCategory.cocktailQuestion}</p>
        <p className="text-white mt-2">{firstCategory.cocktailAnsver}</p>
      </section>
      <div className="mt-6">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              style={{ textAlign: "center", width: "100%" }}
              className="text-white border-b-2 pb-2"
            >
              ALEXANDER
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
            className="text-white"
          >
            <Typography align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              style={{ textAlign: "center", width: "100%" }}
              className="text-white border-b-2 pb-2"
            >
              Collapsible Group Item #1
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ backgroundColor: "black" }}
            className="text-white"
          >
            <Typography align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              style={{ textAlign: "center", width: "100%" }}
              className="text-white border-b-2 pb-2"
            >
              Collapsible Group Item #1
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ backgroundColor: "black" }}
            className="text-white"
          >
            <Typography align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};
export default Cocktail;

// import React, { useState } from "react";
// import categoriesData from "../../categories.json";
// import Accordion, { AccordionSlots } from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Fade from "@mui/material/Fade";

// interface Category {
//   cocktailTitle?: string;
//   cocktailQuestion?: string;
//   cocktailAnsver?: string;
// }

// const Cocktail = () => {
//   const [expanded, setExpanded] = useState(false);

//   if (categoriesData.length === 2) {
//     return null;
//   }

//   const firstCategory: Category = categoriesData[2];

//   const handleExpansion = () => {
//     setExpanded((prevExpanded) => !prevExpanded);
//   };

//   return (
//     <>
//       <section>
//         <h1 className="text-white text-3xl font-bold">
//           {firstCategory.cocktailTitle}
//         </h1>
//         <p className="text-white mt-4">{firstCategory.cocktailQuestion}</p>
//         <p className="text-white mt-2">{firstCategory.cocktailAnsver}</p>
//       </section>
//       <section>
//         <div>
//           <Accordion
//             className="mt-6"
//             expanded={expanded}
//             onChange={handleExpansion}
//             slots={{ transition: Fade as AccordionSlots["transition"] }}
//             slotProps={{ transition: { timeout: 400 } }}
//             sx={{
//               backgroundColor: "black",
//               "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
//               "& .MuiAccordionDetails-root": {
//                 display: expanded ? "block" : "none",
//               },
//             }}
//           >
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon className="text-white" />}
//               aria-controls="panel1-content"
//               id="panel1-header"
//             >
//               <Typography className="text-white">
//                 Custom transition using Fade
//               </Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography className="text-white">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
//                 eget.
//               </Typography>
//             </AccordionDetails>
//           </Accordion>

//           <Accordion sx={{ backgroundColor: "black" }}>
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon className="text-white" />}
//               aria-controls="panel2-content"
//               id="panel2-header"
//             >
//               <Typography className="text-white">
//                 Default transition using Collapse
//               </Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography className="text-white">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
//                 eget.
//               </Typography>
//             </AccordionDetails>
//           </Accordion>
//         </div>
//       </section>
//     </>
//   );
// };
