import { HeadingSection } from "./ui/components";
// import data from "./data.json";
import { InternalSpacer, ExternalSpacer } from "./ui/fundamentals";

function App() {
  return (
    <main className="px-4 xl:px-10">
      <ExternalSpacer size={500} />
      <HeadingSection
        header="My favorites"
        description="Lorem ipsum dolor sit amet consectetur."
        variant="h1"
        size="lg"
        bottomSpace={<InternalSpacer size="i500" />}
      />
    </main>
  );
}

export default App;
