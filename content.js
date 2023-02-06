const setMaxWidth = () => {
  const busyBlocks = document.querySelectorAll(".interviewer-busy");
  busyBlocks.forEach((el) => (el.style.maxWidth = "80%"));
};

const observer = new MutationObserver(setMaxWidth);

observer.observe(document, {
  attributes: false,
  childList: true,
  subtree: true,
});
