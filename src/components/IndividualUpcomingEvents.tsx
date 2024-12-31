import { Link, useParams } from "react-router-dom";
import { TracingBeam } from "./ui/tracing-beam";
import {upcomingCards} from "../data/resources";

function IndividualUpcomingEvent() {
  const { id } = useParams();
  const index = parseInt(id || "0", 10);
  const eventData = upcomingCards[index];

  return (
    <TracingBeam className="px-6">
      <div className="max-w-4xl mx-auto antialiased pt-8 pb-8">
        <div className="grid grid-cols-1 gap-8">
          <div>
            {/* Main Event Image */}
            <img
              src={eventData.inner_image}
              alt={eventData.alt}
              className="w-full h-auto  object-cover rounded-lg border border-red-900"
            />
          </div>
          <div className="flex flex-col justify-center">
            {/* Event Details */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {eventData.title}
            </h2>
            <p className="text-base md:text-lg mb-6">{eventData.content}</p>
            <div className="grid grid-cols-2 gap-4 text-center mb-4">
              <div>
                <h4 className="text-xl font-semibold">
                  {eventData.participants}
                </h4>
                <p>Participants</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">{eventData.days}</h4>
                <p>Days</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">{eventData.timeline}</h4>
                <p>Event Timeline</p>
              </div>
            </div>
            <div className="flex flex-wrap">
              {eventData.hashtags.map((hashtag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 text-gray-600 rounded-full px-4 py-1 mr-2 mb-2"
                >
                  #{hashtag}
                </span>
              ))}
            </div>

            {eventData.rvsplink && (
              <Link to={eventData.rvsplink}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white md:w-[10vw] py-2 rounded-lg w-[20vw]">
                  RSVP
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </TracingBeam>
  );
}

export default IndividualUpcomingEvent;