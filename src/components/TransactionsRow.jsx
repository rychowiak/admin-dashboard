import { Box, useTheme, Typography, IconButton } from "@mui/material";
import LineChart from "../components/LineChart";
import { mockTransactions } from "../data/mockTransactions";
import { tokens } from "../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

function TransactionsRow() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box
        gridColumn="span 8"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Box
          mt="25px"
          p="0 30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Revenue Generated
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              color={colors.green[500]}
            >
              54,464.50
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <DownloadOutlinedIcon
                sx={{ color: colors.green[500], fontSize: "26px" }}
              />
            </IconButton>
          </Box>
        </Box>
        <Box m="0 10px">
          <Box height="30vh">
            <LineChart />
          </Box>
        </Box>
      </Box>
      {/* TRANSACTIONS */}
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        overflow="auto"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[400]}`}
          color={colors.grey[100]}
          p="15px"
        >
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            Recent Transactions
          </Typography>
        </Box>
        {mockTransactions.map((transaction, i) => (
          <Box
            key={`${transaction.txId}-${i}`}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[400]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.green[500]}
                variant="h5"
                fontWeight="600"
              >
                {transaction.txId}
              </Typography>
              <Typography color={colors.grey[100]}>
                {transaction.user}
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>{transaction.date}</Box>
            <Box
              backgroundColor={colors.green[500]}
              p="5px 10px"
              borderRadius="4px"
            >
              ${transaction.cost}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default TransactionsRow;
