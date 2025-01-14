import Artikelcomponent from '../../components/globalComponents/artikel-components';
import { Gambar } from '../../components/globalComponents/artikel-components';
import Footer from '../../components/globalComponents/footer';
import '../../css/artikel.css';


import hg2 from '../../content/img/17/img2.jpg'
import hg3 from '../../content/img/17//img3.jpg'
import hg5 from '../../content/img/17/img4.jpg'
import hg6 from '../../content/img/17/img5.jpg'



import img1 from '../../content/img/17/ganii.jpg'
import Artikel from '../../content/artikeldoc/17 agustus ';

const Agustus = () => {
  const article = {
    title: 'Peringatan HUT RI ke 79 ',
    date: '5 Agustus-17 Agustus | 07.00 WIB',
    main: 'Dalam memperingati Hari Ulang Tahun Republik Indonesia yang ke-79 Pondok Pesantren Modern Ar-Rahmat mengadakan Upacara 17 Agustus yang berlangsung dengan Khidmat dan Classmeet yang di isi dengan berbagai perlombaan.',
    image: img1,
    content: <Artikel/>,
    pembuat: 'Giannini Valentino',
    ig: '@gianinni_v',
    linkig: 'https://www.instagram.com/gianinni_v/'
  };

  const imageData = [
    { src: hg2, content: 'Penandatanganan simbolis hari guru oleh kepala sekolah SMA Plus Ar-Rahmat' },
    { src: hg3, content: 'Penandatanganan simbolis hari guru oleh kepala sekolah SMP Plus Ar-Rahmat' },
    { src: hg5, content: 'Penyampaian pesan dan kesan oleh perwakilan dewan guru SMP-SMA Plus Ar-Rahmat' },
    { src: hg6, content: 'Penyampaian amanat oleh Pembina pacara' },
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

export default Agustus;
