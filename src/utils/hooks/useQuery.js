import { useLayoutEffect, useRef, useState } from 'react';

const useQuery = (asyncQueryFn, updateCb) => {
  const loading = useRef(false);
  const [err, setErr] = useState(null);
  const [data, setData] = useState(null);

  useLayoutEffect(() => {
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
      } catch (error) {
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
