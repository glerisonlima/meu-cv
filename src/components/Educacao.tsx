import { CalendarDays } from 'lucide-react';

type EducacaoProps = {
    data: String;
    status: String;
    titulo: String;
    local: String;
}

export function Educacao ({data, status, titulo, local}: EducacaoProps) {
    return (
        <div className='mt-2'>
            <span className="text-xs flex items-center gap-2 text-slate-400"><CalendarDays size={12}/> {data} - {status}</span>
            <p className='text-sm'>{titulo} - {local}</p>
        </div>
    )
}