export default function Post({title, date, description, conten}, line=true) {
    return `
        <div class="post bg-white p-2 md:p-5 rounded">
            <a href="" className="">
                <h2 class="text-[26px] font-bold">${title}</h2>
                <div class="flex justify-between my-4">
                    <span class="text-xl">${date}</span>
                    <span class="block w-0.5 h-5 bg-gray-700"></span>
                    <span class="text-xl text-light">${description}</span>
                </div>
                <p class="text-base text-[#21243D] leading-6">${conten}</p>        
            </a>

            ${line && `<span class="block w-ful h-[1px] bg-slate-500 mt-6"></span>`}
        </div>
    `
}