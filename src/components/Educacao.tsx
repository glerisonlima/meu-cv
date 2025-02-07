import { CalendarDays } from 'lucide-react';
import { GraduationCap } from 'lucide-react';

type EducacaoProps = {
    data: String;
    status: String;
    titulo: String;
    local: String;
    link?: String;
}

export function Educacao ({data, status, titulo, local, link}: EducacaoProps) {
    return (
        <div className='hover:bg-zinc-900 p-4 rounded-lg ml-[-16px] hover:animate-pulse'>
            <span className="text-xs flex items-center gap-2 text-slate-400"><CalendarDays size={12}/> {data} - {status}</span>
            <p className='text-lg'>{titulo} - {local}</p>
            {link && (
                <a href={`${link}`} className='flex gap-2 items-center text-slate-400 text-xs'>
                <GraduationCap size={12}/>
                Certificado
            </a>
            )}            
        </div>
    )
}