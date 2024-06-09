const Testimonial = ({ data } : { data: { name: string, username: string, image: string, description: string } }) => {
    return (
        <div className="max-w-[21.5rem] rounded-lg bg-white overflow-hidden shadow-lg">
            <div className="px-6 py-5 text-neutral-600">
                <div className="flex flex-row">
                    <img className="w-12 h-12 mt-1 mr-1 rounded-[50px] shadow-lg" src={data.image}/>
                    <div className="flex flex-col mt-1 ml-3">
                        <p className="font-semibold text-lg text-neutral-900">{data.name}</p>    
                        <p className="text-sm " >@{data.username}</p>
                    </div>
                </div>
                <p className="text-base mt-4">
                   {data.description}
                </p>
            </div>
        </div>
    )
}

export default Testimonial;