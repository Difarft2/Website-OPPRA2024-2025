// import React from 'react';
import Artikelcomponent from './artikel-components';
import { Gambar } from './artikel-components';
import '../css/artikel.css';
// import pdf from '/public/hariguru.pdf';

// const pdfPath = '/hariguru.pdf';

const Artikel = () => {
  const article = {
    title: 'Lorem Ipsum Dolor Sit Amet',
    date: '13 Desember 2024 | 00.00 WIB',
    main: 'Ini adalah kalimat yang menjelaskan tentang keseluruhan artikel.',
    image: 'https://via.placeholder.com/800x400',
    content: '../../public/hariguru.pdf',
  };

  const imageData = [
    { src: 'https://via.placeholder.com/200x200', content: 'Konten Gambar 1' },
    { src: 'https://via.placeholder.com/200x200', content: 'Konten Gambar 2' },
    { src: 'https://via.placeholder.com/200x200', content: 'Konten Gambar 3' },
    { src: 'https://via.placeholder.com/200x200', content: 'Konten Gambar 4' },
    { src: 'https://via.placeholder.com/200x200', content: 'Konten Gambar 5' },
    { src: 'https://via.placeholder.com/200x200', content: 'Konten Gambar 6' },
    { src: 'https://via.placeholder.com/200x200', content: 'Konten Gambar 7' },
    { src: 'https://via.placeholder.com/200x200', content: 'Konten Gambar 8' },
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
