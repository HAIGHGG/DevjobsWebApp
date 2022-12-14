import './Nav.css'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Toggle from './Toggle'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { HiFilter } from 'react-icons/hi'
import { RiMapPin2Fill } from 'react-icons/ri'

import styled from 'styled-components'

function Nav() {
	let showBar = true
	const navigate = useNavigate()
	const [name, setName] = useState('')
	const [location, setLocation] = useState('')
	const [isFulltime, setIsFulltime] = useState(false)
	const [theme, setTheme] = useState([])
	const [showModal, setShowModal] = useState(false)

	//if its joboffer page searchbar will not appear
	window.location.href.includes('/joboffer/') ? (showBar = false) : (showBar = true)

	//functions for toggle theme
	const handleLightMode = () => {
		setTheme('')
		document.documentElement.setAttribute('theme', '')
	}

	const handleDarkMode = () => {
		setTheme('dark')
		document.documentElement.setAttribute('theme', 'dark')
	}
	//if checkbox 'full time only' pressed change isFullTime boolean
	const handleFulltime = () => {
		isFulltime ? setIsFulltime(false) : setIsFulltime(true)
	}

	// checking is any input is empty,if one of them is empty then change param to 'all' ,if all are empty navigate to home
	const submitHandler = e => {
		setShowModal(false)
		e.preventDefault()
		if (location.length === 0) {
			if (name.length === 0) {
				isFulltime ? navigate('/search/all/all/fulltime') : navigate('/')
			} else {
				isFulltime ? navigate('/search/' + name + '/all/fulltime') : navigate('/search/' + name + '/all/all')
			}
		} else {
			if (name.length === 0) {
				isFulltime ? navigate('/search/all/' + location + '/fulltime') : navigate('/search/all/' + location + '/all')
			} else {
				isFulltime
					? navigate('/search/' + name + '/' + location + '/fulltime')
					: navigate('/search/' + name + '/' + location + '/all')
			}
		}
		setName('')
		setLocation('')
	}

	return (
		<nav>
			<div className='wrapper'>
				<Link to={'/'}>
					<h1>devjobs</h1>
				</Link>

				<div className='wrapper-for-toggle'>
					<BsFillSunFill />
					<Toggle onChange={theme === 'dark' ? handleLightMode : handleDarkMode} />
					<BsMoonFill />
				</div>
			</div>{' '}
			{showBar && (
				<form onSubmit={submitHandler} className='search-bar'>
					<label className='nav-label' htmlFor='name'>
						<BiSearch />
					</label>
					<input
						className='nav-input input-name'
						id='name'
						onChange={e => setName(e.target.value)}
						type='text'
						value={name}
						placeholder='Filter by title, companie, expertise...'
					/>
					<label className='nav-label' htmlFor='location'>
						<RiMapPin2Fill />
					</label>
					<input
						className='nav-input input-location'
						id='location'
						onChange={e => setLocation(e.target.value)}
						type='text'
						value={location}
						placeholder='Filter by location...'
					/>
					<input className='nav-input input-contract' id='contract' type='checkbox' onClick={handleFulltime} />
					<label className='nav-label' htmlFor='contract'>
						Full Time <span className='nav-label-only'>Only</span>
					</label>
					<div className='filter' onClick={() => setShowModal(true)}>
						<HiFilter />
					</div>
					<button className='nav-button--mobile'>
						<BiSearch />
					</button>
					<button className='nav-button--desktop'>Search</button>
					{showModal && (
						<Backdrop onClick={() => setShowModal(false)}>
							<Wrapper onClick={e => e.stopPropagation()}>
								<div className='modal-div'>
									<label htmlFor='modalLocation' className='map-pin'>
										<RiMapPin2Fill />
									</label>
									<input
										className='modal-input-name'
										id='modalLocation'
										onChange={e => setLocation(e.target.value)}
										type='text'
										value={location}
										placeholder='Filter by location...'
									/>
								</div>
								<div className='modal-div'>
									<input
										className='modal-input-contract'
										onClick={handleFulltime}
										id='modalContract'
										type='checkbox'
										checked={isFulltime}
									/>
									<label htmlFor='modalContract'>Full Time Only</label>
								</div>
								<button>Search</button>
							</Wrapper>
						</Backdrop>
					)}
				</form>
			)}
		</nav>
	)
}

//styles only for modal

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	width: 327px;
	height: 217px;
	padding: 25px;
	background-color: var(--element);
	border-radius: 6px;

	.modal-div {
		display: flex;
		align-items: center;
	}

	button {
		height: 48px;
		border-radius: 5px;
		font-weight: bold;
		font-size: 16px;
		background-color: var(--second-color);
		width: 100%;
		height: 48px;
		color: #ffffff;
	}

	label {
		margin-right: 10px;
		font-size: 16px;
		font-weight: bold;
		color: var(--text-header);
	}
	.map-pin {
		font-size: 26px;
		color: var(--second-color);
	}
	.modal-input-name {
		width: 195px;
		height: 48px;
		padding-left: 10px;
		border-radius: 5px;
		border: none;
		background-color: var(--element);
		color: var(--text-header);
	}
	.modal-input-contract {
		width: 24px;
		height: 24px;
		margin-right: 20px;
		accent-color: var(--second-color);
	}
`
const Backdrop = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
`

export default Nav
