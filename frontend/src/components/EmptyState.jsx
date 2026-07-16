import { Box, Typography } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

function EmptyState() {
    return (
        <Box
            sx={{
                textAlign: "center",
                mt: 5,
                mb: 3,
                color: "text.secondary",
            }}
        >
            <SentimentDissatisfiedIcon sx={{ fontSize: 60 }} />

            <Typography variant="h6" sx={{ mt: 2 }}>
                No contest history found
            </Typography>

            <Typography>
                This user hasn't participated in any rated contests yet.
            </Typography>
        </Box>
    );
}

export default EmptyState;