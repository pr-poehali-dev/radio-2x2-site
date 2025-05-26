import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({
    title: "Energy Drive",
    artist: "Synthwave FM",
    duration: "3:42",
  });

  const [liveShow, setLiveShow] = useState({
    name: "Утренний Микс",
    host: "DJ Alex",
    time: "06:00 - 10:00",
  });

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200">
      {/* Header */}
      <header className="relative z-10 p-6">
        <nav className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center">
              <Icon name="Radio" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-black">Радио 2x2</h1>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Программы
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Плейлисты
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors"
            >
              О нас
            </a>
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              Контакты
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></div>
            <span className="text-red-600 font-semibold uppercase tracking-wide">
              В эфире
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-black mb-4 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
            РАДИО 2x2
          </h2>

          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Лучшая музыка, интересные программы и актуальные новости 24/7
          </p>
        </div>

        {/* Player Card */}
        <Card className="bg-white/80 backdrop-blur-lg border-gray-300 mb-8 shadow-xl">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              {/* Album Art */}
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                  <Icon name="Music" size={48} className="text-white" />
                </div>
                {isPlaying && (
                  <div className="absolute -inset-2 border-2 border-red-600 rounded-xl animate-pulse"></div>
                )}
              </div>

              {/* Track Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-black mb-2">
                  {currentTrack.title}
                </h3>
                <p className="text-gray-700 text-lg mb-1">
                  {currentTrack.artist}
                </p>
                <p className="text-gray-600">{currentTrack.duration}</p>
              </div>

              {/* Controls */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-black"
                >
                  <Icon name="SkipBack" size={24} />
                </Button>

                <Button
                  onClick={togglePlay}
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 w-16 h-16 rounded-full"
                >
                  <Icon name={isPlaying ? "Pause" : "Play"} size={28} />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-black"
                >
                  <Icon name="SkipForward" size={24} />
                </Button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div className="bg-gradient-to-r from-red-600 to-red-700 h-2 rounded-full w-1/3"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-white/80 backdrop-blur-lg border-gray-300 shadow-xl">
            <CardHeader>
              <CardTitle className="text-black flex items-center">
                <Icon name="Mic" className="mr-2 text-red-600" />
                Сейчас в эфире
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold text-black mb-2">
                {liveShow.name}
              </h3>
              <p className="text-gray-700 mb-1">Ведущий: {liveShow.host}</p>
              <p className="text-gray-600">{liveShow.time}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-lg border-gray-300 shadow-xl">
            <CardHeader>
              <CardTitle className="text-black flex items-center">
                <Icon name="Clock" className="mr-2 text-red-600" />
                Следующая программа
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold text-black mb-2">
                Дневной Хит-парад
              </h3>
              <p className="text-gray-700 mb-1">Ведущий: DJ Marina</p>
              <p className="text-gray-600">10:00 - 14:00</p>
            </CardContent>
          </Card>
        </div>

        {/* News Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-black mb-8 text-center">
            Новости радио
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/80 backdrop-blur-lg border-gray-300 shadow-xl">
              <CardHeader>
                <CardTitle className="text-black">
                  Новый сезон программы "Утренний Микс"
                </CardTitle>
                <CardDescription className="text-gray-600">
                  25 мая 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Стартует обновленная версия популярной утренней программы с
                  новыми рубриками и сюрпризами для слушателей.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-lg border-gray-300 shadow-xl">
              <CardHeader>
                <CardTitle className="text-black">
                  Интервью с группой "Время"
                </CardTitle>
                <CardDescription className="text-gray-600">
                  23 мая 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Эксклюзивное интервью с участниками популярной группы о новом
                  альбоме и предстоящих концертах.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-lg border-gray-300 shadow-xl">
              <CardHeader>
                <CardTitle className="text-black">
                  Радио 2x2 - лучшая станция года
                </CardTitle>
                <CardDescription className="text-gray-600">
                  20 мая 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Наша радиостанция получила награду "Лучшая радиостанция года"
                  на премии "Радиоволна 2025".
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Hosts Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-black mb-8 text-center">
            Наши ведущие
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/80 backdrop-blur-lg border-gray-300 shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" size={36} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-black mb-2">DJ Alex</h4>
                <p className="text-red-600 font-semibold mb-2">Утренний Микс</p>
                <p className="text-gray-700 text-sm">
                  Опытный ведущий с 10-летним стажем. Зажигает утро энергией и
                  хорошим настроением.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-lg border-gray-300 shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" size={36} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-black mb-2">DJ Marina</h4>
                <p className="text-red-600 font-semibold mb-2">
                  Дневной Хит-парад
                </p>
                <p className="text-gray-700 text-sm">
                  Знает все о современной музыке. Представляет лучшие хиты и
                  новинки музыкального мира.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-lg border-gray-300 shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" size={36} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-black mb-2">DJ Victor</h4>
                <p className="text-red-600 font-semibold mb-2">Вечерний Джем</p>
                <p className="text-gray-700 text-sm">
                  Мастер вечернего эфира. Создает атмосферу релакса с джазом и
                  инди-музыкой.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-black mb-6">
            Следите за нами
          </h3>
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="border-gray-400 text-gray-600 hover:border-red-600 hover:text-red-600"
            >
              <Icon name="Instagram" size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-gray-400 text-gray-600 hover:border-red-600 hover:text-red-600"
            >
              <Icon name="Facebook" size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-gray-400 text-gray-600 hover:border-red-600 hover:text-red-600"
            >
              <Icon name="Twitter" size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-gray-400 text-gray-600 hover:border-red-600 hover:text-red-600"
            >
              <Icon name="Youtube" size={20} />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
