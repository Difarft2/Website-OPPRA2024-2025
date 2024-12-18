import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import "../css/artikel.css";
import { useEffect, useState } from "react";
import * as mammoth from "mammoth";

const Artikelcomponent = ({ title, date, main, image, content }) => {
  const [docHtml, setDocHtml] = useState("");

  useEffect(() => {
    const loadDocxContent = async () => {
      if (content && content.endsWith(".docx")) {
        try {
          const response = await fetch(content);
          const arrayBuffer = await response.arrayBuffer();
          const result = await mammoth.convertToHtml({ arrayBuffer });
          setDocHtml(result.value); // Masukkan HTML yang dihasilkan oleh Mammoth.js
        } catch (error) {
          console.error("Error loading DOCX:", error);
        }
      }
    };

    loadDocxContent();
  }, [content]);

  return (
    <div className="article-container">
      <h1 className="article-title">{title}</h1>
      <p className="article-date">{date}</p>
      <p className="article-main">{main}</p>
      <img src={image} alt="Article" className="article-image" />
      {content.endsWith(".docx") ? (
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: docHtml }}
        ></div>
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
            <img
              src={img.src}
              alt={`Gambar-${index + 1}`}
              className="grid-image"
            />
            <p className="grid-content">{img.content}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        dialogClassName="modal"
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
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <p className="mt-3">{selectedImage.content}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="button-modal"
            variant="secondary"
            onClick={() => setModalShow(false)}
          >
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
