import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { LoginPage } from "./Pages/Login/LoginPage";
import SingleUser from "./Pages/SingleUser/SingleUser";
import NewUser from "./Pages/NewUser/NewUser";
import React from "react";
import EditUser from "./Pages/EditUser/EditUser";
import NewProduct from "./Pages/NewProduct/NewProduct";
import NewCategory from "./Pages/NewCategory/NewCategory";
import NewToken from "./Pages/NewToken/NewToken";
import NewOrder from "./Pages/NewOrder/NewOrder";
import SingleOrder from "./Pages/SingleOrder/SingleOrder";
import EditOrder from "./Pages/EditOrder/EditOrder";
import EditProduct from "./Pages/EditProduct/EditProduct";
import EditCategory from "./Pages/EditCategory/EditCategory";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import ListPage from "./Components/ListPage/ListPage";

import { usersColumns, usersActionColumn } from "./Config/Users/UsersConfig";
import { categoriesColumns, categoriesActionColumn } from "./Config/Categories/CategoriesConfig";
import { productsColumns, productsActionColumn } from "./Config/Products/ProductsConfig";
import { tokensColumns, tokensActionColumn } from "./Config/Tokens/TokensConfig";
import { ordersColumns, ordersActionColumn } from "./Config/Orders/OrdersConfig";

const usersUrl = "https://localhost:7153/Users";
const categoriesUrl = "https://localhost:7153/Categories";
const productsUrl = "https://localhost:7153/Products";
const tokensUrl = "https://localhost:7153/Tokens";
const ordersUrl = "https://localhost:7153/Orders";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/orders" element={
                        <ListPage
                            title="Orders"
                            columns={ordersColumns}
                            url={ordersUrl}
                            actionColumn={ordersActionColumn}
                            addNewLink="/orders/new"
                        />
                    } />
                    <Route path="/orders/edit/:orderId" element={<EditOrder />} />
                    <Route path="/orders/new" element={<NewOrder />} />
                    <Route path="/orders/view/:orderId" element={<SingleOrder />} />
                    <Route path="/users" element={
                        <ListPage
                            title="Users"
                            columns={usersColumns}
                            url={usersUrl}
                            actionColumn={usersActionColumn}
                            addNewLink="/users/new"
                        />
                    } />
                    <Route path="/users/view/:userId" element={<SingleUser />} />
                    <Route path="/users/edit/:userId" element={<EditUser />} />
                    <Route path="/users/new" element={<NewUser />} />
                    <Route path="/products" element={
                        <ListPage
                            title="Products"
                            columns={productsColumns}
                            url={productsUrl}
                            actionColumn={productsActionColumn}
                            addNewLink="/products/new"
                        />
                    } />
                    <Route path="/products/new" element={<NewProduct />} />
                    <Route path="/products/view/:productId" element={<SingleProduct />} />
                    <Route path="/products/edit/:productId" element={<EditProduct />} />
                    <Route path="/categories" element={
                        <ListPage
                            title="Categories"
                            columns={categoriesColumns}
                            url={categoriesUrl}
                            actionColumn={categoriesActionColumn}
                            addNewLink="/categories/new"
                        />
                    } />
                    <Route path="/categories/new" element={<NewCategory />} />
                    <Route path="/categories/edit/:categoryId" element={<EditCategory />} />
                    <Route path="/tokens" element={
                        <ListPage
                            title="Tokens"
                            columns={tokensColumns}
                            url={tokensUrl}
                            actionColumn={tokensActionColumn}
                            addNewLink="/tokens/new"
                        />
                    } />
                    <Route path="/tokens/new" element={<NewToken />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
