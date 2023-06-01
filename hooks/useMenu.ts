import { useEffect, useState } from "react";

export const useMenu = () => {
  const [menu, setMenu] = useState<any>([]);
  const [loading, setLoading] = useState<any>(true);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);

  return [menu, loading];
};
