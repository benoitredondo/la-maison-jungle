
import '../styles/Footer.css'

function Footer(){

function doThis (e){
    e.preventDefault()
    alert(e.target['my_email'].value)
}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour tous les passionnés de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>

        <form onSubmit={doThis}>
            <input typ='text' name='my_email' defaultValue='Tapez votre adresse email'/>
            <button type='submit'>Envoyer</button>
            </form>
		</footer>
	)
}

export default Footer;