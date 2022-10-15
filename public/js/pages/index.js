classes.Index = class {

	constructor(app){

		this.app = app;

		this.title = 'Skit';
		this.description = 'Skit';
	}

	content(){

		return `
			<section class="center">
				<p><img class="preview" alt="skit" src="assets/skit.png" /></p>
				<h1>SKIT</h1>
				<p>SKIT is an advanced front-end for web software development.</p>
			</section>
			<section>
				<div class="flex">
					<div class="col-flex-6">
						<div class="pdr2">
							<h2>Use Skit Dist</h2>
							<div class="field w100p">
								<textarea aria-label="use skit dist" rows="13" readonly>&lt;!DOCTYPE&nbsp;html&gt;
&lt;html&gt;
&lt;head&gt;
	&lt;link&nbsp;rel=&quot;stylesheet&quot;&nbsp;href=&quot;https://skit.network/assets/skit&#45;dist/skit.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;script&nbsp;src=&quot;https://skit.network/assets/skit&#45;dist/skit.js&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</textarea>
							</div>
						</div>
					</div>
					<div class="col-flex-6">
						<div class="pdl2">
							<h2>Clone</h2>
							<div class="flex">
								<div class="col-flex-9">
									<div class="field w100p">
										<input type="text" aria-label="git clone" readonly value="git clone git@github.com:themoiza/skit.git" />
									</div>
								</div>
								<div class="col-flex-3">
									<button class="btn btn-pri w100p">COPY</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>`;
	}

	render(el){

        document.title = this.title;
        document.description = this.description;

		var page = this.content();

		el.innerHTML = page;
	}
}