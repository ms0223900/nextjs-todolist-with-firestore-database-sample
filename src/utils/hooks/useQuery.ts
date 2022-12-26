import { useEffect, useRef, useState } from 'react';

const useQuery = (
  asyncQueryFn: (...params: any) => Promise<any>,
  updateCb: (res: any) => any
) => {
  const loading = useRef(false);
  const [err, setErr] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      // console.log('fetching data...');
      if (!asyncQueryFn) return;
      if (loading.current) return;

      loading.current = true;
      try {
        const res = await asyncQueryFn();
        setData(res);
        if (updateCb) {
          updateCb(res);
        }
      } catch (error: any) {
        setErr(error);
      } finally {
        loading.current = false;
      }
    })();
  }, []);

  return {
    error: err,
    data,
  };
};

export default useQuery;
