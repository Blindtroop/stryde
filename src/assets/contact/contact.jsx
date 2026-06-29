import { useState } from "react";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border rounded-lg p-3 outline-none focus:border-[#89E900]"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="border rounded-lg p-3 outline-none focus:border-[#89E900]"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="border rounded-lg p-3 outline-none resize-none focus:border-[#89E900]"
        ></textarea>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={close}
            className="px-4 py-2 rounded-lg border"
          >
            Cancel
          </button>
           <button
              type="submit"
              className="bg-[#89E900] text-black font-semibold px-4 py-2 rounded-lg hover:opacity-90"
            >
              Send
            </button>
        </div>
      </form>
    </div>
  );
}
