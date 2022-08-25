import { useEffect, useState } from 'react';

const useSearch = (load, initData) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(initData);

  useEffect(() => {
    load().then((resp) => {
      setData(resp)
      setIsLoading(false);
    });
  }, [load]);

  return [
    isLoading,
    data
  ]
}

export default useSearch;