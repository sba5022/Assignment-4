// console.log('connected');
// document.getElementById('all-btn').addEventListener('click', function () {
//     const allcard = document.getElementById('all-cards');
//     const cards = allcard.children;
//     console.log(cards);
// });
// document.getElementById('ibtn-one').addEventListener('click', function () {
//     const ibtno = document.getElementById('ibtn-one');
//     const ibtnOne = ibtno.children;
//     console.log(ibtnOne);
// });
// document.getElementById('rbtn-one').addEventListener('click', function () {
//     const rbtno = document.getElementById('rbtn-one');
//     const rbtnOne = rbtno.children;
//     console.log(rbtnOne);
// });

// let icount = 0;
// document.getElementById('ibtn-one').addEventListener('click', function () {
//     icount++;
//     console.log(icount);
// })
// let interviewCount = 0;
// const interViewHeader = document.getElementById('interview-count');
// document.getElementById('ibtn-one').addEventListener('click', function () {
//     interviewCount++;
//     interViewHeader.innerText = interviewCount;
//     if (interviewCount >= 8) {
//         document.getElementById('ibtn-one').disabled = true;
//     }

// })
// let rcount = 0;
// document.getElementById('rbtn-one').addEventListener('click', function () {
//     rcount++;
//     console.log(rcount);
// })
// let rejectedCount = 0;
// const rejectedHeader = document.getElementById('rejected-count');
// document.getElementById('rbtn-one').addEventListener('click', function () {
//     rejectedCount++;
//     rejectedHeader.innerText = rejectedCount;
//     if (rejectedCount >= 8) {
//         document.getElementById('rbtn-one').disabled = true;
//     }

// })

// const maxTotal = 8;
// const interviewDisplay = document.getElementById('interview-count');
// const rejectedDisplay = document.getElementById('rejected-count');
// function totalCount() {
//     return interviewCount + rejectedCount;
// }
// document.querySelectorAll('.btn-accent').forEach(btn => {
//     document.getElementById('ibtn-one').addEventListener('click', () => {
//         if (totalCount() < maxTotal) {
//             interviewCount++;
//             interviewDisplay.innerText = interviewCount;
//         } else {
//             alert('Total limit reached! Cannot add more.');
//         }
//     });
// });
// document.querySelectorAll('.btn-error').forEach(btn => {
//     document.getElementById('rbtn-one').addEventListener('click', () => {
//         if (totalCount() < maxTotal) {
//             rejectedCount++;
//             rejectedDisplay.innerText = rejectedCount;
//         } else {
//             rejectedDisplay.innerText = 'Invalid';
//         }
//     });
// });
let interviewList = [];
let RejectedList = [];
let currentStatus = 'all';

let total = document.getElementById('total');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
console.log(total);
const allCardsSection = document.getElementById('allCards');
const mainSection = document.querySelector('section');
const filterSelection = document.getElementById('filtered-section');
const availabestat = document.getElementById('availabe');
console.log(mainSection);

function calculateCount() {
    total.innerText = allCardsSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = RejectedList.length;

};
calculateCount();

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')
function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-info', 'text-base-100')
    interviewFilterBtn.classList.remove('bg-info', 'text-base-100')
    rejectedFilterBtn.classList.remove('bg-info', 'text-base-100')


    allFilterBtn.classList.add('bg-gray-300', 'text-black')
    interviewFilterBtn.classList.add('bg-gray-300', 'text-black')
    rejectedFilterBtn.classList.add('bg-gray-300', 'text-black')

    console.log(id);
    const selected = document.getElementById(id);
    currentStatus = id;
    // console.log(selected);
    selected.classList.remove('bg-gray-300', 'text-black');
    selected.classList.add('bg-info', 'text-base-100')

    if (id == 'interview-filter-btn') {
        allCardsSection.classList.add('hidden');
        filterSelection.classList.remove('hidden');
        renderInterview();
    }
    else if (id == 'all-filter-btn') {
        allCardsSection.classList.remove('hidden')
        filterSelection.classList.add('hidden')
    }
    else if (id == 'rejected-filter-btn') {
        allCardsSection.classList.add('hidden');
        filterSelection.classList.remove('hidden');
        renderRejected();
    }
}

