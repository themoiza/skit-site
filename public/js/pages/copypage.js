classes.CopyPage = class {

	constructor(app){

		this.app = app;

		this.title = 'Copy';
		this.description = 'Copy to clipboard component.';

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
					<h1>Copy</h1>
					<p>`+this.description+`</p>
					<hr />
					<h2>Copy text element by ID</h2>
					<div class="Flex mgt1 mgb1">
						<div class="ColFlex280px">
							<p id="copyId">Exorcizamus te, omnis immundus spiritus, omnis satanica potestas, omnis incursio infernalis adversarii, omnis legio, omnis congregatio et secta diabolica...</p>
							<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('copyId')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
						</div>
						<div class="ColFlexCalc280 pdl2">
							<div class="pdt2 pdb2">
<pre><code class="language-html">&lt;p&nbsp;id=&quot;id&quot;&gt;Text&lt;p&gt;
&lt;button&nbsp;onclick=&quot;Copy.id(&#39;id&#39;)&quot;&gt;copy&lt;/button&gt;</code></pre>
							</div>
						</div>
					</div>
					<hr />
					<h2>Copy string</h2>
					<div class="pdt2 pdb2">
<pre><code class="language-js">Copy.string('String to copy');</code></pre>
					</div>
				</div>
			</div>`;
	}

	render(el){

		var page = this.content();

		el.innerHTML = page;

		hljs.highlightAll();
	}
}
