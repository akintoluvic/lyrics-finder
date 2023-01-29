import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "./Context";

const Search = () => {
  const ctxt = useContext(Context);
  const [state, setState]: {} | any = ctxt;
  const [userInput, setUserInput] = useState("");
  const [trackTitle, setTrackTitle] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        let track_list = res.data.message.body.track_list;
        setState({ track_list: track_list, heading: "Search Results" });
      })
      .catch((err) => console.log(err));
  }, [trackTitle]);
  const findTrack = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTrackTitle(userInput);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
};
export default Search;
