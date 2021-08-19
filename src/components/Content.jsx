import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MainWeather from './MainWeather';
import Secondary from './Secondary';

function Content() {

	const [findCity, setFindCity] = useState('Minsk');
	const [city, setSity] = useState('Minsk');
	const [main, setMain] = useState({});
	const [secondary, setSecondary] = useState([]);
	const [date, setDate] = useState('');

	//Очищение инпута, так как у нас инпут зависимый от состояния
	const clearInput = () => {
		setFindCity('');
	}

	const inputCity = (city) => {
		setFindCity(city);
	};

	//Подтвеждение города я сделал потомучто если делать через onChange, при каждой новой букве, будет отправаляться запрос на сервер, что не есть гуд!
	const submitCity = (city) => {
		setSity(city);
	}

	useEffect(() => {

		axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f03c11c0e90130d2d5d8db02bc4c5eb4`)
			.then(({ data }) => {

				//Установка рассвета и заката, перевод из timestamp в нормальные единицы
				const changeTimeSun = (timestamp) => {
					const date = new Date(timestamp * 1000);
					let minutes = date.getMinutes();
					if (minutes <= 9) {
						minutes = `0${minutes}`;
					}
					const time = `${date.getHours()}:${minutes}`;
					return time;
				}

				//Установка локального времени
				const changeDate = (stamp) => {
					const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
					const time = new Date();
					let minutes = time.getUTCMinutes();
					if (minutes <= 9) {
						minutes = `0${minutes}`;
					}
					const localTime = `${weekDays[time.getUTCDay()]}, ${time.getUTCHours() + stamp / 3600}:${minutes}`;
					return localTime;
				}

				//Перевод градусов в направление ветра
				const changeDirection = (deg) => {
					const directions = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
					const degrees = Math.round(deg * 8 / 360);
					return directions[degrees];
				}

				setDate(changeDate(data.timezone));

				setMain({
					cityTitle: `${data.name}, ${data.sys.country}`,
					temperature: Math.round(data.main.temp - 273.15),
					feels: Math.round(data.main.feels_like - 273.15),
					clouds: data.weather[0].description,
					image: data.weather[0].icon,
				});

				setSecondary([
					{
						title: "Humidity",
						value: data.main.humidity,
						units: "%",
						icon: "025-humidity.png",
					},
					{
						title: "Weend speed",
						value: data.wind.speed,
						units: "m/s",
						icon: "windspeed.png",
					},
					{
						title: "Weend direction",
						value: changeDirection(data.wind.deg),
						units: null,
						icon: "windderection.png",
					},
					{
						title: "Visibility",
						value: data.visibility,
						units: "m",
						icon: "binocular.png",
					},
					{
						title: "Sunrise",
						value: changeTimeSun(data.sys.sunrise),
						units: null,
						icon: "sunrise.png",
					},
					{
						title: "Sunset",
						value: changeTimeSun(data.sys.sunset),
						units: null,
						icon: "sunset.png",
					},
				])
			})
	}, [city]);


	return (
		<div className="content">
			<div className="content__left"><MainWeather main={main} /></div>
			<div className="content__right">
				<Secondary
					date={date}
					secondary={secondary}
					inputCity={inputCity}
					findCity={findCity}
					clearInput={clearInput}
					submitCity={submitCity} />
			</div>
		</div>
	);
}

export default Content;