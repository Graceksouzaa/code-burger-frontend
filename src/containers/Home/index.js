import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Burger from '../../assets/burger.png'

import H1 from '../../components/Title'
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import { Container, Image, InputLabel, Input } from './styles'

function App() {
    const [orders, setOrders] = useState([]);
    const history = useHistory();
    
    const inputOrder = useRef();
    const inputName = useRef();
    
    async function addNewOrder() {
        const { data: newOrder } = await axios.post('http://localhost:3002/orders', {
            order: inputOrder.current.value,
            clientName: inputName.current.value,
        })

        console.log(newOrder)

        setOrders([
            ...orders, newOrder]);
            
            history.push("/orders");
        };

    return (
        <Container>  
            <Image alt="logo-imagem" src={Burger} />
            <ContainerItens>
               <H1>Faça seu pedido!</H1>
            
            <InputLabel>Pedido</InputLabel>
            <Input ref={inputOrder} placeholder="Qual o seu pedido ?"></Input>

            <InputLabel>Nome</InputLabel>
            <Input ref={inputName} placeholder="Digite seu nome"></Input>
            
            <Button onClick={addNewOrder}>Fazer pedido</Button>

            </ContainerItens>
        </Container>
    )

}

export default App