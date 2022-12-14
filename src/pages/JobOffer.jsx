import { useParams } from 'react-router-dom'
import data from '../data.json'
import styled from 'styled-components'

function JobOffer() {
	let params = useParams()
	const details = data[params.id - 1]

	return (
		<div>
			<Wrapper>
				<section>
					<LogoDiv style={{ backgroundColor: details.logoBackground }}>
						<img src={'.' + details.logo} alt={details.company + 'logo'}></img>
					</LogoDiv>
					<div>
						<h2>{details.company}</h2>
						<p>{details.website}</p>
					</div>
					<button>Company Site</button>
				</section>
				<section>
					<p>
						{details.postedAt}
						<span> . </span>
						{details.contract}
					</p>
					<h3>{details.position}</h3>
					<p>{details.location}</p>
					<button>Apply Now</button>
					<p>{details.description}</p>
					<h4>Requirements</h4>
					<p>{details.requirements.content}</p>
					<ul>
						{details.requirements.items.map(item => {
							return <li key={item}>{item}</li>
						})}
					</ul>
					<h4>What You Will do</h4>
					<p>{details.role.content}</p>
					<ol>
						{details.role.items.map(item => {
							return <li key={item}>{item}</li>
						})}
					</ol>
				</section>
				<button></button>
			</Wrapper>
			<ApplyNowDiv>
				<button>Apply Now</button>
			</ApplyNowDiv>
		</div>
	)
}

const LogoDiv = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	border-radius: 15px;
	@media (min-width: 768px) {
		position: static;
		transform: none;
		height: 140px;
		width: 140px;
		border-radius: 6px;

		img {
			width: 81px;
		}
	}
`

const ApplyNowDiv = styled.div`
	display: flex;
	justify-content: center;
	margin: 65px 10px;
	padding: 25px;
	border-radius: 6px;
	background-color: var(--element);
	transition: background-color 0.2s;
	max-width: 748px;

	button {
		width: 100%;
		height: 48px;
		border-radius: 5px;
		font-weight: bold;
		font-size: 16px;
		background-color: var(--second-color);
		color: #ffffff;
	}
	@media (min-width: 768px) {
		margin-left: auto;
		margin-right: auto;
	}
	@media (min-width: 1920px) {
		max-width: 1350px;
	}
`

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 25px 0 25px;

	h3 {
		font-size: 20px;
	}
	h4 {
		font-size: 20px;
	}
	p {
		font-size: 16px;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: var(--element);
		border-radius: 6px;
		max-width: 730px;
		transition: background-color 0.2s;
	}
	section:nth-of-type(1) {
		position: absolute;
		top: -145px;
		left: 0;
		height: 205px;
		width: 100%;
		align-items: center;

		h2 {
			margin-bottom: 15px;
		}
		p {
			margin-bottom: 30px;
			color: var(--text);
		}
		button {
			width: 147px;
			height: 48px;
			border-radius: 5px;
			font-size: 16px;
			font-weight: bold;
			color: var(--second-color);
			background-color: var(--third-color);
			transition: background-color 0.2s;

		}
		@media (min-width: 768px) {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			height: 140px;
			left: 50%;
			padding-right: 40px;
			transform: translate(-50%, 0);

			p,
			h2 {
				margin: 0;
			}

			button {
				margin-left: auto;
			}

			div:nth-of-type(2) {
				margin-left: 25px;
			}
		}
	}
	section:nth-of-type(2) {
		justify-content: flex-start;
		padding: 25px;
		margin-top: 115px;

		h3 {
			margin-bottom: 2px;
			color: var(--text-header);
		}
		h4 {
			margin: 45px 0 35px 0;
		}
		span {
			font-weight: bold;
			font-size: 30px;
			line-height: 15px;
		}
		button {
			margin: 50px 0 40px 0;
			height: 48px;
			border-radius: 5px;
			font-weight: bold;
			font-size: 16px;
			background-color: var(--second-color);

			color: #ffffff;
		}

		p:nth-of-type(1) {
			color: var(--text);
			margin-bottom: 5px;
		}
		p:nth-of-type(2) {
			font-size: 14px;
			font-weight: bold;
			color: var(--second-color);
		}
		p {
			line-height: 30px;
			color: var(--text);
		}
		ul,
		ol {
			margin: 25px 0;
		}
		li {
			margin-top: 5px;
			margin-left: 18px;
			padding-left: 20px;
			line-height: 30px;
			color: var(--text);

			::marker {
				font-weight: bold;
				color: var(--second-color);
			}
		}
	}

	@media (min-width: 1920px) {
		section {
			max-width: 1350px;

			h3 {
				font-size: 26px;
			}

			p {
				font-size: 20px;
			}
			li{
				font-size: 20px;
			}
		}
	}
`

export default JobOffer
