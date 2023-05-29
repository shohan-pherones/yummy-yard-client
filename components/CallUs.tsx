import { FiPhoneCall } from "react-icons/fi";

const CallUs = () => {
  return (
    <section className="text-3xl uppercase font-semibold wrapper text-center bg-black text-white py-20 mb-20">
      <p className="flex items-center justify-center gap-5">
        <span className="text-emerald-500">
          <FiPhoneCall />
        </span>{" "}
        Call us now: (555) 555-1234
      </p>
    </section>
  );
};

export default CallUs;
