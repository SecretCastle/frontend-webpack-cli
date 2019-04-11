<script>
import Logo from '@/assets/images/logo';
import style from './index.less';
export default {
	render(h) {
		return (
			<div class={style.welcome}>
				<img class={style.logo} src={Logo}/>
				<p>Welcome Vue Template</p>
			</div>
		)
	}
}
</script>
