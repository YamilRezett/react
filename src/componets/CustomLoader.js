 import Skeleton  , { SkeletonTheme } from 'react-loading-skeleton'
 import 'react-loading-skeleton/dist/skeleton.css'

 const CustomLoader = () => {
    return (
       <div className='loader'>
            <SkeletonTheme baseColor="yellow" highlightColor="white">
                 <Skeleton count={1} height={30}/>
                 <Skeleton count={1} height={30}/>
                 <Skeleton count={1} height={30}/>
                 <Skeleton count={1} height={30}/>
            </SkeletonTheme>
         </div>
     )
 }
 export default CustomLoader