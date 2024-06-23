// import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer" className="space-y-8 hidden lg:visible">
      <hr className="w-11/12 mx-auto" />

      <section className="container flex flex-col w-max space-y-4">
        <div className=" place-self-center">
          <a
            href="/"
            className="font-bold text-xl flex"
          >
            Verisight.
          </a>
        </div>

        <div className="justify-between space-x-48">
          <a
            href="#team"
            className="opacity-100 hover:opacity-60 font-bold text-lg"
          >
            How it works?
          </a>

          <a
            href="#team"
            className="opacity-100 hover:opacity-60 font-bold text-lg"
          >
            About Us
          </a>

          <a
            href='https://verisightlabs.com/privacy'
            className="opacity-100 hover:opacity-60 font-bold text-lg"
          >
            Privacy Policy
          </a>


          <a
            href=''
            className="opacity-100 hover:opacity-60 font-bold text-lg"
          >
            API
          </a>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 VerisightLabs. All Rights Reserved.{" "}
          <a
            // target="_blank"
            href="/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Verisight
          </a>
        </h3>
      </section>
    </footer>
  );
};
