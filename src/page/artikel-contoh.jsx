import Artikelcomponent from './artikel-components';
import { Gambar } from './artikel-components';
import '../css/artikel.css';

const Artikel = () => {
  const article = {
    title: 'Lorem Ipsum Dolor Sit Amet',
    date: '13 Desember 2024 | 00.00 WIB',
    main: 'Ini adalah kalimat yang menjelaskan tentang keseluruhan artikel.',
    image: 'https://via.placeholder.com/800x400',
    content: '/hariguru.docx',
  };

  const imageData = [
    { src: 'https://via.placeholder.com/200x200', content: 'Konten Gambar 1' },
    { src: 'https://via.placeholder.com/200x200', content: 'Konten Gambar 2' },
  ];

  return (
    <div className="App">
      <Artikelcomponent
        title={article.title}
        date={article.date}
        main={article.main}
        image={article.image}
        content={article.content}
      />
      <Gambar images={imageData} />
    </div>
  );
};

export default Artikel;
