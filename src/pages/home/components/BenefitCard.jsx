import test from '../../../assets/test.svg';

const BenefitCard = () => {
  return (
    <div className="w-56 flex flex-col items-center gap-4">
      <figure>
        <img src={test} alt="test" className="w-16" />
      </figure>
      <div>
        <h4 className="text-center">Funnel Audit</h4>
        <p className="text-center font-medium text-primary-text">
          We'll start by analyzing your sales funnel and seeing what's holding
          you back.
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
