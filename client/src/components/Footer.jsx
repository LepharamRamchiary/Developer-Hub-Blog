import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { IoLink } from "react-icons/io5";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Developer's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://my-portfolio-omega-jade.vercel.app/"
                  target="_blank"
                  rel="noopene noreferrer"
                >
                  My Portfolio
                </Footer.Link>
                <Footer.Link href="/about" rel="noopene noreferrer">
                  Developer's BLog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/LepharamRamchiary"
                  target="_blank"
                  rel="noopene noreferrer"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/lepharam-ramchiary-576282215/"
                  target="_blank"
                  rel="noopene noreferrer"
                >
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Sahand's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.linkedin.com/in/lepharam-ramchiary-576282215"
              target="_blank"
              rel="noopene noreferrer"
              icon={IoLogoLinkedin}
            />
            <Footer.Icon
              href="https://github.com/LepharamRamchiary"
              target="_blank"
              rel="noopene noreferrer"
              icon={BsGithub}
            />
            <Footer.Icon
              href="https://my-portfolio-omega-jade.vercel.app"
              target="_blank"
              rel="noopene noreferrer"
              icon={IoLink}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
