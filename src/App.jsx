import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

// Dados dos slides sobre rochas sedimentares
const slides = [
  {
    id: 1,
    title: "Rochas Sedimentares",
    subtitle: "Introdução e Formação",
    content:
      "As rochas sedimentares são formadas pela acumulação de sedimentos que são compactados e cimentados. Representam cerca de 75% das rochas expostas na superfície terrestre.",
    image: "/src/assets/slide1.png",
    bgColor: "bg-amber-600",
  },
  {
    id: 2,
    title: "Processo de Formação",
    subtitle: "Como as rochas sedimentares são formadas",
    content:
      "1. Intemperismo: decomposição de rochas preexistentes\n2. Erosão: transporte dos sedimentos\n3. Deposição: acumulação de sedimentos\n4. Diagênese: compactação e cimentação",
    image: "/src/assets/slide2.png",
    bgColor: "bg-amber-600",
  },
  {
    id: 3,
    title: "Classificação",
    subtitle: "Tipos de rochas sedimentares",
    content:
      "• Detríticas: formadas por fragmentos de outras rochas (arenito, conglomerado)\n• Químicas: formadas por precipitação química (calcário, gesso)\n• Orgânicas: formadas por restos de organismos (carvão)",
    image: "/src/assets/slide3.png",
    bgColor: "bg-amber-600",
  },
  {
    id: 4,
    title: "Arenito",
    subtitle: "Rocha sedimentar detrítica",
    content:
      "O arenito é composto principalmente por grãos de areia cimentados. É uma das rochas sedimentares mais comuns e pode ser encontrado em diversas cores, dependendo dos minerais presentes.",
    image: "/src/assets/slide4.png",
    bgColor: "bg-amber-600",
  },
  {
    id: 5,
    title: "Calcário",
    subtitle: "Rocha sedimentar química/orgânica",
    content:
      "O calcário é composto principalmente por carbonato de cálcio (CaCO₃). Pode ser formado por precipitação química ou pela acumulação de conchas e esqueletos de organismos marinhos.",
    image: "/src/assets/slide5.png",
    bgColor: "bg-amber-600",
  },
  {
    id: 6,
    title: "Importância Econômica",
    subtitle: "Usos das rochas sedimentares",
    content:
      "• Fonte de combustíveis fósseis (petróleo, gás natural, carvão)\n• Materiais de construção (arenito, calcário)\n• Formação de aquíferos\n• Fonte de minerais industriais (gipsita, sal-gema)",
    image: "/src/assets/slide6.png",
    bgColor: "bg-amber-600",
  },
  {
    id: 7,
    title: "Curiosidades",
    subtitle: "Fatos interessantes",
    content:
      "• As rochas sedimentares contêm praticamente todos os fósseis conhecidos\n• O Grand Canyon expõe camadas de rochas sedimentares que contam 2 bilhões de anos da história da Terra\n• Algumas rochas sedimentares são porosas o suficiente para armazenar petróleo e gás natural",
    image: "/src/assets/slide7.png",
    bgColor: "bg-amber-600",
  },
  {
    id: 8,
    title: "Referências",
    subtitle: "Fontes bibliográficas",
    content:
      "• TEIXEIRA, W. et al. Decifrando a Terra. 2.ed. São Paulo: Oficina de Textos, 2009.\n\n• PRESS, F. et al. Para Entender a Terra. 4.ed. Porto Alegre: Bookman, 2006.\n\n• GROTZINGER, J.; JORDAN, T. Para Entender a Terra. 6.ed. Porto Alegre: Bookman, 2013.\n\n• SUGUIO, K. Geologia Sedimentar. São Paulo: Blucher, 2003.",
    image: "/svgs/slide8.svg",
    bgColor: "bg-amber-600",
  },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(null);

  // Função para navegar para o próximo slide
  const nextSlide = () => {
    if (currentSlide < slides.length - 1 && !isTransitioning) {
      setDirection("right");
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  // Função para navegar para o slide anterior
  const prevSlide = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setDirection("left");
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  // Configuração de teclado para navegação com setas
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, isTransitioning]);

  // Renderiza o conteúdo do slide atual
  const renderContent = (content) => {
    return content.split("\n").map((line, index) => (
      <p key={index} className="mb-4 leading-relaxed">
        {line}
      </p>
    ));
  };

  const isReferenceSlide = currentSlide === slides.length - 1;

  return (
    <div
      className="h-screen w-screen overflow-hidden flex flex-col bg-gradient-to-br from-slate-900 to-slate-800 font-sans"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      {/* Cabeçalho */}
      <header className="w-full py-4 bg-slate-900 shadow-lg border-b border-amber-600">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <h1
              className="text-3xl md:text-4xl font-bold text-amber-500 font-serif"
              style={{ fontFamily: "Lora, serif" }}
            >
              Rochas Sedimentares
            </h1>
            <div className="text-right">
              <p className="text-gray-300 text-sm md:text-base">
                Discente: {import.meta.env.VITE_STUDENT_NAME}
              </p>
              <p className="text-gray-400 text-xs md:text-sm">
                Curso de Zootecnia
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Container principal preenchendo o espaço restante */}
      <main className="flex-grow flex overflow-hidden">
        <div className="w-full h-full relative flex items-center justify-center">
          {/* Slide atual */}
          <div
            className={`w-full h-full flex items-center justify-center px-4 md:px-8 lg:px-16
              transition-all duration-500 ease-in-out ${
                isTransitioning
                  ? direction === "right"
                    ? "translate-x-full opacity-0"
                    : "-translate-x-full opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
          >
            <div className="max-w-7xl w-full bg-slate-800 rounded-lg shadow-2xl border border-slate-700 overflow-hidden">
              <div
                className={`w-full h-2 ${slides[currentSlide].bgColor}`}
              ></div>

              <div className="p-6 md:p-8 lg:p-10">
                {isReferenceSlide ? (
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <BookOpen size={28} className="text-amber-500" />
                      <h2 className="text-3xl md:text-4xl font-bold text-amber-500 font-serif">
                        {slides[currentSlide].title}
                      </h2>
                    </div>
                    <div className="text-gray-200 text-lg space-y-4 font-light">
                      {renderContent(slides[currentSlide].content)}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Lado esquerdo - Conteúdo */}
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-amber-500 font-serif">
                        {slides[currentSlide].title}
                      </h2>
                      <h3 className="text-xl text-amber-300 mb-6 font-light">
                        {slides[currentSlide].subtitle}
                      </h3>
                      <div className="text-gray-200 text-lg space-y-2 font-light">
                        {renderContent(slides[currentSlide].content)}
                      </div>
                    </div>

                    {/* Lado direito - Imagem */}
                    <div className="md:w-2/5 flex items-center justify-center mt-6 md:mt-0">
                      <div className="rounded-lg overflow-hidden border-4 border-amber-600 shadow-lg transition-transform hover:scale-105 duration-300">
                        <img
                          src={slides[currentSlide].image}
                          alt={slides[currentSlide].title}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Botões de navegação */}
          <button
            onClick={prevSlide}
            className={`absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-slate-900 text-amber-500 p-3 rounded-full shadow-lg hover:bg-amber-800 hover:text-white transition-all duration-300 ${
              currentSlide === 0
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100"
            }`}
            disabled={currentSlide === 0}
            aria-label="Slide anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-slate-900 text-amber-500 p-3 rounded-full shadow-lg hover:bg-amber-800 hover:text-white transition-all duration-300 ${
              currentSlide === slides.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100"
            }`}
            disabled={currentSlide === slides.length - 1}
            aria-label="Próximo slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </main>

      {/* Footer with improved design */}
      <footer className="w-full py-4 bg-slate-900/80 backdrop-blur-sm border-t border-amber-600/30">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="flex items-center justify-center gap-4 mb-2">
            {/* Slide indicators */}
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full ${
                    currentSlide === index ? "bg-amber-500" : "bg-slate-600"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Slide counter */}
            <div className="text-sm text-slate-400 font-medium">
              <span className="text-amber-500">{currentSlide + 1}</span>
              <span className="text-slate-500"> / {slides.length}</span>
            </div>
          </div>

          {/* Keyboard navigation hint */}
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <kbd className="px-2 py-1 bg-slate-800 rounded-md border border-slate-700">
              ←
            </kbd>
            <span className="text-slate-500">ou</span>
            <kbd className="px-2 py-1 bg-slate-800 rounded-md border border-slate-700">
              →
            </kbd>
            <span className="text-slate-500">para navegar</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
