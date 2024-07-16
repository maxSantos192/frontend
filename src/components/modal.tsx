import { X } from "lucide-react";
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  title: string;
  subTitle: ReactNode;
  closeModal: () => void;
}
export function Modal({ children, title, subTitle, closeModal }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">{title}</h2>

            <button onClick={closeModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">{subTitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
}
