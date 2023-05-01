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
    totalPrice: number
}

const App = (props: Props) => {
    const [cartData, setCartData] = useState<CartDataProps>({
        totalCount: 0,
        totalPrice: 0,
    })

    const addProductToCart = (count: number, price: number) => {
        setCartData((prevState) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + count * price,
        }))
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
                <Route path="cart" element={<CartPage />} />
                <Route path="categoryPage" element={<CategoryPage  addProductToCart={addProductToCart}/>} />
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
