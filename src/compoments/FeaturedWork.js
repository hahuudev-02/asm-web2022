

export default function FeaturedWork({id, img, title, year, description, conten}) {
  return `
    <div class="Featured__works-item mt-8">
        <a href="/workDetail.html?id=${id}" class="flex flex-col md:flex-row space-y-4 md:space-x-6">
            <img src="${img}" alt="" class="rounded-md" />
            <div class="md:mr-4">
                <h4 class="title text-3xl text-dark font-bold text-left">
                    ${title}
                </h4>
                <div class="my-4 flex space-x-8 ">
                    <span
                        class="flex items-center justify-center w-[62px] h-[25px] bg-[#142850] text-lg text-white rounded-2xl"
                        >${year}</span
                    >
                    <span class="text-xl text-light">${description}</span>
                </div>
                <p class="text-base text-dark leading-6 text-left">
                    ${conten}
                </p>
            </div>
        </a>

        <div class="w-ful h-[1px] bg-[#E0E0E0] mt-6"></div>
    </div>
  `
}
