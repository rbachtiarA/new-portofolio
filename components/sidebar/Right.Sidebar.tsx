import { PROJECT_LIST, TECH_STACK } from "@/constant/content";
import ItemList from "./Right.item";
import { Separator } from "../ui/separator";

export default function RightSideBar() {
  return (
    <div
      id="right-sidebar"
      className="hidden xl:block bg-sidebar border-l-2 w-[300px] px-3 py-2 space-y-2 border-sidebar-border overflow-y-auto"
    >
      <ItemList
        title="My Projects"
        className="font-semibold text-lg"
        contents={PROJECT_LIST}
      />

      <Separator />
      <h2 className="font-semibold text-lg">My Stack</h2>

      <ItemList
        title={TECH_STACK.frontend.title}
        contents={TECH_STACK.frontend.item}
      />
      <ItemList
        title={TECH_STACK.backend.title}
        contents={TECH_STACK.backend.item}
      />
      <ItemList
        title={TECH_STACK.database.title}
        contents={TECH_STACK.database.item}
      />
      <ItemList
        title={TECH_STACK.tools.title}
        contents={TECH_STACK.tools.item}
      />
    </div>
  );
}
