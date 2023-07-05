namespace $.$$ {
	export class $tw_color extends $.$tw_color {
		@ $mol_action
		toggle( next?: any ) {
			if (!this.mode()) {
				this.bg_from(this.generate_random_h())
				this.bg_target(this.generate_random_h())
				this.h_mix(this.generate_random_h())
			} else {
				console.log(this.bg_from(), this.bg_target(), this.h_mix())
				console.log(this.delta())
			}
			this.mode(!this.mode());
		}
		delta(): number {
			const delta_target = this.bg_from() - this.bg_target()
			const delta_mix = this.bg_from() - this.h_mix()
			const delta_result = Math.abs(delta_target - delta_mix)
			const delta_coeff = Math.abs(delta_target / delta_mix)
			console.log({delta_target, delta_mix, delta_result, delta_coeff, bg_from:this.bg_from(), bg_target:this.bg_target(), h_mix: this.h_mix()})
			return Math.floor(delta_coeff) * 100
		}
		@ $mol_mem
		bg_from(next?: number): number {
			console.log('test')
			return next ?? this.generate_random_h()
		}
		@ $mol_mem
		bg_target(next?: number): number {
			return next ?? this.generate_random_h()
		}
		bg_mix(): number {
			this.mode() && $mol_state_time.now(200)
			console.log(this.h_mix())
			this.h_mix() + 3 > 359 ? this.h_mix(0) : this.h_mix(this.h_mix() + 5)
			return this.h_mix()
		}
		@ $mol_mem
		h_mix(next?: number): number {
			return next ?? this.generate_random_h()
		}
		result(): string {
			return `mix\nspeed: ${this.speed()}\nmax: 2.4`
		}
		generate_random_h(): number {
		    return Math.floor(Math.random() * 360);
		}
	}

	export class $tw_color_box extends $.$tw_color_box {
		bg_all(): string {
			return `hsl(${this.bg_all_h()}, 100%, 80%)`
		}
		sub(): readonly any[] {
			return this.game() ? [this.Common()] :
			[this.center() && this.Center(), this.top() && this.Top(), this.bottom() && this.Bottom()];
		}
	}
}
