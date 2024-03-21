import Image from 'next/image';
import loading from "../../public/loading.gif"
export default function Loading () {
    return(
        <>
        <div className='grid grid-cols-1'>
            <h1>読み込み中。。。。</h1>
            <Image
            src={loading} 
            alt="Loading..."
            />
        </div>
        </>
    )
}