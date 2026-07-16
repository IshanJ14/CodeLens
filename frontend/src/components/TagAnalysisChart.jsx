import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    LabelList,
} from "recharts";

import {
    Card,
    CardContent,
    Typography,
} from "@mui/material";

function TagAnalysisChart({ tags }) {

    const data = Object.entries(tags).map(([tag, count]) => ({
        tag,
        count,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 15);

    if (data.length === 0) return null;

    return (
        <Card
            sx={{
                mt: 4,
                borderRadius: 3,
                boxShadow: 4,
                width: "120%",
            }}
        >
            <CardContent>

                <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                >
                    Top Problem Tags
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                >
                    Top 15 tags based on unique accepted problems
                </Typography>
                
                <ResponsiveContainer
                    width="100%"
                    height={400}
                >
                    <BarChart
                        data={data}
                        layout="vertical"
                        margin={{
                            left: 40,
                            right: 20,
                        }}
                    >
                        <CartesianGrid strokeDasharray={"3 3"} />

                        <XAxis type="number" />

                        <YAxis
                            type="category"
                            dataKey="tag"
                            width={120}
                        />

                        <Tooltip
                            formatter={(value) => [`${value} solved problems`, "Count"]}
                        />

                        <Bar
                            dataKey="count"
                            fill="#1976d2"
                            radius={[0, 6, 6, 0]}
                            animationDuration={3000}
                        >
                            <LabelList
                                dataKey="count"
                                position="right"
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}

export default TagAnalysisChart;