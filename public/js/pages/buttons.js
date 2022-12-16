classes.Buttons = class {

	constructor(app){

		this.app = app;

		this.title = 'Buttons';
		this.description = 'Buttons';

		this.app.updateTitle(this.title);
		this.app.updateDescription(this.description);
	}

	content(){

		return `
			<div class="Flex">
				<div class="ColFlex220px">
					${window.menu}
				</div>
				<div class="ColFlexCalc220 pd2">
					<h1>Buttons</h1>
					<h2>Vanilla</h2>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button>VANILLA</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&gt;VANILLA&lt;/button&gt;&nbsp;</code></pre>
						</div>
					</div>
					<h2>Tiny</h2>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnTiny w170">TINY</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn&nbsp;BtnTiny&quot;&gt;TINY&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnTiny BtnPri w170">TINY PRIMARY</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn&nbsp;BtnTiny&nbsp;BtnPri&quot;&gt;PRIMARY&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnTiny BtnSec w170">TINY SECONDARY</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn&nbsp;BtnTiny&nbsp;BtnSec&quot;&gt;SECONDARY&lt;/button&gt;&nbsp;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnTiny BtnDanger w170">TINY DANGER</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn&nbsp;BtnTiny&nbsp;BtnDanger&quot;&gt;DANGER&lt;/button&gt;&nbsp;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnTiny BtnDark w170">TINY DARK</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn&nbsp;BtnTiny&nbsp;BtnDark&quot;&gt;DARK&lt;/button&gt;&nbsp;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnTiny BtnLight w170">TINY LIGHT</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn&nbsp;BtnTiny&nbsp;BtnLight&quot;&gt;LIGHT&lt;/button&gt;&nbsp;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnTiny BtnTrans w170">TINY TRANSPARENT</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn&nbsp;BtnTiny&nbsp;BtnTrans&quot;&gt;TRANSPARENT&lt;/button&gt;&nbsp;</code></pre>
						</div>
					</div>
					<div class="Flex">
						<div class="ColFlex3">
							<button class="Btn BtnTiny BtnInv w170">TINY INVISIBLE</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn&nbsp;BtnTiny&nbsp;BtnInv&quot;&gt;INVISIBLE&lt;/button&gt;</code></pre>
						</div>
					</div>

					<h2>Default</h2>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn w170">DEFAULT</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn&quot;&gt;DEFAULT&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnPri w170">PRIMARY</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn&nbsp;BtnPri&quot;&gt;PRIMARY&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnSec w170">SECONDARY</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn&nbsp;BtnSec&quot;&gt;SECONDARY&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnDanger w170">DANGER</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn&nbsp;BtnDanger&quot;&gt;DANGER&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnDark w170">DARK</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn&nbsp;BtnDark&quot;&gt;DARK&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnLight w170">LIGHT</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn&nbsp;BtnLight&quot;&gt;LIGHT&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnTrans w170">TRANSPARENT</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn&nbsp;BtnTrans&quot;&gt;TRANSPARENT&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex">
						<div class="ColFlex3">
							<button class="Btn BtnInv w170">INVISIBLE</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn&nbsp;BtnInv&quot;&gt;INVISIBLE&lt;/button&gt;</code></pre>
						</div>
					</div>

					<h2>Medium</h2>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnMed w170">DEFAULT</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn BtnMed&quot;&gt;DEFAULT&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnMed BtnPri w170">PRIMARY</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn BtnMed&nbsp;BtnPri&quot;&gt;PRIMARY&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnMed BtnSec w170">SECONDARY</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn BtnMed&nbsp;BtnSec&quot;&gt;SECONDARY&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnMed BtnDanger w170">DANGER</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn BtnMed&nbsp;BtnDanger&quot;&gt;DANGER&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnMed BtnDark w170">DARK</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn BtnMed&nbsp;BtnDark&quot;&gt;DARK&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnMed BtnLight w170">LIGHT</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn BtnMed&nbsp;BtnLight&quot;&gt;LIGHT&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnMed BtnTrans w170">TRANSPARENT</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn BtnMed&nbsp;BtnTrans&quot;&gt;TRANSPARENT&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex">
						<div class="ColFlex3">
							<button class="Btn BtnMed BtnInv w170">INVISIBLE</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn BtnMed&nbsp;BtnInv&quot;&gt;INVISIBLE&lt;/button&gt;</code></pre>
						</div>
					</div>

					<h2>Large</h2>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnLarge w170">DEFAULT</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn BtnLarge&quot;&gt;DEFAULT&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnLarge BtnPri w170">PRIMARY</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn BtnLarge&nbsp;BtnPri&quot;&gt;PRIMARY&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnLarge BtnSec w170">SECONDARY</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn BtnLarge&nbsp;BtnSec&quot;&gt;SECONDARY&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnLarge BtnDanger w170">DANGER</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn BtnLarge&nbsp;BtnDanger&quot;&gt;DANGER&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnLarge BtnDark w170">DARK</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn BtnLarge&nbsp;BtnDark&quot;&gt;DARK&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnLarge BtnLight w170">LIGHT</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn BtnLarge&nbsp;BtnLight&quot;&gt;LIGHT&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex mgb1">
						<div class="ColFlex3">
							<button class="Btn BtnLarge BtnTrans w170">TRANSPARENT</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn BtnLarge&nbsp;BtnTrans&quot;&gt;TRANSPARENT&lt;/button&gt;</code></pre>
						</div>
					</div>
					<div class="Flex">
						<div class="ColFlex3">
							<button class="Btn BtnLarge BtnInv w170">INVISIBLE</button>
						</div>
						<div class="ColFlex9">
							<pre><code class="language-html">&lt;button&nbsp;class=&quot;Btn BtnLarge&nbsp;BtnInv&quot;&gt;INVISIBLE&lt;/button&gt;</code></pre>
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