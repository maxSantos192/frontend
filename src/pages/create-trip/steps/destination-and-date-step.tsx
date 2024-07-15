import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean;
  openGuestInput: () => void;
  closeGuestInput: () => void;
}

export function DestinationAndDateStep({
  isGuestInputOpen,
  openGuestInput,
  closeGuestInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
          placeholder="Para onde você vai?"
          disabled={isGuestInputOpen}
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          className="w-40 bg-transparent text-lg placeholder-zinc-400 outline-none"
          placeholder="Quando?"
          disabled={isGuestInputOpen}
        />
      </div>

      <div className="h-6 w-px bg-zinc-800" />

      {isGuestInputOpen ? (
        <button
          className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 hover:bg-zinc-700"
          onClick={closeGuestInput}
        >
          Alterar local e data
          <Settings2 className="size-5" />
        </button>
      ) : (
        <Button onClick={openGuestInput}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
