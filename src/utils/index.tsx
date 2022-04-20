export const SizeWidth = () => {
  const size =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  return size;
};
