classes.ToolTipPage = class {

	constructor(app){

		this.app = app;

		this.title = 'ToolTip';
		this.description = 'ToolTip';

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
					<h1>ToolTip</h1>
					<p>ToolTip component.</p>
					<div class="Flex">
						<div class="ColFlex280px pdt2 pdb2" id="menuJsTooltip">
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
								<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('tooltipSource')" class="Btn BtnPri" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
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
	}
}
