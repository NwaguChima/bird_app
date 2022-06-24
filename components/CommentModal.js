import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../atom/modalAtom";
import Modal from "react-modal";
import { XIcon } from "@heroicons/react/outline";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

const CommentModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const [postId] = useRecoilState(postIdState);
  const [post, setPost] = useState({});

  useEffect(() => {
    onSnapshot(doc(db, "posts", postId), (snapshot) => {
      setPost(snapshot);
    });
  }, [postId, db]);
  return (
    <div>
      {open && (
        <Modal
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          className="max-w-lg h-[300px] w-[90%] absolute top-24 left-[50%] translate-x-[-50%] bg-white outline-none border-2 border-gray-200 rounded-xl shadow-md"
        >
          <div className="p-1">
            <div className="border-b border-gray-200 py-2 px-1.5">
              <div
                onClick={() => setOpen(false)}
                className="hoverEffect w-9 h-9 flex items-center justify-center"
              >
                <XIcon className="h-[22px] text-gray-700" />
              </div>
            </div>
            {<h1>{post?.data()?.username}</h1>}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CommentModal;
