/* eslint-disable no-undef */
import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router';
import ForbidenComponent from '../components/forbiden/ForbidenComponent';

function Home() {
    const [products, setProducts] = useState([]);
    const [validUser, setValidUser] = useState(false);
    const { user, isAuthenticated } = useAuth0();
    const { loginWithRedirect } = useAuth0();
    const getProducts = async () => {
        try {
            const response = await fetch("http://localhost:3001/get-products");
            const jsonResponse = await response.json();
            const responseProducts = jsonResponse.data;
            const listProducts = responseProducts.map((product) =>
                <tr>
                    <th scope="row">{product.id}</th>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.description}</td>
                </tr>
            );
            setProducts(listProducts)
        }
        catch (error) {
            console.log(error)
        }

    }

    const validateUserRole = async () => {
        const response = await fetch(`http://localhost:3001/get-user?email="${user.email}"`);
        const jsonResponse = await response.json();
        return jsonResponse;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const grantAccess = async () => {

        let userData;
        if (isAuthenticated) {
            userData = await validateUserRole();
        }
        else {
            if(!verifySesion()){
                loginWithRedirect();
            }
                 
            setValidUser(false);
            return;
        }

        if (userData) {
            if (userData.role !== "invited") {
                setValidUser(true);
                localStorage.setItem("state", userData.role);
                await getProducts();
            }
            else {
                localStorage.setItem("state", userData.role);
                setValidUser(false);
            }
        }
        else {
            setValidUser(false);
        }
        //console.log("Valid user: " + validUser)
    }
    const verifySesion = () => {
        const cookies = document.cookie;
        let state = false;
        if(cookies.includes('auth0')){
            state = true;
        }
        return state;
    }
    useEffect(() => {
        grantAccess();
    }, [grantAccess, isAuthenticated, validUser]);

    return (
        <div className="container">
            {validUser ? <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {products}
                </tbody>
            </table> : <ForbidenComponent/>}
        </div>
    )

}

export default Home