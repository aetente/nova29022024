import "@/app/globals.css"
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

const HomeComponent = () => {

  const router = useRouter()

  return (
    <div
      className="bg-white flex flex-col items-center p-8">
      <div className="w-full max-w-[356px] py-8">

        <div className="flex items-center gap-4 mb-11">
          <figure className="relative h-[48px] w-[48px] rounded-full bg-cover bg-center bg-blue-800">
            {/* <img src="image.jpeg" alt="" className="h-full w-full object-cover" /> */}
          </figure>
          <div className="text-black text-2xl font-semibold leading-relaxed">
            Good morning
          </div>
        </div>

        <div className="mb-11 bg-gray-300 rounded-lg p-6 pt-9 pb-3">
          <div className="text-black text-sm font-bold mb-2">
            How are you feeling today
          </div>
          <input className="w-full px-2 py-0 border-0 border-b-2 border-b-[#21828e] bg-white placeholder-[#21828e] font-sans text-[#21828e] text-base leading-[18px] min-h-11 outline-none" placeholder="Type your question..." />
        </div>

        <div className="flex items-center mb-8 gap-3">
          <input className="w-full px-2 py-0 h-12 p-x-4 border border-gray-300 bg-gray-300/80 placeholder-gray-700 text-gray-700 text-sm font-sans leading-relaxed rounded-lg outline-none" placeholder="Search for more resources" />
          <button
            onClick={() => {
              router.push("/simple-chatbot")
            }}
            className="min-w-12 w-12 h-12 flex justify-center items-center rounded-xl  bg-gray-800 text-white cursor-pointer outline-none"
          >
            <SettingsIcon />
          </button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-900 text-sm font-semibold leading-relaxed tracking-tight">
            Smile, it{"'"}s a new day!
          </div>
          <div className="text-gray-900 text-sm font-semibold leading-relaxed tracking-tight">{"< >"}</div>
        </div>

        <div className="relative h-[170px] rounded-lg bg-cover bg-center bg-local bg-no-repeat bg-amber-200 mb-9">
          <div className="px-4 pt-4 pb-1 absolute w-full bottom-0 h-[70px] bg-gray-300 rounded-lg">
            <h1 className="text-gray-800 font-semibold text-base leading-snug">Delicious Persian Shabbat Dinner</h1>
            <h2 className="text-gray-800 text-sm leading-snug">You are not alone, join an event nearby</h2>
          </div>
        </div>



        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-900 text-sm font-semibold leading-relaxed tracking-tight">
            For you
          </div>
          <div className="text-gray-900 text-sm font-semibold leading-relaxed tracking-tight">{"< >"}</div>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <figure className="relative h-[210px] w-full rounded-lg bg-cover bg-center bg-green-700">
            <div className="p-3 absolute bottom-0 bg-[#030303] h-[64px] w-full rounded-lg">
              <p className="text-white text-sm font-medium">Stress relief techniques</p>
              <p className="text-white text-xs font-medium">Personalized mental health</p>

            </div>
          </figure>

          <figure className="relative h-[210px] w-full rounded-lg bg-cover bg-center bg-rose-300">
            <div className="p-3 absolute bottom-0 bg-[#f0f0f0] h-[64px] w-full rounded-lg">
              <p className="text-black text-sm font-medium">Organizations</p>
              <p className="text-black text-xs font-medium">Helping you every step</p>
            </div>
          </figure>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-900 text-sm font-semibold leading-relaxed tracking-tight">
            Local assitance
          </div>
        </div>

        <div className="flex gap-2 justify-between">
          <div>
            <div className="inline-flex justify-center items-center bg-[#030303] text-white p-2 rounded-lg w-12 h-12 cursor-pointer hover:bg-hover hover:text-hover transition duration-300 ease-in-out">
              <svg viewBox="0 0 24 24" className="fill-current w-6 h-6 shrink-0">
                <path d="M0 0h24v24H0z" fill="none">
                </path>
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z">
                </path>
              </svg>
            </div>
            <p className="text-primary text-xs font-poppins leading-6 text-center">Groceries</p>
          </div>

          <div>
            <div className="inline-flex justify-center items-center bg-[#030303] text-white p-2 rounded-lg w-12 h-12 cursor-pointer hover:bg-hover hover:text-hover transition duration-300 ease-in-out">
              <svg viewBox="0 0 24 24" className="fill-current w-6 h-6 shrink-0">
                <path d="M0 0h24v24H0z" fill="none">
                </path>
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z">
                </path>
              </svg>
            </div>
            <p className="text-primary text-xs font-poppins leading-6 text-center">Childcare</p>
          </div>

          <div>
            <div className="inline-flex justify-center items-center bg-[#030303] text-white p-2 rounded-lg w-12 h-12 cursor-pointer hover:bg-hover hover:text-hover transition duration-300 ease-in-out">
              <svg viewBox="0 0 24 24" className="fill-current w-6 h-6 shrink-0">
                <path d="M0 0h24v24H0z" fill="none">
                </path>
                <path d="m9 17 3-2.94a9.34 9.34 0 0 0-1-.06c-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m4.47 8.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z" fill-rule="evenodd">
                </path>
              </svg>
            </div>
            <p className="text-primary text-xs font-poppins leading-6 text-center">Tasks</p>
          </div>

          <div>
            <div className="inline-flex justify-center items-center bg-[#030303] text-white p-2 rounded-lg w-12 h-12 cursor-pointer hover:bg-hover hover:text-hover transition duration-300 ease-in-out">
              <svg viewBox="0 0 24 24" className="fill-current w-6 h-6 shrink-0">
                <path fill="none" d="M0 0h24v24H0z">
                </path>
                <path d="M11 5.5H8V4h.5c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1H6v1.5H3c-.55 0-1 .45-1 1s.45 1 1 1V15c0 1.1.9 2 2 2h1v4l2 1.5V17h1c1.1 0 2-.9 2-2V7.5c.55 0 1-.45 1-1s-.45-1-1-1zM9 9H7.25c-.41 0-.75.34-.75.75s.34.75.75.75H9V12H7.25c-.41 0-.75.34-.75.75s.34.75.75.75H9V15H5V7.5h4V9zm10.5 1.5V10c.55 0 1-.45 1-1s-.45-1-1-1h-5c-.55 0-1 .45-1 1s.45 1 1 1v.5c0 .5-1.5 1.16-1.5 3V20c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-6.5c0-1.84-1.5-2.5-1.5-3zm-3 0V10h1v.5c0 1.6 1.5 2 1.5 3v.5h-4v-.5c0-1 1.5-1.4 1.5-3zM15 20v-1.5h4V20h-4z">
                </path>
              </svg>
            </div>
            <p className="text-primary text-xs font-poppins leading-6 text-center">Pharmacy</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeComponent;