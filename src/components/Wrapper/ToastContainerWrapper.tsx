// ToastContainerWrapper.tsx

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastContainerWrapper() {
  return (
    <div className="rounded-xl">
      <ToastContainer position="top-center" />
    </div>
  );
}
