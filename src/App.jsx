import "./App.css";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";

function App() {
  return (
    <>
      <Navbar className="bg-white">
        <NavbarBrand>
          <a href="" className="text-xl font-bold text-black">
            Tokokeroket
          </a>
        </NavbarBrand>
        <NavbarContent className="hidden">
          <NavbarItem>
            <Link href="" className="">
              Beranda
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <Button color="primary" size="md">
            Hubungi Kami
          </Button>
        </NavbarContent>
      </Navbar>
      <main className="px-5">
        <div className="text-wrap text-center mt-16">
          <h1 className="text-3xl font-bold text-black">
            Selamat Datang di Toko Kami
          </h1>
          <p className="text-lg font-normal text-black opacity-80 mt-2">
            Selamat berbelanja di toko kami
          </p>
          <Button color="primary" className="text-md font-medium mt-5">
            Belanja
          </Button>
        </div>
        <div className="grid grid-cols-2 justify-center items-center gap-5 mt-20">
          <Link href="">
            <Card className="w-40 hover:scale-105 hover:duration-400">
              <CardBody>
                <img
                  alt="Beef Meat"
                  src="/ground-beef-meat-in-a-frying-pan-picjumbo-com.jpg"
                  className="w-full rounded-md"
                />
              </CardBody>
              <CardFooter className="relative flex justify-between">
                <div>
                  <h1 className="text-base font-medium text-black">
                    Beef Meat
                  </h1>
                  <p className="text-sm font-normal text-black opacity-80">
                    Beef Meat
                  </p>
                </div>
                <div className="flex justify-end items-end h-full">
                  <p className="absolute bottom-3 text-xs font-normal text-black opacity-80">
                    Rp. 20K
                  </p>
                </div>
              </CardFooter>
            </Card>
          </Link>
          <Link href="">
            <Card className="w-40 hover:scale-105 hover:duration-400">
              <CardBody>
                <img
                  alt="Beef Meat"
                  src="/ground-beef-meat-in-a-frying-pan-picjumbo-com.jpg"
                  className="w-full rounded-md"
                />
              </CardBody>
              <CardFooter className="relative flex justify-between">
                <div>
                  <h1 className="text-base font-medium text-black">
                    Beef Meat
                  </h1>
                  <p className="text-sm font-normal text-black opacity-80">
                    Beef Meat
                  </p>
                </div>
                <div className="flex justify-end items-end h-full">
                  <p className="absolute bottom-3 text-xs font-normal text-black opacity-80">
                    Rp. 20K
                  </p>
                </div>
              </CardFooter>
            </Card>
          </Link>
          <Link href="">
            <Card className="w-40 hover:scale-105 hover:duration-400">
              <CardBody>
                <img
                  alt="Beef Meat"
                  src="/ground-beef-meat-in-a-frying-pan-picjumbo-com.jpg"
                  className="w-full rounded-md"
                />
              </CardBody>
              <CardFooter className="relative flex justify-between">
                <div>
                  <h1 className="text-base font-medium text-black">
                    Beef Meat
                  </h1>
                  <p className="text-sm font-normal text-black opacity-80">
                    Beef Meat
                  </p>
                </div>
                <div className="flex justify-end items-end h-full">
                  <p className="absolute bottom-3 text-xs font-normal text-black opacity-80">
                    Rp. 20K
                  </p>
                </div>
              </CardFooter>
            </Card>
          </Link>
          <Link href="">
            <Card className="w-40 hover:scale-105 hover:duration-400">
              <CardBody>
                <img
                  alt="Beef Meat"
                  src="/ground-beef-meat-in-a-frying-pan-picjumbo-com.jpg"
                  className="w-full rounded-md"
                />
              </CardBody>
              <CardFooter className="relative flex justify-between">
                <div>
                  <h1 className="text-base font-medium text-black">
                    Beef Meat
                  </h1>
                  <p className="text-sm font-normal text-black opacity-80">
                    Beef Meat
                  </p>
                </div>
                <div className="flex justify-end items-end h-full">
                  <p className="absolute bottom-3 text-xs font-normal text-black opacity-80">
                    Rp. 20K
                  </p>
                </div>
              </CardFooter>
            </Card>
          </Link>
        </div>
      </main>
      <footer className="flex justify-between items-center px-5 mt-16 mb-10">
        <p className="text-sm font-normal text-black opacity-80">
          &copy; 2024 Abhiassadev
        </p>
        <Link href="" className="">
          Github
        </Link>
      </footer>
    </>
  );
}

export default App;
