import ClipSpan from "@/components/ClipSpan"
import { useProjectRequest } from "@/providers/ProjectRequestProvider"
import Button from "@/shared/Button"
import Media from "@/shared/Media"

const ReasonSubmit = ({ onClose }) => {
  const { selectedRequest, studioNotes, setStudioNotes, handleDecline } = useProjectRequest()

  const onClickDecline = async () => {
    handleDecline(selectedRequest)
    onClose()
  }

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <Media
          type="image"
          link="/images/Admin/project-requests-decline-logo.svg"
          blurLink="/images/Admin/project-requests-decline-logo.png"
          containerClasses="w-[216px] h-[216px] translate-x-[-40px]"
        />
        <div className="translate-y-[-40px]">
          <p className="font-urwgeometric text-[44px] leading-[48px] text-gray_1">
            Are you sure you want to decline this <span className="text-project">Project</span>?
          </p>
        </div>
      </div>
      <div className="mt-[-100px] w-full rounded-[24px] bg-gray_overlay_3 p-[20px]">
        <p className="font-urwgeometric text-[16px] leading-[18px] text-gray_1">
          Studio Notes <span className="text-[14px] text-gray_2">(optional)</span>
        </p>
        <p className="pt-[10px] font-urwgeometric text-[14px] leading-[16px] text-gray_2">
          Provide the artist with any relevant notes regarding their request. <br />
          If there is a scheduling issue, feel free to suggest an alternate date/time.
        </p>
        <textarea
          className="mt-5 w-full rounded-3xl border-x border-b-2 border-gray_overlay_6 bg-gray_overlay_6
        p-5 font-urwgeometric text-sm leading-tight text-gray_1
        focus:border-gray_overlay_6 focus:ring-transparent"
          value={studioNotes}
          onChange={(e) => setStudioNotes(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-y-[10px]">
        <Button
          id="cancel-detail"
          type="button"
          className="!h-[48px] !w-full !border-x-[1px]
                        !border-b-[2px] !border-t-[1px] !border-session !bg-none
                        !p-0"
          pulseColor="#a1ea04"
          bgVariant="primary"
          onClick={onClose}
        >
          <ClipSpan className="font-urwgeometric_semibold text-[20px] leading-[20px]">
            Cancel
          </ClipSpan>
        </Button>
        <Button
          id="decline-details"
          type="button"
          className="!h-[48px] !w-full bg-gradient-to-r
                        from-[#a1ea041f] to-[#daeb021f] !p-0
                        !shadow-session_shadow"
          pulseColor="white"
          bgVariant="radial"
          onClick={onClickDecline}
        >
          <p className="font-urwgeometric_semibold text-[20px] leading-[20px] text-black_0">
            Decline
          </p>
        </Button>
      </div>
    </div>
  )
}

export default ReasonSubmit
