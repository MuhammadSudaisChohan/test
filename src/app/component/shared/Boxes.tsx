import  { FC } from 'react'
interface IProps{
    header:string,
    description:string,
    number:number ,
    haveBorder?:boolean  
}
const Quarter:FC<IProps> = ({header,description,number,haveBorder=true}) => {
    return (
        <div className={`rounded-md relative flex-1 flex flex-col justify-center px-8 py-16 ${haveBorder && "border"}`}>
        <h4 className='font-bold text-lg'>{header}</h4>
        <p className='mt-2 text-slate-600'>{description}</p>
        <div className='absolute -top-10 text-gray-200 font-bold text-[170px] right-10 -z-10'>{number}</div>
    </div>
    )
}

export default Quarter