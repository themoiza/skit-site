classes.ConfirmComp = class {

	constructor(app){

		this.app = app;

		this.title = 'Confirm';
		this.description = 'Componente';

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
					<h1>Confirm</h1>
					<p class="max100ch">Componente que pede uma confirmação ao usuário.</p>
					<div class="Flex">
						<div class="ColFlex280px pdt2 pdb2">
							<h2>Live Preview</h2>
							<div class="Card CardBorder w100p mgb2" onchange="pages.confirmcomp.previewCode()" oninput="pages.confirmcomp.previewCode()">
								<div class="pd2">
									<div class="mgb2">
										<div class="field w100p">
											<label class="label">TITLE</label>
											<input id="idLockScreenTitle" type="text" placeholder="title" />
										</div>
									</div>
									<div class="mgb2">
										<div class="field w100p">
											<label class="label">MESSAGE</label>
											<input id="idLockScreenMessage" type="text" placeholder="message" />
										</div>
									</div>
									<div class="mgb2">
										<div class="field w100p">
											<label class="label">OK TEXT</label>
											<input id="idLockScreenOkText" type="text" placeholder="message" />
										</div>
									</div>
								</div>
<pre><code id="generateConfirm" class="language-js">Confirm({
    'title': 'CONFIRM?',
    'message': 'You can do it?',
    'ok': 'YES',
    'no': 'NO',
    'okClass': 'Btn BtnDanger',
    'noClass': 'Btn BtnLight',
    'okFn': () => {},
    'noFn': () => {},
    'bdFn': () => {}
});</code></pre>
								<div class="pd2">
									<p><button type="button" class="Btn BtnPri w100p" onclick="pages.confirmcomp.testComp()">TEST <i class="fi-rs-rocket-lunch"></i></button></p>
								</div>
							</div>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
							<h2>Confirm(<i>object</i>)</h2>
							<table>
								<thead>
									<tr>
										<th class="TxLeft"><i class="fi-rs-list"></i> PARAM | TYPE</th>
										<th class="TxLeft"><i class="fi-rs-shield-exclamation"></i> REQUIRED</th>
										<th class="TxLeft"><i class="fi-rs-cursor-text"></i> VALUE</th>
										<th class="TxLeft"><i class="fi-rs-cursor-text-alt"></i> DEFAULT</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td rowspan="9">$1, json object</td>
										<td rowspan="9">required</td>
										<td>title: string, required</td>
										<td>CONFIRM?</td>
									</tr>
									<tr>
										<td>message: string, not required</td>
										<td>''</td>
									</tr>
									<tr>
										<td>ok: string, required</td>
										<td>false</td>
									</tr>
									<tr>
										<td>no: string|bool, required</td>
										<td>false</td>
									</tr>
									<tr>
										<td>okClass: string, not required</td>
										<td>false</td>
									</tr>
									<tr>
										<td>noClass: string, not required</td>
										<td>false</td>
									</tr>
									<tr>
										<td>okFn: function, required</td>
										<td></td>
									</tr>
									<tr>
										<td>noFn: function, not required</td>
										<td></td>
									</tr>
									<tr>
										<td>bdFn: function, not required</td>
										<td></td>
									</tr>
								</tbody>
							</table>
							<p><i class="fi-rs-undo-alt"></i> Return: void</p>
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

		var title = idLockScreenTitle.value;
		var message = idLockScreenMessage.value;

		if(title == ''){
			title = false;
		}
		if(message == ''){
			message = false;
		}

		var params = {
			'title': title ?? 'Do that?',
			'message': message ?? 'Do you really want to do this?',
			'ok': '<i class="fi-rs-check"></i> DO THAT',
			'no': '<i class="fi-rs-ban"></i> DO NOTHING',
			'okClass': 'Btn BtnDanger',
			'noClass': 'Btn BtnLight'
		};

		generateConfirm.textContent = `Confirm({
	'title': '`+params.title+`',
	'message': '`+params.message+`',
	'ok': '<i class="fi-rs-check"></i> DO THAT',
	'no': '<i class="fi-rs-ban"></i> DO NOTHING',
	'okClass': 'Btn BtnDanger',
	'noClass': 'Btn BtnLight'
});`;

		hljs.highlightAll();
		
	}

	testComp(){

		var title = idLockScreenTitle.value;
		var message = idLockScreenMessage.value;

		if(title == ''){
			title = null;
		}
		if(message == ''){
			message = null;
		}

		var params = {
			'title': title ?? 'Do that?',
			'message': message ?? 'Do you really want to do this?',
			'ok': '<i class="fi-rs-check"></i> DO THAT',
			'no': false,
			'okClass': 'Btn BtnPri',
			'noClass': 'Btn BtnLight'
		};

		Confirm(params);
	}
}
