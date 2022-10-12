import React, {useState, useEffect} from "react";
import Modal_Product from "./Modal_Product/modal_product";
import ListProduct from "./ListProduct/ListProduct";
import axios from 'axios'
function Product(){
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const [check, setCheck] = useState(false)
    const [checkEdit, setCheckEdit] = useState(false);

    const [product, setProduct] = useState({
        
       name: '',
        price: '',
        category: '',
        number : '',
        description :'',
       

    })

    const [listProduct, setListProduct] = useState([])
    const handleValue = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setProduct({ ...product, [name]: value })

    }
    // const handleFile = (e)=> {
    //     const file = e.target.files[0]
    //     setProduct({...product, file})
        
    // }

    // change image
    const [image, setImage] = useState(null)

    const imageChange = (event)=>{
        if(event.target.files && event.target.files[0]) {
            let img = event.target.files[0]
            setImage(img)
        }
    }


    useEffect(() => {
        axios.get('http://localhost:8000/product/')
            .then(res => {
                setListProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [checkEdit])

    const handleAdd = (event) => {
        event.preventDefault()
        const newProduct = product
        if(image){
            const data = new FormData()
            const filename = Date.now() + image.name
            data.append('name', filename)
            data.append('file', image)
            newProduct.image = filename
            try {
                axios.post('http://localhost:8000/upload/', data)
            } catch (error) {
                console.log(error)
            }
        }
        axios.post('http://localhost:8000/product/', newProduct)
            .then(res => {
                setProduct({
                    name: '',
                     price: '',
                     category: '',
                     number : '',
                     description :'',
                })
                setCheckEdit(!checkEdit)
                toggle()
            })
            .catch(err => console.log(err))
    }
    const handleClose=()=>{
        setProduct({
            _id: '',
            name: '',
             image: '',
             price: '',
             category: '',
             number : '',
             description :'',
        })
        toggle()
    }




    
    return(
        <>
        
        <Modal_Product toggle={toggle} modal={modal} handleValue={handleValue} 
        handleAdd={handleAdd} product={product} handleClose={handleClose} imageChange={imageChange}/>
        <ListProduct listProduct={listProduct}  />
        </>
    )
}
export default Product