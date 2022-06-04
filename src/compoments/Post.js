export default function Post(title) {
    return `
        <div class="post bg-white p-5 rounded">
            <h2 class="text-[26px] font-bold">${title}</h2>
            <div class="flex justify-between my-4">
                <span class="text-base">12 Feb 2020</span>
                <span class="text-base">Design, Pattern</span>
            </div>
            <p class="text-base text-[#21243D] leading-6">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
    `
}