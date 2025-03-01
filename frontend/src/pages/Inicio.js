import React, { useEffect, useState } from 'react';
import{Link} from 'react-router-dom';
import "./Inicio.css";
import axios from 'axios';
import { toast } from 'react-toastify';

const Inicio = ()=>{
    const [data, setData]
= useState ([]);

    useEffect(()=>{
        getUsers();
    }, [])

    const getUsers = async()=>{
        const response = await axios.get("http://localhost:3005/");
        if(response.status === 200) {
            setData(response.data);
        }
    };
    
    const onDeleteUser = async(id)=>{
        if(window.confirm('¿Esta seguro de eliminar el registro seleccionado?')){
            const response = await axios.delete(`http://localhost:3005/${id}`);
            if(response.status ===200){
                toast.success("El registro se eliminó");
            }
        }   
    };






    return(
        <div style={{marginTop:"100px"}}>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>Id</th>
                        <th style={{textAlign:"center"}}>Usuario</th>
                        <th style={{textAlign:"center"}}>Contraseña</th>
                        <th style={{textAlign:"center"}}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                     data.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{item.nomuser}</td>
                                <td>{item.password}</td>
                                <td>
                                    <Link to={`/update/${item._id}`}>
                                    <button className='btn btn-edit'>Actualizar</button>
                                    </Link>

                                    <button className='btn btn-delete' onClick={()=>onDeleteUser(item._id)}>Eliminar</button>
                                </td>
                            </tr>
                        );
                     })               
                    }
                </tbody>

            </table> 
            
        </div>
    )
}

export default Inicio