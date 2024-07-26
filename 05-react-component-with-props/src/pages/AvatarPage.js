import React from "https://esm.sh/react";

import avatarData from "../data/avatar.js";

import AvatarList from "../components/Avatar/AvatarList.js";
import AvatarItem from "../components/Avatar/AvatarItem.js";

function AvatarListPage() {
  return React.createElement(AvatarList, {
    lang: "en",
    children: avatarData.items.map(({ id, status }) =>
      React.createElement(AvatarItem, { id, status })
    ),
  });
}

export default AvatarListPage;
