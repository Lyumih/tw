namespace $.$$ {
	export class $tw_choo extends $.$tw_choo {

		crit_factor() {
			return this.crit_chance() >= 100 ? this.crit_damage() : this.crit_chance() / 100 * this.crit_damage() ;
		}
		result() {
			const result_value  = this.damage() * this.speed()
			const result_value_with_penetration = result_value * this.penetration()
			return `# Итого: \n${result_value.toFixed(2)} урона в секунду по одной цели.\n` +
			`${result_value_with_penetration.toFixed(2)} урона в секунду по ${this.penetration()} целям\n` +
			`Эффективность Крита: стабильно + ${this.crit_factor().toFixed(1)}% урона`;

		}
	}
}
