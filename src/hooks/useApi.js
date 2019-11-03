import React, { useEffect ,useState} from 'react';
const useApi = (apiObservable, postData) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const sub = apiObservable(postData).subscribe(response => {
        setData(response);
    });
    return () => sub.unsubscribe();
  }, []);
  return data;
};

export default useApi;
