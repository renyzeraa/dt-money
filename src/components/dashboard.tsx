import { Summary } from "./summary";
import { TransitionsTable } from "./transitions-table";

export function Dashboard() {
  return (
    <main className="max-w-[1120px] mx-auto py-10 px-4">
      <Summary />
      <TransitionsTable />
    </main>
  )
}