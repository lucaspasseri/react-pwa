import styled from "styled-components";
import React, { useState } from "react";
import PropTypes from "prop-types";

WeekDays.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	selectedDays: PropTypes.arrayOf(PropTypes.bool)
};

export default function WeekDays({selectedDays, id, name}){

	const [dayState, setDayState] = useState(false);

	function selectDay(){
		if(dayState===false){
			setDayState(true);

			selectedDays[id]=true;
		}else {
			setDayState(false);
			selectedDays[id]=false;
		}
	}
	return(
		<ButtonWeekDay selected={dayState} onClick={selectDay}>{name}</ButtonWeekDay>
	);
}

const ButtonWeekDay = styled.div`
	cursor: pointer;
	width: 30px;
	height: 30px;
	background: ${props=>props.selected?"#cfcfcf":"#FFFFFF"};
	border: 1px solid #D5D5D5;
	border-radius: 5px;
	font-family: 'Lexend Deca', sans-serif;
	font-size: 19.976px;
	line-height: 25px;
	color: ${props=>props.selected?"#FFFFFF":"#cfcfcf"};
`;