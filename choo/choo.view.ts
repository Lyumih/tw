namespace $.$$ {
	export class $tw_choo extends $.$tw_choo {
		result() {
			const result_value  = this.damage() * this.speed()
			const result_value_with_penetration = result_value * this.penetration()
			return `${result_value.toFixed(2)} урона в секунду по одной цели\n${result_value_with_penetration.toFixed(2)} урона в секунду по ${this.penetration()} целям`;
		}
	}
}
