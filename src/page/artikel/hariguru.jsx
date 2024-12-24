import Artikelcomponent from '../../components/globalComponents/artikel-components';
import { Gambar } from '../../components/globalComponents/artikel-components';
import Footer from '../../components/globalComponents/footer';
import '../../css/artikel.css';

import harigurudoc from '../../content/artikeldoc/hariguru.docx'
import img1 from '../../content/img/hariguru/hariguru.svg'

const Hariguru = () => {
  const article = {
    title: 'PERINGATAN HARI GURU NASIONAL',
    date: '25 November 2024 | 07.00 WIB',
    main: 'Pada 25 November 2024, Pondok Pesantren Ar-Rahmat mengadakan upacara Hari Guru Nasional yang diisi dengan drama kejutan, lagu, dan penandatanganan bingkai sebagai penghargaan untuk guru.',
    image: img1,
    content: harigurudoc,
    pembuat: 'M. Faiz Alif Yulistiawan',
    ig: '@fay_368',
    linkig: 'https://www.instagram.com/fay_368?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
  };

  const imageData = [
    // { src: 'https://via.placeholder.com/200x200', content: 'Konten Gambar 1' },
    // { src: 'https://via.placeholder.com/200x200', content: 'Konten Gambar 2' },
  ];

  return (
    <div>
        <div className="artikel">
            <Artikelcomponent
                title={article.title}
                date={article.date}
                main={article.main}
                image={article.image}
                content={article.content}
                pembuat={article.pembuat}
                ig={article.ig}
                linkig={article.linkig}
            />
            <Gambar images={imageData} />
        </div>
        <Footer/>
    </div>
  );
};

export default Hariguru;
