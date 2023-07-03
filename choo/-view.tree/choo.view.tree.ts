namespace $ {
	export class $tw_choo extends $mol_page {
		
		/**
		 * ```tree
		 * title \Калькулятор Choo Choo Survivor
		 * ```
		 */
		title() {
			return "Калькулятор Choo Choo Survivor"
		}
		
		/**
		 * ```tree
		 * body /
		 * 	<= Damage_info
		 * 	<= Speed_info
		 * 	<= Penetration_info
		 * 	<= Crit_change_info
		 * 	<= Crit_damage_info
		 * 	<= DPS
		 * 	<= Conclusion
		 * ```
		 */
		body() {
			return [
				this.Damage_info(),
				this.Speed_info(),
				this.Penetration_info(),
				this.Crit_change_info(),
				this.Crit_damage_info(),
				this.DPS(),
				this.Conclusion()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * foot /
		 * 	<= GitHub
		 * 	<= Game
		 * ```
		 */
		foot() {
			return [
				this.GitHub(),
				this.Game()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * damage? 5
		 * ```
		 */
		@ $mol_mem
		damage(next?: any) {
			if ( next !== undefined ) return next as never
			return 5
		}
		
		/**
		 * ```tree
		 * Damage $mol_number
		 * 	value? <=> damage?
		 * 	precision_change 5
		 * ```
		 */
		@ $mol_mem
		Damage() {
			const obj = new this.$.$mol_number()
			
			obj.value = (next?: any) => this.damage(next)
			obj.precision_change = () => 5
			
			return obj
		}
		
		/**
		 * ```tree
		 * Damage_info $mol_labeler
		 * 	title \Урон
		 * 	content / <= Damage
		 * ```
		 */
		@ $mol_mem
		Damage_info() {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Урон"
			obj.content = () => [
				this.Damage()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * speed? 1
		 * ```
		 */
		@ $mol_mem
		speed(next?: any) {
			if ( next !== undefined ) return next as never
			return 1
		}
		
		/**
		 * ```tree
		 * Speed $mol_number
		 * 	value? <=> speed?
		 * 	precision_change 0.33
		 * 	precision 0.01
		 * ```
		 */
		@ $mol_mem
		Speed() {
			const obj = new this.$.$mol_number()
			
			obj.value = (next?: any) => this.speed(next)
			obj.precision_change = () => 0.33
			obj.precision = () => 0.01
			
			return obj
		}
		
		/**
		 * ```tree
		 * Speed_info $mol_labeler
		 * 	title \Скорострельность
		 * 	content / <= Speed
		 * ```
		 */
		@ $mol_mem
		Speed_info() {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Скорострельность"
			obj.content = () => [
				this.Speed()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * penetration? 1
		 * ```
		 */
		@ $mol_mem
		penetration(next?: any) {
			if ( next !== undefined ) return next as never
			return 1
		}
		
		/**
		 * ```tree
		 * Penetration $mol_number value? <=> penetration?
		 * ```
		 */
		@ $mol_mem
		Penetration() {
			const obj = new this.$.$mol_number()
			
			obj.value = (next?: any) => this.penetration(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Penetration_info $mol_labeler
		 * 	title \Пробивание
		 * 	content / <= Penetration
		 * ```
		 */
		@ $mol_mem
		Penetration_info() {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Пробивание"
			obj.content = () => [
				this.Penetration()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * crit_chance? 10
		 * ```
		 */
		@ $mol_mem
		crit_chance(next?: any) {
			if ( next !== undefined ) return next as never
			return 10
		}
		
		/**
		 * ```tree
		 * Crit_chance $mol_number value? <=> crit_chance?
		 * ```
		 */
		@ $mol_mem
		Crit_chance() {
			const obj = new this.$.$mol_number()
			
			obj.value = (next?: any) => this.crit_chance(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Crit_change_info $mol_labeler
		 * 	title \Крит Шанс %
		 * 	content / <= Crit_chance
		 * ```
		 */
		@ $mol_mem
		Crit_change_info() {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Крит Шанс %"
			obj.content = () => [
				this.Crit_chance()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * crit_damage? 50
		 * ```
		 */
		@ $mol_mem
		crit_damage(next?: any) {
			if ( next !== undefined ) return next as never
			return 50
		}
		
		/**
		 * ```tree
		 * Crit_damage $mol_number value? <=> crit_damage?
		 * ```
		 */
		@ $mol_mem
		Crit_damage() {
			const obj = new this.$.$mol_number()
			
			obj.value = (next?: any) => this.crit_damage(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Crit_damage_info $mol_labeler
		 * 	title \Крит Урон %
		 * 	content / <= Crit_damage
		 * ```
		 */
		@ $mol_mem
		Crit_damage_info() {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Крит Урон %"
			obj.content = () => [
				this.Crit_damage()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * result \
		 * ```
		 */
		result() {
			return ""
		}
		
		/**
		 * ```tree
		 * DPS $mol_text text <= result
		 * ```
		 */
		@ $mol_mem
		DPS() {
			const obj = new this.$.$mol_text()
			
			obj.text = () => this.result()
			
			return obj
		}
		
		/**
		 * ```tree
		 * conclusion \
		 * 	\# Выводы
		 * 	\В игре Choo Choo Survivor выгодно сначала **полностью прокачать Урон** и потом прокачивать Пробивание вместе с скорострельностью
		 * 	\Малое значение криш шанса *не даёт значительного увелечения урона* - поэтому лучше всего держашть криш шанс > 50%
		 * ```
		 */
		conclusion() {
			return "# Выводы\nВ игре Choo Choo Survivor выгодно сначала **полностью прокачать Урон** и потом прокачивать Пробивание вместе с скорострельностью\nМалое значение криш шанса *не даёт значительного увелечения урона* - поэтому лучше всего держашть криш шанс > 50%"
		}
		
		/**
		 * ```tree
		 * Conclusion $mol_text text <= conclusion
		 * ```
		 */
		@ $mol_mem
		Conclusion() {
			const obj = new this.$.$mol_text()
			
			obj.text = () => this.conclusion()
			
			return obj
		}
		
		/**
		 * ```tree
		 * GitHub $mol_link uri \https://github.com/Lyumih/tw/tree/main/choo
		 * ```
		 */
		@ $mol_mem
		GitHub() {
			const obj = new this.$.$mol_link()
			
			obj.uri = () => "https://github.com/Lyumih/tw/tree/main/choo"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Game $mol_link uri \https://store.steampowered.com/app/2336200/Choo_Choo_Survivor/
		 * ```
		 */
		@ $mol_mem
		Game() {
			const obj = new this.$.$mol_link()
			
			obj.uri = () => "https://store.steampowered.com/app/2336200/Choo_Choo_Survivor/"
			
			return obj
		}
	}
	
}

