import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Change to null for more accurate error handling

  useEffect(() => {
    let isMounted = true; // Add a variable to check if the component is mounted

    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(url, { withCredentials: true });

        // Check if the component is still mounted before updating the state
        if (isMounted) {
          setData(result.data);
        }
      } catch (error) {
        // Check if the component is still mounted before updating the state
        if (isMounted) {
          setError(error);
        }
      }
      setLoading(false);
    };

    fetchData();

    // Cleanup function to set isMounted to false when the component is unmounted
    return () => {
      isMounted = false;
    };
  }, []); // Add url to the dependency array to refetch data when the url changes

  const refetchData = async () => {
    setLoading(true);
    try {
      const result = await axios.get(url, { withCredentials: true });

      // Check if the component is still mounted before updating the state
      setData(result.data);
    } catch (error) {
      // Check if the component is still mounted before updating the state
      setError(error);
    }
    setLoading(false);
  };

  return { data, loading, error, refetchData };
};

export default useFetch;
