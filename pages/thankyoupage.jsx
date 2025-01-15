import Link from "next/link";
export default function thankyoupage() {
  return (
    <>
      <section className="thankyou">
        <div>
          <h1>
          Terima kasih telah mendaftar! Kami menghargai partisipasi Anda dan menantikan keterlibatan Anda.
          </h1>
          <Link href="/" legacyBehavior>
            <a>Kembali ke menu pendaftaran</a>
          </Link>{" "}
        </div>
      </section>
    </>
  );
}
