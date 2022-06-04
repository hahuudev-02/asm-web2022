

export default function FeaturedWork(img, title, year, description, conten) {
  return `
    <div class="Featured__works-item mt-6">
        <a href="" class="flex space-x-6">
            <img src="${img}" alt="" class="rounded-md" />
            <div class="">
                <h4 class="title text-3xl text-dark font-bold">
                    ${title}
                </h4>
                <div class="my-4 flex space-x-8">
                    <span
                        class="flex items-center justify-center w-[62px] h-[25px] bg-[#142850] text-lg text-white rounded-2xl"
                        >${year}</span
                    >
                    <span class="text-xl text-light">${description}</span>
                </div>
                <p class="text-base text-dark leading-6">
                    ${conten}
                </p>
            </div>
        </a>

        <span class="block w-ful h-[1px] bg-slate-500 mt-6"></span>
    </div>
  `
}
