classes.Docs = class {

	constructor(app){

		this.app = app;

		this.title = 'Docs';
		this.description = 'Docs';

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
					<div class="mgt4 mgb4 pdt2 pdb2">
						<h1>Skit</h1>
						<p>SKIT is an advanced front-end for web software development. Simple because it has as few dependencies as possible.</p>
						<h2>Methodology</h2>
						<ul>
							<li>HSL color</li>
							<li>Rem sized</li>
							<li>More vanilla possible</li>
							<li>Low dependencies</li>
							<li>Compatible with other frameworks</li>
						</ul>
					</div>
					<hr />
					<div class="Flex">
						<div class="ColFlex280px pdt2 pdb2" id="menuCheckbox">
							<div class="field">
								<input type="checkbox" class="Checkbox" id="checkbox1" name="" value="" checked="checked" /><label for="checkbox1">Check 1</label>
							</div>
							<div class="field">
								<input type="checkbox" class="Checkbox" id="checkbox2" name="" value="" /><label for="checkbox2">Check 2</label>
							</div>
							<div class="field">
								<input type="checkbox" class="Checkbox" id="checkbox3" name="" value="" indeterminate="indeterminate" /><label for="checkbox3">Indeterminate</label>
								<script>checkbox3.indeterminate = true;</script>
							</div>
							<div class="field">
								<input type="checkbox" class="Checkbox" id="checkbox4" name="" value="" disabled="disabled" /><label for="checkbox4">disabled</label>
							</div>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="checkboxSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;input&nbsp;type=&quot;checkbox&quot;&nbsp;id=&quot;checkbox1&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;checked=&quot;checked&quot;&nbsp;/&gt;&lt;label&nbsp;for=&quot;checkbox1&quot;&gt;Check&nbsp;1&lt;/label&gt;
&lt;/div&gt;
&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;input&nbsp;type=&quot;checkbox&quot;&nbsp;id=&quot;checkbox2&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;/&gt;&lt;label&nbsp;for=&quot;checkbox2&quot;&gt;Check&nbsp;2&lt;/label&gt;
&lt;/div&gt;
&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;input&nbsp;type=&quot;checkbox&quot;&nbsp;id=&quot;checkbox3&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;disabled=&quot;disabled&quot;&nbsp;/&gt;&lt;label&nbsp;for=&quot;checkbox3&quot;&gt;disabled&lt;/label&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('checkboxSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>
						<hr class="ColFlex" />
						<div class="ColFlex280px pdt2 pdb2" id="menuInputColor">
							<div class="field w100p">
								<label for="input0" class="label">COLOR</label>
								<input id="input0" type="color" name="" value="#777777" />
							</div>
							<p>
								<button onclick="ToogleDisabled('input0')" class="Btn BtnTrans" data-title="Toggle Disabled" data-title-position="right">TG DISABLED</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="colorSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;label&nbsp;class=&quot;label&quot;&gt;COLOR&lt;/label&gt;
&lt;input&nbsp;type=&quot;color&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;#777777&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('colorSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>
						<hr class="ColFlex" />
						<div class="ColFlex280px pdt2 pdb2" id="menuInputDatalist">
							<div class="field w100p">
								<label for="input1" class="label">DATALIST</label>
								<input id="input1" type="text" list="browsers" name="browser" placeholder="datalist" />
								<datalist id="browsers">
									<option value="Internet Explorer">
									<option value="Firefox">
									<option value="Chrome">
									<option value="Opera">
									<option value="Safari">
								</datalist>
							</div>
							<p>
								<button onclick="ToogleDisabled('input1')" class="Btn BtnTrans" data-title="Toggle Disabled" data-title-position="right">TG DISABLED</button> 
								<button onclick="TooglerReadonly('input1')" class="Btn BtnTrans" data-title="Toggle Readonly" data-title-position="right">TG READONLY</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="datalistSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;label&nbsp;class=&quot;label&quot;&gt;DATALIST&lt;/label&gt;
&lt;input&nbsp;type=&quot;text&quot;&nbsp;list=&quot;browsers&quot;&nbsp;name=&quot;browser&quot;&nbsp;/&gt;
&lt;datalist&nbsp;id=&quot;browsers&quot;&gt;
	&lt;option&nbsp;value=&quot;Internet&nbsp;Explorer&quot;&gt;
	&lt;option&nbsp;value=&quot;Firefox&quot;&gt;
	&lt;option&nbsp;value=&quot;Chrome&quot;&gt;
	&lt;option&nbsp;value=&quot;Opera&quot;&gt;
	&lt;option&nbsp;value=&quot;Safari&quot;&gt;
&lt;/datalist&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('datalistSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>
						<hr class="ColFlex" />
						<div class="ColFlex280px pdt2 pdb2" id="menuInputDate">
							<div class="field w100p">
								<label for="input2" class="label">DATE</label>
								<input id="input2" type="date" name="" value="" />
							</div>
							<p>
								<button onclick="ToogleDisabled('input2')" class="Btn BtnTrans" data-title="Toggle Disabled" data-title-position="right">TG DISABLED</button> 
								<button onclick="TooglerReadonly('input2')" class="Btn BtnTrans" data-title="Toggle Readonly" data-title-position="right">TG READONLY</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="dateSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;label&nbsp;class=&quot;label&quot;&gt;DATE&lt;/label&gt;
&lt;input&nbsp;type=&quot;date&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('dateSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>
						<hr class="ColFlex" />
						<div class="ColFlex280px pdt2 pdb2" id="menuInputDateLocal">
							<div class="field w100p">
								<label for="input3" class="label">DATE LOCAL</label>
								<input id="input3" type="datetime-local" name="" value="" />
							</div>
							<p>
								<button onclick="ToogleDisabled('input3')" class="Btn BtnTrans" data-title="Toggle Disabled" data-title-position="right">TG DISABLED</button> 
								<button onclick="TooglerReadonly('input3')" class="Btn BtnTrans" data-title="Toggle Readonly" data-title-position="right">TG READONLY</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="datelocalSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;label&nbsp;class=&quot;label&quot;&gt;DATE&nbsp;LOCAL&lt;/label&gt;
&lt;input&nbsp;type=&quot;datetime&#45;local&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('datelocalSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>
						<hr class="ColFlex" />
						<div class="ColFlex280px pdt2 pdb2" id="menuInputEmail">
							<div class="field w100p">
								<label for="input4" class="label">E-MAIL</label>
								<input id="input4" type="email" name="" value="" placeholder="e-mail" />
							</div>
							<p>
								<button onclick="ToogleDisabled('input4')" class="Btn BtnTrans" data-title="Toggle Disabled" data-title-position="right">TG DISABLED</button> 
								<button onclick="TooglerReadonly('input4')" class="Btn BtnTrans" data-title="Toggle Readonly" data-title-position="right">TG READONLY</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="emailSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;label&nbsp;class=&quot;label&quot;&gt;E&#45;MAIL&lt;/label&gt;
&lt;input&nbsp;type=&quot;email&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;placeholder=&quot;e&#45;mail&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('emailSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>
						<hr class="ColFlex" />
						<div class="ColFlex280px pdt2 pdb2" id="menuInputFile">
							<div class="field w100p">
								<label for="input5" class="label">FILE</label>
								<input id="input5" type="file" name="" />
							</div>
							<p>
								<button onclick="ToogleDisabled('input5')" class="Btn BtnTrans" data-title="Toggle Disabled" data-title-position="right">TG DISABLED</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="fileSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;label&nbsp;class=&quot;label&quot;&gt;FILE&lt;/label&gt;
&lt;input&nbsp;type=&quot;file&quot;&nbsp;name=&quot;&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('fileSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>

						<hr class="ColFlex" />

						<div class="ColFlex280px pdt2 pdb2" id="menuInputMonth">
							<div class="field w100p">
								<label for="input6" class="label">MONTH</label>
								<input id="input6" type="month" name="" value="" placeholder="2023-01" />
							</div>
							<p>
								<button onclick="ToogleDisabled('input6')" class="Btn BtnTrans" data-title="Toggle Disabled" data-title-position="right">TG DISABLED</button> 
								<button onclick="TooglerReadonly('input6')" class="Btn BtnTrans" data-title="Toggle Readonly" data-title-position="right">TG READONLY</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="monthSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;label&nbsp;class=&quot;label&quot;&gt;MONTH&lt;/label&gt;
&lt;input&nbsp;type=&quot;month&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;placeholder=&quot;2023&#45;01&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('monthSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>

						<hr class="ColFlex" />

						<div class="ColFlex280px pdt2 pdb2" id="menuInputNumber">
							<div class="field w100p">
								<label for="input7" class="label">NUMBER</label>
								<input id="input7" type="number" name="" value="" step="0.01" placeholder="0.01" />
							</div>
							<p>
								<button onclick="ToogleDisabled('input7')" class="Btn BtnTrans" data-title="Toggle Disabled" data-title-position="right">TG DISABLED</button> 
								<button onclick="TooglerReadonly('input7')" class="Btn BtnTrans" data-title="Toggle Readonly" data-title-position="right">TG READONLY</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="numberSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;label&nbsp;class=&quot;label&quot;&gt;NUMBER&lt;/label&gt;
&lt;input&nbsp;type=&quot;number&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;step=&quot;0.01&quot;&nbsp;placeholder=&quot;0.01&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('numberSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>

						<hr class="ColFlex" />

						<div class="ColFlex280px pdt2 pdb2" id="menuInputPassword">
							<div class="field w100p">
								<label for="input8" class="label">PASSWORD</label>
								<input id="input8" type="password" name="" value="" placeholder="password" />
							</div>
							<p>
								<button onclick="ToogleDisabled('input8')" class="Btn BtnTrans" data-title="Toggle Disabled" data-title-position="right">TG DISABLED</button> 
								<button onclick="TooglerReadonly('input8')" class="Btn BtnTrans" data-title="Toggle Readonly" data-title-position="right">TG READONLY</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="passwordSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;label&nbsp;class=&quot;label&quot;&gt;PASSWORD&lt;/label&gt;
&lt;input&nbsp;type=&quot;password&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;placeholder=&quot;password&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('passwordSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>
						<hr class="ColFlex" />
						<div class="ColFlex280px pdt2 pdb2" id="menuInputRadio">
							<div class="field">
								<input type="radio" class="Radio" id="radio1" name="radio1" /><label for="radio1">On</label>
							</div>
							<div class="field">
								<input type="radio" class="Radio" id="radio2" name="radio1" /><label for="radio2">Off</label>
							</div>
							<div class="field">
								<input type="radio" class="Radio" id="radio3" name="radio1" disabled="disabled" /><label for="radio3">disabled</label>
							</div>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="radioSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;input&nbsp;type=&quot;radio&quot;&nbsp;id=&quot;radio1&quot;&nbsp;name=&quot;radio1&quot;&nbsp;/&gt;&lt;label&nbsp;for=&quot;radio1&quot;&gt;On&lt;/label&gt;
&lt;/div&gt;
&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;input&nbsp;type=&quot;radio&quot;&nbsp;id=&quot;radio2&quot;&nbsp;name=&quot;radio1&quot;&nbsp;/&gt;&lt;label&nbsp;for=&quot;radio2&quot;&gt;Off&lt;/label&gt;
&lt;/div&gt;
&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;input&nbsp;type=&quot;radio&quot;&nbsp;id=&quot;radio3&quot;&nbsp;name=&quot;radio1&quot;&nbsp;disabled=&quot;disabled&quot;&nbsp;/&gt;&lt;label&nbsp;for=&quot;radio3&quot;&gt;disabled&lt;/label&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('radioSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>

						<hr class="ColFlex" />

						<div class="ColFlex280px pdt2 pdb2" id="menuInputRange">
							<div class="field w100p">
								<label for="input9" class="label">RANGE <span id="idResultRange">[20]</span></label>
								<input class="Range" id="input9" type="range" name="" step="1" min="0" max="100" value="20" oninput="idResultRange.textContent='['+this.value+']'" />
							</div>
							<p>
								<button onclick="ToogleDisabled('input9')" class="Btn BtnTrans" data-title="Toggle Disabled" data-title-position="right">TG DISABLED</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="rangeSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;label&nbsp;class=&quot;label&quot;&gt;RANGE&lt;/label&gt;
&lt;input&nbsp;type=&quot;range&quot;&nbsp;name=&quot;&quot;&nbsp;step=&quot;1&quot;&nbsp;min=&quot;0&quot;&nbsp;max=&quot;100&quot;&nbsp;value=&quot;50&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('rangeSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>
						<hr class="ColFlex" />
						<div class="ColFlex280px pdt2 pdb2" id="menuDualRange">
							<div class="field w100p">
								<label for="dualrange11" class="label">DUAL RANGE <span id="idResultDualRange">[20, 80]</span></label>
								<div class="Dualrange" id="dualrange1" oninput="idResultDualRange.textContent = '['+Dualrange.getValue('dualrange1').join(', ')+']';">
									<input id="dualrange11" type="range" min="0" max="100" value="20" step="1" />
									<input id="dualrange12" type="range" min="0" max="100" value="80" step="1" />
								</div>
							</div>
							<p>
								<button onclick="Dualrange.toggleDisabled('dualrange1')" class="Btn BtnTrans" data-title="Toggle Disabled" data-title-position="right">TG DISABLED</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="dualrangeSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;label&nbsp;for=&quot;dr1&quot;&nbsp;class=&quot;label&quot;&gt;DUAL&nbsp;RANGE&lt;/label&gt;
&lt;div&nbsp;class=&quot;Dualrange&quot;&nbsp;id=&quot;dualrange1&quot;&gt;
	&lt;input&nbsp;id=&quot;dr1&quot;&nbsp;type=&quot;range&quot;&nbsp;min=&quot;5&quot;&nbsp;max=&quot;100&quot;&nbsp;value=&quot;20&quot;&nbsp;step=&quot;1&quot;&nbsp;/&gt;
	&lt;input&nbsp;id=&quot;dr2&quot;&nbsp;type=&quot;range&quot;&nbsp;min=&quot;5&quot;&nbsp;max=&quot;100&quot;&nbsp;value=&quot;80&quot;&nbsp;step=&quot;1&quot;&nbsp;/&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('dualrangeSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>

						<hr class="ColFlex" />

						<div class="ColFlex280px pdt2 pdb2" id="menuInputSearch">
							<div class="field w100p">
								<label for="input10" class="label">SEARCH</label>
								<input id="input10" type="search" name="" value="" placeholder="search" />
							</div>
							<p>
								<button onclick="ToogleDisabled('input10')" class="Btn BtnTrans" data-title="Toggle Disabled" data-title-position="right">TG DISABLED</button> 
								<button onclick="TooglerReadonly('input10')" class="Btn BtnTrans" data-title="Toggle Readonly" data-title-position="right">TG READONLY</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="searchSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;label&nbsp;class=&quot;label&quot;&gt;SEARCH&lt;/label&gt;
&lt;input&nbsp;type=&quot;search&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;placeholder=&quot;search&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('searchSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>

						<hr class="ColFlex" />

						<div class="ColFlex280px pdt2 pdb2" id="menuInputSelect">
							<div class="field w100p">
								<label for="select1" class="label">SELECT</label>
								<select id="select1" name="">
									<option value="1">1</option>
									<option value="2">2</option>
								</select>
							</div>
							<p>
								<button onclick="ToogleDisabled('select1')" class="Btn BtnTrans" data-title="Toggle Disabled" data-title-position="right">TG DISABLED</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="selectSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;label&nbsp;class=&quot;label&quot;&gt;SELECT&lt;/label&gt;
&lt;select&nbsp;name=&quot;&quot;&gt;
	&lt;option&nbsp;value=&quot;1&quot;&gt;1&lt;/option&gt;
	&lt;option&nbsp;value=&quot;2&quot;&gt;2&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('selectSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>
						<hr class="ColFlex" />
						<div class="ColFlex280px pdt2 pdb2" id="menuInputTel">
							<div class="field w100p">
								<label for="input11" class="label">TEL</label>
								<input id="input11" type="tel" name="" value="" placeholder="tel" />
							</div>
							<p>
								<button onclick="ToogleDisabled('input11')" class="Btn BtnTrans" data-title="Toggle Disabled" data-title-position="right">TG DISABLED</button> 
								<button onclick="TooglerReadonly('input11')" class="Btn BtnTrans" data-title="Toggle Readonly" data-title-position="right">TG READONLY</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="telSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;label&nbsp;class=&quot;label&quot;&gt;TEL&lt;/label&gt;
&lt;input&nbsp;type=&quot;tel&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;placeholder=&quot;tel&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('telSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>

						<hr class="ColFlex" />
						<div class="ColFlex280px pdt2 pdb2" id="menuInputText">
							<div class="field w100p">
								<label for="input12" class="label">TEXT</label>
								<input id="input12" type="text" name="" value="" placeholder="text" />
							</div>
							<p>
								<button onclick="ToogleDisabled('input12')" class="Btn BtnTrans" data-title="Toggle Disabled" data-title-position="right">TG DISABLED</button> 
								<button onclick="TooglerReadonly('input12')" class="Btn BtnTrans" data-title="Toggle Readonly" data-title-position="right">TG READONLY</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="textSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;label&nbsp;class=&quot;label&quot;&gt;TEXT&lt;/label&gt;
&lt;input&nbsp;type=&quot;text&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;placeholder=&quot;&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('textSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>
						<hr class="ColFlex" />

						<div class="ColFlex280px pdt2 pdb2" id="menuInputTextarea">
							<div class="field w100p">
								<label for="input13" class="label">TEXTAREA</label>
								<textarea id="input13" name="" placeholder="textarea"></textarea>
							</div>
							<p>
								<button onclick="ToogleDisabled('input13')" class="Btn BtnTrans" data-title="Toggle Disabled" data-title-position="right">TG DISABLED</button> 
								<button onclick="TooglerReadonly('input13')" class="Btn BtnTrans" data-title="Toggle Readonly" data-title-position="right">TG READONLY</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="textareaSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;label&nbsp;class=&quot;label&quot;&gt;TEXTAREA&lt;/label&gt;
&lt;textarea&nbsp;name=&quot;&quot;&nbsp;placeholder=&quot;textarea&quot;&gt;&lt;/textarea&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('textareaSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>
						<hr class="ColFlex" />

						<div class="ColFlex280px pdt2 pdb2" id="menuInputTime">
							<div class="field w100p">
								<label for="input14" class="label">TIME</label>
								<input id="input14" type="time" name="" value="" />
							</div>
							<p>
								<button onclick="ToogleDisabled('input14')" class="Btn BtnTrans" data-title="Toggle Disabled" data-title-position="right">TG DISABLED</button> 
								<button onclick="TooglerReadonly('input14')" class="Btn BtnTrans" data-title="Toggle Readonly" data-title-position="right">TG READONLY</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="timeSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;label&nbsp;class=&quot;label&quot;&gt;TIME&lt;/label&gt;
&lt;input&nbsp;type=&quot;time&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('timeSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>
						<hr class="ColFlex" />

						<div class="ColFlex280px pdt2 pdb2" id="menuInputUrl">
							<div class="field w100p">
								<label for="input15" class="label">URL</label>
								<input id="input15" type="url" name="" value="" placeholder="url" />
							</div>
							<p>
								<button onclick="ToogleDisabled('input15')" class="Btn BtnTrans" data-title="Toggle Disabled" data-title-position="right">TG DISABLED</button> 
								<button onclick="TooglerReadonly('input15')" class="Btn BtnTrans" data-title="Toggle Readonly" data-title-position="right">TG READONLY</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="urlSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;label&nbsp;class=&quot;label&quot;&gt;URL&lt;/label&gt;
&lt;input&nbsp;type=&quot;url&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;placeholder=&quot;url&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('urlSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>
						<hr class="ColFlex" />

						<div class="ColFlex280px pdt2 pdb2" id="menuInputWeek">
							<div class="field w100p">
								<label for="input16" class="label">WEEK</label>
								<input id="input16" type="week" name="" value="2023-W01" />
							</div>
							<p>
								<button onclick="ToogleDisabled('input16')" class="Btn BtnTrans" data-title="Toggle Disabled" data-title-position="right">TG DISABLED</button> 
								<button onclick="TooglerReadonly('input16')" class="Btn BtnTrans" data-title="Toggle Readonly" data-title-position="right">TG READONLY</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="weekSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;label&nbsp;class=&quot;label&quot;&gt;WEEK&lt;/label&gt;
&lt;input&nbsp;type=&quot;week&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;2023&#45;W01&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('weekSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>
					</div>
					<hr />
					<h2>NOT STANDARD</h2>
					<div class="MarginFix pdt2 pdb2" id="menuInfo">
						<p><b>Info</b></p>
						<div class="Info w100p">Info</div>
						<div class="Info InfoPri">Info pri</div>
						<div class="Info InfoSec">Info sec</div>
						<div class="Info InfoWarning">Info warning</div>
						<div class="Info InfoDanger">Info Danger</div>
					</div>
					<hr class="ColFlex" />
					<div class="Flex">
						<div class="ColFlex280px pdt2 pdb2" id="menuCompToggle">
							<p class="mgb2"><b>Toggle</b></p>
							<div class="field">
								<div class="toggle">
									<input type="checkbox" class="Checkbox" data-skit-listen="darkmode" onchange="Darkmode.set(this.checked)" id="toggle1" name="" value="" />
									<label for="toggle1">Dark mode</label>
								</div>
							</div>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="toggleSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&lt;div&nbsp;class=&quot;toggle&quot;&gt;
	&lt;input&nbsp;id=&quot;toggle1&quot;&nbsp;type=&quot;checkbox&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;/&gt;
	&lt;label&nbsp;for=&quot;toggle1&quot;&gt;Dark&nbsp;mode&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('toggleSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>
						<hr class="ColFlex" />
						<div class="ColFlex280px pdt2 pdb2" id="menuCompToggle2">
							<p class="mgb2"><b>Toggle 2</b></p>
							<div class="field">
								<div class="toggle2">
									<input id="toggle2" type="range" name="" min="0" max="1" step="1" />
									<label for="toggle2">Enable?</label>
								</div>
							</div>
						</div>
					</div>
					<hr />
					<h2>JS COMPONENTS</h2>
					<div class="Flex">
						<div class="ColFlex280px pdt2 pdb2" id="menuJsConfirm">
							<p class="mgb2"><b>Confirm</b></p>
							<p>
								<button onclick="Confirm({
									'title': 'DELETE IT?',
									'message': 'You can do it?',
									'ok': 'YES',
									'no': 'NO',
									'okclass': 'Btn BtnDanger BtnMed',
									'noclass': 'Btn BtnLight BtnMed',
									'okFn': () => {console.log('ok')},
									'noFn': () => {console.log('no')},
									'cancelFn': () => {console.log('ignore')}
								});" class="Btn BtnDanger"><i class="fi fi-rs-trash"></i> DELETE</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
						</div>
						<hr class="ColFlex" />

						<div class="ColFlex280px pdt2 pdb2" id="menuJsCopy">
							<p class="mgb2"><b>Copy to Clipboard</b></p>
							<p id="copyId">Exorcizamus te, omnis immundus spiritus, omnis satanica potestas, omnis incursio infernalis adversarii, omnis legio, omnis congregatio et secta diabolica...</p>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('copyId')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="copySource"><code class="language-html">&lt;p&nbsp;id=&quot;id&quot;&gt;Text&lt;p&gt;
&lt;button&nbsp;onclick=&quot;Copy.id(&#39;id&#39;)&quot;&gt;copy&lt;/button&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('copySource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>
						<hr class="ColFlex" />
						<div class="ColFlex280px pdt2 pdb2" id="menuJsDebounce">
							<p class="mgb2"><b>Debounce</b></p>
							<p><button class="Btn BtnPri" onclick="Debounce(() => {
								Warning({'title': 'Debounce','message': 'Click!'})
							}, 1000, 'debounce1')">Click fast n times</button></p>
							<div class="field w100p">
								<label for="input17" class="label">Text any thing</label>
								<textarea oninput="testDebounce()" id="input17" name="" placeholder="textarea"></textarea>
							</div>
							<script>
								testDebounce = () => {
									Debounce(() => {
										Warning({'title': 'Debounce','message': 'Text!'})
									}, 1000, 'debounce1');
								}
							</script>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
							xx
						</div>
						<hr class="ColFlex" />
						<div class="ColFlex pdt2 pdb2" id="menuJsTab">
							<p class="mgb2"><b>Tab</b></p>
							<div class="Tabs">
								<div id="tabs"></div>
								<div class="TabsArea" id="area1">
									<div data-tab="tab1">
										<div class="pd1">
											<table>
												<thead>
													<tr>
														<th class="TxLeft">COL 1 <i class="fi fi-rs-arrows-alt-v"></i></th>
														<th class="TxLeft">COL 2 <i class="fi fi-rs-arrows-alt-v"></i></th>
														<th class="TxLeft">COL 3 <i class="fi fi-rs-arrows-alt-v"></i></th>
														<th class="TxLeft">COL 4 <i class="fi fi-rs-arrows-alt-v"></i></th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Hydro­gen</td>
														<td>He­lium</td>
														<td>Lith­ium</td>
														<td>Beryl­lium</td>
													</tr>
													<tr>
														<td>Boron</td>
														<td>Cabon</td>
														<td>Nitrogen</td>
														<td>Oxygen</td>
													</tr>
													<tr>
														<td>Fluorine</td>
														<td>Neon</td>
														<td>Sodium</td>
														<td>Magnesium</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div data-tab="tab2">
										<img class="Img-block w100p" alt="carina" src="assets/carina.jpg" />
									</div>
									<div data-tab="tab3">
										<div class="pd3">
											<p>"Exorcizamus te, omnis immundus spiritus, omnis satanica potestas, omnis incursio infernalis adversarii, omnis legio, omnis congregatio et secta diabolica... Ergo, draco maledicte et omnis legio diabolica, adjuramus te ... cessa decipere humanas creaturas, eisque æternæ perditionìs venenum propinare... Vade, satana, inventor et magister omnis fallaciæ, hostis humanæ salutis... Humiliare sub potenti manu Dei; contremisce et effuge, invocato a nobis sancto et terribili nomine... quem inferi tremunt... Ab insidiis diaboli, libera nos, Domine. Ut Ecclesiam tuam secura tibi facias libertate servire, te rogamus, audi nos."</p>
										</div>
									</div>
									<div data-tab="tab4">
										<div id="tabs2"></div>
										<div class="TabsArea" id="area11">
											<div data-tab="tab11">
												<div class="pd3">
													<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt exercitationem repellendus deserunt nemo officia at, alias temporibus autem laborum iure? Libero repellat blanditiis ipsam voluptatibus minima aut pariatur, perspiciatis obcaecati.</p>
												</div>
											</div>
											<div data-tab="tab12">
												<div class="pd3">
													<p>"Exorcizamus te, omnis immundus spiritus, omnis satanica potestas, omnis incursio infernalis adversarii, omnis legio, omnis congregatio et secta diabolica... Ergo, draco maledicte et omnis legio diabolica, adjuramus te ... cessa decipere humanas creaturas, eisque æternæ perditionìs venenum propinare... Vade, satana, inventor et magister omnis fallaciæ, hostis humanæ salutis... Humiliare sub potenti manu Dei; contremisce et effuge, invocato a nobis sancto et terribili nomine... quem inferi tremunt... Ab insidiis diaboli, libera nos, Domine. Ut Ecclesiam tuam secura tibi facias libertate servire, te rogamus, audi nos."</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<hr class="ColFlex" />
						<div class="ColFlex280px pdt2 pdb2" id="menuJsTooltip">
							<p class="mgb2"><b>ToolTip</b></p>
							<div class="MarginFix">
								<button class="Btn mgb1" data-title="Tooltip 1" data-title-position="top">TOP</button> 
								<button class="Btn mgb1" data-title="Tooltip 2" data-title-position="bottom">BOTTOM</button> 
								<button class="Btn mgb1" data-title="Tooltip 3" data-title-position="left">LEFT</button> 
								<button class="Btn mgb1" data-title="Tooltip 4" data-title-position="right">RIGHT</button> 
								<button class="Btn" data-title-for="tip1">HTML</button>
							</div>
							<div class="Tooltip" id="tip1">
								Tooltip <b>HTML</b>
								<p><img src="assets/skit.png" alt="skit" class="w100p" /></p>
								Exorcizamus te, omnis immundus spiritus, omnis satanica potestas, omnis incursio infernalis adversarii, omnis legio, omnis congregatio et secta diabolica... Ergo, draco maledicte et omnis legio diabolica, adjuramus te ... cessa decipere humanas creaturas, eisque æternæ perditionìs venenum propinare...
							</div>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="tooltipSource"><code class="language-html">&lt;button&nbsp;data&#45;title=&quot;Tooltip&nbsp;1&quot;&nbsp;data&#45;title&#45;position=&quot;TOP&quot;&gt;TOP&lt;/button&gt;&nbsp;
&lt;button&nbsp;data&#45;title=&quot;Tooltip&nbsp;2&quot;&nbsp;data&#45;title&#45;position=&quot;bottom&quot;&gt;BOTTOM&lt;/button&gt;&nbsp;
&lt;button&nbsp;data&#45;title=&quot;Tooltip&nbsp;3&quot;&nbsp;data&#45;title&#45;position=&quot;left&quot;&gt;LEFT&lt;/button&gt;&nbsp;
&lt;button&nbsp;data&#45;title=&quot;Tooltip&nbsp;4&quot;&nbsp;data&#45;title&#45;position=&quot;right&quot;&gt;RIGHT&lt;/button&gt;&nbsp;
&lt;button&nbsp;data&#45;title&#45;for=&quot;tip1&quot;&gt;HTML&lt;/button&gt;
&lt;div&nbsp;class=&quot;Tooltip&quot;&nbsp;id=&quot;tip1&quot;&gt;
Tooltip&nbsp;&lt;b&gt;HTML&lt;/b&gt;
&lt;p&gt;&lt;img&nbsp;src=&quot;assets/skit.png&quot;&nbsp;alt=&quot;skit&quot;&nbsp;class=&quot;w100p&quot;&nbsp;/&gt;&lt;/p&gt;
Exorcizamus&nbsp;te,&nbsp;omnis&nbsp;immundus&nbsp;spiritus,&nbsp;omnis&nbsp;satanica&nbsp;potestas,&nbsp;omnis&nbsp;incursio&nbsp;infernalis&nbsp;adversarii,&nbsp;omnis&nbsp;legio,&nbsp;omnis&nbsp;congregatio&nbsp;et&nbsp;secta&nbsp;diabolica...&nbsp;Ergo,&nbsp;draco&nbsp;maledicte&nbsp;et&nbsp;omnis&nbsp;legio&nbsp;diabolica,&nbsp;adjuramus&nbsp;te&nbsp;...&nbsp;cessa&nbsp;decipere&nbsp;humanas&nbsp;creaturas,&nbsp;eisque&nbsp;æternæ&nbsp;perditionìs&nbsp;venenum&nbsp;propinare...
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('tooltipSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rs-copy"></i> COPY</button>
							</p>
						</div>
						<hr class="ColFlex" />
						<div class="ColFlex280px pdt2 pdb2" id="menuJsWarning">
							<p class="mgb2"><b>Warning</b></p>
							<button class="Btn BtnLight mgb1" onclick="Warning({'title': 'title','message': 'Exorcizamus te, omnis immundus spiritus, omnis satanica potestas, omnis incursio infernalis adversarii, omnis legio, omnis congregatio et secta diabolica... Ergo, draco maledicte et omnis legio diabolica, adjuramus te ... cessa decipere humanas creaturas, eisque æternæ perditionìs venenum propinare...', 'timeout': 100000, 'position': 9});">OPEN</button>
							<button class="Btn BtnLight mgb1" onclick="Warning({'color': 'danger', 'title': 'title','message': 'Danger', 'timeout': 10000, 'id': 'danger'});">OPEN DANGER</button>
							<button class="Btn BtnLight mgb1" onclick="Warning({'color': 'pri', 'title': 'title','message': 'Pri', 'timeout': 10000, 'id': 'pri'});">OPEN PRIMARY</button>
							<button class="Btn BtnLight mgb1" onclick="Warning({'color': 'sec', 'title': 'title','message': 'Sec', 'timeout': 3000, 'id': 'sec'});">OPEN SECONDARY</button>
							<button class="Btn BtnLight mgb1" onclick="Warning({'color': 'dark', 'title': 'title','message': 'Dark', 'timeout': 10000, 'id': 'dark'});">OPEN DARK</button>
							<button class="Btn BtnLight mgb1" onclick="Warning({'color': 'light', 'title': 'title','message': 'Light', 'timeout': 10000, 'id': 'light'});">OPEN LIGHT</button>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
							xx
						</div>
					</div>
				</div>
			</div>`;
	}

	render(el){

		var page = this.content();

		el.innerHTML = page;

		hljs.highlightAll();

		var tabsys = new Tabs('tabs', 'area1', [
			{
				'tab': '<i class="fi fi-rs-grid"></i> TABLE', 
				'for': 'tab1'
			},
			{
				'tab': '<i class="fi fi-rs-picture"></i> IMAGE', 
				'for': 'tab2'
			},
			{
				'tab': '<i class="fi fi-rs-text"></i> TEXT', 
				'for': 'tab3'
			},
			{
				'tab': '<i class="fi fi-rs-bars-progress"></i> SECOND LEVEL', 
				'for': 'tab4'
			}
		]);

		var tabsys2 = new Tabs('tabs2', 'area11', [
			{
				'tab': '<i class="fi fi-rs-grid"></i> L1', 
				'for': 'tab11'
			},
			{
				'tab': '<i class="fi fi-rs-picture"></i> L2', 
				'for': 'tab12'
			}
		]);
	}
}
