function MainWeather({ main }) {

	const { cityTitle, temperature, feels, clouds, image } = main;

	return (
		<div className="main">
			<h2>{cityTitle}</h2>
			<div className='overcast'>{clouds}</div>
			<img width={250} height={250} src={`img/${image}.svg`} alt="forecast" />
			<div className='temp'>{temperature}&deg;С</div>
			<div className='feels'>Feels like {feels}&deg;С</div>
		</div>
	);
}

export default MainWeather;