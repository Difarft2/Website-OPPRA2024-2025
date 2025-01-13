import Artikelcomponent from '../../components/globalComponents/artikel-components';
import { Gambar } from '../../components/globalComponents/artikel-components';
import Footer from '../../components/globalComponents/footer';
import '../../css/artikel.css';


import hg2 from '../../content/img/mufest/img2.jpg'
import hg3 from '../../content/img/mufest/img3.jpg'
import hg5 from '../../content/img/mufest/img4.jpg'
import hg6 from '../../content/img/mufest/img5.jpg'



import img1 from '../../content/img/mufest/img1.jpg'
import Artikel from '../../content/artikeldoc/mufest';

const Mufes = () => {
  const article = {
    title: 'MUFEST (Muharram Festival)',
    date: '25 Juli-18 Agustus | 17.30 WIB',
    main: 'Bojonegoro, 25 Juli 2024. Dalam rangka memperingati Muharram 1446 H, Organisasi Pelajar Pondok Pesantren Ar-Rahmat (OPPRA) mengadakan event spesial yang selalu ditunggu-tunggu oleh para santri setiap tahun, yang bernama “MUFEST”.',
    image: img1,
    content: <Artikel/>,
    pembuat: 'Giannini Valentino',
    ig: '@gianinni_v',
    linkig: 'https://www.instagram.com/gianinni_v/'
  };

  const imageData = [
    { src: hg2, content: 'Perlombaan Adzan' },
    { src: hg6, content: 'Perlombaan Pidato' },
    { src: hg5, content: 'Pembacaan ayat suci Al-Quran' },
    { src: hg3, content: 'Perlombaan Cerdas Cermat PAI' },
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

export default Mufes;
