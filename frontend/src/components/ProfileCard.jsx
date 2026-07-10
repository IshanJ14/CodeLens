function ProfileCard({ user }) {
    return (
        <div style = {{ marginTop: "25px"}}>
            <h2>{user.handle}</h2>
            <p>
                <strong>Rank:</strong> {user.rank}
            </p>
            <p>
                <strong>Rating:</strong> {user.rating}
            </p>
            <p>
                <strong>Max Rating:</strong> {user.maxRating}
            </p>
            <p>
                <strong>Contribution:</strong> {user.contribution}
            </p>
        </div>
    );
}

export default ProfileCard;