import React from 'react'

import request from '../../request';
import { Button, Table } from 'reactstrap';
import { useEffect } from 'react';
import { useState } from 'react';


export default function CatalogProduct() {
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
    
  return (
    <div  >
      <marquee>Catalog Product</marquee>
    <div style={{margin: "0px 200px"}}>
              <Table striped width={200}>
        <thead>
          <tr>
            <th>No</th>
            <th>Product ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action </th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </Table>
    </div>
    </div>
  )
}
