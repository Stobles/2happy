"use client";

import { Tooltip, ITooltip } from "react-tooltip";

const StyledTooltip = ({ ...props }: ITooltip) => {
  return (
    <Tooltip
      className="!rounded-none !text-button-xs whitespace-pre-line"
      place="bottom-end"
      {...props}
    />
  );
};

export default StyledTooltip;
