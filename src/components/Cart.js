import { Button } from '@mui/material';
import React, { useContext } from 'react'
import {contexto} from './CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom';
import {useState} from 'react'
import  TextField  from '@mui/material/TextField'; 
import swal from 'sweetalert';



function Cart() {
    const { cart, clearCart, total } = useContext(contexto)

    const [ openPay, setOpenPay ] = useState(false)
    const [ name, setName ] = useState("")
    const [ phone, setPhone ] = useState("")
    const [ email, setEmail ] = useState("")


    function submitOrder(e){
        e.preventDefault();

        if(cart.length===0){
            swal({
                type:"error",
                title:"Oops...",
                text:"No hay productos, selecciona alguno!",
                icon: "error",
                timer:"2000",
                width:"50%",
                padding:"40px",
                showConfirmButton:false
            })
        }else{
            swal({
                title:"Compra Exitosa!",
                text:"Su compra ha sido finalizada, pronto le llegará el pedido.",
                icon: "success",
                timer:"2000",
                width:"50%",
                padding:"40px",
                showConfirmButton:false
            }).then(function(){
                window.location = "http://localhost:3000/"
                localStorage.clear()
            })
        }
    }

    return (
        <div className="cart">
            { cart.length > 0 ? (
            <h1>Dale, compra!</h1>
            )    
            :
            ( <>
            <h1>Aún no elegiste tus productos</h1>
                <Link to={"/"}>
                <Button onClick={clearCart} variant="contained" color="primary">
                    Volver a los productos
                </Button>
            </Link>
            </>)}

            <div className="cartItems">
                { cart.length > 0 && cart.map( product => <CartItem key={product.id} 
                id={product.id} name={product.name} image={product.image} price={product.price} 
                amount={product.amount} />)}
            </div>


            { cart.length > 0 &&
            <>
            <h2>${total}</h2>
            <div className="cartItems__buttons">
                <Button onClick={clearCart} variant="contained" color="primary">
                    Sacar todo del carrito
                </Button>
                <Button onClick={() => {setOpenPay(true)}} variant="contained" color="warning">
                    A pagar! 
                </Button>
            </div>
            </>}


            { openPay && 
            <form className='form'noValidate autoComplete="off">
            <TextField id="standard-basic" label="Nombre" value={name} 
            onChange={(e) => setName(e.target.value)} />
            <TextField id="standard-basic" label="Teléfono" value={phone} 
            onChange={(e) => setPhone(e.target.value)} />
            <TextField id="standard-basic" label="Email" value={email} 
            onChange={(e) => setEmail(e.target.value)} />
            <Button  onClick={submitOrder} variant="contained" color="primary">
                    Finalizar!
                </Button> 
            </form>}

        </div>
    )
}

export default Cart