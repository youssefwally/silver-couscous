import Meetups from "../components/Meetups";
import { useState, useEffect } from "react";

function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://project2-d1f42-default-rtdb.firebaseio.com/.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const cleanData = [];
        for(const key in data){
          const instance = {
            id: key,
            ...data[key]
          };
          cleanData.push(instance);
          cleanData.sort(function(a, b){
            if(a.title < b.title) { return -1; }
            if(a.title > b.title) { return 1; }
            return 0;
        });
        }


        setIsLoading(false);
        setLoadedMeetups(cleanData);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1> All Meetups </h1>
      <Meetups items={loadedMeetups} />
    </div>
  );
}

export default AllMeetUpsPage;
