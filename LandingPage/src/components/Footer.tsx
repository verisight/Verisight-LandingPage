// import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-10 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            href="/"
            className="font-bold text-xl flex"
          >
            Verisight.
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href="#team"
            className="opacity-100 hover:opacity-60 font-bold text-lg"
          >
            How it works?
          </a>

        </div>

        <div className="flex flex-col gap-2">
          <a
            href="#team"
            className="opacity-100 hover:opacity-60 font-bold text-lg"
          >
            About Us
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href='https://verisightlabs.com/privacy'
            className="opacity-100 hover:opacity-60 font-bold text-lg"
          >
            Privacy Policy
          </a>

        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">API</h3>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 VerisightLabs. All Rights Reserved.{" "}
          <a
            target="_blank"
            href="https://verisightlabs.com/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Verisight
          </a>
        </h3>
      </section>
    </footer>
  );
};
