import useRoundedStyle from "../hooks/useRoundedStyle";
import Event from "./Event";

function HeroSection() {
  const roundedStyle = useRoundedStyle();

  return (
    <div className="w-full overflow-x-hidden font-poppins flex flex-col items-center">
      <div
        className="w-full h-[865px] bg-top bg-cover bg-no-repeat flex flex-col items-center justify-center gap-5 text-gray-200 sticky top-0 z-0"
        style={{ backgroundImage: "url('/images/homepage/homepage.png')" }}
      >
        <p className="text-4xl md:text-7xl font-semibold tracking-tight text-center">
          LOREM IPSUM
        </p>
        <p className="text-sm sm:text-base md:text-lg tracking-tight text-center">
          Empowering atheles something something content.
        </p>
      </div>
      {/* 2nd div */}
      <div
        style={roundedStyle}
        className="top-[-100px] w-full h-[975px] flex items-center justify-center bg-[#F5F5F5] text-center "
      >
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="w-[460px] h-[470px] basis-1/2">
            <img
              src="/images/homepage/aboutus.png"
              alt="Sports activity"
              className="w-[460px] h-[470px] object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="text-left basis-1/2">
            {/* Title */}
            <h1 className="text-[#0C0D0D] font-semibold text-[96px] leading-none font-[Fira Sans Extra Condensed]">
              ABOUT US.
            </h1>

            {/* Paragraph */}
            <p className="text-[#565656] text-[24px] leading-relaxed font-[Familjen Grotesk]">
              You are here for an overall development of your personality, so to
              keep you healthy and fit, we have all the facilities for sports,
              both indoor and outdoor. All outdoor sports like athletics,
              swimming, cricket, football, hockey, basketball, volleyball, etc.
              and indoor sports like table tennis, weight lifting, chess,
              carrom, squash, etc. are actively played by all throughout the
              year.
            </p>
          </div>
        </div>
      </div>
      {/* 3rd div */}
      <div
        style={roundedStyle}
        className="top-[-10rem] md:top-[-10rem] bg-[#7BB9C4] flex flex-col justify-center items-center"
      >
        {/* Outer Div */}
        <div className="mb-[10rem] pt-[10rem] w-full lg:w-[1440px] h-auto lg:h-[1440px] flex flex-col justify-between">
          {/* Inner Divs */}
          <Event
            number="01"
            title="SPARDHA"
            imageUrl="/images/clubs/wide.png"
          />
          <Event
            number="02"
            title="INTER IIT"
            imageUrl="/images/clubs/wide.png"
          />
          <Event number="03" title="SPIRIT" imageUrl="/images/clubs/wide.png" />
          <Event
            number="04"
            title="MANTHAN"
            imageUrl="/images/clubs/wide.png"
          />
        </div>
      </div>
      {/* Facilities Section */}
      <div
        className="md:top-[-15rem] bg-[#F5F5F5] w-full flex flex-col md:flex-row md:justify-between md:items-start px-10 md:px-20 pb-[115vw] xs:pb-[80vw] sm:pb-[57vw] md:pb-[40vw] lg:pb-[30vw] xl:pb-[22vw]"
        style={roundedStyle}
      >
        {/* Text Section */}
        <div className="md:ml-10 mt-20 w-full md:w-[30%] text-center md:text-left flex flex-col items-center md:items-start space-y-1">
          <h1 className="mb-10 text-[6vw] leading-none font-semibold text-[#0C0D0D] font-[Fira Sans Extra Condensed]">
            Our Facilities
          </h1>
          <p className="text-[3vw] md:text-[2vw] leading-relaxed text-[#565656] font-[Familjen Grotesk]">
            We provide comprehensive sports facilities for both indoor and
            outdoor activities to ensure your overall development.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-20 mb-[10rem] w-[825px] h-[690px] grid grid-cols-3 grid-rows-2 gap-4">
          {Array(6)
            .fill()
            .map((_, index) => (
              <div key={index} className="w-[240px] h-[330px]">
                <img
                  src="/images/clubs/wide.png"
                  alt={`Facility Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
        </div>
      </div>
      <div
        className="top-[-20rem] bg-[#7BB9C4] w-full flex flex-col md:flex-row md:justify-between md:items-start px-10 md:px-20 pb-[115vw] xs:pb-[80vw] sm:pb-[57vw] md:pb-[40vw] lg:pb-[30vw] xl:pb-[22vw]"
        style={roundedStyle}
      >
        {/* Text Section */}
        <div className="md:ml-10 mt-20 w-full md:w-[30%] text-center md:text-left flex flex-col items-center md:items-start space-y-1">
          <h1 className="mb-10 text-[6vw] leading-none font-semibold text-[#0C0D0D] font-[Fira Sans Extra Condensed]">
            Team Members
          </h1>
          <p className="text-[3vw] md:text-[2vw] leading-relaxed text-[#565656] font-[Familjen Grotesk]">
            We provide comprehensive sports facilities for both indoor and
            outdoor activities to ensure your overall development.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-20 mb-[10rem] w-[825px] h-[690px] grid grid-cols-3 grid-rows-2 gap-4">
          {Array(6)
            .fill()
            .map((_, index) => (
              <div key={index} className="w-[240px] h-[330px]">
                <img
                  src="/images/clubs/wide.png"
                  alt={`Facility Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
