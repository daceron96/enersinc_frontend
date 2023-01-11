import {urlBase} from '../app/config';
import axios from 'axios'
import { useEffect, useState } from 'react';


export const useData = (url) =>{

  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${urlBase}/${url}`)
    .then(({data}) =>{
      setDataList(data)
      setLoading(false)
    })
  }, [url]);

  const retrieveData = (data) =>{
    setLoading(true)
    return axios.get(`${urlBase}/${url}${data}/`)
      .then(({data}) => {
        return data
      })

  }

  const createData = (data) =>{
    setLoading(true)
    return axios.post(`${urlBase}/${url}`, data)
      .then(({data}) => {
        const tempList = [...dataList]
        tempList.unshift(data.data)
        setDataList(tempList)
        setLoading(false)
        return(data.message)
      })
  }

  const deleteData = (data) =>{
    setLoading(true)
    return axios.delete(`${urlBase}/${url}${data}/`)
      .then((response) =>{
        const tempList = [...dataList]
        const index = dataList.findIndex((item) => item.id === data)
        tempList.splice(index, 1)
        setDataList(tempList)
        setLoading(false)
        return(response.data.message)
      }) 

  }

  return {dataList, loading, createData, deleteData, retrieveData}

}