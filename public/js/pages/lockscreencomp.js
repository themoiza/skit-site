classes.LockScreenComp = class {

	constructor(app){

		this.app = app;

		this.title = 'Lock Screen';
		this.description = 'Componente para travar a tela, impedindo qualquer comando do usuário';

		this.app.updateTitle(this.title);
		this.app.updateDescription(this.description);

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
					<h1>Lock Screen</h1>
					<p>Componente para travar a tela, impedindo qualquer comando do usuário. O componente trava a tela até o fim do tempo de timeout ou quando o software chamar a função: <pre><code class="language-js">LockScreen.unlock()</code></pre></p>
					<div class="Flex">
						<div class="ColFlex280px pdt2 pdb2">
							<div class="Card CardBorder w100p mgb2" onchange="pages.lockscreencomp.previewCode()" oninput="pages.lockscreencomp.previewCode()">
								<div class="pd2">
									<div class="mgb2">
										<div class="field w100p">
											<label class="label">TITLE</label>
											<input id="idLockScreenTitle" type="text" placeholder="title" />
										</div>
									</div>
									<div class="mgb2">
										<div class="field w100p">
											<label class="label">TIME OUT IN MS</label>
											<input id="idLockScreenTimeOut" type="number" min="-1" step="1" value="3000" max="9999999999" placeholder="ms" />
										</div>
									</div>
									<div class="mgb2">
										<div class="field w100p">
											<label class="label">BODY BLUR</label>
										</div>
										<div class="field w100p">
											<input type="radio" class="Radio" id="idtimeoutblur0" name="timeoutblur" /><label for="idtimeoutblur0">Blur true</label>
										</div>
										<div class="field w100p">
											<input type="radio" checked class="Radio" id="idtimeoutblur1" name="timeoutblur" /><label for="idtimeoutblur1">Blur false</label>
										</div>
									</div>
									<div class="mgb2">
										<div class="field w100p">
											<label class="label">SPINNER</label>
										</div>
										<div class="field w100p">
											<input type="radio" class="Radio" id="idspinner0" name="spinner" /><label for="idspinner0">Spinner true</label>
										</div>
										<div class="field w100p">
											<input type="radio" checked class="Radio" id="idspinner1" name="spinner" /><label for="idspinner1">Spinner false</label>
										</div>
									</div>
									<button type="button" class="Btn BtnDanger w100p" onclick="pages.lockscreencomp.lockScreen()"><i class="fi-rs-lock"></i> LOCK</button>
								</div>
							</div>
<pre><code id="generateLockScreen" class="language-js">LockScreen.lock({
	'timeout': 3000,
	'title': false,
	'blur': true,
	'spinner': true
});</code></pre>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
							<table>
								<thead>
									<tr>
										<th class="TxLeft"><i class="fi-rs-list"></i> PARAM</th>
										<th class="TxLeft"><i class="fi-rs-cursor-text"></i> TYPE</th>
										<th class="TxLeft"><i class="fi-rs-cursor-text-alt"></i> DEFAULT</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>timeout</td>
										<td>integer, not required</td>
										<td>60000, -1 to infinite</td>
									</tr>
									<tr>
										<td>title</td>
										<td>string, not required</td>
										<td>'Wait a moment'</td>
									</tr>
									<tr>
										<td>blur</td>
										<td>bool, not required</td>
										<td>false</td>
									</tr>
									<tr>
										<td>spinner</td>
										<td>bool, not required</td>
										<td>false</td>
									</tr>
								</tbody>
								<thead>
									<tr>
										<th class="TxLeft"><i class="fi-rs-undo-alt"></i> RETURN</th>
										<th class="TxLeft"></th>
										<th class="TxLeft"></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>void</td>
										<td></td>
										<td></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>`;
	}

	render(el){

		var page = this.content();

		el.innerHTML = page;

		hljs.highlightAll();
	}

	previewCode(){

		var params = {
			'timeout': idLockScreenTimeOut.value ?? false,
			'title': idLockScreenTitle.value ?? false,
			'blur': idtimeoutblur0.checked ?? false,
			'spinner': idspinner0.checked ?? false
		};

		generateLockScreen.textContent = `LockScreen.lock({
	'timeout': `+String(params.timeout)+`,
	'title': '`+params.title+`',
	'blur': `+String(params.blur)+`,
	'spinner': `+String(params.spinner)+`
});`;

		hljs.highlightAll();
		
	}

	lockScreen(){

		var params = {
			'timeout': idLockScreenTimeOut.value ?? false,
			'title': idLockScreenTitle.value ?? false,
			'blur': idtimeoutblur0.checked ?? false,
			'spinner': idspinner0.checked ?? false
		};

		LockScreen.lock(params);
	}
}
