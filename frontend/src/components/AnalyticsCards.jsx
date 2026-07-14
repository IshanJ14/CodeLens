import Grid from "@mui/material/Grid";

import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

import StatCard from "./StatCard";

function AnalyticsCards({ stats }) {

    if (!stats) return null; // Return null if stats is undefined or null

    const cards = [
        {
            title: "Contests",
            value: stats.contestsPlayed,
            icon: <LeaderboardIcon />,
            color: "#1976d2",
        },
        {
            title: "Best Rank",
            value: stats.bestRank,
            icon: <EmojiEventsIcon />,
            color: "#2e7d32",
        },
        {
            title: "Worst Rank",
            value: stats.worstRank,
            icon: <TrendingDownIcon />,
            color: "#ef6c00",
        },
        {
            title: "Rating Gain",
            value: 
                stats.ratingGain >= 0
                ? `+${stats.ratingGain}`
                : stats.ratingGain,
            icon: <TrendingUpIcon />,
            color: stats.ratingGain >= 0 ? "#2e7d32" : "#d32f2f",
        },
        {
            title: "Current Rating",
            value: stats.currentRating,
            icon: <SportsScoreIcon />,
            color: "#6a1b9a",
        },
        {
            title: "Max Rating",
            value: stats.maxRating,
            icon: <MilitaryTechIcon />,
            color: "#f9a825",
        },
    ];

    return (
        <Grid container spacing={3} sx={{ mt: 2 }}>

            {cards.map((card) => (

                <Grid item xs={12} sm={6} md={4} key={card.title}>

                    <StatCard {...card} />

                </Grid>
            ))}
        </Grid>
    );
}

export default AnalyticsCards;