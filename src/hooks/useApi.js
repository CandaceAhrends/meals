import React, { useEffect ,useState} from 'react';
const useApi = (apiObservable, postData, initialValue=[]) => {
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    const sub = apiObservable(postData).subscribe(response => {
        setData(response);
    });
    return () => sub.unsubscribe();
  }, []);
  return data;
};

export default useApi;
