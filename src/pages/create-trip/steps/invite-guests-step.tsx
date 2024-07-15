import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
  emailsToInvite: string[];
  openGuestModal: () => void;
  openConfirmTripModal: () => void;
}

export function InviteGuestsStep({
  emailsToInvite,
  openGuestModal,
  openConfirmTripModal,
}: InviteGuestsStepProps) {
  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <button
        className="flex flex-1 items-center gap-2 text-left"
        type="button"
        onClick={openGuestModal}
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-lg text-zinc-100">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-lg text-zinc-400">Quem estará na viagem?</span>
        )}
      </button>

      <button
        className="flex items-center gap-2 rounded-lg bg-lime-300 px-5 py-2 font-medium text-lime-950 hover:bg-lime-400"
        onClick={openConfirmTripModal}
      >
        Confirmar viagem
        <ArrowRight className="size-5" />
      </button>
    </div>
  );
}
