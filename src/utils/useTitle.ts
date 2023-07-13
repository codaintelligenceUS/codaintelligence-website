import { useEffect } from "react";

export function useTitle(title: string) {
  useEffect(() => {
    document.title = `CODA Intelligence. ${title}.`;
  }, [title]);
}
