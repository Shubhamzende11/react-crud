import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Emplisting=() =>{
    const[empdata,empdatachange]= useState(null)

    const navigate=useNavigate();

    const LoadDetail=(empid)=>{
        navigate("/employee/detail/"+empid);
    }
    const LoadEdit=(empid)=>{
        navigate("/employee/edit/"+empid);
    }
    const Removefunction=(empid) =>{
        if(window.confirm('Do you want to remove?')){
            fetch("http://localhost:8000/employee/"+empid,{
            method:"DELETE",
        })
        .then((res)=> {
            alert('Delete successfully')
            window.location.reload();
        }).catch((err)=>{
            console.log(err.message)
        }) 
        }

    }
    useEffect(()=> {
        fetch("http://localhost:8000/employee")
        .then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err)=>{
            console.log(err.message);
        })
    },[])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to='employee/create' className='btn btn-success'> Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {empdata &&
                            empdata.map(item=>(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <button onClick={()=>{LoadEdit(item.id)}} className="btn btn-success ">Edit</button>
                                        <button onClick={()=>{Removefunction(item.id)}} className="btn btn-danger">Delete</button>
                                        <button onClick={()=>{LoadDetail(item.id)}} className="btn btn-primary">Detail</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    );
}
export default Emplisting;