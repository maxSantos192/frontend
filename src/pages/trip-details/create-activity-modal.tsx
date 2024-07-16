import { Calendar, Tag } from "lucide-react";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <Modal
      title={"Cadastrar atividade"}
      subTitle="Todos convidados podem visualizar as atividades."
      closeModal={closeCreateActivityModal}
    >
      <form className="space-y-3">
        <div className="flex h-14 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
          <Tag className="size-5 text-zinc-400" />
          <input
            className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
            placeholder="Qual a atividade?"
            type="text"
            name="title"
          />
        </div>

        <div className="flex h-14 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
          <Calendar className="size-5 text-zinc-400" />
          <input
            className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
            placeholder="Data e horário da atividade"
            type="datetime-local"
            name="occurs_at"
          />
        </div>

        <Button variant="primary" size="full">
          Salvar atividade
        </Button>
      </form>
    </Modal>
  );
}
