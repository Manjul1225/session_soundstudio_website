import ClipSpan from "@/components/ClipSpan"

const PaidDescription = () => (
  <div className="w-full">
    <p className="font-urwgeometric text-[16px] leading-[20px] text-gray_1">
      Confirm <ClipSpan>Session</ClipSpan>
    </p>
    <p className="font-urwgeometric text-[44px] leading-[48px] text-gray_1">
      Paid <ClipSpan>Session</ClipSpan>
    </p>
    <p className="font-urwgeometric text-[16px] leading-[20px] text-gray_1">
      Input the total price you will be charging for this Session based off the artists specific
      <br />
      needs. This price should include any Service Fee.
    </p>
  </div>
)

export default PaidDescription
