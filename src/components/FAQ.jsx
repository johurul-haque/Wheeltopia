import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
export const Dropdown = ({ ques, ans }) => {
  const [show, setShow] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const reveal = () => setShow(!show);

  return (
    <div ref={parent} className="rounded-sm bg-emerald-300/30 px-3">
      <strong
        className="dropdown-label block cursor-pointer py-2 text-base font-medium text-emerald-900"
        onClick={reveal}
      >
        {ques}
      </strong>
      {show && (
        <p className="dropdown-content pb-2 text-emerald-900/75">{ans}</p>
      )}
    </div>
  );
};

const Faq = () => {
  return (
    <section className="container mb-9 grid max-w-md gap-3 sm:px-0">
      <h2 className="font-fredoka text-3xl font-medium text-gray-900">FAQ</h2>
      {[
        [
          "How do I create an account on your site?",
          'To create an account, simply click the "Login" button on the top right corner of the page and fill out the required information.',
        ],
        [
          "Are the toy cars safe for children?",
          "Yes, safety is our top priority. Our toy cars are specifically designed and tested to meet all safety standards, ensuring a secure play experience for children.",
        ],
        [
          "Can I track my order?",
          "Absolutely! Once your order is confirmed, we provide a tracking number that allows you to monitor the progress of your delivery and know exactly when it will arrive.",
        ],
        [
          "Do you offer international shipping?",
          "Yes, we offer international shipping to select countries. During the checkout process, you can enter your location to see if we deliver to your country.",
        ],
      ].map(([q, a], i) => (
        <Dropdown key={i} ques={q} ans={a} />
      ))}
    </section>
  );
};

export default Faq;
