import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Home from 'pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import CertificatesPage from 'pages/CertificatesPage/CertificatesPage'
import ReviewsPage from 'pages/ReviewsPage/ReviewsPage'
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage'
import ContactsPage from 'pages/ContactsPage/ContactsPage'
import CategoryPage from 'pages/CategoryPage/CategoryPage'
import { useState } from 'react'

type Props = {}

type CartDataProps = {
    totalCount: number
}

type ProductsInCart = {
    [id: number]: number
}

const App = (props: Props) => {
    const [cartData, setCartData] = useState<CartDataProps>({
        totalCount: 0,
    })

    const addTotalCountToHeader = (count: number) => {
        setCartData((prevState) => ({
            totalCount: prevState.totalCount + count,
        }))
    }
    
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({})

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const handleClick = (id: number, count: number) => {
        (() => {
            addTotalCountToHeader(count);
            addProductToCart(id, count);
        })();
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={cartData} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="certificate" element={<CertificatesPage />} />
                <Route path="review" element={<ReviewsPage />} />
                <Route path="contact" element={<ContactsPage />} />
                <Route path="favorite" element={<FavoritesPage />} />
                <Route
                    path="cart"
                    element={<CartPage productsInCart={productsInCart} />}
                />
                <Route
                    path="categoryPage"
                    element={
                        <CategoryPage
                        handleClick={handleClick}
                        />
                    }
                />
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
