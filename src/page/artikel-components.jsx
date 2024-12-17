import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import '../css/artikel.css';
import { useEffect, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist/webpack';

const Artikelcomponent = ({ title, date, main, image, content }) => {
  const [pdfText, setPdfText] = useState('');

  useEffect(() => {
    const loadPdfContent = async () => {
      if (content && content.endsWith('.pdf')) {
        try {
          const loadingTask = pdfjsLib.getDocument(content);
          const pdf = await loadingTask.promise;

          let textContent = '';
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const text = await page.getTextContent();
            text.items.forEach((item) => {
              textContent += item.str + ' ';
            });
          }
          setPdfText(textContent);
        } catch (error) {
          console.error('Error loading PDF:', error);
        }
      }
    };

    loadPdfContent();
  }, [content]);

  return (
    <div className="article-container">
      <h1 className="article-title">{title}</h1>
      <p className="article-date">{date}</p>
      <p className="article-main">{main}</p>
      <img src={image} alt="Article" className="article-image" />
      {content.endsWith('.pdf') ? (
        <div className="article-content">
          <p>{pdfText}</p>
        </div>
      ) : (
        <p className="article-content">{content}</p>
      )}
    </div>
  );
};

Artikelcomponent.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Artikelcomponent;

export const Gambar = ({ images }) => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setModalShow(true);
  };

  return (
    <>
      <div className="grid-container">
        {images.map((img, index) => (
          <div
            className="grid-item"
            key={index}
            onClick={() => handleImageClick(img)}
          >
            <img src={img.src} alt={`Gambar-${index + 1}`} className="grid-image" />
            <p className="grid-content">{img.content}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        dialogClassName='modal'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Detail Gambar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImage && (
            <>
              <img
                src={selectedImage.src}
                alt="Selected"
                style={{ width: '100%', borderRadius: '8px' }}
              />
              <p className="mt-3">{selectedImage.content}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className='button-modal' variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

Gambar.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
