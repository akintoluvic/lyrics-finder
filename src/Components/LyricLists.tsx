import React from "react";
import { Link } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";
interface props {
  track: any;
  index: number;
}
const LyricLists: React.FC<props> = ({ track, index }) => {
  return (
    <Draggable draggableId={track.track_id} index={index}>
      {(provided) => (
        <div
          className="col-md-6"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          draggable
        >
          <div className="card mb-4 shadow-sm">
            <div className="card-body" draggable>
              <h5>{track.artist_name}</h5>
              <p className="card-text">
                <strong>
                  <i className="fas fa-play" /> Track
                </strong>
                : {track.track_name}
                <br />
                <strong>
                  <i className="fas fa-compact-disc" /> Album
                </strong>
                : {track.album_name}
              </p>
              <Link
                to={`/lyric/track/${track.track_id}`}
                className="btn btn-dark btn-block"
              >
                <i className="fas fa-chevron-right" /> View Lyrics
              </Link>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};
export default LyricLists;
