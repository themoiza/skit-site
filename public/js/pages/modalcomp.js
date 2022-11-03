classes.Modalcomp = class {

	constructor(app){

		this.app = app;

		this.title = 'Modal';
		this.description = 'Modal';

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
					<h1>Modal</h1>
					<p>
						<button onclick="pages.modalcomp.modalOne.open()" class="Btn BtnDark">OPEN MODAL 1</button> 
						<button onclick="pages.modalcomp.modalTwo.open()" class="Btn BtnDark">OPEN MODAL 2</button>
					</p>
					<dialog id="modal1" class="Modal">
						<div class="TopBar">
							<div class="Move">MODAL 1</div>
							<div class="Close"><button data-skit="close"></button></div>
						</div>
						<div class="ModalContent">
							<div class="pd1">
								<div><img src="assets/skit.png" alt="skit" class="w200" /></div>
								<p><button onclick="pages.modalcomp.modalTwo.open()" class="Btn BtnPri">OPEN MODAL 2 <i class="fi-rs-sign-in-alt"></i></button></p>
							</div>
						</div>
					</dialog>
					<dialog id="modal2" class="Modal w700">
						<div class="TopBar">
							<div class="Move">MODAL 2</div>
							<div class="Close"><button data-skit="close"></button></div>
						</div>
						<div class="ModalContent">
							<div class="pd1">
								<p>Exorcizamus te, omnis immundus spiritus, omnis satanica potestas, omnis incursio infernalis adversarii, omnis legio, omnis congregatio et secta diabolica... Ergo, draco maledicte et omnis legio diabolica, adjuramus te ... cessa decipere humanas creaturas, eisque æternæ perditionìs venenum propinare...</p>
								<button onclick="pages.modalcomp.modalOne.open()" class="Btn BtnPri">OPEN MODAL 1 <i class="fi-rs-sign-in-alt"></i></button> 
							</div>
						</div>
					</dialog>
				</div>
			</div>`;
	}

	render(el){

		var page = this.content();

		el.innerHTML = page;

		this.modalOne = new Modal('modal1');
		this.modalTwo = new Modal('modal2');
	}
}
