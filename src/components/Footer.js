
import '../styles/Footer.css'
import { useState } from 'react'

function Footer(){
const [inputValue, setInputValue]=useState ('')

function handleInput(e){
    setInputValue(e.target.value)
}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour tous les passionnés de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>

        <form>
            <input 
                placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue} />
            <button
                onClick={()=>alert(inputValue)}
            >Envoyer</button>
            </form>

		</footer>
	)
}

export default Footer;