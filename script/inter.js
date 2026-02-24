console.log('connected');
document.getElementById('all-btn').addEventListener('click', function () {
    const allcard = document.getElementById('all-cards');
    const cards = allcard.children;
    console.log(cards);
});
document.getElementById('ibtn-one').addEventListener('click', function () {
    const ibtno = document.getElementById('ibtn-one');
    const ibtnOne = ibtno.children;
    console.log(ibtnOne);
});
document.getElementById('rbtn-one').addEventListener('click', function () {
    const rbtno = document.getElementById('rbtn-one');
    const rbtnOne = rbtno.children;
    console.log(rbtnOne);
});

let icount = 0;
document.getElementById('ibtn-one').addEventListener('click', function () {
    icount++;
    console.log(icount);
})
let interviewCount = 0;
const interViewHeader = document.getElementById('interview-count');
document.getElementById('ibtn-one').addEventListener('click', function () {
    interviewCount++;
    interViewHeader.innerText = interviewCount;
    if (interviewCount >= 8) {
        document.getElementById('ibtn-one').disabled = true;
    }

})
let rcount = 0;
document.getElementById('rbtn-one').addEventListener('click', function () {
    rcount++;
    console.log(rcount);
})
let rejectedCount = 0;
const rejectedHeader = document.getElementById('rejected-count');
document.getElementById('rbtn-one').addEventListener('click', function () {
    rejectedCount++;
    rejectedHeader.innerText = rejectedCount;
    if (rejectedCount >= 8) {
        document.getElementById('rbtn-one').disabled = true;
    }

})