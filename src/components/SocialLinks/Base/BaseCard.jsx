import { AiFillHeart } from 'react-icons/ai'
import { HiOutlineExternalLink } from 'react-icons/hi'
import AnchorTag from '../../AnchorTag/AnchorTag'


export default function BaseCard({
  platform = '',
  url = '',
  jsxIcon = <AiFillHeart />,
  customPlatformClasses = '',
  customIconClasses = '',
  customCardClasses = '',
  customUrlIconClasses = ''
}) {


  return (
    <>
      {platform.length > 0 && (
        <div
          className={`card rounded-lg my-6 sm:my-4 md:my-6 transition-shadow hover:shadow-md removeBlueHighlight ${customCardClasses}
              relative top-0 left-0 hover:-top-1.5 hover:-left-1.5  mb:w-10/12 sm:w-full mx-auto
              focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:brightness-120 hover:bg-transparent
            `}
        >
          <AnchorTag hrefUrl={url}>
            <div className='flex gap-x-4 '>
 
                {jsxIcon}
              
           
                  <p
                    className={'${customPlatformClasses'} >
                    {platform.length > 0 ? platform : 'Platform'}
                  </p>        
            </div>
          </AnchorTag>
        </div>
      )}
    </>
  )
}
