function Card({ obj }) {

	const { title, value, units, icon } = obj;

	return (
		<div className="card">
			<img height={90} width={90} src={`img/${icon}`} alt="" />
			<div className="info">
				<div>{title}</div>
				<div className="value">{value}</div>
				<div>{units}</div>
			</div>
		</div>
	);
};

export default Card;