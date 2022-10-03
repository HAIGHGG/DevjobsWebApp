import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import JobOffer from './pages/JobOffer'
import ScrollToTop from './components/ScrollToTop'



const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
			<ScrollToTop />
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/joboffer/:id' element={<JobOffer />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
