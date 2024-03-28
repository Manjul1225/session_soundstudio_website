import { useDashboard } from "@/providers/DashboardProvider"
import { REVENUE_PERIOD } from "@/hooks/useTotalRevenueData"
import Button from "../Button"
import RevenueAmounts from "./RevenueAmounts"
import RevenueChart from "./RevenueChart"

const RoomRevenue = () => {
  const {
    setSelectedRevenuePeriod,
    isActiveMonthOfRevenue,
    isActiveTodayOfRevenue,
    isActiveWeekOfRevenue,
  } = useDashboard()

  const activeButtonClasses = "px-[16px] py-[4px]"
  const inActiveButtonClasses = "!bg-none !bg-gray_overlay_6"
  const activeTextClasses = "font-urwgeometric_bold text-[12px] text-black_0 pb-[2px]"
  const inActiveTextClasses = "font-urwgeometric_bold text-[12px] text-gray_2 pb-[2px]"

  return (
    <div
      className="h-[280px] w-full overflow-hidden
                rounded-[24px] bg-gray_overlay_6 backdrop-blur-[10px]"
    >
      <div
        className="flex !h-[48px] items-center rounded-l-full
                    rounded-tr-full bg-gray_overlay_6 px-[24px]"
      >
        <p className="font-urwgeometric_bold text-[16px] text-gray_1">Revenue by Rooms</p>
      </div>
      <div
        className="flex h-[calc(280px-48px)] flex-col overflow-y-auto overflow-x-hidden
            py-[10px] pl-[22px]"
      >
        <div className="flex min-w-[235px] gap-x-[8px]">
          <Button
            className={isActiveTodayOfRevenue ? activeButtonClasses : inActiveButtonClasses}
            onClick={() => setSelectedRevenuePeriod(REVENUE_PERIOD.TODAY)}
          >
            <p className={isActiveTodayOfRevenue ? activeTextClasses : inActiveTextClasses}>
              Today
            </p>
          </Button>
          <Button
            className={isActiveWeekOfRevenue ? activeButtonClasses : inActiveButtonClasses}
            onClick={() => setSelectedRevenuePeriod(REVENUE_PERIOD.WEEK)}
          >
            <p className={isActiveWeekOfRevenue ? activeTextClasses : inActiveTextClasses}>
              This week
            </p>
          </Button>
          <Button
            className={isActiveMonthOfRevenue ? activeButtonClasses : inActiveButtonClasses}
            onClick={() => setSelectedRevenuePeriod(REVENUE_PERIOD.MONTH)}
          >
            <p className={isActiveMonthOfRevenue ? activeTextClasses : inActiveTextClasses}>
              This month
            </p>
          </Button>
        </div>
        <RevenueChart />
        <RevenueAmounts />
      </div>
    </div>
  )
}

export default RoomRevenue
