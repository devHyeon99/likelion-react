import React from "https://esm.sh/react";

function AvatarList(props) {
  const { lang, children } = props;

  return React.createElement("ul", { className: "Avatars", lang }, children);
}

export default AvatarList;
