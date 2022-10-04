import './Nav.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Toggle from './Toggle'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { HiFilter } from 'react-icons/hi'
import { RiMapPin2Fill } from 'react-icons/ri'

function Nav() {
	const [Theme, SetTheme] = useState([])

	const handleLightMode = () => {
		SetTheme('')
		document.documentElement.setAttribute('theme', '')
	}

	const handleDarkMode = () => {
		SetTheme('dark')
		document.documentElement.setAttribute('theme', 'dark')
	}

	return (
		<nav>
			<div className='wrapper'>
				<Link to={'/'}>
					<h1>devjobs</h1>
				</Link>
				<div className='wrapper-for-toggle'>
					<BsFillSunFill />
					<Toggle onChange={Theme === 'dark' ? handleLightMode : handleDarkMode} />
					<BsMoonFill />
				</div>
			</div>
			<div className='search-bar'>
				<label htmlFor='name'>
					<BiSearch />
				</label>
				<input id='name' placeholder='Filter by title, companie, expertise...' />
				<label htmlFor='location'>
					<RiMapPin2Fill />
				</label>
				<input id='location' placeholder='Filter by location...' />
				<input id='contract' type='checkbox' />
				<label htmlFor='contract'>Full Time</label>
				<button>
					<HiFilter />
				</button>
				<button>
					<BiSearch />
				</button>
			</div>
		</nav>
	)
}

export default Nav
