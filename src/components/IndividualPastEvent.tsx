import { useParams } from "react-router-dom";
import { TracingBeam } from "./ui/tracing-beam";
import { pastCards } from "../data/resources";

function IndividualPastEvent() {

   const {id} = useParams();
   const index = parseInt(id || "0", 10);
   const eventData = pastCards[index];

  return (
    <TracingBeam className="px-6">
      <div className="max-w-4xl mx-auto antialiased pt-8 pb-8">
        <div className="grid grid-cols-1 gap-8">
          <div>
            {/* Main Event Image */}
            <img
              loading="lazy"
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
                <p>Timeline</p>
              </div>
              {eventData.labs && (
                <div>
                  <h4 className="text-xl font-semibold">{eventData.labs}</h4>
                  <p>Labs</p>
                </div>
              )}
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
          </div>
        </div>

        {eventData.resources && eventData.resources.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Resources Mentioned:</h3>
            <ul className="list-disc list-inside">
              {eventData.resources.map((resource, index) => (
                <li key={index}>
                  {resource.link ? (
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      {resource.name || "Unnamed Resource"}
                    </a>
                  ) : (
                    <span>
                      {resource.name || "Unnamed Resource (No Link Available)"}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Event Photos Section
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Event Photos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-300 h-32 rounded-lg"></div>
            <div className="bg-gray-300 h-32 rounded-lg"></div>
            <div className="bg-gray-300 h-32 rounded-lg"></div>
            <div className="bg-gray-300 h-32 rounded-lg"></div>
          </div>
        </div>*/}
      </div>
    </TracingBeam>
  );
}

export default IndividualPastEvent;
