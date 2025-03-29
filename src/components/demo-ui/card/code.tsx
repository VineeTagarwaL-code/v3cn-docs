import { ScrollArea } from '@/components/ui/scroll-area';

export function CodeDisplay({ html }: { html: string }) {
  return (
    <ScrollArea className="h-[500px]">
      <div
        className="p-5 text-sm leading-[1.6rem] bg-zinc-900 dark:bg-transparent rounded-lg [&>pre]:!bg-transparent [&>pre]:!p-0 [&_.line-number]:pr-4 [&_.line-number]:text-zinc-500 [&_.line-number]:border-r [&_.line-number]:border-zinc-700 [&_.line-number]:mr-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </ScrollArea>
  );
}

export const basicUsageRawCode = ` 
<div className="flex justify-center items-center h-fit py-7  w-full px-2 ">
      <div className="relative cursor-pointer animate-float  md:block mr-8">
        <CardContainer className=" cursor-pointer">
          <div className="px-8 py-7 max-w-[400px] border-solid gap-5 bg-black flex flex-col justify-start item-center border-2  rounded-2xl">
            <CardItem>
                <Image
                src="https://v3cn.vineet.pro/image/V.png"
                alt="hvbjn"
                width={400}
                height={400}
                className="rounded-[3rem]"
              />
            </CardItem>

            <div className="px-4 flex flex-col justify-center items-start gap-5">
              <h1 className="text-4xl  text-white font-bold">V3cn</h1>

              <h4 className="text-lg text-white">
                Here you will get components which you wont get anywhere.
              </h4>

              <p className="text-purple-400">Made by Vineet</p>
            </div>
          </div>
        </CardContainer>
      </div>
</div>`;
