const Testimonial = ({ data } : { data: { name: string, username: string, image: string, description: string } }) => {
    return (
        <div className="max-w-[21.5rem] rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="flex flex-row">
                    <img className="w-16 h-16 mt-2 mr-3 rounded-full shadow-lg" src={data.image} alt={data.username} />
                    <div className="flex flex-col mt-3">
                        <p className="font-bold text-l">{data.name}</p>    
                        <p className="text-sm text-gray-500">@{data.username}</p>
                    </div>
                </div>
                <p className="text-gray-500 text-base mt-2">
                   {data.description}
                </p>
            </div>
        </div>
    )
}

export default Testimonial;