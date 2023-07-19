import React, { useEffect, useState,  useRef} from 'react'
import { useDispatchCart, useCart  } from './ContextReducer';


export default function Card(props) 
{
//variable of data
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");
    let foodItem = props.foodItem;

//Add to cart handler
//     const  handleAddToCart = async () => {
//         let food  = []
//         for (const item of data)
//         {
//             if((item.id === props.foodItem._id))
//             {
//                 food = item;
//                 break;
//             }
//         }
//         if(food !== [])
//         {
//             if(food.size === size)
//             {
//                 await dispatch({type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty})
//                 return 
//             }
//             else if(food.size !== size)
//             {
//                 await dispatch({type: "ADD", id:props.foodItem._id, name:props.foodItem.name, qty: qty, size: size, price: finalPrice})
//             }
//         }
//         await dispatch({type: "ADD", id:props.foodItem._id, name:props.foodItem.name, qty: qty, size: size, price: finalPrice})
        
        
//         //console.log(data)
//     };

const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;

        break;
      }
    }
    console.log(food)
    console.log(new Date())
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        //console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })


    // setBtnEnable(true)

  }

//Final price
    let finalPrice = qty * parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])

    return (
        <div className='me-3'>
            <div className="card mt-3 " style={{"width": "18rem", "maxHeight":"360px"}}>
                <img src={props.foodItem.img} className="card -img-top"  alt="..." style={{height: "120px", objectFit: "fill"}}/>
                    <div className="card -body">
                        <h5 className="card -title m-auto mb-1 mu-1 ">{props.foodItem.name}</h5>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                                {
                                    Array.from(Array(6), (e, i) => {
                                        return (
                                            <option key={i + 1} value={i + 1} > {i + 1}
                                            </option>
                                        )
                                    })
                                }
                            </select>

                            <select className='m-2 h-100 bg-success rounded'  ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                                {
                                    priceOptions.map((data) => {
                                        return <option key = {data} value={data}>{data}</option>
                                    })
                                }
                            </select>

                            <div className='d-inline h-100 fs-5'> 
                                 ₹{finalPrice}/-
                            </div>
                            <hr/>
                            <button className={'btn bg-success justify-center ms-auto mb-3'} onClick={handleAddToCart}>Add To Cart</button> 

                        </div>

                    </div>
            </div>
        </div>
    )

}