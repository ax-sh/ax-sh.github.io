import React from "react";
import {Codesandbox, Github, Linkedin, Twitter} from "@icons-pack/react-simple-icons";

export function GetIcon({name}: { name: string }) {
  const [hovered, setHover] = React.useState(false);
  const props = {
    onMouseOver: () => setHover(true),
    onMouseOut: () => setHover(false),
    color: hovered ? 'gray' : 'white',
  };

  switch (name) {
    case 'LinkedIn':
      return <Linkedin {...props} />;
    case 'CodeSandbox':
      return <Codesandbox {...props} />;
    case 'Twitter':
      return <Twitter {...props} />;
    case 'Github':
      return <Github {...props} />;
    default:
      return <h1>{name}</h1>;
  }
}
