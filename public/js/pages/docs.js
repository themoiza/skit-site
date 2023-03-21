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
						<p>SKIT is an advanced front-end for web Strokeware development. Simple because it has as few dependencies as possible.</p>
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
								<input type="checkbox" class="Checkbox" id="checkbox3" name="" value="" /><label for="checkbox3">Indeterminate</label>
								<script>checkbox3.indeterminate = true;</script>
							</div>
							<div class="field">
								<input type="checkbox" class="Checkbox" id="checkbox4" name="" value="" disabled="disabled" /><label for="checkbox4">disabled</label>
							</div>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="checkboxSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;type=&quot;checkbox&quot;&nbsp;class=&quot;Checkbox&quot;&nbsp;id=&quot;checkbox1&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;checked=&quot;checked&quot;&nbsp;/&gt;&lt;label&nbsp;for=&quot;checkbox1&quot;&gt;Check&nbsp;1&lt;/label&gt;
&lt;/div&gt;
&lt;div&nbsp;class=&quot;field&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;type=&quot;checkbox&quot;&nbsp;class=&quot;Checkbox&quot;&nbsp;id=&quot;checkbox2&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;/&gt;&lt;label&nbsp;for=&quot;checkbox2&quot;&gt;Check&nbsp;2&lt;/label&gt;
&lt;/div&gt;
&lt;div&nbsp;class=&quot;field&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;type=&quot;checkbox&quot;&nbsp;class=&quot;Checkbox&quot;&nbsp;id=&quot;checkbox3&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;/&gt;&lt;label&nbsp;for=&quot;checkbox3&quot;&gt;Indeterminate&lt;/label&gt;
&lt;script&gt;checkbox3.indeterminate&nbsp;=&nbsp;true;&lt;/script&gt;
&lt;/div&gt;
&lt;div&nbsp;class=&quot;field&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;type=&quot;checkbox&quot;&nbsp;class=&quot;Checkbox&quot;&nbsp;id=&quot;checkbox4&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;disabled=&quot;disabled&quot;&nbsp;/&gt;&lt;label&nbsp;for=&quot;checkbox4&quot;&gt;disabled&lt;/label&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('checkboxSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
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
&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;for=&quot;input0&quot;&nbsp;class=&quot;label&quot;&gt;COLOR&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;id=&quot;input0&quot;&nbsp;type=&quot;color&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;#777777&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('colorSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
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
&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;for=&quot;input1&quot;&nbsp;class=&quot;label&quot;&gt;DATALIST&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;id=&quot;input1&quot;&nbsp;type=&quot;text&quot;&nbsp;list=&quot;browsers&quot;&nbsp;name=&quot;browser&quot;&nbsp;placeholder=&quot;datalist&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;datalist&nbsp;id=&quot;browsers&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option&nbsp;value=&quot;Internet&nbsp;Explorer&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option&nbsp;value=&quot;Firefox&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option&nbsp;value=&quot;Chrome&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option&nbsp;value=&quot;Opera&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option&nbsp;value=&quot;Safari&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/datalist&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('datalistSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
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
&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;for=&quot;input2&quot;&nbsp;class=&quot;label&quot;&gt;DATE&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;id=&quot;input2&quot;&nbsp;type=&quot;date&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('dateSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
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
&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;for=&quot;input3&quot;&nbsp;class=&quot;label&quot;&gt;DATE&nbsp;LOCAL&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;id=&quot;input3&quot;&nbsp;type=&quot;datetime&#45;local&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('datelocalSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
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
&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;for=&quot;input4&quot;&nbsp;class=&quot;label&quot;&gt;E&#45;MAIL&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;id=&quot;input4&quot;&nbsp;type=&quot;email&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;placeholder=&quot;e&#45;mail&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('emailSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
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
&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;for=&quot;input5&quot;&nbsp;class=&quot;label&quot;&gt;FILE&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;id=&quot;input5&quot;&nbsp;type=&quot;file&quot;&nbsp;name=&quot;&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('fileSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
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
&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;for=&quot;input6&quot;&nbsp;class=&quot;label&quot;&gt;MONTH&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;id=&quot;input6&quot;&nbsp;type=&quot;month&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;placeholder=&quot;2023&#45;01&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('monthSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
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
&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;for=&quot;input7&quot;&nbsp;class=&quot;label&quot;&gt;NUMBER&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;id=&quot;input7&quot;&nbsp;type=&quot;number&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;step=&quot;0.01&quot;&nbsp;placeholder=&quot;0.01&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('numberSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
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
&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;for=&quot;input8&quot;&nbsp;class=&quot;label&quot;&gt;PASSWORD&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;id=&quot;input8&quot;&nbsp;type=&quot;password&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;placeholder=&quot;password&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('passwordSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
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
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;type=&quot;radio&quot;&nbsp;class=&quot;Radio&quot;&nbsp;id=&quot;radio1&quot;&nbsp;name=&quot;radio1&quot;&nbsp;/&gt;&lt;label&nbsp;for=&quot;radio1&quot;&gt;On&lt;/label&gt;
&lt;/div&gt;
&lt;div&nbsp;class=&quot;field&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;type=&quot;radio&quot;&nbsp;class=&quot;Radio&quot;&nbsp;id=&quot;radio2&quot;&nbsp;name=&quot;radio1&quot;&nbsp;/&gt;&lt;label&nbsp;for=&quot;radio2&quot;&gt;Off&lt;/label&gt;
&lt;/div&gt;
&lt;div&nbsp;class=&quot;field&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;type=&quot;radio&quot;&nbsp;class=&quot;Radio&quot;&nbsp;id=&quot;radio3&quot;&nbsp;name=&quot;radio1&quot;&nbsp;disabled=&quot;disabled&quot;&nbsp;/&gt;&lt;label&nbsp;for=&quot;radio3&quot;&gt;disabled&lt;/label&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('radioSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
							</p>
						</div>

						<hr class="ColFlex" />

						<div class="ColFlex280px pdt2 pdb2" id="menuInputRange">
							<div class="field w100p">
								<label for="input9" class="label">RANGE <span id="idResultRange">[20]</span></label>
								<div class="Range">
									<input id="input9" type="range" name="" step="1" min="0" max="100" value="20" oninput="idResultRange.textContent='['+this.value+']'" />
								</div>
							</div>
							<p>
								<button onclick="ToogleDisabled('input9')" class="Btn BtnTrans" data-title="Toggle Disabled" data-title-position="right">TG DISABLED</button>
							</p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="rangeSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;for=&quot;input9&quot;&nbsp;class=&quot;label&quot;&gt;RANGE&nbsp;&lt;span&nbsp;id=&quot;idResultRange&quot;&gt;[20]&lt;/span&gt;&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;class=&quot;Range&quot;&nbsp;id=&quot;input9&quot;&nbsp;type=&quot;range&quot;&nbsp;name=&quot;&quot;&nbsp;step=&quot;1&quot;&nbsp;min=&quot;0&quot;&nbsp;max=&quot;100&quot;&nbsp;value=&quot;20&quot;&nbsp;oninput=&quot;idResultRange.textContent=&#39;[&#39;+this.value+&#39;]&#39;&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('rangeSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
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
&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;for=&quot;dualrange11&quot;&nbsp;class=&quot;label&quot;&gt;DUAL&nbsp;RANGE&nbsp;&lt;span&nbsp;id=&quot;idResultDualRange&quot;&gt;[20,&nbsp;80]&lt;/span&gt;&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;class=&quot;Dualrange&quot;&nbsp;id=&quot;dualrange1&quot;&nbsp;oninput=&quot;idResultDualRange.textContent&nbsp;=&nbsp;&#39;[&#39;+Dualrange.getValue(&#39;dualrange1&#39;).join(&#39;,&nbsp;&#39;)+&#39;]&#39;;&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;id=&quot;dualrange11&quot;&nbsp;type=&quot;range&quot;&nbsp;min=&quot;0&quot;&nbsp;max=&quot;100&quot;&nbsp;value=&quot;20&quot;&nbsp;step=&quot;1&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;id=&quot;dualrange12&quot;&nbsp;type=&quot;range&quot;&nbsp;min=&quot;0&quot;&nbsp;max=&quot;100&quot;&nbsp;value=&quot;80&quot;&nbsp;step=&quot;1&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('dualrangeSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
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
&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;for=&quot;input10&quot;&nbsp;class=&quot;label&quot;&gt;SEARCH&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;id=&quot;input10&quot;&nbsp;type=&quot;search&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;placeholder=&quot;search&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('searchSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
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
&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;for=&quot;select1&quot;&nbsp;class=&quot;label&quot;&gt;SELECT&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;select&nbsp;id=&quot;select1&quot;&nbsp;name=&quot;&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option&nbsp;value=&quot;1&quot;&gt;1&lt;/option&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option&nbsp;value=&quot;2&quot;&gt;2&lt;/option&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/select&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('selectSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
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
&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;for=&quot;input11&quot;&nbsp;class=&quot;label&quot;&gt;TEL&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;id=&quot;input11&quot;&nbsp;type=&quot;tel&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;placeholder=&quot;tel&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('telSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
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
&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;for=&quot;input12&quot;&nbsp;class=&quot;label&quot;&gt;TEXT&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;id=&quot;input12&quot;&nbsp;type=&quot;text&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;placeholder=&quot;text&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('textSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
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
&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;for=&quot;input13&quot;&nbsp;class=&quot;label&quot;&gt;TEXTAREA&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;textarea&nbsp;id=&quot;input13&quot;&nbsp;name=&quot;&quot;&nbsp;placeholder=&quot;textarea&quot;&gt;&lt;/textarea&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('textareaSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
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
&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;for=&quot;input14&quot;&nbsp;class=&quot;label&quot;&gt;TIME&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;id=&quot;input14&quot;&nbsp;type=&quot;time&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('timeSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
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
&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;for=&quot;input15&quot;&nbsp;class=&quot;label&quot;&gt;URL&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;id=&quot;input15&quot;&nbsp;type=&quot;url&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;placeholder=&quot;url&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('urlSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
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
&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;for=&quot;input16&quot;&nbsp;class=&quot;label&quot;&gt;WEEK&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;id=&quot;input16&quot;&nbsp;type=&quot;week&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;2023&#45;W01&quot;&nbsp;/&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('weekSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
							</p>
						</div>
					</div>
					<hr class="ColFlex" />
					<div class="Flex">
						<div class="ColFlex280px pdt2 pdb2" id="menuCompToggle">
							<p class="mgb2"><b>Toggle</b></p>
							<div class="field">
								<div class="Toggle1">
									<input type="checkbox" class="Checkbox" id="toggle1" name="" value="" />
									<label for="toggle1">Dark mode</label>
								</div>
							</div>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre id="toggleSource"><code class="language-html">&lt;div&nbsp;class=&quot;field&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;class=&quot;Toggle1&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input&nbsp;type=&quot;checkbox&quot;&nbsp;class=&quot;Checkbox&quot;&nbsp;id=&quot;toggle1&quot;&nbsp;name=&quot;&quot;&nbsp;value=&quot;&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&nbsp;for=&quot;toggle1&quot;&gt;Dark&nbsp;mode&lt;/label&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
&lt;/div&gt;</code></pre>
							<p>
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('toggleSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
							</p>
						</div>
					</div>
				</div>
			</div>`;
	}

	render(el){

		var page = this.content();

		el.innerHTML = page;

		hljs.highlightAll();

		checkbox3.indeterminate = true;
	}
}
