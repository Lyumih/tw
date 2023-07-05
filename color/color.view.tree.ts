namespace $.$$ {
	export class $tw_color extends $.$tw_color {
		toggle( next?: any ) {
			this.mode(!this.mode());
		}
	}

	export class $tw_color_box extends $.$tw_color_box {
		sub(): readonly any[] {
			return this.game() ? [this.Common()] :
			[this.center() && this.Center(), this.top() && this.Top(), this.bottom() && this.Bottom()];
		}
	}
}
