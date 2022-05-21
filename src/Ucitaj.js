import axios from "axios";
import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table'
const ReadUrl ="http://localhost/lv7/src/Read.php"

function Ucitaj()
{
    const [artikli, setArtikl] =useState([]);
    useEffect(() => {
        axios.get(ReadUrl).then((response) => {
            console.log(response.data);
            setArtikl(response.data);
        });

    },[]);

    return(
<>

  
  {  artikli?.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.Id}</td>
                    <td>{info.Naziv}</td>
                    <td>{info.Proizvodac}</td>
                    <td>{info.Model}</td>
                    <td>{info.Cijena}</td>
                    <td>{info.Kolicina}</td>
                </tr>
                
            )
        }
    )}     
  
    </>
    )
}

export default Ucitaj;