import Data from './Data.json';
import Post from './Post';
import LazyLoad from 'react-lazyload';

export default function Main() {
    return (
        <>
        <div className='body'>
            {Data.map((data) => {
                return (
                    <LazyLoad  key={data.id} height={100}
                   placeholder={"...Loading"}>
                        <Post key={data.id} userId={data.userId} id={data.id} title={data.title} body={data.body} />
                    </LazyLoad>
                )
            })}
        </div>
        </>
    )
}