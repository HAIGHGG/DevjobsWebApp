import './Nav.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Toggle from './Toggle'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'

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
			<div className='input'></div>
		</nav>
	)
}

export default Nav
