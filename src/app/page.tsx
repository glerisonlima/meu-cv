"use client";

import { Contatos } from '@/components/Contatos'
import { Experiencia } from '@/components/Experiencia'
import { Educacao } from '@/components/Educacao'
import { Github , Mail, Linkedin, MapPinned, Phone, Printer, ChevronsRight} from 'lucide-react';


export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen 
                    p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] 
                    print:m-0 print:p-0 
                    ">
      <section className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold'>Glerison Ferreira De Lima</h1>
        <span>Desenvolvedor Full Stack e Mobile</span>
      </section>
      <section className='w-full'>
      
        <Contatos Icon={Mail} descricao="glerisonlima@gmail.com" link="mailto:glerisonlima@gmail.com"/>        
        <Contatos Icon={Github} link="https://github.com/glerisonlima" descricao="github.com/glerisonlima"/>
        <Contatos Icon={Linkedin} link="https://www.linkedin.com/in/glerison-lima/" descricao="linkedin.com/in/glerisonlima"/>
        <Contatos Icon={MapPinned} link="#" descricao="Fortaleza, Ceará, Brasil"/>
        <Contatos Icon={Phone} link="https://wa.me/5585991380457" descricao="(85) 99138-0457"/>
        
      </section>
      <section className='w-full'>
        <h2>Resumo do Perfil</h2>
        <p>Profissional com 15 anos de experiência na área de tecnologia, tendo atuado grande parte desse período como analista de suporte técnico. Nos últimos quatro anos, venho atuando com desenvolvimento web Full Stack. Sou altamente competente, tenho facilidade para trabalhar em equipe e sou motivado por desafios.</p>
      </section>
      <section className='w-full'>
          <h2>Hard-skills</h2>
          <ul>
            <li><ChevronsRight size={16}/> Javascript / Typescript</li>
            <li><ChevronsRight size={16}/> Java / Spring</li>
            <li><ChevronsRight size={16}/> Reactjs / React Native</li>
            <li><ChevronsRight size={16}/> Mysql / Oracle / Postgress / SqlServer</li>
            <li><ChevronsRight size={16}/> Docker</li>
          </ul>
      </section>
      <section className='w-full'>
          <h2>Soft-skills</h2>
          <ul>
            <li><ChevronsRight size={16}/> Comunicação eficaz</li>
            <li><ChevronsRight size={16}/> Trabalho em equipe</li>
            <li><ChevronsRight size={16}/> Resolução de problemas</li>
            <li><ChevronsRight size={16}/> Aprendizado continuo</li>
            <li><ChevronsRight size={16}/> Adaptabilidade e flexibilidade</li>
          </ul>
      </section>
      <section className='w-full'>
        <h2>Experiências Relevantes</h2>
        <Experiencia 
            title="Analista de Desenvolvimento de Sistema" 
            empresa="CAFAZ SAÚDE" 
            data="2 anos 10 meses" 
            datafim="atualmente" 
            descricao="Analisar e implementar melhorias e soluções customizadas no sistema
                        ERP da empresa (SALUTIS) framework nginstack desenvolvido na linguagem javascript,
                        implementar e desenvolver sistemas internos atuando no frontend e no backend com tecnologias
                        como html, css,javascript, php, reactjs e etc"/>
        <Experiencia 
            title="Analista de Suporte Técnico" 
            empresa="CAFAZ SAÚDE" 
            data="1 ano 2 meses" 
            datafim="nov 2021" 
            descricao="Manutenção de computadores, Administração de servidores,
                        Gerenciamento de redes, Processos administrativos voltado a TI, Suporte ao usuário e
                        colaboradores"/>
        <Experiencia 
            title="Desenvolvedor React Native" 
            empresa="CAPEF" 
            data="1 ano 6 meses" 
            datafim="Freelancer" 
            descricao="Atualizar e implementar melhorias no APP CAPEF desenvolvido em
                        React Native, versionamento de código, deploy nas lojas Appstore e Google Play"/>
        <Experiencia 
            title="Analista de Suporte Técnico" 
            empresa="Grupo Casa Magalhães" 
            data="4 anos 3 meses" 
            datafim="jun 2016" 
            descricao="Análise de banco de dados, Atendimento ao cliente N2, suporte ao
                        sistema Syspdv"/>
      </section>
      <section className='w-full'>
        <h2>Educação / Cursos</h2>
        <Educacao data="2024.1" status="(Concluído)" local="Estacio - FIC" titulo="Analise e desenvolvimento de sistemas" />
        <Educacao data="2024.1" status="(Concluído)" local="Rocketseat" titulo="Reactjs Ignite" />
        <Educacao data="2024.1" status="(Concluído)" local="Rocketseat" titulo="React Native Ignite" />
        <Educacao data="2024.1" status="(Concluído)" local="Hcode" titulo="Javascript curso completo" />
        <Educacao data="2024.1" status="(Concluído)" local="Dell" titulo="Java Básico - Programação Orientada a Objetos com Java" />
        <Educacao data="2024.1" status="(Concluído)" local="Dell" titulo="Java Intermediário - Desenvolvimento de aplicações WEB com Java e banco de dados" />
        <Educacao data="2024.1" status="(Concluído)" local="Marcio Ballen" titulo="Spring Boot & MVC com AJAX" />
        <Educacao data="09/2024" link="https://app.rocketseat.com.br/certificates/45ecd517-fb2b-4a0a-b166-3e0f3c9f8ed7" status="(Concluído)" local="Rocketseat" titulo="NLW Pocket: Javascript - Full-stack Intermediário" />
        <Educacao data="08/2024" link="https://app.rocketseat.com.br/certificates/cca00bb8-aba3-4cac-9bc7-a0541efc3f17" status="(Concluído)" local="Rocketseat" titulo="Fundamentos do .NET" />
        <Educacao data="04/2024" link="https://app.rocketseat.com.br/certificates/0d095e37-afc5-4df8-9bd5-b9250f31fed1" status="(Concluído)" local="Rocketseat" titulo="NLW Unite - Nodejs" />
        <Educacao data="08/2023" link="https://app.rocketseat.com.br/certificates/ec077efa-129c-4921-8276-9cc7c351a97e" status="(Concluído)" local="Rocketseat" titulo="ReactJS" />
        <Educacao data="01/2024" status="(Concluído)" local="CertiProf" titulo="Scrum Foundation Professional Certification - SFPC" />
      </section>
      <div className='fixed bottom-3 right-14'>
        <button className='bg-orange-700 p-4 rounded-full print:hidden' onClick={() => window.print()}>
          <Printer />
        </button>
      </div>
    </div>
  );
}
