import { Box, useTheme,} from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from  "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Typography from "@mui/material/Typography";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens (theme.palette.mode);

    return <Box m="20px">
        <Header title ="FAQ" subtitle="Frequently Asked Questions Page" />


        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Who that is? Thats just my baby daddy
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Another Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Who that is? Thats just my baby daddy
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Random Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Who that is? Thats just my baby daddy
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    A Question that doesn't need to be asked
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Who that is? Thats just my baby daddy
                </Typography>
            </AccordionDetails>
        </Accordion>


    </Box>
}

export default FAQ;