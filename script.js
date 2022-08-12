const body = document.querySelector('body');

body.addEventListener('mousemove', (e) => {
    const eyes = document.querySelectorAll('.eye-black');

    eyes.forEach((eye) => {
        const x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

        const rad = Math.atan2(e.pageX - x, e.pageY - y);
        const rotate = rad * (180 / Math.PI) * -1;

        eye.style.transform = `rotate(${rotate}deg)`;
    });
});
