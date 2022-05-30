import { useEffect, useState } from 'react';
import axios from "axios"
const useFetchSearchGrade = (url) => {

    const [datag,setData] = useState([])
    const [loadingG,setLoading] = useState(false)
    const [errorG,setError] = useState(false)


    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true)
            try {
                const res = await axios.get(url);
                setData(res.data);
            } catch (err) {
                setError(err)
            }
            setLoading(false)
        };fetchData();
    },[]);
const reFetch = async () => {
  setLoading(true);
  try {
    const res = await axios.get(url);
    setData(res.data);
  } catch (err) {
    setError(err);
  }
  setLoading(false);
};

return {datag,loadingG,errorG,reFetch};
}

export default useFetchSearchGrade;