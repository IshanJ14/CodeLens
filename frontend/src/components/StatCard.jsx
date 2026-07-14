import { Card, CardContent, Typography, Box } from "@mui/material";

function StatCard({ 
    title,
    value,
    icon,
    color = "1976d2",
}) {
    return (
        <Card 
            sx={{ 
                height: "100%",
                borderRadius: 3,
                transform: "0.3s",
                "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 8,
                },
            }}
        >
            <CardContent>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography
                        color="text.secondary"
                        fontWeight="bold"
                    >
                        {title}
                    </Typography>

                    <Box sx={{ color }}>
                        {icon}
                    </Box>
                </Box>

                <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{ 
                        mt: 3,
                        color,
                    }}
                >
                    {value}
                </Typography>
            </CardContent>
        </Card>
    );
}
export default StatCard;