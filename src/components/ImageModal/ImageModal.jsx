import Modal from "react-modal";
Modal.setAppElement(document.getElementById("root"));

const ImageModal = () => {
  return (
    <div>
      <Modal isOpen={false}></Modal>
    </div>
  );
};

export default ImageModal;
