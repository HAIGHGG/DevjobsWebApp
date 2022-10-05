
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import data from '../data.json'

function Search() {
	let params = useParams()
	let location = ''
	let keyword = ''
	let contract = ''

	//checking is param value different than 'all' if true set variable to this param if its not let it empty string
	params.location !== 'all' ? (location = params.location) : (location = '')
	params.keyword !== 'all' ? (keyword = params.keyword) : (keyword = '')
	params.fulltime !== 'all' ? (contract = 'Full Time') : (contract = '')

	//filtering data.json
	const filtered = data.filter(job => {
		return (
			job.position.toLowerCase().includes(keyword.toLowerCase()) &&
			job.location.toLowerCase().includes(location.toLowerCase()) &&
			job.contract.toLowerCase().includes(contract.toLowerCase())
		)
	})

	return (
		<Grid>
			{filtered.map(job => {
				return (
					<Link key={job.id} to={'/joboffer/' + job.id}>
						<Card>
							<LogoDiv style={{ backgroundColor: job.logoBackground }}>
								<img src={'../../.' + job.logo} alt={job.company + 'logo'}></img>
							</LogoDiv>
							<p>
								{job.postedAt} <span> . </span> {job.contract}
							</p>
							<h3>{job.position}</h3>
							<p>{job.company}</p>
							<p>{job.location}</p>
						</Card>
					</Link>
				)
			})}
		</Grid>
	)
}

const LogoDiv = styled.div`
	position: absolute;
	top: -25px;
	left: 35px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	border-radius: 15px;
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	row-gap: 50px;
	justify-items: center;
	margin-bottom: 50px;
	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 10px;
		padding: 0 40px;
		row-gap: 65px;
	}

	@media (min-width: 1440px) {
		grid-template-columns: 1fr 1fr 1fr;
		grid-column-gap: 30px;
		padding: 0 165px;
	}
`

const Card = styled.div`
	position: relative;
	width: 327px;
	height: 228px;
	padding: 45px 30px 35px 30px;
	border-radius: 6px;
	background-color: var(--element);
	transition: background-color 0.2s;

	h3 {
		font-size: 20px;
		margin-bottom: 10px;
		color: var(--text-header);
	}
	p {
		font-size: 16px;
	}
	span {
		font-weight: bold;
		font-size: 30px;
		line-height: 15px;
	}

	p:nth-of-type(1),
	p:nth-of-type(2) {
		color: var(--text);
		margin-bottom: 15px;
	}
	p:nth-of-type(3) {
		margin-top: 40px;
		font-size: 14px;
		font-weight: bold;
		color: var(--second-color);
	}
`

export default Search
