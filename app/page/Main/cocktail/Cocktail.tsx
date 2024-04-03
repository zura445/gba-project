import * as React from "react";
import CocktailList from "./CocktailList.json";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import "./styles.css";

interface CocktailData {
  catTitle?: string;
  catName?: string;
  name: string;
  Image: string;
  altName: string;
  ingredients: { value: string }[];
  method: string;
  methodResponse: string;
  garnish: string;
  garnishResponse: string;
  glass: string;
  glassResponse: string;
  category: string;
  categoryResponse: string;
  modalComponent?: string;
  categoryTitle?: string;
}

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
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <section>
        <h1 className="text-white text-3xl font-bold">
          {(CocktailList[0] as CocktailData).categoryTitle}
        </h1>
        <p className="text-white mt-4">
          {(CocktailList[0] as CocktailData).catName}
        </p>
        <p className="text-white mt-2">
          {(CocktailList[0] as CocktailData).catTitle}
        </p>
      </section>
      <div className="mt-6">
        {CocktailList.map((item: any, i) => {
          const cocktailItem = item as CocktailData;
          return (
            <Accordion
              key={i}
              expanded={expanded === `panel${i}`}
              onChange={handleChange(`panel${i}`)}
            >
              <AccordionSummary
                aria-controls={`panel${i}-content`}
                id={`panel${i}-header`}
              >
                <Typography
                  style={{
                    textAlign: "center",
                    width: "100%",
                    fontSize: "26px",
                  }}
                  className="text-white border-b-2 pb-2 hover:text-red-500"
                >
                  {cocktailItem.name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion-details text-white">
                <Image
                  src={`/${cocktailItem.Image}`}
                  alt={`${cocktailItem.altName}`}
                  width={300}
                  height={300}
                  //აქ გადასაწყვეტი მაქვს contain იყოს თუ cover   ?????????????????????????????????????????????????????????
                  className="h-[300px] w-[400px] object-contain mb-4"
                />
                <ol className="list-ol" start={1}>
                  {cocktailItem.ingredients?.map((ingredient, index) => {
                    return <li key={index}>{ingredient.value}</li>;
                  })}
                </ol>
                <div className="mt-6">
                  <span className="font-bold">{cocktailItem.method}</span>
                  <span>{cocktailItem.methodResponse}</span>
                </div>
                <div>
                  <span className="font-bold">{cocktailItem.garnish}</span>
                  <span>{cocktailItem.garnishResponse}</span>
                </div>
                <div>
                  <span className="font-bold">{cocktailItem.glass}</span>
                  <span>{cocktailItem.glassResponse}</span>
                </div>
                <div>
                  <span className="font-bold">{cocktailItem.category}</span>
                  <span>{cocktailItem.categoryResponse}</span>
                </div>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </>
  );
};

export default Cocktail;
