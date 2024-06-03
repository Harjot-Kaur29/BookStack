import React from 'react';
import { Footer as FlowbiteFooter } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const AppFooter = () => {
  return (
    <FlowbiteFooter bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <FlowbiteFooter.Title title="Company" />
            <FlowbiteFooter.LinkGroup col>
              <FlowbiteFooter.Link href="#">About</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Careers</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Brand Center</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Blog</FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
          </div>
          <div>
            <FlowbiteFooter.Title title="Help Center" />
            <FlowbiteFooter.LinkGroup col>
              <FlowbiteFooter.Link href="#">Discord Server</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Twitter</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Facebook</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Contact Us</FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
          </div>
          <div>
            <FlowbiteFooter.Title title="Legal" />
            <FlowbiteFooter.LinkGroup col>
              <FlowbiteFooter.Link href="#">Privacy Policy</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Licensing</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Terms & Conditions</FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
          </div>
          <div>
            <FlowbiteFooter.Title title="Download" />
            <FlowbiteFooter.LinkGroup col>
              <FlowbiteFooter.Link href="#">iOS</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Android</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">Windows</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#">MacOS</FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Copyright href="#" by="BookStack™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FlowbiteFooter.Icon href="#" icon={BsFacebook} />
            <FlowbiteFooter.Icon href="#" icon={BsInstagram} />
            <FlowbiteFooter.Icon href="#" icon={BsTwitter} />
            <FlowbiteFooter.Icon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
}

export default AppFooter;
