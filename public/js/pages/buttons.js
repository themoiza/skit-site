classes.Buttons = class {

	constructor(app){

		this.app = app;

		this.title = 'Buttons';
		this.description = 'Buttons';

		this.app.updateTitle(this.title);
		this.app.updateDescription(this.description);
	}

	content(){

		return `
			<div class="Flex">
				<div class="ColFlex220px">
					`+window.menu+`
				</div>
				<div class="ColFlexCalc220 pd2">
					<h1>Buttons</h1>
					<div class="Flex">
						<div class="ColFlex4">
							<div>
								<button class="mgb1">NO CSS</button> 
								<button class="mgb1" disabled>NO CSS DISABLED</button>
							</div>
							<div>
								<button class="Btn mgb1">DEFAULT</button> 
								<button class="Btn mgb1" disabled="disabled">DEFAULT DISABLED</button>
							</div>
							<div>
								<button class="Btn BtnPri mgb1">PRIMARY</button> 
								<button class="Btn BtnPri mgb1" disabled="disabled">PRIMARY DISABLED</button>
							</div>
							<div>
								<button class="Btn BtnSec mgb1">SECONDARY</button> 
								<button class="Btn BtnSec mgb1" disabled="disabled">SECONDARY DISABLED</button>
							</div>
							<div>
								<button class="Btn BtnDanger mgb1">DANGER</button> 
								<button class="Btn BtnDanger mgb1" disabled="disabled">DANGER DISABLED</button>
							</div>
							<div>
								<button class="Btn BtnDark mgb1">DARK</button> 
								<button class="Btn BtnDark mgb1" disabled="disabled">DARK DISABLED</button>
							</div>
							<div>
								<button class="Btn BtnLight mgb1">LIGHT</button> 
								<button class="Btn BtnLight mgb1" disabled="disabled">LIGHT DISABLED</button>
							</div>
							<div>
								<button class="Btn BtnTrans mgb1">TRANSPARENT</button>
								<button class="Btn BtnTrans mgb1" disabled="disabled">TRANSPARENT DISABLED</button> 
							</div>
						</div>
						<div class="ColFlex8">
							<pre><code>xxx</code></pre>
						</div>
					</div>
				</div>
			</div>`;
	}

	render(el){

		var page = this.content();

		el.innerHTML = page;
	}
}