import {
    Skeleton,
    Card,
    CardContent,
    Grid,
    Box,
} from "@mui/material";

function LoadingSkeleton() {
    return (
        <> 
            <Card sx={{ mt: 4, borderRadius: 3 }}>
                <CardContent>
                    <Box display="flex" gap={3} alignItems="center">
                        <Skeleton variant="circular" width={90} height={90} />

                        <Box width="100%">
                            <Skeleton width="40%" height={40} />
                            <Skeleton variant="25" height={30} />
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            <Grid container spacing={3} sx={{ mt: 2 }}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item}>
                        <Card>
                            <CardContent>
                                <Skeleton width="60%" />
                                <Skeleton height={50} />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Skeleton
                variant="rounded"
                height={350}
                sx={{ mt: 4, mb: 4 }}
            />
        </>
    );
}

export default LoadingSkeleton;