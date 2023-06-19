// import React from 'react';
// import { Table } from 'react-bootstrap';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import {GrMail} from 'react-icons/gr';
// import {RiDeleteBinFill} from 'react-icons/ri';
// import "./myappoint.css";
// import Header from './Header';
// import { Link } from 'react-router-dom';

// export default function Myappointment() {

//     const [viewdata, setViewdata] = useState([]);

//     const config= {
//         headers :{
//             Authorization : 'Bearer '+localStorage.getItem('t')
//         }
//     }


    
//     useEffect(()=>{
//         axios.get("http://localhost:90/appointment/patientappoint", config)
//         .then(result=>{
//             console.log(result.data)
//             setViewdata(result.data);
//         })

//         .catch(e=>{
//             console.log("something went wrong")
//         })

//      }, [])

     

   
    

//     return(
//         <div >
//              <Header />
//         <div className='design p-5 '>
//             <Table >
//                      <thead>
//                   <tr>
                    
//                     <th>Image</th>
//                     <th>FullName </th>
//                     <th>E-mail</th>
//                     <th>Address</th>
                    
//                     {/* <th>Date</th>
//                     <th>Problem</th> */}
//                     <th>Action</th>
//                   </tr>
//                 </thead>
                
//                 <tbody>
//         {viewdata.map(singleData=>{
//             console.log(singleData);
            
//             return (
        
                
//         <tr>
//             <td><img src={'http://localhost:90/'+singleData.pimage} className="img-fluid"/></td>
           
//           <td>{singleData.fullname}</td>
//           <td>{singleData.email}</td>
//           <td>{singleData.address}</td>
         
          
//           <td><div className='d-flex'>  <div ><RiDeleteBinFill size={20} onClick={()=>deleteAppointment(singleData._id)}></RiDeleteBinFill> </div>
           
//            <Link to={'/single/'+singleData._id}>View Details</Link>

//            {/* <button onClick={() => deleteAppointment(singleData._id)}  className="btn text-danger btn-act" data-toggle="modal"><RiDeleteBinFill></RiDeleteBinFill></button> */}
//            {/* <div class="col-md-4 bg-light text-right">
//            <button type="button" class="btn btn-primary">View details</button>
//            </div> */}
//            </div> </td>
         
//         </tr>
        
//             )
    
//         })}
//         </tbody>
//                 </Table>
//         </div>
//         </div>

      
     
        
    


        
//     )
  
// }

