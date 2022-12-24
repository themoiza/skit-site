classes.Paniccomp = class {

	constructor(app){

		this.app = app;

		this.title = 'Panic';
		this.description = 'Use este componente para fixar mensagens como: Problemas, bugs, mensagens graves que o sistema está apresentando.';

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
					<h1>Panic</h1>
					<p>Use este componente para fixar mensagens como: Problemas, bugs, mensagens graves que o sistema está apresentando.</p>
					<p><button onclick="Panic.start()" class="Btn BtnDanger"><i class="fi-rr-sensor-fire"></i> START</button> <button onclick="Panic.stop()" class="Btn BtnTrans">STOP</button></p>

					<h2>HTML Only</h2>
					<div class="Flex">
<pre class="w100p"><code class="language-html">&lt;body class=&quot;InPanic&quot;&gt;
	&lt;div id=&quot;InPanic&quot; class=&quot;Panic&quot;&gt;Estamos trabalhando para resolver os problemas...&lt;/div&gt;
&lt;/body&gt;
</code></pre>
					</div>
					<h2>With Javascript</h2>
					<p><b>Start</b></p>
<pre class="w100p"><code class="language-js">Panic.start();</code></pre>
					<p><b>Stop</b></p>
<pre class="w100p"><code class="language-js">Panic.stop();</code></pre>
				</div>
			</div>`;
	}

	render(el){

		var page = this.content();

		el.innerHTML = page;

		hljs.highlightAll();
	}
}