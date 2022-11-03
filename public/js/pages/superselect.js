classes.Superselect = class {

	constructor(app){

		this.app = app;

		this.title = 'Super Select';
		this.description = 'Super Select';

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
				<h1>Super Select</h1>
				<div class="Flex">
					<div class="ColFlex3">
						<div class="field w300">
							<label class="label">NORMAL SELECT</label>
							<select name="">
								<option value="">--SELECIONE--</option>
								<option value="2">Acre</option>
								<option value="2">Alagoas</option>
								<option value="2">Amapá</option>
								<option value="2">Amazonas</option>
								<option value="2">Bahia</option>
								<option value="2">Ceara</option>
								<option value="2">Distrito Federal</option>
								<option value="2">Espírito Santo</option>
							</select>
						</div>
					</div>
					<div class="ColFlex3">
						<div class="field w300">
							<label class="label">SUPER SELECT</label>
							<div class="SuperSelect" id="idSuperSelect"></div>
						</div>
					</div>
					<div class="ColFlex3">
						<div class="field w300">
							<label class="label">SUPER SELECT</label>
							<div class="SuperSelect" id="idSuperSelect2"></div>
						</div>
						<div class="mgt3">
							<button type="button" class="Btn" onclick="s2.setValue(2)">Set Value= 2</button>
							<button type="button" class="Btn" onclick="s2.setValue(20)">Set Value= 20</button>
						</div>
						<div class="mgt3">
							<button type="button" class="Btn" onclick="s2.addValue(30, 'BRAZIL');s2.setValue(30)">Add NEW</button>
							<button type="button" class="Btn" onclick="s2.focus()">Open</button>
						</div>
					</div>
					<div class="ColFlex3">
						<div class="field w300">
							<label class="label">SUPER SELECT</label>
							<div class="SuperSelect" id="idSuperSelect3"></div>
						</div>
					</div>
				</div>
			</div>
		</div>`;
	}

	render(el){

		var page = this.content();

		el.innerHTML = page;

		window.s1 = new Superselect('idSuperSelect', {
			name: 'state0',
			none: 'NENHUM',
			search: false,
			list: [
				{'value': '', 'label': 'NENHUM'},
				{'value': 0, 'label': 'EXTERIOR'},
				{'value': 1, 'label': 'Acre'},
				{'value': 2, 'label': 'Alagoas'},
				{'value': 3, 'label': 'Amapá'},
				{'value': 4, 'label': 'Amazonas'},
				{'value': 5, 'label': 'Bahia', 'disabled': 'disabled'},
				{'value': 6, 'label': 'Ceara'},
				{'value': 7, 'label': 'Distrito Federal'},
				{'value': 8, 'label': 'Espírito Santo'},
				{'value': 9, 'label': 'Goiás'},
				{'value': 10, 'label': 'Maranhão'},
				{'value': 11, 'label': 'Mato Grosso'},
				{'value': 12, 'label': 'Mato Grosso do Sul'},
				{'value': 13, 'label': 'Minas Gerais'},
				{'value': 14, 'label': 'Pará'},
				{'value': 15, 'label': 'Paraíba'},
				{'value': 16, 'label': 'Paraná'},
				{'value': 17, 'label': 'Pernambuco'},
				{'value': 18, 'label': 'Piauí'},
				{'value': 19, 'label': 'Rio de Janeiro'},
				{'value': 20, 'label': 'Rio Grande do Norte'},
				{'value': 21, 'label': 'Rio Grande do Sul'},
				{'value': 22, 'label': 'Rondônia'},
				{'value': 23, 'label': 'Roraima'},
				{'value': 24, 'label': 'Santa Catarina'},
				{'value': 25, 'label': 'São Paulo'},
				{'value': 26, 'label': 'Sergipe'},
				{'value': 27, 'label': 'Tocantins'}
			]
		});

		window.s2 = new Superselect('idSuperSelect2', {
			name: 'state1',
			none: 'NENHUM',
			list: [
				{'value': '', 'label': 'NENHUM'},
				{'value': 0, 'label': 'EXTERIOR'},
				{'group': 'A', 'list':[
					{'value': 1, 'label': 'Acre'},
					{'value': 2, 'label': 'Alagoas'},
					{'value': 3, 'label': 'Amapá'},
					{'value': 4, 'label': 'Amazonas'},
				]},
				{'group': 'B', 'list':[
					{'value': 5, 'label': 'Bahia', 'disabled': 'disabled'},
				]},
				{'group': 'C', 'list':[
					{'value': 6, 'label': 'Ceara'},
				]},
				{'group': 'D', 'list':[
					{'value': 7, 'label': 'Distrito Federal'},
				]},
				{'group': 'E', 'list':[
					{'value': 8, 'label': 'Espírito Santo'},
				]},
				{'group': 'G', 'list':[
					{'value': 9, 'label': 'Goiás'},
				]},
				{'group': 'M', 'list':[
					{'value': 10, 'label': 'Maranhão'},
					{'value': 11, 'label': 'Mato Grosso'},
					{'value': 12, 'label': 'Mato Grosso do Sul'},
					{'value': 13, 'label': 'Minas Gerais'},
				]},
				{'group': 'P', 'list':[
					{'value': 14, 'label': 'Pará'},
					{'value': 15, 'label': 'Paraíba'},
					{'value': 16, 'label': 'Paraná'},
					{'value': 17, 'label': 'Pernambuco'},
					{'value': 18, 'label': 'Piauí'},
				]},
				{'group': 'R', 'list':[
					{'value': 19, 'label': 'Rio de Janeiro'},
					{'value': 20, 'label': 'Rio Grande do Norte'},
					{'value': 21, 'label': 'Rio Grande do Sul'},
					{'value': 22, 'label': 'Rondônia'},
					{'value': 23, 'label': 'Roraima'},
				]},
				{'group': 'S', 'list':[
					{'value': 24, 'label': 'Santa Catarina'},
					{'value': 25, 'label': 'São Paulo'},
					{'value': 26, 'label': 'Sergipe'},
				]},
				{'group': 'T', 'list':[
					{'value': 27, 'label': 'Tocantins'}
				]}
			]
		});

		window.s3 = new Superselect('idSuperSelect3', {
			name: 'state2',
			none: 'NENHUM',
			list: [
				{'value': '', 'label': 'NENHUM'},
				{'value': 1, 'label': 'xyz'}
			]
		});
	}
}
