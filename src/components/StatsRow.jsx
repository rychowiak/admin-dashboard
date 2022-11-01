import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import TrafficOutlinedIcon from "@mui/icons-material/TrafficOutlined";

import StatBox from "../components/StatBox";

function StatsRow() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          icon={
            <EmailOutlinedIcon
              sx={{ color: colors.green[600], fontSize: "26px" }}
            />
          }
          title="12,345"
          subtitle="Emails Sent"
          progress="0.75"
          increase="+14%"
        />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          icon={
            <PointOfSaleOutlinedIcon
              sx={{ color: colors.green[600], fontSize: "26px" }}
            />
          }
          title="21,435"
          subtitle="Sales Obtained"
          progress="0.45"
          increase="+21%"
        />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          icon={
            <PersonAddOutlinedIcon
              sx={{ color: colors.green[600], fontSize: "26px" }}
            />
          }
          title="34,534"
          subtitle="New Clients"
          progress="0.80"
          increase="+35%"
        />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          icon={
            <TrafficOutlinedIcon
              sx={{ color: colors.green[600], fontSize: "26px" }}
            />
          }
          title="312,654"
          subtitle="Traffic Received"
          progress="0.55"
          increase="+5%"
        />
      </Box>
    </>
  );
}

export default StatsRow;
