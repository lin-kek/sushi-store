import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="mt-5">
      <Separator />
      <div className="text-center text-sm opacity-50 my-5">
        Created by{" "}
        <a
          href="https://github.com/lin-kek"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer hover:underline"
        >
          Lin-kek
        </a>
      </div>
    </footer>
  );
}
