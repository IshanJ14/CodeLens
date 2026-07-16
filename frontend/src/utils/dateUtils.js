export const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";

    return new Date(timestamp * 1000).toLocaleDateString(
        "en-US",
        {
            month: "long",
            year: "numeric",
        }
    );
};

export const timeAgo = (timestamp) => {
    if (!timestamp) return "N/A";

    const now = Math.floor(Date.now() / 1000);
    const difference = now - timestamp;

    if (difference < 60){
        return "Just Now";
    }

    const minutes = Math.floor(difference / 60);

    if (minutes < 60){
        return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    }

    const hours = Math.floor(minutes / 60);

    if (hours < 24){
        return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    }

    const days = Math.floor(hours / 24);

    if (days < 30){
        return `${days} day${days !== 1 ? "s" : ""} ago`;
    }

    const months = Math.floor(days / 30);

    if (months < 12){
        return `${months} month${months !== 1 ? "s" : ""} ago`;
    }

    const years = Math.floor(months / 12);

    return `${years} year${years !== 1 ? "s" : ""} ago`;
};