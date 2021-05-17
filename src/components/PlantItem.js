
import CareScale from './CareScale'
import '../styles/PlantItem.css'

function doThis(plantName) {
    alert(`Vous voulez acheter 1 ${plantName}`)
}


function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={id} className='lmj-plant-item' onClick={() => doThis(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem