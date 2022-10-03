import React from 'react'
import styled from 'styled-components'


function Toggle({ onChange }) {
	return (
		<ToggleWrapper>
			<Input type='checkbox' onChange={onChange} />
			<Slider />
		</ToggleWrapper>
	)
}

const ToggleWrapper = styled.label`
	position: relative;
`

const Slider = styled.span`
	display: flex;
	position: relative;
	cursor: pointer;
	width: 50px;
	height: 25px;
	border-radius: 100px;
	background-color: #ffffff;
	transition: background-color 0.2s;

	&::before {
		content: '';
		position: absolute;
		top: 5px;
		left: 5px;
		width: 15px;
		height: 15px;
		border-radius: 45px;
		transition: 0.2s;
		background-color: var(--second-color);
		box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
	}

	&:active:before {
		width: 28px;
	}
`

const Input = styled.input`
	position: absolute;
	left: -9999px;
	top: -9999px;

	&:checked + span {
		background-color: #19202D;

		&:before {
			left: calc(100% - 5px);
			transform: translateX(-100%);
		}
	}

	&:focus + span {
		box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
	}
	&:focus:checked + span {
		box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
	}
`

export default Toggle
