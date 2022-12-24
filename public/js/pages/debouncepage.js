classes.DebouncePage = class {

	constructor(app){

		this.app = app;

		this.title = 'Debounce';
		this.description = 'Programmable delay with persistence.';

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
					<h1>Debounce</h1>
					<p>`+this.description+`</p>
					<hr />
					<h2>Example 1: click</h2>
					<div class="Flex">
						<div class="ColFlex280px pdt2 pdb2">
							<p class="mgb2"><b>Debounce</b></p>
							<p><button class="Btn BtnPri" onclick="pages.debouncepage.testDebounceClick()">Click fast n times</button></p>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre><code class="language-html">&lt;script&gt;
	testDebounceClick&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;{

		Debounce(()&nbsp;=&gt;&nbsp;{

			Warning({
				&#39;title&#39;:&nbsp;&#39;Debounce&#39;,
				&#39;message&#39;:&nbsp;&#39;Debounce&nbsp;click&nbsp;event!&#39;,
				&#39;color&#39;:&nbsp;&#39;pri&#39;,
				&#39;position&#39;:&nbsp;9,
				&#39;timeout&#39;:&nbsp;10000,
				&#39;id&#39;:&nbsp;&#39;debounce1&#39;
			})
		},&nbsp;1000,&nbsp;&#39;debounce1&#39;);
	}
&lt;/script&gt;
&lt;button&nbsp;class=&quot;Btn&nbsp;BtnPri&quot;&nbsp;onclick=&quot;testDebounceClick()&quot;&gt;Click&nbsp;fast&nbsp;n&nbsp;times&lt;/button&gt;</code></pre>
						</div>
					</div>
					<hr />
					<h2>Example 2: typing</h2>
					<div class="Flex">
						<div class="ColFlex280px pdt2 pdb2">
							<div class="field w100p">
								<label for="inputd" class="label">Text any thing</label>
								<textarea oninput="pages.debouncepage.testDebounceKeyup()" id="inputd" name="" placeholder="textarea"></textarea>
							</div>
						</div>
						<div class="ColFlexCalc280 pdt2 pdb2 pdl2">
<pre><code class="language-html">&lt;script&gt;
	testDebounceKeyup&nbsp;=&nbsp;()&nbsp;=&gt;&nbsp;{
		
		Debounce(()&nbsp;=&gt;&nbsp;{
			
			Warning({
				&#39;title&#39;:&nbsp;&#39;Debounce&#39;,
				&#39;message&#39;:&nbsp;&#39;Debounce&nbsp;keyup&nbsp;event&#39;,
				&#39;color&#39;:&nbsp;&#39;sec&#39;,
				&#39;position&#39;:&nbsp;9,
				&#39;timeout&#39;:&nbsp;10000,
				&#39;id&#39;:&nbsp;&#39;debounce2&#39;
			})
		},&nbsp;1000,&nbsp;&#39;debounce2&#39;);
	}
&lt;/script&gt;
&lt;textarea&nbsp;oninput=&quot;testDebounceKeyup()&quot;&nbsp;id=&quot;inputd&quot;&nbsp;name=&quot;&quot;&nbsp;placeholder=&quot;textarea&quot;&gt;&lt;/textarea&gt;</code></pre>
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

	testDebounceClick = () => {

		Debounce(() => {

			Warning({
				'title': 'Debounce',
				'message': 'Debounce click event!',
				'color': 'pri',
				'position': 9,
				'timeout': 10000,
				'id': 'debounce1'
			})
		}, 1000, 'debounce1');
	}

	testDebounceKeyup = () => {

		Debounce(() => {

			Warning({
				'title': 'Debounce',
				'message': 'Debounce keyup event',
				'color': 'sec',
				'position': 9,
				'timeout': 10000,
				'id': 'debounce2'
			})
		}, 1000, 'debounce2');
	}
}
