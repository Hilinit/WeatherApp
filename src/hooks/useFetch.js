import { useState, useEffect } from 'react';
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return
    setLoading(true)
    fetch(url).then((res) => {
        if (!res.ok) {throw new Error('Məlumat alınarkən xəta baş verdi')}
        return res.json();
      }).then((result) => {
        setData(result);
        setLoading(false);
      }).catch((err) => {
        setError(err.message);
        setLoading(false);
      })
  }, [url]);
  return { data, loading, error };
}