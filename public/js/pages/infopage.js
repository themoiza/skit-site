classes.InfoPage = class {

	constructor(app){

		this.app = app;

		this.title = 'Info';
		this.description = 'Info';

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
					<h1>Info</h1>
					<p>Javascript is not required for this component.</p>
					<div class="Grid GridMobile">
						<div class="ColGrid30 pdt2 pdb2">
							<h2>Light and dark</h2>
							<p>Affected by light and dark mode</p>
							<div class="Info InfoLight"><b>Info light</b><br />class="Info InfoLight"</div>
							<div class="Info InfoDark"><b>Info dark</b><br />class="Info InfoDark"</div>
						</div>
						<div class="ColGrid30 pdt2 pdb2">
							<h2>Colors</h2>
							<p>Affected by light and dark mode</p>
							<div class="Info InfoWarning"><b>Info warning</b><br />class="Info InfoWarning"</div>
							<div class="Info InfoPri"><b>Info pri</b><br />class="Info InfoPri"</div>
							<div class="Info InfoSec"><b>Info sec</b><br />class="Info InfoSec"</div>
							<div class="Info InfoDanger"><b>Info danger</b><br />class="Info InfoDanger"</div>
						</div>
					</div>
					<hr>
					<div class="Grid GridMobile">
						<div class="ColGrid30 pdt2 pdb2">
							<h2>Stroke</h2>
							<p>Not affected by light and dark mode</p>
							<div class="Info InfoWarningStroke"><b>Info warning stroke</b><br/>class="Info InfoWarningStroke"</div>
							<div class="Info InfoPriStroke"><b>Info pri stroke</b><br/>class="Info InfoPriStroke"</div>
							<div class="Info InfoSecStroke"><b>Info sec stroke</b><br/>class="Info InfoSecStroke"</div>
							<div class="Info InfoDangerStroke"><b>Info danger stroke</b><br/>class="Info InfoDangerStroke"</div>
						</div>
						<div class="ColGrid30 pdt2 pdb2">
							<h2>Fill</h2>
							<p>Not affected by light and dark mode</p>
							<div class="Info InfoWarningFill"><b>Info warning fill</b><br/>class="Info InfoWarningFill"</div>
							<div class="Info InfoPriFill"><b>Info pri fill</b><br/>class="Info InfoPriFill"</div>
							<div class="Info InfoSecFill"><b>Info sec fill</b><br/>class="Info InfoSecFill"</div>
							<div class="Info InfoDangerFill"><b>Info danger fill</b><br/>class="Info InfoDangerFill"</div>
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
