export function calculateContestStats(history, user) {

    if (!history.length) return null;

    const contestsPlayed = history.length;

    const bestRank = Math.min(...history.map(contest => contest.rank));

    const worstRank = Math.max(...history.map(contest => contest.rank));

    const ratingGain = history[history.length - 1].newRating - history[0].oldRating;

    return {
        contestsPlayed,
        bestRank,
        worstRank,
        ratingGain,
        currentRating: user.rating,
        maxRating: user.maxRating,
    };
}