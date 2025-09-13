import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

config.autoAddCss = false

const SocialMedia = () => {
  return (
    <div className='min-h-[50vh] flex items-center justify-center bg-black items-stretch'>
        <div className ='left w-[50vw]  bg-black flex items-center justify-center gap-5'>
            <div className = ' items-center justify-center'>
                <h2 className = 'text-red-900 font-extrabold text-2xl'>
                    ANIMATO
                </h2>               
            </div>
            <div className = ''>
                <h5 className = 'text-yellow-300 font-bold text-2xl'>
                    Creative Studio
                </h5>
                <h3 className = 'text-yellow-100 font-bold text-xl'>
                    ANIMATIONS
                </h3>
                  <h3 className = 'text-cyan-100 font-bold text-sm'>
                    USER GUIDE
                </h3>
            </div>
        </div>  
        <div className ='right w-[50vw]  bg-gray-800'>
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
       </div>
    </div>
  )
}

export default SocialMedia
