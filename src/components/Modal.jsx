import React from 'react'
import styled from 'styled-components'
import { RiMapPin2Fill } from 'react-icons/ri'

function Modal(props) {
	if (!props.show) {
		return null
	}
	return (
		<Backdrop onClick={props.onClose}>
			<Wrapper onClick={e => e.stopPropagation()}>
				<div>
					<label htmlFor='modalLocation' className='map-pin'>
						<RiMapPin2Fill />
					</label>
					<input id='modalLocation' type='text' placeholder='Filter by location...' />
				</div>
				<div>
					<input id='modalContract' type='checkbox' />
					<label htmlFor='modalContract'>Full Time Only</label>
				</div>
				<button onClick={props.onClose}>Search</button>
			</Wrapper>
		</Backdrop>
	)
}

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
    .map-pin{
        
        color: var(--second-color);
    }
    input{
        margin-right: 15px;
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

export default Modal
