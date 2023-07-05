namespace $.$$ {
	export class $tw_color extends $.$tw_color {
		@ $mol_action
		toggle( next?: any ) {
			this.mode(!this.mode());
		}
		bg_from(): string {
			return this.generate_color();
		}
		bg_target(): string {
			return this.generate_color();
		}
		generate_color(): string {
		    const randomColor = Math.floor(Math.random() * 16777215);
			const hexColor = randomColor.toString(16);
			const paddedHexColor = hexColor.padStart(6, '0');
			return `#${paddedHexColor}`;
		}
	}

	export class $tw_color_box extends $.$tw_color_box {
		sub(): readonly any[] {
			return this.game() ? [this.Common()] :
			[this.center() && this.Center(), this.top() && this.Top(), this.bottom() && this.Bottom()];
		}
	}
}
