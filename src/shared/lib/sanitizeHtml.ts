import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";

export const sanitizeHtml = (rawHTML: string | undefined) => {
  const safeHTML = rawHTML ? DOMPurify.sanitize(rawHTML) : null;

  return { safeHTML, parse };
};
