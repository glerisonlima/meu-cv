import { CalendarDays } from 'lucide-react';

type ExperienciaProps = {
    title: string;
    data: string;
    datafim: string;
    descricao: string;
    empresa: string;
};

export function Experiencia ({title, data, datafim, descricao, empresa}: ExperienciaProps) {
    return (
        <div className='mt-3'>
            <h1 className="text-xl">{title} - {empresa}</h1>
            <span className="text-xs flex items-center gap-2 text-slate-400"><CalendarDays size={12}/> {data} - {datafim}</span>
            <p className='text-sm'>{descricao}</p>
        </div>
    )
}