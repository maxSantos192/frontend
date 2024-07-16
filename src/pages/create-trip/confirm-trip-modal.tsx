import { Mail, User } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";

interface ConfirmTripModalProps {
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  closeConfirmTripModal: () => void;
}

export function ConfirmTripModal({
  createTrip,
  closeConfirmTripModal,
}: ConfirmTripModalProps) {
  function subTitle() {
    return (
      <>
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
      </>
    );
  }
  return (
    <Modal
      title="Confirmar participação"
      subTitle={subTitle()}
      closeModal={closeConfirmTripModal}
    >
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
    </Modal>
  );
}
