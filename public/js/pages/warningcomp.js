classes.WarningComp = class {

	constructor(app){

		this.app = app;
		this.title = 'Warning (Toasts)';
		this.description = 'Warning Component(Toasts)';

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
					<h1>`+this.title+`</h1>
					<p>`+this.description+`</p>
					<div class="Flex">
						<div class="ColFlex280px pdt2 pdb2">
							<h2>Live Preview</h2>
							<div class="Card CardBorder w100p mgb2" onchange="pages.warningcomp.previewCode()" oninput="pages.warningcomp.previewCode()">
								<div class="pd2">
									<div class="mgb2">
										<div class="field w100p">
											<label class="label">TITLE</label>
											<input id="idWarningTitle" type="text" value="Title" placeholder="title" />
										</div>
									</div>
									<div class="mgb2">
										<div class="field w100p">
											<label class="label">MESSAGE</label>
											<input id="idWarningMessage" type="text" value="Message" placeholder="message" />
										</div>
									</div>
									<div class="mgb2">
										<div class="field w100p">
											<label class="label">ID</label>
											<input id="idWarningId" type="text" placeholder="id" />
										</div>
									</div>
									<div class="mgb2">
										<div class="field w100p">
											<label class="label">TIMEOUT</label>
											<input id="idWarningTimeout" type="number" step="1" min="-1" value="10000" max="99999999999" placeholder="in ms, min 100" />
										</div>
									</div>
									<div class="mgb2">
										<div class="field w100p">
											<label class="label">COLOR</label>
											<select id="idWarningColor">
												<option value="">--SELECIONE--</option>
												<option value="danger">danger</option>
												<option value="pri">pri</option>
												<option value="sec">sec</option>
												<option value="dark">dark</option>
												<option value="light" selected>light</option>
											</select>
										</div>
									</div>
									<div class="mgb2">
										<div class="field w100p">
											<label class="label">POSITION</label>
											<select id="idWarningPosition">
												<option value="">--SELECIONE--</option>
												<option value="1">Left Bottom</option>
												<option value="2">Center Bottom</option>
												<option value="3">Right Bottom</option>
												<option value="4">Left Center</option>
												<option value="6">Right Center</option>
												<option value="7">Left Top</option>
												<option value="8">Center Top</option>
												<option value="9" selected>Right Top</option>
											</select>
										</div>
									</div>
								</div>
<pre><code id="generateConfirm" class="language-js">Warning({
	'color': 'light',
	'title': 'Title',
	'message': 'Message',
	'timeout': 10000,
	'id': '',
	'position': 9,
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
										<td rowspan="6">$1, json object</td>
										<td rowspan="6">required</td>
										<td>title: string, required</td>
										<td>CONFIRM?</td>
									</tr>
									<tr>
										<td>message: string, not required</td>
										<td></td>
									</tr>
									<tr>
										<td>color: string, not required</td>
										<td></td>
									</tr>
									<tr>
										<td>timeout: integer, in mili seconds, not required</td>
										<td>10000</td>
									</tr>
									<tr>
										<td>id: string, not required</td>
										<td></td>
									</tr>
									<tr>
										<td>position: not required</td>
										<td>8</td>
									</tr>
								</tbody>
							</table>
							<p><i class="fi fi-rr-undo-alt"></i> Return: void</p>
							<h2>COLORS</h2>
							<p>The available options are:</p>
							<ul>
								<li>danger</li>
								<li>pri</li>
								<li>sec</li>
								<li>dark</li>
								<li>light</li>
							</ul>
							<h2>POSITIONS</h2>
							<p>The available options are:</p>
							<ul>
								<li>1 Left Bottom</li>
								<li>2 Center Bottom</li>
								<li>3 Right Bottom</li>
								<li>4 Left Center</li>
								<li>6 Right Center</li>
								<li>7 Left Top</li>
								<li>8 Center Top</li>
								<li>9 Right Top</li>
							</ul>
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
		var id = idWarningId.value;
		var timeout = idWarningTimeout.value;
		var color = idWarningColor.value;
		var position = idWarningPosition.value;

		if(title == ''){
			title = false;
		}
		if(message == ''){
			message = false;
		}
		if(color == ''){
			color = '';
		}
		if(position == ''){
			position = 8;
		}

		generateConfirm.textContent = `Warning({
	'color': '`+color+`',
	'title': '`+title+`',
	'message': '`+message+`',
	'timeout': `+timeout+`,
	'id': '`+id+`',
	'position': `+position+`,
});`;

		hljs.highlightAll();
	}

	testComp(){

		var title = idWarningTitle.value;
		var message = idWarningMessage.value;
		var id = idWarningId.value;
		var timeout = idWarningTimeout.value;
		var color = idWarningColor.value;
		var position = idWarningPosition.value;

		if(title == ''){
			title = 'Title';
		}
		if(message == ''){
			message = 'Message';
		}
		if(color == ''){
			color = '';
		}
		if(position == ''){
			position = 8;
		}
		if(id == ''){
			id = false;
		}

		Warning({
			'timeout': timeout,
			'color': color,
			'title': title,
			'message': message,
			'timeout': timeout,
			'id': id,
			'position': position
		});
	}
}