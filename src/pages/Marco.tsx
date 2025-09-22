import React from "react";
import Slider from "../components/Slider";
import { useNavigate } from "react-router-dom";

const Danca = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      {/* Logo no canto superior esquerdo */}
      <div onClick={() => navigate("/home")} className="absolute top-8 left-8 z-50">
        <img
          src="/lovable-uploads/19d8a974-ff74-443a-957a-155462028f2f.png"
          alt="Logo SEMANA - a arte moderna"
          className="h-16 w-auto opacity-0"
        />
      </div>

      {/* Primeira seção - Hero com imagem de fundo */}
      <section
        className="h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url('/lovable-uploads/935d59af-cc61-4e7b-bc69-36d59f03dc27.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 h-full flex items-center justify-center"></div>
      </section>

      {/* Segunda seção - Texto centralizado fundo branco */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Arte em Movimento
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              A dança é uma forma de arte que transcende barreiras culturais e
              conecta pessoas através do movimento. Nossos festivais celebram a
              diversidade cultural e a riqueza das tradições que moldam nossa
              identidade. Cada apresentação conta uma história única, revelando
              a beleza da expressão humana através da arte corporal.
            </p>
          </div>
        </div>
      </section>

      {/* Terceira seção - Fundo preto, imagem à esquerda, texto à direita */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/lovable-uploads/0739d145-6e3a-47e7-97ec-b7dc45e27c2d.png"
                alt="Arte tradicional indígena"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-4xl font-bold mb-8 text-white">
                HISTÓRIA DA DANÇA NO BRASIL
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                A história da dança no Brasil é marcada por um encontro de
                culturas. Antes da colonização, os povos indígenas já praticavam
                danças com funções religiosas, sociais e ligadas à natureza. Com
                a chegada dos colonizadores portugueses no século XVI, novas
                danças europeias foram introduzidas, como o fandango, a valsa e
                a contradança. Paralelamente, os africanos trazidos à força como
                escravizados trouxeram consigo uma riqueza cultural enorme,
                incluindo danças ligadas à espiritualidade, à luta (como a
                capoeira) e à celebração. Essa mistura de tradições originou
                muitas das manifestações culturais brasileiras atuais. Ritmos
                como o samba, o frevo, o maracatu, o axé e o forró são exemplos
                de como a dança se desenvolveu de forma única no Brasil, sempre
                profundamente conectada à música (a chamada Segunda Arte). Com o
                tempo, a dança também passou a ser praticada em ambientes mais
                formais e artísticos, como os ballets clássicos e as companhias
                de dança contemporânea, mas sempre mantendo raízes populares e
                identitárias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quarta seção - Fundo preto, texto à esquerda, nova imagem à direita */}
      <section className="py-20 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-4xl font-bold mb-8 text-white">
                A DANÇA NAS ESCOLAS
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                A presença da dança nas escolas é fundamental para o
                desenvolvimento integral dos estudantes. Além de promover o
                bem-estar físico, a coordenação motora e a consciência corporal,
                a dança estimula a criatividade, a sensibilidade artística e o
                trabalho em grupo.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                Instituições como o SESI (Serviço Social da Indústria) têm se
                destacado por incentivar a cultura dentro do ambiente escolar,
                incluindo a dança como uma importante forma de expressão. Uma
                das iniciativas de destaque é o SESI Dance, uma competição que
                reúne grupos coreográficos das unidades escolares, promovendo a
                valorização da arte, da identidade juvenil e do talento dos
                alunos.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Em 2024, a unidade do SESI Sorocaba foi campeã do SESI Dance,
                mostrando o alto nível de dedicação e expressão artística dos
                estudantes. Eventos como esse reforçam como a dança pode
                transformar o ambiente escolar, dando visibilidade à cultura,
                ampliando horizontes e estimulando o protagonismo juvenil. Ao
                integrar a dança ao currículo e às atividades extracurriculares,
                a escola amplia seu papel para além da transmissão de conteúdos,
                tornando-se um espaço de formação humana, cultural e cidadã.
              </p>
            </div>
            <div className="relative h-96 md:h-[500px] flex items-center justify-center">
              <img
                src="/lovable-uploads/1fc483c0-38bf-426e-8fe1-925eb6f589b0.png"
                alt="Festival de Dança Contemporânea"
                className="w-full h-auto max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quinta seção - Novo Slider dinâmico */}
      <section className="py-20 bg-black overflow-hidden flex flex-col">
        <Slider />
        <a
          href="https://exposicao-artes.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black mt-20 bg-white font-bold p-5 rounded-3xl text-center inline-block"
        >
          VER ARTES DOS ALUNOS
        </a>
      </section>
    </div>
  );
};

export default Danca;
