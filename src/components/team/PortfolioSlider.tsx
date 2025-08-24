'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface PortfolioSliderProps {
  images: string[];
  name: string;
}

const PortfolioSlider = ({ images, name }: PortfolioSliderProps) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Carousel className="w-full max-w-xl mx-auto">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                  <Image
                    src={src}
                    alt={`Работа из портфолио ${name} #${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    data-ai-hint="portfolio work"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default PortfolioSlider;
