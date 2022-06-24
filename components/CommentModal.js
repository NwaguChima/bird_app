import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";
import Modal from "react-modal";

const CommentModal = () => {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div>
      {open && (
        <Modal isOpen={open}>
          <h1>Comment Modal</h1>
        </Modal>
      )}
    </div>
  );
};

export default CommentModal;
