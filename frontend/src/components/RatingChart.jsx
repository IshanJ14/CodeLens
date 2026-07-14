import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

import { Card, CardContent, Typography } from "@mui/material";

function RatingChart({ data }) {
    return (
        <Card sx={{ mt: 4, mb: 4, borderRadius: 3, boxShadow: 4, width: "120%" }}>
            <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Rating History
                </Typography>

                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="contestName" hide />

                        <YAxis />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="newRating"
                            stroke="#1976d2"
                            strokeWidth={3}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}

export default RatingChart;