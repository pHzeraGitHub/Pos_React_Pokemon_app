// src/hooks/useFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return { data, loading };
}

export default useFetch;
