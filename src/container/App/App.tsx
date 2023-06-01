import CertificatesPage from 'pages/CertificatesPage/CertificatesPage'
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage'
import { StyledEngineProvider } from '@mui/material/styles'
import ContactsPage from 'pages/ContactsPage/ContactsPage'
import CategoryPage from 'pages/CategoryPage/CategoryPage'
import ReviewsPage from 'pages/ReviewsPage/ReviewsPage'
import CssBaseline from '@mui/material/CssBaseline'
import { Route, Routes } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Home from 'pages/Home/Home'
import { useState } from 'react'
import { omit } from 'lodash'

type Props = {}

type CartDataProps = {
    totalCount: number
}

type ProductsInCart = {
    [id: number]: number
}

const App = (props: Props) => {
    const [cartData, setCartData] = useState<CartDataProps>({ totalCount: 0 })
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({})

    const addTotalCountToHeader = (count: number) => {
        setCartData((prevState) => ({
            ...prevState,
            totalCount: prevState.totalCount + count,
        }))
    }

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const changeProductQuantity = (id: number, count: number) => {
        const diffCount = count - (productsInCart[id] || 0) // знаходжу різницю між попередньою кількістю товару і новою
        setCartData((prevState) => ({
            ...prevState,
            totalCount: prevState.totalCount + diffCount, // оновлюю totalCount на різницю
        }))
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: count,
        }))
    }

    const handleClick = (id: number, count: number) => {
        ;(() => {
            addTotalCountToHeader(count)
            addProductToCart(id, count)
        })()
    }

    const removeProductFromCart = (id: number) => {
        setCartData((prevState) => ({
            ...prevState,
            totalCount: Math.max(0, prevState.totalCount - productsInCart[id]),
        }))
        setProductsInCart((prevState) => omit(prevState, [id]))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={cartData} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="certificate" element={<CertificatesPage />} />
                <Route
                    path="review"
                    element={<ReviewsPage />}
                />
                <Route path="contact" element={<ContactsPage />} />
                <Route path="favorite" element={<FavoritesPage />} />
                <Route
                    path="cart"
                    element={
                        <CartPage
                            removeProductFromCart={removeProductFromCart}
                            productsInCart={productsInCart}
                            changeProductQuantity={changeProductQuantity}
                        />
                    }
                />
                <Route
                    path="/category/:categoryId"
                    element={<CategoryPage handleClick={handleClick} />}
                />
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
