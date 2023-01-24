classes.TablePage = class {

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
					<h1>Table</h1>
                    <table class="Table">
                        <thead>
                            <tr>
                                <th></th>
                                <th class="TxLeft">Semester</th>
                                <th class="TxLeft">Grade</th>
                            </tr>
                        </head>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Jan - April</td>
                                <td>Credit</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>May - August</td>
                                <td>Pass</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>September - December</td>
                                <td>Distinction</td>
                            </tr>
                        </tbody>
                    </table>
				</div>
			</div>`;
	}

	render(el){

		var page = this.content();

		el.innerHTML = page;

		hljs.highlightAll();
	}
}