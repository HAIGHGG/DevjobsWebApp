import './Nav.css'
import { useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import Toggle from './Toggle'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { HiFilter } from 'react-icons/hi'
import { RiMapPin2Fill } from 'react-icons/ri'

function Nav() {
	const [name, setName] = useState('')
	const [location, setLocation] = useState('')
	const [isFulltime, SetIsFulltime] = useState(false)
	const [Theme, SetTheme] = useState([])
	const navigate = useNavigate()

	const handleLightMode = () => {
		SetTheme('')
		document.documentElement.setAttribute('theme', '')
	}

	const handleDarkMode = () => {
		SetTheme('dark')
		document.documentElement.setAttribute('theme', 'dark')
	}

	const handleFulltime = () => {
		isFulltime ? SetIsFulltime(false) : SetIsFulltime(true)
	}

	const submitHandler = e => {
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
	}

	return (
		<nav>
			<div className='wrapper'>

					<h1>devjobs</h1>

				<div className='wrapper-for-toggle'>
					<BsFillSunFill />
					<Toggle onChange={Theme === 'dark' ? handleLightMode : handleDarkMode} />
					<BsMoonFill />
				</div>
			</div>
			<form onSubmit={submitHandler} className='search-bar'>
				<label htmlFor='name'>
					<BiSearch />
				</label>
				<input
					id='name'
					onChange={e => setName(e.target.value)}
					type='text'
					value={name}
					placeholder='Filter by title, companie, expertise...'
				/>
				<label htmlFor='location'>
					<RiMapPin2Fill />
				</label>
				<input
					id='location'
					onChange={e => setLocation(e.target.value)}
					type='text'
					value={location}
					placeholder='Filter by location...'
				/>
				<input id='contract' type='checkbox' onClick={handleFulltime} />
				<label htmlFor='contract'>Full Time</label>
				<div className='filter'>
					<HiFilter />
				</div>
				<button>
					<BiSearch />
				</button>
			</form>
		</nav>
	)
}

export default Nav
