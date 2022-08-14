import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExtended, setExtended] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExtended(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExtended && (
          <input
            type="text"
            value={note.title}
            onChange={handleChange}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          value={note.content}
          onClick={expand}
          onChange={handleChange}
          placeholder="Take a Note..."
          rows={isExtended ? 3 : 1}
        ></textarea>
        <Zoom in={isExtended}>
          <Fab onClick={submitNote} color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
