/**
 * Function to carry out animations using GSAP
 * @param {object} opts
 * @param {object} opts.metadata Metadata provided as-is from "metadata.json"
 * @param {object} opts.gsap GSAP utilities that must be used to animate
 * @param {object} opts.gsap.tl Timeline object of GSAP that must be used to add animations
 * @param {function} opts.$ Selector function to be used to refer to any CSS selectors (CSS modules)
 */
export default async function main({ metadata, gsap: { tl }, $ }) {
  const labels = { start: metadata.labels.start, hello: metadata.labels.hello, congrats: metadata.labels.congrats };
  tl.add(labels.start);
  tl.from($('.outer'), { opacity: 0, duration: 1 });
  tl.add(labels.hello);
  tl.from($('.hello'), { opacity: 0, duration: metadata.sequence[1].audio.duration });
  tl.add(labels.congrats);
  tl.from($('.congrats'), { opacity: 0, duration: 1 });
}
