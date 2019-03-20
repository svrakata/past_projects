import $ from 'jquery';

let $skills;
let executed = false;

const animate = function animateSkills() {
    if (executed) {
        return;
    }

    const $skillsItem = $('.skills-item');
    const skillsPercents = [70, 80, 40, 70, 50, 80, 30, 50, 60, 40, 30, 30];

    for (let i = 0; i < skillsPercents.length; i += 1) {
        const $bar = $($skillsItem[i]).find('.progress-bar');
        const $percent = $($skillsItem[i]).find('.skills-item__percent');
        const interval = 20;
        let j = 0;

        $bar.css('height', '0');

        const clear = setInterval(() => {
            if (j === skillsPercents[i]) {
                clearInterval(clear);
            }
            $bar.css('height', `${j}%`);
            $percent.text(`${j}%`);
            j += 1;
        }, interval);
    }
};

const inRange = function eleInPortView() {
    $skills = $('.skills');
    const yCoord = $skills.offset().top;
    const offset = $(window).scrollTop();

    if (offset >= yCoord - 900 && offset <= yCoord + 900) {
        animate();
        executed = true;
    } else {
        executed = false;
    }
};

const init = function initAnimEventListener() {
    $(window).on('scroll', inRange);
};

export default { init };
