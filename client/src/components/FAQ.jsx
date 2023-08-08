import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

// eslint-disable-next-line react/prop-types
export const Dropdown = ({ ques, ans, index }) => {
  return (
    <Accordion.Item value={`item-${index + 1}`} className="border-b">
      <Accordion.Trigger className="group flex w-full justify-between gap-x-6 py-3 text-left">
        {ques}
        <ChevronDown
          strokeWidth={1.8}
          className="shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
        />
      </Accordion.Trigger>

      <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
        <p className="mb-3 text-gray-700">{ans}</p>
      </Accordion.Content>
    </Accordion.Item>
  );
};

const Faq = () => {
  return (
    <section className="mb-9 grid w-full max-w-md gap-3 max-sm:px-4">
      <Accordion.Root className="max-w-md max-md:mx-auto" collapsible>
        {[
          [
            'How do I create an account on your site?',
            'To create an account, simply click the "Login" button on the top right corner of the page and fill out the required information.',
          ],
          [
            'Are the toy cars safe for children?',
            'Yes, safety is our top priority. Our toy cars are specifically designed and tested to meet all safety standards, ensuring a secure play experience for children.',
          ],
          [
            'Can I track my order?',
            'Absolutely! Once your order is confirmed, we provide a tracking number that allows you to monitor the progress of your delivery and know exactly when it will arrive.',
          ],
          [
            'Do you offer international shipping?',
            'Yes, we offer international shipping to select countries. During the checkout process, you can enter your location to see if we deliver to your country.',
          ],
        ].map(([q, a], i) => (
          <Dropdown key={i} ques={q} ans={a} index={i} />
        ))}
      </Accordion.Root>
    </section>
  );
};

export default Faq;
