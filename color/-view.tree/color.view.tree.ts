namespace $ {
	export class $tw_color extends $mol_page {
		
		/**
		 * ```tree
		 * title \Игра в цвета от @artalar
		 * ```
		 */
		title() {
			return "Игра в цвета от @artalar"
		}
		
		/**
		 * ```tree
		 * body /
		 * 	<= From
		 * 	<= Mix
		 * 	<= Target
		 * ```
		 */
		body() {
			return [
				this.From(),
				this.Mix(),
				this.Target()
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
		 * From $tw_box
		 * ```
		 */
		@ $mol_mem
		From() {
			const obj = new this.$.$tw_box()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Mix $tw_box
		 * ```
		 */
		@ $mol_mem
		Mix() {
			const obj = new this.$.$tw_box()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Target $tw_box
		 * ```
		 */
		@ $mol_mem
		Target() {
			const obj = new this.$.$tw_box()
			
			return obj
		}
		
		/**
		 * ```tree
		 * GitHub $mol_link uri \https://github.com/Lyumih/tw/tree/main/color
		 * ```
		 */
		@ $mol_mem
		GitHub() {
			const obj = new this.$.$mol_link()
			
			obj.uri = () => "https://github.com/Lyumih/tw/tree/main/color"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Game $mol_link uri \https://github.com/artalar/color-game-reatom
		 * ```
		 */
		@ $mol_mem
		Game() {
			const obj = new this.$.$mol_link()
			
			obj.uri = () => "https://github.com/artalar/color-game-reatom"
			
			return obj
		}
	}
	
	export class $tw_box extends $mol_view {
		
		/**
		 * ```tree
		 * sub / \from
		 * ```
		 */
		sub() {
			return [
				"from"
			] as readonly any[]
		}
	}
	
}

