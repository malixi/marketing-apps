import './style.css';


const TestimonialCard = ({ data } : { data: { name: string, username: string, image: string, description: string } }) => {
    return (
        <div className="w-[21.25rem] flex flex-col justify-center items-start gap-4 rounded border border-gray-200 bg-white shadow-md p-6">
                <div className="flex items-center gap-4 w-full">
                    <img className="size-12 rounded-[50px] shadow-lg" src={data.image} />
                    <div className="flex flex-col">
                    <p className="whitespace-nowrap font-semibold text-lg text-neutral-900">{data.name}</p>    
                    <p className="text-sm">@{data.username}</p>
                    </div>
                </div>
                <p className="text-base w-full">
                   {data.description}
                </p>
        </div>
    )
}

export default TestimonialCard;