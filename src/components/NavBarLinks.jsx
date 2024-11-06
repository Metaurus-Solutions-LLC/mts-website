import { Link } from 'react-router-dom'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


function NavBarLinks() {
    return (
        <div>
            <ul className="navs">
              <li className="mr-4 gap-x-1.5 rounded-md bg-[#182335] px-3 py-2 text-sm font-semibold text-[wheat] shadow-sm ring-1 ring-inset hover:bg-[#253653]"><Link to="/">HomePage</Link></li>
              <li className="mr-4 underline">
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#182335] px-3 py-2 text-sm font-semibold text-[wheat] shadow-sm ring-1 ring-inset hover:bg-[#253653]">
                        Services
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                      </MenuButton>
                    </div>
              
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#34547e] shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                      <MenuItem>
                          <div className="block px-4 py-2 text-sm data-[focus]:bg-[#182335] data-[focus]:text-[wheat]">
                            <Link to="DevOps">DevOps</Link>
                          </div>
                        </MenuItem>
                        <MenuItem>
                          <div className="block px-4 py-2 text-sm data-[focus]:bg-[#182335] data-[focus]:text-[wheat]">
                            <Link to="Cloud">Cloud</Link>
                          </div>
                        </MenuItem>
                        <MenuItem>
                          <div className="block px-4 py-2 text-sm data-[focus]:bg-[#182335] data-[focus]:text-[wheat]">
                            <Link to="ProjMgmt">Project Management</Link>
                          </div>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu> 
              </li>
              <li className="mr-4 underline">
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#182335] px-3 py-2 text-sm font-semibold text-[wheat] shadow-sm ring-1 ring-inset hover:bg-[#253653]">
                        About Us
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                      </MenuButton>
                    </div>
              
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#34547e] shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <div className="block px-4 py-2 text-sm data-[focus]:bg-[#182335] data-[focus]:text-[wheat]">
                            <Link to="Metbattle">Battle of the Metaurus</Link>
                          </div>
                        </MenuItem>
                        <MenuItem className="block px-4 py-2 text-sm data-[focus]:bg-[#182335] data-[focus]:text-[wheat]">
                          <div>
                            <Link to="Metbattle">News</Link>
                          </div>
                        </MenuItem>
                        <MenuItem className="block px-4 py-2 text-sm data-[focus]:bg-[#182335] data-[focus]:text-[wheat]">
                          <div>
                            <Link to="WhoWeAre">Who we are</Link>
                          </div>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu> 
              </li>
              <li className="umr-4 gap-x-1.5 rounded-md bg-[#182335] px-3 py-2 text-sm font-semibold text-[wheat] shadow-sm ring-1 ring-inset hover:bg-[#253653]"><Link to="email">Contact Us</Link></li>
            </ul>    
         </div>
    );
  }
    
export default NavBarLinks;