const Terms = () => {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Terms and Conditions
        </h1>
        <p className="text-lg text-gray-600">
          Please read our terms and conditions carefully before proceeding with
          our services.
        </p>
      </header>

      {/* Revision Policy */}
      <section aria-labelledby="revision-policy" className="mb-8">
        <h2
          id="revision-policy"
          className="text-2xl font-semibold text-primary mb-4"
        >
          1. Revision Policy
        </h2>
        <p className="text-lg mb-2">
          <span className="font-semibold">Number of Revisions:</span>
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-semibold">Starter Package:</span> 2 minor
            revisions for free.
          </li>
          <li>
            <span className="font-semibold">Professional Package:</span> 2 minor
            revisions for free.
          </li>
          <li>
            <span className="font-semibold">Premium Package:</span> 3 minor
            revisions for free.
          </li>
        </ul>

        <p className="text-lg mb-2">
          <span className="font-semibold">Scope of Revisions:</span>
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-semibold">Minor Revisions:</span> Include
            color changes, font adjustments, or moving simple elements.
          </li>
          <li>
            <span className="font-semibold">Major Revisions:</span> Include
            complete redesigns, restructuring main elements, changing the logo,
            or adding entirely new elements.
          </li>
        </ul>

        <p className="text-lg mb-2">
          <span className="font-semibold">Additional Revision Fees:</span>
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            $30 for each additional minor revision after exhausting the agreed
            number of revisions.
          </li>
          <li>
            $50 to $150 for each major revision, depending on the scale and
            complexity of the changes.
          </li>
        </ul>
      </section>

      <hr className="my-6 border-t-2 border-gray-300" />

      {/* Payment Policy */}
      <section aria-labelledby="payment-policy" className="mb-8">
        <h2
          id="payment-policy"
          className="text-2xl font-semibold text-primary mb-4"
        >
          2. Payment Policy
        </h2>
        <p className="text-lg mb-2">
          <span className="font-semibold">Advance Payment:</span>
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            50% of the total amount is required as an advance before work
            begins.
          </li>
          <li>The remaining 50% is due upon delivery of the final work.</li>
        </ul>

        <p className="text-lg mb-2">
          <span className="font-semibold">Payment Methods:</span> Cash, bank
          transfer, or electronic payment platforms.
        </p>
      </section>

      <hr className="my-6 border-t-2 border-gray-300" />

      {/* Delivery Policy */}
      <section aria-labelledby="delivery-policy" className="mb-8">
        <h2
          id="delivery-policy"
          className="text-2xl font-semibold text-primary mb-4"
        >
          3. Delivery Policy
        </h2>
        <p className="text-lg mb-2">
          <span className="font-semibold">Delivery Timelines:</span>
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <span className="font-semibold">Starter Package:</span> 5-7 working
            days.
          </li>
          <li>
            <span className="font-semibold">Professional Package:</span> 10-14
            working days.
          </li>
          <li>
            <span className="font-semibold">Premium Package:</span> 15-20
            working days.
          </li>
        </ul>

        <p className="text-lg text-primary-text mb-2">
          <span className="font-semibold">Note:</span> Delivery timelines may be
          extended in case of additional revision requests or unforeseen
          circumstances. The client will be informed of any potential delays as
          soon as possible.
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">File Delivery:</span> Final files will
          be delivered via email or file-sharing platforms. Files include: (PDF,
          PNG, JPEG) for designs, and (MP4, GIF) for animations.
        </p>
      </section>

      <hr className="my-6 border-t-2 border-gray-300" />

      {/* Cancellation and Refund Policy */}
      <section aria-labelledby="cancellation-refund-policy" className="mb-8">
        <h2
          id="cancellation-refund-policy"
          className="text-2xl font-semibold text-primary mb-4"
        >
          4. Cancellation and Refund Policy
        </h2>
        <p className="text-lg mb-2">
          <span className="font-semibold">Before Work Begins:</span> If the
          client cancels the order before work begins, 100% of the advance
          payment will be refunded.
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">After Work Begins:</span> If the
          client cancels the order after work begins, 50% of the total amount
          will be deducted. This covers part of the operational costs and time
          already invested.
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">After Delivery:</span> No refunds will
          be issued after the final work has been delivered.
        </p>
      </section>

      <hr className="my-6 border-t-2 border-gray-300" />

      {/* Intellectual Property Policy */}
      <section aria-labelledby="intellectual-property-policy" className="mb-8">
        <h2
          id="intellectual-property-policy"
          className="text-2xl font-semibold text-primary mb-4"
        >
          5. Intellectual Property Policy
        </h2>
        <p className="text-lg mb-2">
          <span className="font-semibold">Client Rights:</span> After full
          payment, the client has the right to use the designs as they see fit.
          We reserve the right to display the designs in our portfolio unless
          the client requests otherwise.
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Seven Design Studio Rights:</span> We
          retain intellectual property rights to the designs until full payment
          is received.
        </p>
      </section>

      <hr className="my-6 border-t-2 border-gray-300" />

      {/* Privacy Policy */}
      <section aria-labelledby="privacy-policy" className="mb-8">
        <h2
          id="privacy-policy"
          className="text-2xl font-semibold text-primary mb-4"
        >
          6. Privacy Policy
        </h2>
        <p className="text-lg mb-2">
          <span className="font-semibold">Data Protection:</span> We are
          committed to protecting client data and will not share it with any
          third parties. Client data will only be used to execute the
          agreed-upon work.
        </p>
      </section>

      <hr className="my-6 border-t-2 border-gray-300" />

      {/* Complaints Policy */}
      <section aria-labelledby="complaints-policy" className="mb-8">
        <h2
          id="complaints-policy"
          className="text-2xl font-semibold text-primary mb-4"
        >
          7. Complaints Policy
        </h2>
        <p className="text-lg mb-2">
          <span className="font-semibold">Filing a Complaint:</span> Clients can
          file complaints via email or phone. Complaints will be addressed
          within 48 working hours.
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Dispute Resolution:</span> Any
          disputes will be resolved amicably. If no resolution is reached,
          arbitration will be sought by the laws of [Country].
        </p>
      </section>

      <hr className="my-6 border-t-2 border-gray-300" />

      {/* Policy Amendments */}
      <section aria-labelledby="policy-amendments" className="mb-8">
        <h2
          id="policy-amendments"
          className="text-2xl font-semibold text-primary mb-4"
        >
          8. Policy Amendments
        </h2>
        <p className="text-lg mb-2">
          <span className="font-semibold">Right to Amend:</span> We reserve the
          right to amend this policy at any time. Clients will be informed of
          any changes via the website or email.
        </p>
      </section>

      <hr className="my-6 border-t-2 border-gray-300" />

      {/* Acceptance of Terms */}
      <section aria-labelledby="acceptance-of-terms" className="mb-8">
        <h2
          id="acceptance-of-terms"
          className="text-2xl font-semibold text-primary mb-4"
        >
          9. Acceptance of Terms
        </h2>
        <p className="text-lg mb-2">
          <span className="font-semibold">Agreement:</span> By proceeding with
          the work, the client agrees to all the terms and conditions outlined
          above.
        </p>
      </section>

      <hr className="my-6 border-t-2 border-gray-300" />

      {/* Contact Information */}
      <section aria-labelledby="contact-info" className="mb-8">
        <h2
          id="contact-info"
          className="text-2xl font-semibold text-primary mb-4"
        >
          10. Contact Information
        </h2>
        <p className="text-lg mb-2">
          <span className="text-primary font-semibold">Email:</span>{' '}
          <a href="mailto:Sevendesign.me@gmail.com" className="text-primary">
            Sevendesign.me@gmail.com
          </a>
        </p>
        <p className="text-lg mb-2">
          <span className="text-primary font-semibold">Phone:</span>{' '}
          <a href="tel:+201030030397" className="text-primary">
            +201030030397
          </a>
        </p>
        <p className="text-lg mb-2">
          <span className="text-primary font-semibold">Website:</span>{' '}
          <a
            href="http://www.7-design.net"
            className="text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.7-design.net
          </a>
        </p>
      </section>
    </div>
  );
};

export default Terms;
