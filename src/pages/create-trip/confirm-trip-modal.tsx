import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripModalProps {
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  closeConfirmTripModal: () => void;
}

export function ConfirmTripModal({
  createTrip,
  closeConfirmTripModal,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação da viagem
            </h2>

            <button onClick={closeConfirmTripModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="font-semibold text-zinc-100">
              Florianópolis, Brasil
            </span>{" "}
            nas datas de{" "}
            <span className="font-semibold text-zinc-100">
              16 a 27 de Agosto de 2024
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>

        <form className="space-y-3" onSubmit={createTrip}>
          <div className="flex h-14 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5">
            <User className="size-5 text-zinc-400" />
            <input
              className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
              placeholder="Seu nome completo"
              type="text"
            />
          </div>

          <div className="flex h-14 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5">
            <Mail className="size-5 text-zinc-400" />
            <input
              className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
              placeholder="Seu e-mail pessoal"
              type="email"
            />
          </div>

          <Button type="submit" size="full">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  );
}
