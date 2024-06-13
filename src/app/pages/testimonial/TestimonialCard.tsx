import './style.css';


const TestimonialCard = ({ data } : { data: { name: string, username: string, image: string, description: string } }) => {
    return (
        <div className="mx-auto w-[340px] h-[233px] flex flex-col p-6 gap-4 border border-solid border-neutral-200 rounded-lg bg-white shadow-m text-neutral-600">
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