classes.Donate = class {

	constructor(app){

		this.app = app;

		this.title = 'Donate';
		this.description = 'Donate';

		this.app.updateTitle(this.title);
		this.app.updateDescription(this.description);
	}

	content(){

		return `
			<section class="donates">
				<h1>Donate</h1>
				<div class="donate">
					<div class="Title">
						<i class="fi fi-brands-bitcoin" style="vertical-align: middle"></i>
					</div>
					<div class="Flex FlexVcenter">
						<div class="ColFlex9">
							<div class="field w100p">
								<input id="btcWallet" type="text" value="bc1qgzf4q2c655pv3kdss4asrlvrntrly97rvu97qr" readonly />
							</div>
						</div>
						<div class="ColFlex3">
							<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('btcWallet')" class="Btn BtnPri w100p" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
						</div>
					</div>
				</div>
				<div class="donate">
					<div class="Title">
						<i class="fi fi-brands-ethereum"></i>
					</div>
					<div class="Flex FlexVcenter">
						<div class="ColFlex9">
							<div class="field w100p">
								<input id="ethWallet" type="text" value="0xCa5110990DDA4a95D3D18146F9E128270BF0c37A" readonly />
							</div>
						</div>
						<div class="ColFlex3">
							<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('ethWallet')" class="Btn BtnPri w100p" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
						</div>
					</div>
				</div>
				<div class="donate">
					<div class="Title">
						<img alt="ltc" src="/assets/ltc.svg">
					</div>
					<div class="Flex FlexVcenter">
						<div class="ColFlex9">
							<div class="field w100p">
								<input id="ltcWallet" type="text" value="ltc1q89qm6t7l4e0mvjelrvhj5sh0x6d0qqm8yt095z" readonly />
							</div>
						</div>
						<div class="ColFlex3">
							<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('ltcWallet')" class="Btn BtnPri w100p" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
						</div>
					</div>
				</div>
				<div class="donate">
					<div class="Title">
						<img alt="bnb" src="/assets/bnb.svg">
					</div>
					<div class="Flex FlexVcenter">
						<div class="ColFlex9">
							<div class="field w100p">
								<input id="bnbWallet" type="text" value="0xCa5110990DDA4a95D3D18146F9E128270BF0c37A" readonly />
							</div>
						</div>
						<div class="ColFlex3">
							<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('bnbWallet')" class="Btn BtnPri w100p" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
						</div>
					</div>
				</div>
				<div class="donate">
					<div class="Title">
					<img alt="bch" src="/assets/bch.svg">
					</div>
					<div class="Flex FlexVcenter">
						<div class="ColFlex9">
							<div class="field w100p">
								<input id="bchWallet" type="text" value="qrzwzmy8jnq044m45yslkfkesxc5ppvj6qscsn77r7" readonly />
							</div>
						</div>
						<div class="ColFlex3">
							<button tabindex="-1" onclick="Tooltip.update(this, 'copied');Copy.id('bchWallet')" class="Btn BtnPri w100p" data-title="copy to clipboard" data-title-position="right"><i class="fi fi-rr-copy"></i> COPY</button>
						</div>
					</div>
				</div>
			</section>`;
	}

	render(el){

		var page = this.content();

		el.innerHTML = page;
	}
}
