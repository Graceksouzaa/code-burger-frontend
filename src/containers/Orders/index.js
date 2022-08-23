import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios"

import Trash from '../../assets/trash.png'
import Package from '../../assets/package.png'

import H1 from '../../components/Title'
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import { Container, Image, User } from "./styles"

function Orders() {
    const [orders, setOrders] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function fetchOrders() {
            const { data: newOrders } = await axios.get('http://localhost:3002/orders')

            setOrders(newOrders)
        }
        fetchOrders()
    }, [])

    async function deleteOrder(orderId) {
        await axios.delete(`http://localhost:3002/orders/${orderId}`)
        const newOrders = orders.filter(order => order.id !== orderId)

        setOrders(newOrders)
    }

    function goBackPage() {
        history.push("/");
    }

    return (
        <Container>
            <Image alt="embalagem-delivery" src={Package} />
            <ContainerItens>
                <H1>Pedidos</H1>

                <ul>
                    {orders.map(order => (
                        <User key={order.id}>
                            <div>
                            <p> {order.order} </p> <h2> {order.clientName} </h2>
                            </div>
                            <button onClick={() => deleteOrder(order.id)}>
                                <img src={Trash} alt="lata de lixo" />
                            </button>
                        </User>
                    ))}
                </ul>
                <Button isBack={true} onClick={goBackPage}>Voltar</Button>

            </ContainerItens>
        </Container>
    )
}

export default Orders