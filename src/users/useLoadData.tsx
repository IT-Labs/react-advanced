import { useState, useEffect } from 'react';
import { User } from 'Apis/UsersApi';

const useLoadData = ({ loadApi }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    loadApi().then((resp) => {
      setData(resp)
      setIsLoading(false);
    });
  }, [loadApi]);

  return {
    isLoading,
    data,
  }
}

export default useLoadData;