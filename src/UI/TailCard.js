
export default function TailCard({imgUrl, title, content, kw}) {
    // kw.split(',').map()
    const kwArr = kw.includes(',') ? kw.split(',') : [kw] 
    const tag = (kwArr.length !== 0) ? kwArr.map(item => <span key={item} className="inline-flex bg-slate-400 p-1 m-2 rounded-xl">{item}</span>) : console.log("빈배열")
    console.log('kwArr', kwArr)
    console.log('tag', tag)

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <img className="rounded-t-lg w-full h-60" src={imgUrl} alt="" />
            <div className="p-5">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {title}</h1>
                <p className="mb-3 font-normal text-gray-700">
                    {content}</p>
                <p>{tag}</p>
                {/* <p className="inline-flex items-center px-3 py-2
                            text-sm font-medium text-center text-white 
                            bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Read more
                </p> */}
            </div>
        </div>
    )
}
