classes.WarningComp = class {

	constructor(app){

		this.app = app;
		this.title = 'Warning';
		this.description = 'Warning';

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
					<h1>Warning</h1>
					<div class="Flex">
						<div class="ColFlex280px pdt2 pdb2">
							<h2>Live Preview</h2>
							<div class="Card CardBorder w100p mgb2" onchange="pages.warningcomp.previewCode()" oninput="pages.warningcomp.previewCode()">
								<div class="pd2">
									<div class="mgb2">
										<div class="field w100p">
											<label class="label">TITLE</label>
											<input id="idWarningTitle" type="text" placeholder="title" />
										</div>
									</div>
									<div class="mgb2">
										<div class="field w100p">
											<label class="label">MESSAGE</label>
											<input id="idWarningMessage" type="text" placeholder="message" />
										</div>
									</div>
								</div>
<pre><code id="generateConfirm" class="language-js">Warning({
	'color': 'danger',
	'title': 'title',
	'message': 'Danger',
	'timeout': 10000,
	'id': 'danger'
});</code></pre>
								<div class="pd2">
									<p><button type="button" class="Btn BtnPri w100p" onclick="pages.warningcomp.testComp()">TEST <i class="fi fi-rr-rocket-lunch"></i></button></p>
								</div>
							</div>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
							<h2>Warning(<i>object</i>)</h2>
							<table class="Table">
								<thead>
									<tr>
										<th class="TxLeft"><i class="fi fi-rr-list"></i> PARAM | TYPE</th>
										<th class="TxLeft"><i class="fi fi-rr-shield-exclamation"></i> REQUIRED</th>
										<th class="TxLeft"><i class="fi fi-rr-cursor-text"></i> VALUE</th>
										<th class="TxLeft"><i class="fi fi-rr-cursor-text-alt"></i> DEFAULT</th>
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
										<td>message: string, required</td>
										<td>''</td>
									</tr>
								</tbody>
							</table>
							<p><i class="fi fi-rr-undo-alt"></i> Return: void</p>
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

		var title = idWarningTitle.value;
		var message = idWarningMessage.value;

		if(title == ''){
			title = false;
		}
		if(message == ''){
			message = false;
		}

		var params = {
			'title': title ?? 'Do that?',
			'message': message ?? 'Do you really want to do this?',
			'ok': '<i class="fi fi-rr-check"></i> DO THAT',
			'no': '<i class="fi fi-rr-ban"></i> DO NOTHING',
			'okClass': 'Btn BtnDanger',
			'noClass': 'Btn BtnLight'
		};

		generateConfirm.textContent = `Confirm({
	'title': '`+params.title+`',
	'message': '`+params.message+`',
	'ok': '<i class="fi fi-rr-check"></i> DO THAT',
	'no': '<i class="fi fi-rr-ban"></i> DO NOTHING',
	'okClass': 'Btn BtnDanger',
	'noClass': 'Btn BtnLight'
});`;

		hljs.highlightAll();
		
	}

	testComp(){

		var title = idWarningTitle.value;
		var message = idWarningMessage.value;

		if(title == ''){
			title = null;
		}
		if(message == ''){
			message = null;
		}

		var params = {
			'title': title ?? 'Do that?',
			'message': message ?? 'Do you really want to do this?'
		};

		Warning(params);
	}
}