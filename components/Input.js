import { useState, useRef } from "react";
import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import { useSession, signOut } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const Input = () => {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const filePickerRef = useRef(null);

  const sendpost = async () => {
    const docRef = await addDoc(collection(db, "posts"), {
      id: session.user.uid,
      text: input,
      userImg: session.user.image,
      timestamp: serverTimestamp(),
      name: session.user.name,
      username: session.user.username,
    });

    setInput("");
  };

  const addImageToPost = async (e) => {};

  return (
    <>
      {session && (
        <div className="flex items-start border-b border-gray-200 p-3 space-x-3">
          <img
            onClick={signOut}
            src={session.user.image}
            alt="user image"
            width="50"
            height="50"
            className="h-11 w-11 rounded-full curpus-pointer hover:brightness-95"
          />
          <div className="w-full divide-y divide-gray-200">
            <div className="">
              <textarea
                className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
                rows="2"
                placeholder="What's happening"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></textarea>
            </div>
            <div className="flex items-center justify-between pt-2.5">
              <div className="flex">
                <div onClick={() => filePickerRef.current.click()}>
                  <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                  <input
                    type="file"
                    hidden
                    ref={filePickerRef}
                    onClick={addImageToPost}
                  />
                </div>
                <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
              </div>
              <button
                onClick={sendpost}
                disabled={!input.trim()}
                className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Input;
