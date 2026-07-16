export const getRankColor = (rank) => {
    if (!rank) return "default";

    const colors = {
        "newbie": "#9E9E9E",
        "pupil": "#4CAF50",
        "specialist": "#03A9F4",
        "expert": "#3F51B5",
        "candidate master": "#9C27B0",
        "master": "#FF9800",
        "international master": "#FF9800",
        "grandmaster": "#F44336",
        "legendary grandmaster": "#D32F2F",
    };

    return colors[rank.toLowerCase()] || "primary";
};