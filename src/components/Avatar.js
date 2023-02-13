//styles
import './Avatar.css'



export default function Avatar({ src }) {
  return (
    <div className='Avatar'>
        <img src={src} alt="user avatar" />
    </div>
  )
}
