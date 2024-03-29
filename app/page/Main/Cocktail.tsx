import * as React from "react";
import categoriesData from "../../categories.json";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import "./styles.css"; // Import external CSS file

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
  backgroundColor: "rgba(0, 0, 0, 0.95)",
  flexDirection: "row",
  justifyContent: "space-between",
  "& .MuiAccordionSummary-content": { marginRight: theme.spacing(2) },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
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
              style={{ textAlign: "center", width: "100%", fontSize: "26px" }}
              className="text-white border-b-2 pb-2 hover:text-red-500"
            >
              ალექსანდრე (ALEXANDER)
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-details text-white">
            <Image
              src="/aleqsander.jpeg"
              alt="aleqsander-cocktail"
              width={300}
              height={300}
              className="h-[300px] w-[400px] object-cover mb-4"
            />
            <ol className="list-ol">
              <li>Remy Martin(V.S.O.P) ან Armagnac - 30 მლ</li>
              <li>ლიქიორი Crem de cacao (brown) - 30მლ</li>
              <li>ნაღები - 30 მლ</li>
            </ol>
            <div className="mt-6">
              <span className="font-bold">მეთოდი: </span>
              <span>Shake & Strain</span>
            </div>
            <div>
              <span className="font-bold">გარნირი: </span>
              <span>გახეხილი ჯავზის კაკალი ბარის კოვზის მეოთხედი</span>
            </div>
            <div>
              <span className="font-bold">ჭიქა: </span>
              <span>კოქტეილის ბოკალი</span>
            </div>
            <div>
              <span className="font-bold">კატეგორია: </span>
              <span>კოქტეილი მთელი დღისთვის</span>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              style={{ textAlign: "center", width: "100%", fontSize: "26px" }}
              className="text-white border-b-2 pb-2 hover:text-red-500"
            >
              ამერიკანო (AMERICANO)
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ backgroundColor: "black" }}
            className="text-white"
          >
            <Image
              src="/americano.jpg"
              alt="americano-cocktail"
              width={300}
              height={300}
              className="h-[300px] w-[400px] object-cover mb-4"
            />
            <ol className="list-ol">
              <li>ბიტერი Campari Bitteri - 30 მლ</li>
              <li>ვერმუტი Martini Rosso - 30მლ</li>
              <li>სოდიანი წყალი</li>
            </ol>
            <div className="mt-6">
              <span className="font-bold">მეთოდი: </span>
              <span>Build</span>
            </div>
            <div>
              <span className="font-bold">გარნირი: </span>
              <span>ლიმნის რგოლის ნახევარი</span>
            </div>
            <div>
              <span className="font-bold">ჭიქა: </span>
              <span>Old fashioned</span>
            </div>
            <div>
              <span className="font-bold">კატეგორია: </span>
              <span>აპერიტივი</span>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              style={{ textAlign: "center", width: "100%", fontSize: "26px" }}
              className="text-white border-b-2 pb-2 hover:text-red-500"
            >
              ანგელოზის სახე (ANGEL FACE)
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ backgroundColor: "black" }}
            className="text-white"
          >
            <Image
              src="/angel-face.jpg"
              alt="angel-face-cocktail"
              width={300}
              height={300}
              className="h-[300px] w-[400px] object-cover mb-4"
            />
            <ol className="list-ol">
              <li>ჯინი Beefeater - 30 მლ</li>
              <li>ლიქიორი Apricot Brand - 30მლ</li>
              <li>Calvados - 30 მლ</li>
            </ol>
            <div className="mt-6">
              <span className="font-bold">მეთოდი: </span>
              <span>Shake & Strain</span>
            </div>
            <div>
              <span className="font-bold">გარნირი: </span>
              <span>ლიმნის ცედრა</span>
            </div>
            <div>
              <span className="font-bold">ჭიქა: </span>
              <span>კოქტეილის ბოკალი</span>
            </div>
            <div>
              <span className="font-bold">კატეგორია: </span>
              <span>კოქტეილი მთელი დღისთვის</span>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default Cocktail;
