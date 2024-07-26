import { createElement as h } from "https://esm.sh/react";

function AvatarItem({ id, status } /* props */) {
  return h(
    "li",
    {
      key: id,
      className: "Avatar-item",
    },
    h("img", {
      className: "avatar",
      src: `/avatars/avatar-${id}.jpg`,
      alt: "",
    }),
    h("img", {
      className: "status",
      src: `/indicator/${status ?? "offline"}.svg`,
      alt: "",
    })
  );
}

export default AvatarItem;
