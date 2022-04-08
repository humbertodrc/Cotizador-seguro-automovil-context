export function obtenerDiferenciaYear(year) {
	return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
	let incremento;

	switch (marca) {
		case "1":
			incremento = 1.3;
			break;

		case "2":
			incremento = 1.15;
			break;

		default:
			incremento = 1.05;
			break;
	}

	return incremento;
}

export function calculaPlan(plan) {
	return (plan === "1") ? 1.20 : 1.50;
}

export function formatearDinero(cantidad) {
  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  })
}
