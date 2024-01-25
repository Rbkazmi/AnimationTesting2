export default async function main({ $, gsap: { tl }, properties, id }) {
    const container = $('.fade-in-sample-container');
    const text = $('.fade-in-sample-text');

    text.innerText = properties.string;

    const style = text.style;
    style.fontSize = `${properties.fontSize}px`;
    style.color = properties.fontColor;
    style.opacity = 0;

    tl.to(text, { opacity: 1, duration: 3, ease: "power1.in" });
}
