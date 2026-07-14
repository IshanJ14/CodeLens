import { useState} from "react";
import api from "../services/api";
import SearchBar from "../components/SearchBar";
import ProfileCard from "../components/ProfileCard";
import NavBar from "../components/NavBar";
import { Container, Typography } from "@mui/material";
import RatingChart from "../components/RatingChart";
import AnalyticsCard from "../components/AnalyticsCards";
import { calculateContestStats } from "../utils/analytics";
import ContestHistoryTable from "../components/ContestHistoryTable";

function Home() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [ratingHistory, setRatingHistory] = useState([]);

    const searchUser = async (handle) => {
        setLoading(true);
        setError(""); // Clear previous errors
        setUser(null);
        
        try {
            const [userResponse, ratingResponse] = await Promise.all([
              api.get(`/users/${handle}`),
              api.get(`/users/${handle}/rating`),
            ]);
            setUser(userResponse.data);
            setRatingHistory(ratingResponse.data);
        } catch (error) {

            if (error.response) {
                setError(error.response.data.detail);
            } else {
                setError("Something went wrong.");
            }
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const stats = 
        user && ratingHistory.length > 0 
          ? calculateContestStats(ratingHistory, user) : null;
  /*
 const searchUser = async (handle) => {
  setLoading(true);

  try {
    const response = await api.get(`/users/${handle}`);

    console.log("Response:", response);
    console.log("Data:", response.data);

    setUser(response.data);
  } catch (error) {
    console.log("Full Error:", error);

    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Response:", error.response.data);
    }

    alert(error.message);
  } finally {
    setLoading(false);
  }
};
*/
  return (
    <>
      <NavBar />

      <Container maxWidth="md" sx={{ ml: 0, mr: 'auto', mt: 2 }}>

        <Typography 
          variant="h4" 
          //align="center" 
          gutterBottom
          fontWeight="bold"
        >
          Competitive Programming Analytics
        </Typography>

        <Typography
          //align="center"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Search any Codeforces user to get their profile and contest statistics.
        </Typography>

        <SearchBar onSearch={searchUser} />

        {loading && (
          <Typography sx={{ mt: 3 }}>
          Loading...
          </Typography>
        )}

        {error && (
          <Typography color="error" sx={{ mt: 3 }}>
            {error}
          </Typography>
        )}
        
        {user && (
          <ProfileCard user={user} />
        )}

        {stats && (
          <AnalyticsCard stats={stats} />
        )}

        {ratingHistory.length > 0 && (
          <ContestHistoryTable history={ratingHistory} />
        )}

        {ratingHistory.length > 0 && (
          <RatingChart data={ratingHistory} />
        )}
      </Container>
    </>
  );
}

export default Home;