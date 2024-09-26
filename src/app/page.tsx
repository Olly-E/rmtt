import { Button } from "./components/elements/Button";

export default function Home() {
  return (
    <div className="prose">
      <h1>This is an h1 tag</h1>
      <h2>This is an h2 tag</h2>
      <h3>This is an h3 tag</h3>
      <h4>This is an h4 tag</h4>
      <h5>This is an h5 tag</h5>
      <div className="flex">
        <h6>This is an h6 tag</h6>
        <Button ariaLabel="cl" variant="close"></Button>
      </div>
    </div>
  );
}
