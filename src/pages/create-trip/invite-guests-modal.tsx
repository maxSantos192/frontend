import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

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
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>

            <button onClick={closeGuestModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

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
      </div>
    </div>
  );
}
