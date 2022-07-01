import {FcSearch, FcAddImage} from 'react-icons/fc'
import {BiAccessibility} from 'react-icons/bi'

export default function Header () {

    return <div>

        <input />
        <FcSearch className='maykal' onClick={() => console.log('search clicked!')}/>
        <FcAddImage />
        <BiAccessibility />
    </div>
}