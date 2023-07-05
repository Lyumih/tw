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
		 * mode? true
		 * ```
		 */
		@ $mol_mem
		mode(next?: any) {
			if ( next !== undefined ) return next as never
			return true
		}
		
		/**
		 * ```tree
		 * speed 2.4
		 * ```
		 */
		speed() {
			return 2.4
		}
		
		/**
		 * ```tree
		 * event * click? <=> toggle?
		 * ```
		 */
		event() {
			return {
				click: (next?: any) => this.toggle(next)
			} as Record< string, any >
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
		 * toggle? null
		 * ```
		 */
		@ $mol_mem
		toggle(next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * bg_from 120
		 * ```
		 */
		bg_from() {
			return 120
		}
		
		/**
		 * ```tree
		 * From_box $tw_color_box
		 * 	bg_all_h <= bg_from
		 * 	game <= mode
		 * 	common \from +
		 * 	center \82% -
		 * ```
		 */
		@ $mol_mem
		From_box() {
			const obj = new this.$.$tw_color_box()
			
			obj.bg_all_h = () => this.bg_from()
			obj.game = () => this.mode()
			obj.common = () => "from +"
			obj.center = () => "82% -"
			
			return obj
		}
		
		/**
		 * ```tree
		 * bg_mix 50
		 * ```
		 */
		bg_mix() {
			return 50
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
		 * Mix_box $tw_color_box
		 * 	bg_all_h <= bg_mix
		 * 	game <= mode
		 * 	common <= result
		 * 	top \need
		 * 	bottom \your
		 * ```
		 */
		@ $mol_mem
		Mix_box() {
			const obj = new this.$.$tw_color_box()
			
			obj.bg_all_h = () => this.bg_mix()
			obj.game = () => this.mode()
			obj.common = () => this.result()
			obj.top = () => "need"
			obj.bottom = () => "your"
			
			return obj
		}
		
		/**
		 * ```tree
		 * bg_target 240
		 * ```
		 */
		bg_target() {
			return 240
		}
		
		/**
		 * ```tree
		 * Target_box $tw_color_box
		 * 	bg_all_h <= bg_target
		 * 	game <= mode
		 * 	common \=target
		 * 	top \= target
		 * 	bottom \your
		 * ```
		 */
		@ $mol_mem
		Target_box() {
			const obj = new this.$.$tw_color_box()
			
			obj.bg_all_h = () => this.bg_target()
			obj.game = () => this.mode()
			obj.common = () => "=target"
			obj.top = () => "= target"
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
	
	export class $tw_color_box extends $mol_view {
		
		/**
		 * ```tree
		 * game false
		 * ```
		 */
		game() {
			return false
		}
		
		/**
		 * ```tree
		 * bg_all_h 0
		 * ```
		 */
		bg_all_h() {
			return 0
		}
		
		/**
		 * ```tree
		 * style *
		 * 	^
		 * 	background <= bg_all
		 * ```
		 */
		style() {
			return {
				...super.style(),
				background: this.bg_all()
			} as Record< string, any >
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
		 * bg_all \green
		 * ```
		 */
		bg_all() {
			return "green"
		}
		
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
		 * Common $mol_text text <= common
		 * ```
		 */
		@ $mol_mem
		Common() {
			const obj = new this.$.$mol_text()
			
			obj.text = () => this.common()
			
			return obj
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
		 * Center $mol_paragraph title <= center
		 * ```
		 */
		@ $mol_mem
		Center() {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => this.center()
			
			return obj
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
		 * Top $mol_paragraph title <= top
		 * ```
		 */
		@ $mol_mem
		Top() {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => this.top()
			
			return obj
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
		 * Bottom $mol_paragraph title <= bottom
		 * ```
		 */
		@ $mol_mem
		Bottom() {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => this.bottom()
			
			return obj
		}
	}
	
}

