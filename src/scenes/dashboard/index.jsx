import { Box, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import StatsRow from "../../components/StatsRow";
import TransactionsRow from "../../components/TransactionsRow";
import ChartsRow from "../../components/ChartsRow";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blue[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              marginBottom: "15px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* GRID */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <StatsRow />
        <TransactionsRow />
        <ChartsRow />
      </Box>
    </Box>
  );
}

export default Dashboard;
