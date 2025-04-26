import {
  medBad1Img,
  medBad2Img,
  medBad3Img,
  medBad4Img,
  medRev10Img,
  medRev11Img,
  medRev1Img,
  medRev2Img,
  medRev3Img,
  medRev4Img,
  medRev5Img,
  medRev6Img,
  medRev7Img,
  medRev8Img,
  medRev9Img,
} from 'shared/assets/images';
import { Product } from 'shared/assets/types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Многофункциональные кровати с электроприводом',
    price: '3 999 ₽ / мес',
    description:
      'Идеальный выбор для ухода за пациентами с ограниченной мобильностью. Кровать оснащена функцией трансформации в кресло, электропереворотом и пультом для регулировки положения тела. Включает туалетное устройство с электроуправлением, складные боковые ограждения, штангу для подтягивания и инфузионную стойку. Удобное решение для комфортного ухода и профилактики пролежней. Максимальная нагрузка — 200 кг',
    media: [
      { type: 'image', src: medBad1Img },
      { type: 'image', src: medBad2Img },
      { type: 'image', src: medBad3Img },
      { type: 'image', src: medBad4Img },
      { type: 'image', src: medRev10Img },
      { type: 'image', src: medRev11Img },
    ],
  },
  {
    id: 2,
    name: 'Медицинские кровати с функцией переворачивания и кардио-креслом',
    price: '3 200 ₽ / мес',
    description:
      'Кровати оснащены туалетным устройством, надкроватным столиком и матрасом с усиленной жесткостью. Функция переворачивания осуществляется с помощью вращения рукояток, что помогает предотвратить пролежни и улучшить кровообращение. Удобные винтовые регулировки, алюминиевые боковые ограждения с фиксацией, самоориентирующиеся колеса и тормоза обеспечивают комфорт и безопасность. Также в комплект входит штанга для подтягивания.',
    media: [
      { type: 'image', src: medRev1Img },
      { type: 'image', src: medRev2Img },
      { type: 'image', src: medRev3Img },
      { type: 'image', src: medRev4Img },
      { type: 'image', src: medRev5Img },
      { type: 'image', src: medRev6Img },
      { type: 'image', src: medRev7Img },
      { type: 'image', src: medRev8Img },
      { type: 'image', src: medRev9Img },

      // { type: 'video', src: '/videos/speaker-demo.mp4' },
    ],
  },
];
