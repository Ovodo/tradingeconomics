import { getInflationRate } from "./lib/actions";
const header =
  "border-r border-b w-full h-[50px] flex items-center justify-center text-center border-black";
const row =
  "border-r h-[40px] border-b border-black  w-full flex items-center justify-center border-black";

export default async function Home() {
  const inflationData = await getInflationRate();
  console.log("inflationData", inflationData);
  return (
    <div className='flex-1 flex flex-col items-center justify-start sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <h3 className='font-extrabold sm:text-4xl sm:mb-20'>Inflation Rate</h3>
      <section className='bord w-[60%] h-[60%] '>
        <div className='header grid  grid-cols-[1.5fr,1fr,.5fr,.5fr,.5fr]'>
          <p className={header}>Date</p>
          <p className={header}>Country</p>
          <p className={header}>Previous</p>
          <p className={header}>Actual</p>
          <p className={header}>Forecast</p>
        </div>
        {inflationData &&
          inflationData.map((item) => {
            return (
              <div
                key={item.CalendarId}
                className='header grid  grid-cols-[1.5fr,1fr,.5fr,.5fr,.5fr]'
              >
                <p className={row}>{new Date(item.Date).toLocaleString()}</p>
                <p className={row}>{item.Country}</p>
                <p className={row}>{item.Previous}</p>
                <p className={row}>{item.Actual}</p>
                <p className={row}>
                  {item.Forecast == "" ? "-" : item.Forecast}
                </p>
              </div>
            );
          })}
      </section>
    </div>
  );
}
