classes.PaginationPage = class {

	constructor(app){

		this.app = app;

		this.title = 'Pagination';
		this.description = 'Pagination';

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
					<h1>Pagination</h1>
					<p>Pagination.</p>
					<div id="idPagination1" class="Pagination">
						<button type="button" class="Btn BtnTrans PagLeft"></button>
						<button type="button" class="Btn BtnTrans PagAll"></button>
						<button type="button" class="Btn BtnTrans PagRight"></button>
					</div>
					<p>Data here</p>
					<div id="idPagination2" class="Pagination">
						<button type="button" class="Btn BtnTrans PagLeft"></button>
						<button type="button" class="Btn BtnTrans PagAll"></button>
						<button type="button" class="Btn BtnTrans PagRight"></button>
					</div>
				</div>
			</div>`;
	}

	render(el){

		var page = this.content();

		el.innerHTML = page;

		var pagination = new Pagination(['idPagination1', 'idPagination2']);

		pagination.setTotal(100000);
		pagination.setByPage(100);

		pagination.setCallBack(() => {
			console.log(pagination.getByPage());
		});
	}
}