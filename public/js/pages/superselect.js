classes.Superselect = class {

	constructor(app){

		this.app = app;

		this.title = 'Donate';
		this.description = 'Donate';
	}

	content(){

		return `
		<div class="Flex">
			<div class="ColFlex220px">
				`+window.menu+`
			</div>
			<div class="ColFlexCalc220 pd2" id="idIcons">
				<h1>Super Select</h1>
				<div>
					<div class="field w300">
						<label class="label">SELECT</label>
						<select name="">
							<option value="">--SELECIONE--</option>
							<option value="2">2</option>
						</select>
					</div>
					<div class="field w300">
						<label class="label">SUPER SELECT</label>
						<div class="SuperSelect" tabindex="0" id="idSuperSelect">
							<div class="SuperSelectLabel" id="abc1">--SELECIONE--</div>
							<div class="SuperSelectComp">
								<div class="SuperSelectSearch">
									<input type="search" />
								</div>
								<div class="SuperSelectList">
									<div><label><input type="radio" name="ss" /> Acre</label></div>
									<div><label><input type="radio" name="ss" /> Alagoas</label></div>
									<div><label><input type="radio" name="ss" /> Amapá</label></div>
									<div><label><input type="radio" name="ss" /> Amazonas</label></div>
									<div><label><input type="radio" name="ss" /> Bahia</label></div>
									<div><label><input type="radio" name="ss" /> Ceara</label></div>
									<div><label><input type="radio" name="ss" /> Distrito Federal</label></div>
									<div><label><input type="radio" name="ss" /> Espírito Santo</label></div>
									<div><label><input type="radio" name="ss" /> Goiás</label></div>
									<div><label><input type="radio" name="ss" /> Maranhão</label></div>
									<div><label><input type="radio" name="ss" /> Mato Grosso</label></div>
									<div><label><input type="radio" name="ss" /> Mato Grosso do Sul</label></div>
									<div><label><input type="radio" name="ss" /> Minas Gerais</label></div>
									<div><label><input type="radio" name="ss" /> Pará</label></div>
									<div><label><input type="radio" name="ss" /> Paraíba</label></div>
									<div><label><input type="radio" name="ss" /> Paraná</label></div>
									<div><label><input type="radio" name="ss" /> Pernambuco</label></div>
									<div><label><input type="radio" name="ss" /> Piauí</label></div>
									<div><label><input type="radio" name="ss" /> Rio de Janeiro</label></div>
									<div><label><input type="radio" name="ss" /> Rio Grande do Norte</label></div>
									<div><label><input type="radio" name="ss" /> Rio Grande do Sul</label></div>
									<div><label><input type="radio" name="ss" /> Rondônia</label></div>
									<div><label><input type="radio" name="ss" /> Roraima</label></div>
									<div><label><input type="radio" name="ss" /> Santa Catarina</label></div>
									<div><label><input type="radio" name="ss" /> São Paulo</label></div>
									<div><label><input type="radio" name="ss" /> Sergipe</label></div>
									<div><label><input type="radio" name="ss" /> Tocantins</label></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`;
	}

	render(el){

		document.title = this.title;
		document.description = this.description;

		var page = this.content();

		el.innerHTML = page;

		new Superselect('idSuperSelect');
	}
}
