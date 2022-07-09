import React from "react"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";
import request from "../../request";



const CatalogById = () =>{
    const [productList, setProductList] = useState([]);
    const fetchData = async () => {
        await request.get('/product')
          .then(({ data }) => {
            setProductList(data)
          })
          .catch(err => alert(err))
      }
    
      useEffect(() => {
        fetchData();
      }, [])
    {productList.map((row, idx) => (
        <tr key={idx}>
          <th scope="row">
            {idx + 1}
          </th>
          <td>{row.id}</td>
          <td>{row.name}</td>
          <td>{row.quantity}</td>
          <td>{row.price}</td>
          <td>
            <Button href = '/catalog/:id'> Get by Id</Button>
          </td>
        </tr>
      ))}
      let {id} = useParams()

      useEffect(()=>{
    
      },[])
      return <> catalog id {id}</>
  }
  



  export default CatalogById