export const ScrollTo = (id: HTMLElement | null) => {
  if (id) {
    id.scrollIntoView({ behavior: "smooth" });
  }
};
