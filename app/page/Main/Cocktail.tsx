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

import "./styles.css";

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

  interface Category {
    categoryTitle?: string;
    cocktailQuestion?: string;
    cocktailAnsver?: string;
    cocktailTitle?: string;
    ingredient1?: string;
    ingredient2?: string;
    ingredient3?: string;
    method?: string;
    methodResponse?: string;
    garnish?: string;
    garnishResponse?: string;
    glass?: string;
    glassResponse?: string;
    category?: string;
    categoryResponse?: string;
  }

  if (categoriesData.length === 2) {
    return null;
  }
  const coctailList = [
    {
      catTitle: "რას ნიშნავს კლასიკური კოქტეილი?",
      catName:
        "ეს არის (IBA-ს) მსოფლიო ბარმენთა ასოციაციის მიერ აღიარებული კოქტეილები",
      name: "(ალექსანდრე) ALEXANDER",
      Image: "aleqsander.jpeg",
      altName: "aleqsander-cocktail",
      ingredients: [
        { value: "Remy Martin(V.S.O.P) ან Armagnac - 30 მლ" },
        { value: "ლიქიორი Crem de cacao (brown) - 30მლ" },
        { value: "ნაღები - 30 მლ" },
      ],
      method: "მეთოდი: ",
      methodResponse: "Shake & Strain",
      garnish: "გარნირი: ",
      garnishResponse: "გახეხილი ჯავზის კაკალი ბარის კოვზის მეოთხედი",
      glass: "ჭიქა: ",
      glassResponse: "კოქტეილის ბოკალი",
      category: "კატეგორია: ",
      categoryResponse: "კოქტეილი მთელი დღისთვის",
      modalComponent: "cocktailComponent",
    },
    {
      name: "ამერიკანო (AMERICANO)",
      Image: "americano.jpg",
      altName: "aleqsander-cocktail",
      ingredients: [
        { value: "Remy Martin(V.S.O.P) ან Armagnac - 30 მლ" },
        { value: "ლიქიორი Crem de cacao (brown) - 30მლ" },
        { value: "ნაღები - 30 მლ" },
      ],
      method: "მეთოდი: ",
      methodResponse: "Shake & Strain",
      garnish: "გარნირი: ",
      garnishResponse: "გახეხილი ჯავზის კაკალი ბარის კოვზის მეოთხედი",
      glass: "ჭიქა: ",
      glassResponse: "კოქტეილის ბოკალი",
      category: "კატეგორია: ",
      categoryResponse: "კოქტეილი მთელი დღისთვის",
      modalComponent: "cocktailComponent",
    },
    {
      name: "ამერიკანო (AMERICANO)",
      Image: "americano.jpg",
      altName: "aleqsander-cocktail",
      ingredients: [
        { value: "Remy Martin(V.S.O.P) ან Armagnac - 30 მლ" },
        { value: "ლიქიორი Crem de cacao (brown) - 30მლ" },
        { value: "ნაღები - 30 მლ" },
      ],
      method: "მეთოდი: ",
      methodResponse: "Shake & Strain",
      garnish: "გარნირი: ",
      garnishResponse: "გახეხილი ჯავზის კაკალი ბარის კოვზის მეოთხედი",
      glass: "ჭიქა: ",
      glassResponse: "კოქტეილის ბოკალი",
      category: "კატეგორია: ",
      categoryResponse: "კოქტეილი მთელი დღისთვის",
      modalComponent: "cocktailComponent",
    },
    {
      title: "title g",
      name: "vaxo",
    },
  ];

  const firstCategory: Category = categoriesData[2];

  return (
    <>
      <section>
        <h1 className="text-white text-3xl font-bold">
          {firstCategory.categoryTitle}
        </h1>
        <p className="text-white mt-4">{coctailList[0].catName}</p>
        <p className="text-white mt-2">{coctailList[0].catTitle}</p>
      </section>
      <div className="mt-6">
        {coctailList.map((item, i) => {
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
                  {item.name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion-details text-white">
                <Image
                  src={`/${item.Image}`}
                  alt={`${item.altName}`}
                  width={300}
                  height={300}
                  className="h-[300px] w-[400px] object-cover mb-4"
                />
                <ol className="list-ol">
                  {item.ingredients?.map((ingredient, index) => {
                    return <li key={index}>{ingredient.value}</li>;
                  })}
                </ol>
                <div className="mt-6">
                  <span className="font-bold">{item.method}</span>
                  <span>{item.methodResponse}</span>
                </div>
                <div>
                  <span className="font-bold">{item.garnish}</span>
                  <span>{item.garnishResponse}</span>
                </div>
                <div>
                  <span className="font-bold">{item.glass}</span>
                  <span>{item.glassResponse}</span>
                </div>
                <div>
                  <span className="font-bold">{item.category}</span>
                  <span>{item.categoryResponse}</span>
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
