import Link from "next/link";
const Thankyou = () => {
  return (
    <>
    <section className="thankyou">
      <div>
        <h1>
          Thank you for registering! We appreciate your participation and look
          forward to your involvement.
        </h1>
        <Link href="/" legacyBehavior>
            <a>Back to registration menu</a>
          </Link>      </div>
    </section>
    </>
  );
};

export default Thankyou;
