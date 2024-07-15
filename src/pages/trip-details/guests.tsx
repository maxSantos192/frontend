import { CircleDashed, CircleCheck, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-zinc-50">Convidados</h2>

      <div className="flex items-center justify-between gap-16">
        <div className="space-y-1.5">
          <span className="block font-medium text-zinc-100">Jessica White</span>
          <span className="block truncate text-sm text-zinc-400">
            jessica.white44@yahoo.com
          </span>
        </div>
        <CircleDashed className="size-5 shrink-0 text-lime-300" />
      </div>

      <div className="flex items-center justify-between gap-16">
        <div className="space-y-1.5">
          <span className="block font-medium text-zinc-100">
            Dr. Rita Pacocha
          </span>
          <span className="block truncate text-sm text-zinc-400">
            lacy.stiedemann@gmail.com
          </span>
        </div>
        <CircleCheck className="size-5 shrink-0 text-lime-300" />
      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
