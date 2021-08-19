import Card from './Card';

function Secondary({ inputCity, findCity, clearInput, submitCity, secondary, date }) {

	const onChangeCity = (e) => {
		inputCity(e.target.value);
	}

	const onSumbit = () => {
		submitCity(findCity);
	}

	return (
		<div className="secondary">
			<div className="secondary__title">
				<div className="secondary__date">{date}</div>
				<div className="search-block">
					<input onChange={onChangeCity} onClick={clearInput} value={findCity} type="text" placeholder='Поиск...' />
					<button onClick={onSumbit}>Ok</button>
				</div>
			</div>
			<div className="cards">
				{secondary && secondary.map((obj, index) => <Card obj={obj} key={`${obj.title}_${index}`} />)}
			</div>
		</div>
	);
}

export default Secondary;