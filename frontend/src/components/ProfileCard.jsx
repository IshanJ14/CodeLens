import {
    Card,
    CardContent,
    Typography,
    Box,
    Avatar,
    Divider,
    Chip,
} from "@mui/material";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PublicIcon from "@mui/icons-material/Public";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import BusinessIcon from "@mui/icons-material/Business"

function ProfileCard({ user }) {
    return (
        <Card
        sx = {{
            mt: 4,
            borderRadius: 3,
            boxShadow: 4,
        }}
        >
            <CardContent>
                <Box 
                display= "flex" 
                alignItems= "center"
                gap={3} 
                >
                    <Avatar
                        src={user.titlePhoto}
                        sx = {{
                            width: 90,
                            height: 90,
                        }}
                    />
                    <Box>
                        <Typography variant="h4" fontWeight="bold">
                            {user.handle}
                        </Typography>
                        
                        <Chip 
                            label={user.rank}
                            color="primary"
                            sx={{ 
                                mt : 1
                            }}
                        />
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box display="flex" flexDirection="column" gap={2}>
                
                    <Typography display="flex" alignItems="center">
                        <TrendingUpIcon sx={{ mr: 1 }} />
                        <strong>Rating:</strong> {user.rating}
                    </Typography>

                    <Typography display="flex" alignItems="center">
                        <EmojiEventsIcon sx={{ mr: 1 }} />
                        <strong>Max Rating:</strong> {user.maxRating}
                    </Typography>

                    <Typography display="flex" alignItems="center">
                        <PublicIcon sx={{ mr: 1 }} />
                        <strong>Country:</strong> {user.country || "N/A"}
                    </Typography>

                    <Typography display="flex" alignItems="center">
                        <VolunteerActivismIcon sx={{ mr: 1 }} />
                        <strong>Contribution:</strong> {user.contribution || "N/A"}
                    </Typography>
                    
                    <Typography display="flex" alignItems="center">
                        <BusinessIcon sx={{ mr: 1 }} />
                        <strong>Organization:</strong> {user.organization || "N/A"}
                    </Typography>

                </Box>
            </CardContent>
        </Card>
    );
}

export default ProfileCard;