mainSection.addEventListener('click', function (event) {

    if (event.target.closest('#inter-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        const cardName = parentNode.querySelector('.card').innerText;
        const secondN = parentNode.querySelector('.second').innerText;
        const dotN = parentNode.querySelector('.dot').innerText;
        const paraN = parentNode.querySelector('.para').innerText;
        const statusN = parentNode.querySelector('.status').innerText;
        parentNode.querySelector('.status').innerText = 'Interview';
        const cardInfo = {
            cardName,
            secondN,
            dotN,
            paraN,
            statusN: 'Interview',
        };
        console.log(cardInfo);


        const cardExists = interviewList.find(item => item.cardName == cardInfo.cardName)

        if (!cardExists) {
            interviewList.push(cardInfo)
        }
        RejectedList = RejectedList.filter(item => item.cardName !== cardInfo.cardName);
        if (currentStatus == 'rejected-filter-btn') {
            renderRejected()
        }

        calculateCount();
    }
    else if (event.target.closest('#rbtn-one')) {
        const parentNode = event.target.parentNode.parentNode;
        const cardName = parentNode.querySelector('.card').innerText;
        const secondN = parentNode.querySelector('.second').innerText;
        const dotN = parentNode.querySelector('.dot').innerText;
        const paraN = parentNode.querySelector('.para').innerText;
        const statusN = parentNode.querySelector('.status').innerText;
        parentNode.querySelector('.status').innerText = 'Reject';
        const cardInfo = {
            cardName,
            secondN,
            dotN,
            paraN,
            statusN: 'Reject',
        };
        console.log(cardInfo);


        const cardExists = RejectedList.find(item => item.cardName == cardInfo.cardName)

        if (!cardExists) {
            RejectedList.push(cardInfo)
        }

        interviewList = interviewList.filter(item => item.cardName !== cardInfo.cardName);
        if (currentStatus == 'interview-filter-btn') {
            renderInterview()
        }



        calculateCount();
    }

})

function renderInterview() {
    filterSelection.innerText = ''
    for (let interview of interviewList) {
        console.log(interview);
        let div = document.createElement('div');
        div.className = 'allcard w-full max-w-[1000px] min-h-[310px] h-auto bg-base-100 rounded-md';
        div.innerHTML = `
     <div class="allcard w-full max-w-[1000px] min-h-[310px] h-auto bg-base-100 rounded-md">
                <div class="mx-[20px] leading-relaxed">
                    <div>
                        <button class="mx-230 border border-base-200 p-2 rounded-full btn btn-base-200"><i
                                class="fa-regular fa-trash-can"></i></button>
                    </div>
                    <div>
                        <h4 class="card text-neutral text-[18px] font-semibold">${interview.cardName}</h4>
                        <h5 class="second text-[#64748B] font-semibold">React Native Developer</h5>
                        <br>

                        <p class="dot text-[#64748B]">Remote • Full-time • $130,000 - $175,000</p>
                        <br>

                        <h3 class="status bg-sky-100 w-[113px] h-[36px] text-[14px] ">${interview.statusN}</h3>
                        <br>


                        <p class="para text-neutral">Build cross-platform mobile applications using React Native. Work
                            on
                            products used by millions of
                            users worldwide.</p>
                        <br>


                        <div class="flex flex-wrap gap-3 sm:gap-4 pb-4">
                            <button id="inter-btn"
                                class="  btn btn-accent btn-soft text-accent w-[100px] h-[36px] border border-accent">interview</button>
                            <button id="rbtn-one"
                                class="btn btn-error btn-soft text-error w-[100px] h-[36px] border border-error">Rejected</button>
                        </div>
                    </div>
                </div>
            </div>
    `
        filterSelection.appendChild(div)
    }
}
function renderRejected() {
    filterSelection.innerText = ''
    for (let Rejected of RejectedList) {
        console.log(Rejected);
        let div = document.createElement('div');
        div.className = 'allcard w-full max-w-[1000px] min-h-[310px] h-auto bg-base-100 rounded-md';
        div.innerHTML = `
     <div class="allcard w-full max-w-[1000px] min-h-[310px] h-auto bg-base-100 rounded-md">
                <div class="mx-[20px] leading-relaxed">
                    <div>
                        <button class="mx-230 border border-base-200 p-2 rounded-full btn btn-base-200"><i
                                class="fa-regular fa-trash-can"></i></button>
                    </div>
                    <div>
                        <h4 class="card text-neutral text-[18px] font-semibold">${Rejected.cardName}</h4>
                        <h5 class="second text-[#64748B] font-semibold">React Native Developer</h5>
                        <br>

                        <p class="dot text-[#64748B]">Remote • Full-time • $130,000 - $175,000</p>
                        <br>

                        <h3 class="status bg-sky-100 w-[113px] h-[36px] text-[14px] ">${Rejected.statusN}</h3>
                        <br>


                        <p class="para text-neutral">Build cross-platform mobile applications using React Native. Work
                            on
                            products used by millions of
                            users worldwide.</p>
                        <br>


                        <div class="flex flex-wrap gap-3 sm:gap-4 pb-4">
                            <button id="inter-btn"
                                class="  btn btn-accent btn-soft text-accent w-[100px] h-[36px] border border-accent">interview</button>
                            <button id="rbtn-one"
                                class="btn btn-error btn-soft text-error w-[100px] h-[36px] border border-error">Rejected</button>
                        </div>
                    </div>
                </div>
            </div>
    `
        filterSelection.appendChild(div)
    }
}




