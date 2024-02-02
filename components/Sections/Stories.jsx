import Card from "./Card";
import StoryView from "./StoryView";

function Stories() {
  return (
    <section className="md:flex w-full space-y-4 md:space-y-0 mt-12 justify-between relative gap-3">
      {/* Chart View */}
      <Card className={`w-full p-4`}>
        <h2 className="font-bold">Popular 20 Stories</h2>
        <StoryView />
      </Card>
    </section>
  );
}

export default Stories;
