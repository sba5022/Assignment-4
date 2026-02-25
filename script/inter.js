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

let total = document.getElementById('total');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
console.log(total);
const allCardsSection = document.getElementById('allCards');
const mainSection = document.querySelector('section');
console.log(mainSection)

function calculateCount() {
    total.innerText = allCardsSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedCount.length;
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
    console.log(selected);
    selected.classList.remove('bg-gray-300', 'text-black');
    selected.classList.add('bg-info', 'text-base-100')
}