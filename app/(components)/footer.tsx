import { PaperPlaneIcon } from "@radix-ui/react-icons";

const emailUrl = "mailto:support@fynopsis.ai";

export const Footer = () => {
  return (
    <footer className="mt-6 px-4 py-6">
      <div className="container flex items-center p-0">
        <PaperPlaneIcon className="mr-2 h-6 w-6 text-white" />
        <p className="text-sm text-gray-300">
          Contact: {" "}
          <a className="underline underline-offset-4" href={emailUrl}>
            support@fynopsis.ai
          </a>
        </p>
      </div>
    </footer>
  );
};
