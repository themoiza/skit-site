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
					<div>
						<div class="Card w300">
							<div class="pd2">
								<div class="mgb2">
									<div class="field w100p">
										<label>TITLE</label>
										<input id="idLockScreenTitle" type="text" placeholder="title" />
									</div>
								</div>
								<div class="mgb2">
									<div class="field w100p">
										<label>TIME OUT IN MS</label>
										<input id="idLockScreenTimeOut" type="number" min="100" step="1" value="10000" max="9999999999" placeholder="ms" />
									</div>
								</div>
								<div class="mgb2">
									<div class="field w100p">
										<label>BODY BLUR</label>
									</div>
									<div class="field">
										<input type="radio" class="Radio" id="idtimeoutblur0" name="timeoutblur" /><label for="idtimeoutblur0">Blur true</label>
									</div>
									<div class="field">
										<input type="radio" checked class="Radio" id="idtimeoutblur1" name="timeoutblur" /><label for="idtimeoutblur1">Blur false</label>
									</div>
								</div>
								<button type="button" class="Btn BtnDanger w100p" onclick="pages.lockscreencomp.lockScreen()"><i class="fi-rs-lock"></i> LOCK</button>
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
	}

	lockScreen(){

		LockScreen.lock({
			'timeout': idLockScreenTimeOut.value ?? false,
			'title': idLockScreenTitle.value ?? false,
			'blur': idtimeoutblur0.checked ?? false
		});
	}
}
