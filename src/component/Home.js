import { useEffect, useState } from "react";
import axios from "axios";
import './Home.css';

function Home() {
  const [shows, setShows] = useState([]);
  const baseURL = "https://api.tvmaze.com/search/shows?q=all";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setShows(response.data);
    })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const clickHandler = (event) => {
    console.log("clicked");
    const summary = event.target.value;
    console.log(event.target.value);
    localStorage.setItem("summary", summary);
    window.location = "/ShowSummary";
  };

  return (
    <div className="container">
      <h1 className="title">TV Shows</h1>
      <div className="shows">
        {shows.map((show) => (
          <div key={show.show.id} className="show">
            <img className="show-image" src={show.show.image?.medium} alt={show.show.name} />
            <div className="show-details">
              <h2 className="show-name">{show.show.name}</h2>
              <button className="view-summary-btn" value={show.show.summary} onClick={clickHandler}>
                View Summary
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
