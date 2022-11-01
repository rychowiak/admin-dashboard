import { Box, Typography, useTheme } from "@mui/material";
import BarChart from "../components/BarChart";
import GeographyChart from "../components/GeographyChart";
import ProgressCircle from "../components/ProgressCircle";
import { tokens } from "../theme";

function ChartsRow() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
      >
        <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
          Campaign
        </Typography>
        <Box
          mt="2rem"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <ProgressCircle size={125} />
          <Typography
            variant="h5"
            color={colors.green[500]}
            sx={{ mt: "15px" }}
          >
            $52,159 revenue generated
          </Typography>
          <Typography variant="h6" fontWeight="600" color={colors.grey[100]}>
            Includes extra misc expenditures and costs
          </Typography>
        </Box>
      </Box>
      {/* Sales Chart */}
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Typography
          variant="h5"
          fontWeight="600"
          color={colors.grey[100]}
          sx={{ p: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <Box height="250px" mt="-20px">
          <BarChart isDashboard={true} />
        </Box>
      </Box>
      {/*  */}
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
      >
        <Typography
          variant="h5"
          fontWeight="600"
          color={colors.grey[100]}
          sx={{ mb: "15px" }}
        >
          Geography Based Traffic
        </Typography>

        <Box height="200px">
          <GeographyChart isDashboard={true} />
        </Box>
      </Box>
    </>
  );
}

export default ChartsRow;
