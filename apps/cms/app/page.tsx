import Image from "next/image";
import { Button } from "ui/src/components";
import { AnimatedNumber } from "~/components/AnimatedNumber";
import apartBuy from "~/public/apartBuy.jpg";
import apartRent from "~/public/apartRent.jpg";
import commercialRent from "~/public/commercial.jpeg";
import glampingImage from "~/public/glamping.jpg";
import houseBuy from "~/public/house-in-tbilisi-5.jpg";
import houseRent from "~/public/house.jpg";

export default function Home() {
  return (
    <main className="flex flex-col px-32 justify-center m-auto">
      <div className="grid grid-cols-4 grid-rows-[minmax(100px,350px)] px-64 py-32 gap-32">
        <div className="row-span-1 col-span-1">
          <p>
            {" "}
            Here you will find some text.Here you will find some text.Here you
            will find some text.
          </p>
          <Image
            src={apartBuy}
            alt="Apartment to buy"
            className="rounded-2xl"
          />
        </div>
        <div className="row-span-1">
          <Image
            src={apartRent}
            alt="Apartment to rent"
            className="rounded-2xl"
          />
          <Button>See all</Button>
        </div>
        <div className="col-span-2 row-span-1">
          <Image src={glampingImage} alt="Glamping" className="rounded-xl" />
        </div>
        <div className="col-span-1">
          {" "}
          <Image
            src={commercialRent}
            alt="Commercial rent"
            className="rounded-2xl"
          />
        </div>
        <div className="row-span-1 col-span-2">
          <Image
            src={houseBuy}
            alt="Houses to rent"
            className="rounded-2xl object-contain"
          />
        </div>
        <div className="row-span-2">
          <p>There will be some text here.here will be some text here.</p>
          <Image src={houseRent} alt="Houses to rent" className="rounded-2xl" />
        </div>
        <div className="row-span-2"> </div>
      </div>

      <h1 className="text-3xl flex flex-row">
        more than <AnimatedNumber /> objects available
      </h1>
    </main>
  );
}
