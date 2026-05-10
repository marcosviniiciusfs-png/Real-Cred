import { useRef, useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

// Import client images
import cliente1 from "@/assets/clientes/cliente-1.jpeg";
import cliente2 from "@/assets/clientes/cliente-2.jpeg";
import cliente3 from "@/assets/clientes/cliente-3.jpeg";
import cliente4 from "@/assets/clientes/cliente-4.jpeg";
import cliente5 from "@/assets/clientes/cliente-5.jpeg";
import cliente6 from "@/assets/clientes/cliente-6.jpeg";
import cliente7 from "@/assets/clientes/cliente-7.jpeg";
import cliente8 from "@/assets/clientes/cliente-8.jpeg";
import cliente9 from "@/assets/clientes/cliente-9.jpeg";
import cliente10 from "@/assets/clientes/cliente-10.jpeg";
import cliente11 from "@/assets/clientes/cliente-11.jpeg";
import cliente12 from "@/assets/clientes/cliente-12.jpeg";
import cliente13 from "@/assets/clientes/cliente-13.jpeg";
import cliente14 from "@/assets/clientes/cliente-14.jpeg";
import cliente15 from "@/assets/clientes/cliente-15.jpeg";
import cliente16 from "@/assets/clientes/cliente-16.jpeg";
import cliente17 from "@/assets/clientes/cliente-17.jpeg";
import cliente18 from "@/assets/clientes/cliente-18.jpeg";
import cliente19 from "@/assets/clientes/cliente-19.jpeg";
import cliente20 from "@/assets/clientes/cliente-20.jpeg";
import cliente21 from "@/assets/clientes/cliente-21.jpeg";
import cliente22 from "@/assets/clientes/cliente-22.jpeg";
import cliente23 from "@/assets/clientes/cliente-23.jpeg";
import cliente24 from "@/assets/clientes/cliente-24.jpeg";
import cliente25 from "@/assets/clientes/cliente-25.jpeg";
import cliente26 from "@/assets/clientes/cliente-26.jpeg";
import cliente27 from "@/assets/clientes/cliente-27.jpeg";
import cliente28 from "@/assets/clientes/cliente-28.jpeg";
import cliente29 from "@/assets/clientes/cliente-29.jpeg";

const clientImages = [
  cliente1,
  cliente2,
  cliente3,
  cliente4,
  cliente5,
  cliente6,
  cliente7,
  cliente8,
  cliente9,
  cliente10,
  cliente11,
  cliente12,
  cliente13,
  cliente14,
  cliente15,
  cliente16,
  cliente17,
  cliente18,
  cliente19,
  cliente20,
  cliente21,
  cliente22,
  cliente23,
  cliente24,
  cliente25,
  cliente26,
  cliente27,
  cliente28,
  cliente29,
];

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const autoScrollPlugin = useRef(
    AutoScroll({
      speed: 0.8,
      direction: "forward",
      startDelay: 0,
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
    })
  );

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Clientes Contemplados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Muitas famílias já realizaram o sonho da casa própria e do carro novo.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Navigation Buttons - Desktop */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoScrollPlugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {clientImages.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={image}
                      alt={`Cliente contemplado ${index + 1}`}
                      className="w-full h-64 md:h-80 object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-primary"
                    : "w-2 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center items-center gap-4 mt-4 md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
