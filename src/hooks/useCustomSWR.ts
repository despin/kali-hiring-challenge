import {useEffect, useState} from 'react';
import useSWR from 'swr';

export default function useCustomSWR(url, fetcher) {
  const [realData, setRealData] = useState();
  const [realLoading, setRealLoading] = useState(false);
  const {data, isLoading} = useSWR(url, fetcher);

  useEffect(() => {
    setRealLoading(true);

    setTimeout(() => {
      console.log('setTimeout');
      setRealData(data);
      setRealLoading(false);
    }, 2000);
  }, [data, isLoading]);

  return {data: realData, isLoading: realLoading};
}
