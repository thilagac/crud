import axios from "axios";
import React, { useEffect, useState } from "react";

import { Table, Button } from "semantic-ui-react";
import { API_URL } from "../Constants/URL";
import { useNavigate } from "react-router-dom";
function Read() {
  const [apiData, setAPIData] = useState([]);
  const navigate= useNavigate();
const updateUser=({firstName,lastName,checked,id})=>{
    localStorage.setItem('id',id)
    localStorage.setItem('firstname',firstName)
    localStorage.setItem('lastname',lastName)
    localStorage.setItem('checked',checked)

    navigate('/update')
}

  const deleteUser= async (id)=>{
   await axios.delete(API_URL+id)
   callGetAPI()
  }

  const callGetAPI = async () => {
    const resp = await axios.get(API_URL);
   
    setAPIData(resp.data);
  };

  useEffect(() => {
    callGetAPI();
  }, []);
  return (
    <Table  className="table" singleLine >
      <Table.Header   >
        <Table.Row >
          <Table.HeaderCell className="table-heading">Firstname</Table.HeaderCell>
          <Table.HeaderCell className="table-heading">LastName</Table.HeaderCell>
          <Table.HeaderCell className="table-heading">Checked or Not</Table.HeaderCell>
          <Table.HeaderCell className="table-heading">Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body  >
        {
           apiData.map(data =>{return( <Table.Row key={data.id}>
            <Table.Cell  className="table-Data1">{data.firstName}</Table.Cell>
            <Table.Cell  className="table-Data1">{data.lastName}</Table.Cell>
            <Table.Cell  className="table-Data1">{data.checked ?" Checked":"Not Checked"} </Table.Cell>
            <Table.Cell  ><Button onClick={()=>deleteUser(data.id)}>Delete</Button> </Table.Cell>
            <Table.Cell  ><Button onClick={()=>updateUser(data)}>Update</Button> </Table.Cell>
          </Table.Row>
           )})
        }
      </Table.Body>
    </Table>
  );
}

export default Read;
