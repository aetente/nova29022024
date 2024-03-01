import "@/app/globals.css"
import Image from "next/image";
import { useRouter } from "next/router";

const styles = {
  SettingsIcon: {
    color: '#ffffff',
    fill: '#ffffff',
    width: '14px',
    height: '14px',
    fontSize: '14px',
  },
};

const SettingsIcon = () => (
  <svg style={styles.SettingsIcon} viewBox="0 0 512 512">
    <path d="M0 416C0 398.3 14.33 384 32 384H86.66C99 355.7 127.2 336 160 336C192.8 336 220.1 355.7 233.3 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H233.3C220.1 476.3 192.8 496 160 496C127.2 496 99 476.3 86.66 448H32C14.33 448 0 433.7 0 416V416zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM352 176C384.8 176 412.1 195.7 425.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H425.3C412.1 316.3 384.8 336 352 336C319.2 336 291 316.3 278.7 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H278.7C291 195.7 319.2 176 352 176zM384 256C384 238.3 369.7 224 352 224C334.3 224 320 238.3 320 256C320 273.7 334.3 288 352 288C369.7 288 384 273.7 384 256zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H265.3C252.1 156.3 224.8 176 192 176C159.2 176 131 156.3 118.7 128H32C14.33 128 0 113.7 0 96C0 78.33 14.33 64 32 64H118.7C131 35.75 159.2 16 192 16C224.8 16 252.1 35.75 265.3 64H480zM160 96C160 113.7 174.3 128 192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96z">
    </path>
  </svg>
)

const Volunteers = () => {

  const router = useRouter()

  return (
    <div
      className="bg-white flex flex-col items-center">
      <div className="w-full max-w-[356px] py-8">

        <div className="flex items-center gap-4 mb-11">
          <div className="text-black text-2xl font-semibold leading-relaxed">
            Discover volunteering opportunities
          </div>
        </div>

        <div className="flex items-center mb-8 gap-3">
          <input className="w-full px-2 py-0 h-12 p-x-4 border border-gray-300 bg-gray-300/80 placeholder-gray-700 text-gray-700 text-sm font-sans leading-relaxed rounded-lg outline-none" placeholder="Search for volunteer tags" />
        </div>

        <div className="flex gap-3 items-center mb-6">
          <div className="text-gray-900 text-sm font-medium leading-relaxed tracking-tight">
            All
          </div>
          <div className="text-gray-900 text-sm font-semibold leading-relaxed tracking-tight">
            Store
          </div>
          <div className="text-gray-900 text-sm font-medium leading-relaxed tracking-tight">
            Children
          </div>
          <div className="text-gray-900 text-sm font-medium leading-relaxed tracking-tight">
            Cooking
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6 flex-wrap justify-center">
          <div className="flex flex-col items-center justify-center">
            <figure className="relative h-[146px] w-[146px] rounded-lg bg-cover bg-center bg-green-700">

            </figure>
            <p>aaaaaaaaaaaaa</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <figure className="relative h-[146px] w-[146px] rounded-lg bg-cover bg-center bg-yellow-300">

            </figure>
            <p>aaaaaaaaaaaaa</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <figure className="relative h-[146px] w-[146px] rounded-lg bg-cover bg-center bg-gray-300">

            </figure>
            <p>aaaaaaaaaaaaa</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <figure className="relative h-[146px] w-[146px] rounded-lg bg-cover bg-center bg-blue-300">

            </figure>
            <p>Grocery assitance</p>
          </div>
        </div>

        <div className="w-full relative h-max-[256px] h-[256px]">
          <Image
            src="/map1.png"
            alt="map"
            fill
            objectFit="cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Volunteers;