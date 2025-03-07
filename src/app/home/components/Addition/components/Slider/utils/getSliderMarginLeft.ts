export const getSliderMarginLeft = (index: number, translate: number) => {
  return index === 0
    ? "0px"
    : `${Math.abs(translate) - 288 * index - 24 * index}px`;
};
