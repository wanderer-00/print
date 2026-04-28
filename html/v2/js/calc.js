let table = document.getElementById('table');



// thead
// создание
let thead = document.createElement('thead');

// наполнение
thead.innerHTML = `
	<tr>
		<th>Name</th>
		<th>Size</th>
		<th>Count</th>
		<th>Pri&#36;e</th>
	</tr>
`;

// вставка
table.append(thead);




// tbody
// создание
let tbody = document.createElement('tbody');

// данные для заполнения
const data = [
	{
		"clotch": "Футболки",
		"size": "S",
		"count": 10,
		"price": 500
	},
	{
		"clotch": "Худи",
		"size": "S",
		"count": 10,
		"price": 500
	},
	{
		"clotch": "Кепки",
		"size": "S",
		"count": 10,
		"price": 500
	},
	{
		"clotch": "Зонты",
		"size": "S",
		"count": 10,
		"price": 500
	},
	{
		"clotch": "Шоппер",
		"size": "S",
		"count": 10,
		"price": 500
	}
];

// наполнение
for( i=0; i<5; i++ ){
	tbody.innerHTML += `
		<tr>
			<td>${data[i].clotch}</td>
			<td>${data[i].size}</td>
			<td>${data[i].count}</td>
			<td>${data[i].price} &#8381;</td>
		</tr>
	`
};

// вставка
table.append(tbody);



// tfoot
// создание
let tfoot = document.createElement('tfoot');

// наполнение
tfoot.innerHTML = `
	<tr>
		<td>Итог</td>
		<td colspan="3">200 000 &#8381;</td>
	</tr>
`;

// вставка
table.append(tfoot);