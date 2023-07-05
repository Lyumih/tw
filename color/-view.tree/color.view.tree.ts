namespace $ {
	export class $tw_color extends $mol_page {
		
		/**
		 * ```tree
		 * mod \game|result
		 * ```
		 */
		mod() {
			return "game|result"
		}
		
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
		 * 	<= From_box
		 * 	<= Mix_box
		 * 	<= Target_box
		 * ```
		 */
		body() {
			return [
				this.From_box(),
				this.Mix_box(),
				this.Target_box()
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
		 * From_box $tw_box
		 * 	common \from
		 * 	center \82% -
		 * ```
		 */
		@ $mol_mem
		From_box() {
			const obj = new this.$.$tw_box()
			
			obj.common = () => "from"
			obj.center = () => "82% -"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Mix_box $tw_box
		 * 	common \mix speed: 0.5 max: 2.4
		 * 	top \need
		 * 	bottom \your
		 * ```
		 */
		@ $mol_mem
		Mix_box() {
			const obj = new this.$.$tw_box()
			
			obj.common = () => "mix speed: 0.5 max: 2.4"
			obj.top = () => "need"
			obj.bottom = () => "your"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Target_box $tw_box
		 * 	common \target
		 * 	top \need
		 * 	bottom \your
		 * ```
		 */
		@ $mol_mem
		Target_box() {
			const obj = new this.$.$tw_box()
			
			obj.common = () => "target"
			obj.top = () => "need"
			obj.bottom = () => "your"
			
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
		 * common \
		 * ```
		 */
		common() {
			return ""
		}
		
		/**
		 * ```tree
		 * center \
		 * ```
		 */
		center() {
			return ""
		}
		
		/**
		 * ```tree
		 * top \
		 * ```
		 */
		top() {
			return ""
		}
		
		/**
		 * ```tree
		 * bottom \
		 * ```
		 */
		bottom() {
			return ""
		}
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Common
		 * 	<= Center
		 * 	<= Top
		 * 	<= Bottom
		 * ```
		 */
		sub() {
			return [
				this.Common(),
				this.Center(),
				this.Top(),
				this.Bottom()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Common $mol_button_major title <= common
		 * ```
		 */
		@ $mol_mem
		Common() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => this.common()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Center $mol_button_major title <= center
		 * ```
		 */
		@ $mol_mem
		Center() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => this.center()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Top $mol_button_major title <= top
		 * ```
		 */
		@ $mol_mem
		Top() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => this.top()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Bottom $mol_button_major title <= bottom
		 * ```
		 */
		@ $mol_mem
		Bottom() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => this.bottom()
			
			return obj
		}
	}
	
}

