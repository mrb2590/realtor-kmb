import slide1JpgX1 from '~img/sliders/home/slide-1.jpg';
import slide1WebpX1 from '~img/sliders/home/slide-1.webp';
import slide1JpgX2 from '~img/sliders/home/slide-1@2x.jpg';
import slide1WebpX2 from '~img/sliders/home/slide-1@2x.webp';
import slide1JpgX3 from '~img/sliders/home/slide-1@3x.jpg';
import slide1WebpX3 from '~img/sliders/home/slide-1@3x.webp';
import slide2JpgX1 from '~img/sliders/home/slide-2.jpg';
import slide2WebpX1 from '~img/sliders/home/slide-2.webp';
import slide2JpgX2 from '~img/sliders/home/slide-2@2x.jpg';
import slide2WebpX2 from '~img/sliders/home/slide-2@2x.webp';
import slide2JpgX3 from '~img/sliders/home/slide-2@3x.jpg';
import slide2WebpX3 from '~img/sliders/home/slide-2@3x.webp';

export { sliders };

const sliders = {
  home: [
    {
      img: {
        jpgX1: { src: slide2JpgX1, alt: 'Jacksonville, Florida' },
        webpX1: { src: slide2WebpX1, alt: 'Jacksonville, Florida' },
        jpgX2: { src: slide2JpgX2, alt: 'Jacksonville, Florida' },
        webpX2: { src: slide2WebpX2, alt: 'Jacksonville, Florida' },
        jpgX3: { src: slide2JpgX3, alt: 'Jacksonville, Florida' },
        webpX3: { src: slide2WebpX3, alt: 'Jacksonville, Florida' }
      }
    },
    {
      img: {
        jpgX1: { src: slide1JpgX1, alt: 'Jacksonville, Florida' },
        webpX1: { src: slide1WebpX1, alt: 'Jacksonville, Florida' },
        jpgX2: { src: slide1JpgX2, alt: 'Jacksonville, Florida' },
        webpX2: { src: slide1WebpX2, alt: 'Jacksonville, Florida' },
        jpgX3: { src: slide1JpgX3, alt: 'Jacksonville, Florida' },
        webpX3: { src: slide1WebpX3, alt: 'Jacksonville, Florida' }
      }
    }
  ]
};
