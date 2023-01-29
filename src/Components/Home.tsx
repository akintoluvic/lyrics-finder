import React from "react";
import Lyrics from "./Lyrics";
import Search from "./Search";

function Home() {
  return (
    <div>
      <React.Fragment>
        <Search />

        <Lyrics />
      </React.Fragment>
    </div>
  );
}

export default Home;
