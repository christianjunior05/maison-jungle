function handleClick() {
    console.log('✨ Ceci est un clic ✨')
}

export default handleClick
    return (
            <ul>
            <li className='lmj-plant-item' onClick={handleClick}>
                <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
                {name}
                <div>
                    <CareScale careType='water' scaleValue={water} />
                    <CareScale careType='light' scaleValue={light} />
                </div>
            </li>
            </ul>

)

