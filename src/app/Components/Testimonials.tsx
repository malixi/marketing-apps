const Testimonial = ({ data } : { data: { name: string, username: string, image: string, description: string } }) => {
    return (
        <div className="max-w-[21.5rem] rounded-lg bg-white overflow-hidden shadow">
            <div className="px-[1.5em] py-5 text-neutral-600">
                <div className="flex flex-row mt-1">
                    <img className="size-12 mr-4 rounded-[50px] shadow-lg" src={data.image} />
                    <div className="flex flex-col">
                    <p className="whitespace-nowrap font-semibold text-lg text-neutral-900">{data.name}</p>    
                    <p className="text-sm">@{data.username}</p>
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