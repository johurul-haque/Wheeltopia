import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Wheeltopia ${title ? `| ${title}` : ""}`;
  }, [title]);
};
export default useTitle;
