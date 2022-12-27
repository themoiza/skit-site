classes.TabsPage = class {

	constructor(app){

		this.app = app;

		this.title = 'Tabs';
		this.description = 'Tabs';

		this.modalOne;
		this.modalTwo;

		this.app.updateTitle(this.title);
		this.app.updateDescription(this.description);
	}

	content(){

		return `
			<div class="Flex">
				<div class="ColFlex220px">
					`+window.menu+`
				</div>
				<div class="ColFlexCalc220 pd2" id="idIcons">
					<h1>Tabs</h1>
					<p>Tabs component.</p>
					<div class="Tabs">
						<div id="tabs"></div>
						<div class="TabsArea" id="area1">
							<div data-tab="tab1">
								<div class="pd1">
									<table class="Table">
										<thead>
											<tr>
												<th class="TxLeft">COL 1 <i class="fi fi-rr-arrows-alt-v"></i></th>
												<th class="TxLeft">COL 2 <i class="fi fi-rr-arrows-alt-v"></i></th>
												<th class="TxLeft">COL 3 <i class="fi fi-rr-arrows-alt-v"></i></th>
												<th class="TxLeft">COL 4 <i class="fi fi-rr-arrows-alt-v"></i></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Hydro­gen</td>
												<td>He­lium</td>
												<td>Lith­ium</td>
												<td>Beryl­lium</td>
											</tr>
											<tr>
												<td>Boron</td>
												<td>Cabon</td>
												<td>Nitrogen</td>
												<td>Oxygen</td>
											</tr>
											<tr>
												<td>Fluorine</td>
												<td>Neon</td>
												<td>Sodium</td>
												<td>Magnesium</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div data-tab="tab2">
								<img class="Img-block w100p" alt="carina" src="assets/carina.jpg" />
							</div>
							<div data-tab="tab3">
								<div class="pd3">
									<p>"Exorcizamus te, omnis immundus spiritus, omnis satanica potestas, omnis incursio infernalis adversarii, omnis legio, omnis congregatio et secta diabolica... Ergo, draco maledicte et omnis legio diabolica, adjuramus te ... cessa decipere humanas creaturas, eisque æternæ perditionìs venenum propinare... Vade, satana, inventor et magister omnis fallaciæ, hostis humanæ salutis... Humiliare sub potenti manu Dei; contremisce et effuge, invocato a nobis sancto et terribili nomine... quem inferi tremunt... Ab insidiis diaboli, libera nos, Domine. Ut Ecclesiam tuam secura tibi facias libertate servire, te rogamus, audi nos."</p>
								</div>
							</div>
							<div data-tab="tab4">
								<div id="tabs2"></div>
								<div class="TabsArea" id="area11">
									<div data-tab="tab11">
										<div class="pd3">
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt exercitationem repellendus deserunt nemo officia at, alias temporibus autem laborum iure? Libero repellat blanditiis ipsam voluptatibus minima aut pariatur, perspiciatis obcaecati.</p>
										</div>
									</div>
									<div data-tab="tab12">
										<div class="pd3">
											<p>"Exorcizamus te, omnis immundus spiritus, omnis satanica potestas, omnis incursio infernalis adversarii, omnis legio, omnis congregatio et secta diabolica... Ergo, draco maledicte et omnis legio diabolica, adjuramus te ... cessa decipere humanas creaturas, eisque æternæ perditionìs venenum propinare... Vade, satana, inventor et magister omnis fallaciæ, hostis humanæ salutis... Humiliare sub potenti manu Dei; contremisce et effuge, invocato a nobis sancto et terribili nomine... quem inferi tremunt... Ab insidiis diaboli, libera nos, Domine. Ut Ecclesiam tuam secura tibi facias libertate servire, te rogamus, audi nos."</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>`;
	}

	render(el){

		var page = this.content();

		el.innerHTML = page;

		hljs.highlightAll();

		var tabsys = new Tabs('tabs', 'area1', [
			{
				'tab': '<i class="fi fi-rr-grid"></i> TABLE', 
				'for': 'tab1'
			},
			{
				'tab': '<i class="fi fi-rr-picture"></i> IMAGE', 
				'for': 'tab2'
			},
			{
				'tab': '<i class="fi fi-rr-text"></i> TEXT', 
				'for': 'tab3'
			},
			{
				'tab': '<i class="fi fi-rr-bars-progress"></i> SECOND LEVEL', 
				'for': 'tab4'
			}
		]);

		var tabsys2 = new Tabs('tabs2', 'area11', [
			{
				'tab': '<i class="fi fi-rr-grid"></i> L1', 
				'for': 'tab11'
			},
			{
				'tab': '<i class="fi fi-rr-picture"></i> L2', 
				'for': 'tab12'
			}
		]);
	}
}
