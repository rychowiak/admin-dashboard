import { Box, useTheme, Typography } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Header from "../../components/Header";
import { tokens } from "../../theme";

function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlinedIcon />}
          aria-controls="faq1a-content"
          id="faq1a-header"
        >
          <Typography color={colors.green[500]} variant="h5">
            FAQ 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            impedit facilis provident earum, hic eveniet, natus voluptatem in{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlinedIcon />}
          aria-controls="faq2a-content"
          id="faq2a-header"
        >
          <Typography color={colors.green[500]} variant="h5">
            FAQ 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlinedIcon />}
          aria-controls="faq3a-content"
          id="faq3a-header"
        >
          <Typography color={colors.green[500]} variant="h5">
            FAQ 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Doloribus impedit facilis provident earum, hic eveniet, natus
            voluptatem in{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlinedIcon />}
          aria-controls="faq4a-content"
          id="faq4a-header"
        >
          <Typography color={colors.green[500]} variant="h5">
            FAQ 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Doloribus impedit facilis provident earum, hic eveniet, natus
            voluptatem in{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreOutlinedIcon />}
          aria-controls="faq5a-content"
          id="faq5a-header"
        >
          <Typography color={colors.green[500]} variant="h5">
            FAQ 5
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Doloribus impedit facilis provident earum, hic eveniet, natus
            voluptatem in{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default FAQ;
