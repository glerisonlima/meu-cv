type ContatosProps = {
    Icon: any;
    link: String;
    descricao: String;
}

export function Contatos ({Icon, link, descricao }: ContatosProps ){    

    return (
        <div className="flex gap-2 p-2">
            <Icon />
            <a href={`${link}`} target="_blank">{descricao}</a>
        </div>
    )

    
}