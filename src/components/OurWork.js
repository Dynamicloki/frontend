import { Carousel, Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
// import cyber from './assets/img/Services/cyber.jpg';
import dental from '../assets/img/Privacy/image.png';
import Image from "next/image";

 
export function OurWork() {
  return (
    <div className='container mx-auto'>
      <h1 className='title text-center mx-auto'>Our Work</h1>
      <Carousel className="w-full rounded-xl">
        <div className="relative h-full w-full">
          <img
            src="https://systrocode.com/wp-content/uploads/2024/07/Screenshot-165.png"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Nepal Eye Care
              </Typography>
              <div className="flex justify-center gap-2">
                <Link href='https://nepaleyecare.in/'>
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://systrocode.com/wp-content/uploads/2024/07/Screenshot-166.png"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Indira Heart Clinic
              </Typography>
              <div className="flex justify-center gap-2">
                <Link href='https://indiraheartclinic.com/'>
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://systrocode.com/wp-content/uploads/2024/07/Screenshot-175.png"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                MSG
              </Typography>
              <div className="flex justify-center gap-2">
              <Link href='https://maheshsitaramgoyal.com/'>
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://systrocode.com/wp-content/uploads/2024/07/Screenshot-174.png"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Vishnu Jeweller
              </Typography>
              <div className="flex justify-center gap-2">
              <Link href='https://vishnujeweller.com/'>
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <Image src={dental} className='h-full w-full object-cover' alt='image 4'/>
          {/* <img
            src="../assets/img/Privacy/image.png"
            alt="image 4"
            className="h-full w-full object-cover"
          /> */}
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Tooth Dental
              </Typography>
              <div className="flex justify-center gap-2">
              <Link href='https://toothfairypediatricdental.com/'>
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>

  );
}