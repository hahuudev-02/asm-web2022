export default function Post({title, date, description, conten}) {
    return `
        <div class="post bg-white p-2 md:p-5 rounded">
            <a href="" className="">
                <h2 class="text-[26px] md:text-3xl font-bold text-left">${title}</h2>
                <div class="max-w-[90%] md:max-w-[80%] flex justify-between my-4 ">
                    <span class="text-base md:text-lg font-normal">${date}</span>
                    <span class="">|</span>
                    <span class="text-base md:text-lg text-light font-normal">${description}</span>
                </div>
                <p class="text-base text-[#21243D] leading-6 text-left font-normal">${conten}</p>        
            </a>

            <div class="w-ful h-[1px] bg-[#E0E0E0] mt-7"></div>
        </div>
    `
}