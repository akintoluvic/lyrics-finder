import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

interface ContextPro {
  track_list?: ({} | null)[] | string[] | number;
  heading?: ({} | null)[] | [] | " ";
  [key: string]: any;
}

// export const Context = createContext<ContextPro | null>(null);
export const Context = createContext({} as ContextPro);
//export const Context = createContext<ContextPro | undefined>(undefined);

export const ContextP: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<ContextPro[] | null | {} | string[]>([
    {
      track_list: [],
      heading: " ",
    },
  ]);

  useEffect(() => {
    axios
      .get(
        `https://proxy.cors.sh/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        console.log(res.data);
        setState({
          track_list: res.data.message.body.track_list,
          heading: "Top 10 Tracks",
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};
