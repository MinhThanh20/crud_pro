import React from "react";
import {Table} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen ,faTrash} from "@fortawesome/free-solid-svg-icons";
function ListProduct(prop) {
    const {listProduct,handleDelete,edit} = prop
    return (
        <>
            <Table bordered>
                <thead style={{ background: 'rgb(10, 145, 10)', color: 'white', textAlign: 'center' }}>
                    <tr>
                        <th>
                            STT
                        </th>
                        <th>
                            Tên sản phẩm
                        </th>
                        <th>
                            Hình ảnh
                        </th>
                        <th>
                            Giá sản phẩm
                        </th>
                        <th>
                            Loại sản phẩm
                        </th>

                        <th>
                            Số lượng
                        </th>
                        <th>
                            Mô tả                        
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                {listProduct.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.image}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <td>{item.number}</td>
                                <td>{item.description}</td>
                                <td>
                                <button ><FontAwesomeIcon icon={faPen}/></button>
                                <button ><FontAwesomeIcon icon={faTrash}/></button>
                                </td>
                                

                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}
export default ListProduct