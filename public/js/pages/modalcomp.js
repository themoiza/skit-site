classes.Modalcomp = class {

	constructor(app){

		this.app = app;

		this.title = 'Modal';
		this.description = 'Modal';

		this.modalOne;
		this.modalTwo;
	}

	content(){

		return `
			<div class="flex">
				<div class="col-flex-220px">
					`+window.menu+`
				</div>
				<div class="col-flex-calc-220 pd2" id="idIcons">
					<h1>Modal</h1>
					<p>
						<button onclick="pages.modalcomp.modalOne.open()" class="btn btn-dark">OPEN MODAL 1</button> 
						<button onclick="pages.modalcomp.modalTwo.open()" class="btn btn-dark">OPEN MODAL 2</button>
					</p>
					<dialog id="modal1" class="Modal">
						<div class="TopBar">
							<div class="Move">MODAL 1</div>
							<div class="Close"><button onclick="pages.modalcomp.modalOne.close()">⨉</button></div>
						</div>
						<div class="ModalContent">
							<div class="pd1">
								<img src="assets/skit.png" alt="skit" class="w100p" />
								<button onclick="pages.modalcomp.modalTwo.open()" class="btn btn-pri">OPEN MODAL 2 <i class="fi-rs-sign-in-alt"></i></button> 
							</div>
						</div>
					</dialog>
					<dialog id="modal2" class="Modal w700">
						<div class="TopBar">
							<div class="Move">MODAL 2</div>
							<div class="Close"><button onclick="pages.modalcomp.modalTwo.close()">⨉</button></div>
						</div>
						<div class="ModalContent">
							<div class="pd1">
								<p>Exorcizamus te, omnis immundus spiritus, omnis satanica potestas, omnis incursio infernalis adversarii, omnis legio, omnis congregatio et secta diabolica... Ergo, draco maledicte et omnis legio diabolica, adjuramus te ... cessa decipere humanas creaturas, eisque æternæ perditionìs venenum propinare...</p>
								<button onclick="pages.modalcomp.modalOne.open()" class="btn btn-pri">OPEN MODAL 1 <i class="fi-rs-sign-in-alt"></i></button> 
							</div>
						</div>
					</dialog>
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
