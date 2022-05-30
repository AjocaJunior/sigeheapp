import React from 'react'

import {useState} from "react";
import useFetchG from "../../hooks/useFetchG";
import { Row, Col, ListGroup } from 'react-bootstrap';

const ListDias = () => {

    const [curso,setCurso] = useState(undefined);
    const [semestre,setSemestre]= useState(undefined);
  // const { data, loading, error,reFetch } = useFetchG(`/grade?curso=${}`);


  return (
    <>
    <Row>
  <Col>
  <ListGroup>
  {/* {data.map(dia=>(
    <ListGroup.Item key={dia._id}>
<strong>{dia.curso}</strong>
    </ListGroup.Item>
  ))} */}
  </ListGroup>
  </Col>
</Row>
    </>
  )
}

export default ListDias