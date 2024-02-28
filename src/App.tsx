import { HeadingSection } from "./ui/components";
// import data from "./data.json";
import { InternalSpacer, ExternalSpacer, Card } from "./ui/fundamentals";

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
      <Card
        category="CATEGORY"
        featureImage="/image-placeholder.png"
        avatarImage="/avatar-image.png"
        alt="Alt text"
        author="Author name"
        title="Lorem ipsum dolor sit ametetur adipiscing elit vitae"
        description="Lorem ipsum dolor sit amet consectet adipiscing elit"
      />
    </main>
  );
}

export default App;
