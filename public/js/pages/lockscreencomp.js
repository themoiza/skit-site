classes.LockScreenComp = class {

	constructor(app){

		this.app = app;

		this.title = 'Lock Screen';
		this.description = 'Lock Screen';
	}

	content(){

		return `
			<div class="Flex">
				<div class="ColFlex220px">
					`+window.menu+`
				</div>
				<div class="ColFlexCalc220 pd2" id="idIcons">
					<h1>Lock Screen</h1>
					<button type="button" class="Btn BtnDanger" onclick="LockScreen.lock({'timeout': 15000})"><i class="fi-rs-lock"></i> LOCK</button>
				</div>
			</div>`;
	}

	render(el){

		document.title = this.title;
		document.description = this.description;

		var page = this.content();

		el.innerHTML = page;

		this.modalOne = new Modal('modal1');
		this.modalTwo = new Modal('modal2');
	}
}
