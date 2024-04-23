console.log("teste de conexão")

function addCard() {
    const main = document.querySelector('.card-position')
    main.innerHTML = main.innerHTML + `
    <div class="card-ticker">
				<header>
					<h2><span>NASDAQ:</span> AAPL</h2>
					<h1>Apple Inc</h1>
				</header>
				<main>
					<p>R$ 250,80</p>
					<span>▲ 0,35%</span>
					<span>R$ 0,60</span>
				</main>
				<footer>
					<div>
						<p>40</p>
						<span>Ações</span>
					</div>
					<div>
						<p>R$ 34853,45</p>
						<span>Posição</span>
					</div>
				</footer>
			</div>
            `
}

//dados do ticker
 const teste = {
    nasdaq: "teste",
    nome: "teste1",
    valor: 100.50,
    porcentagem: 5.6,
    valorextra: 1.00,
    acoes: 55,
    posicao: 99999.99
 }