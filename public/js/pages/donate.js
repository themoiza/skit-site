classes.Donate = class {

	constructor(app){

		this.app = app;

		this.title = 'Donate';
		this.description = 'Donate';
	}

	content(){

		return `
			<section class="center">
				<h1>Donate</h1>
			</section>`;
	}

	render(el){

        document.title = this.title;
        document.description = this.description;

		var page = this.content();

		el.innerHTML = page;
	}
}
