import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full">
      <main className="flex items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center mt-[40vh] mb-[40vh] w-full max-w-[1920px] relative">
          <div className="flex flex-col gap-2 absolute left-[4rem]">
            <Image
              alt="linkedin icon"
              src="/linkedin.svg"
              width={28}
              height={28}
            />
            <Image
              alt="behance icon"
              src="/behance.svg"
              width={28}
              height={28}
            />
            <Image alt="email icon" src="/email.svg" width={28} height={28} />
          </div>
          <div className="grid">
            <h1 className="font-jomolhari">Guyllian</h1>
            <p className="justify-self-end text-xl text-end font-light -mt-2">gui/li/an</p>
          </div>
        </div>
      </main>
    </div>
  );
}
