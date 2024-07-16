import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";

interface InviteGuestsModalProps {
  emailsToInvite: string[];
  closeGuestModal: () => void;
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailToInvite: (email: string) => void;
}

export function InviteGuestsModal({
  emailsToInvite,
  closeGuestModal,
  addNewEmailToInvite,
  removeEmailToInvite,
}: InviteGuestsModalProps) {
  return (
    <Modal
      title="Selecionar convidados"
      subTitle="Os convidados irão receber e-mails para confirmar a participação na viagem."
      closeModal={closeGuestModal}
    >
      <div className="flex flex-wrap gap-2">
        {emailsToInvite.map((email) => (
          <div
            className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5"
            key={email}
          >
            <span className="text-zinc-300">{email}</span>
            <button onClick={() => removeEmailToInvite(email)}>
              <X className="size-4 text-zinc-400" />
            </button>
          </div>
        ))}
      </div>

      <div className="h-px w-full bg-zinc-800" />

      <form
        className="flex items-center gap-2 rounded-lg border-zinc-800 bg-zinc-950 p-2.5"
        onSubmit={addNewEmailToInvite}
      >
        <div className="flex flex-1 items-center gap-2 px-2">
          <AtSign className="size-5 text-zinc-400" />
          <input
            className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
            placeholder="Digite o e-mail do convidado"
            type="email"
            name="email"
          />
        </div>

        <Button type="submit">
          Convidar
          <Plus className="size-5" />
        </Button>
      </form>
    </Modal>
  );
}
