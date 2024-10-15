import { Link, useParams } from "react-router-dom";
import { TracingBeam } from "./ui/tracing-beam";
import logo from "/images/inauguration.jpg";

function IndividualUpcomingEvent() {
  const obj = useParams();
  console.log("Params: ", useParams());

  console.log("Rendering IndividualEvent with id:", obj.id);

  return (
    <TracingBeam className="px-6">
      <div className="max-w-4xl mx-auto antialiased pt-8 pb-8">
        <div className="grid grid-cols-1 gap-8">
          <div>
            {/* Main Event Image */}
            <img
              src={logo}
              alt="Hack2Code"
              className="w-full h-auto aspect-square object-cover rounded-lg border border-red-900"
            />
          </div>
          <div className="flex flex-col justify-center">
            {/* Event Details */}
            <h2 className="text-3xl font-bold mb-4">Inauguration Event</h2>
            <p className="text-lg mb-6">
              We’re thrilled to announce the Inaugural Event of Google Developer
              Groups (GDG) On Campus at Vignan’s Institute of Information
              Technology! 🚀 Join us as we kick off a new chapter in tech
              learning and collaboration. Our special guest, Sai Sampath Kumar
              Balivada, GDG Vizag Organizer, will share his insights and guide
              us through the exciting opportunities GDG has to offer!
            </p>
            <div className="grid grid-cols-2 gap-4 text-center mb-4">
              <div>
                <h4 className="text-xl font-semibold">200+</h4>
                <p>Participants</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">1</h4>
                <p>Days</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">16th Oct</h4>
                <p>Event Timeline</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">2</h4>
                <p>Sessions</p>
              </div>
            </div>
            <div className="mb-4">
              <span className="inline-block bg-gray-200 text-gray-600 rounded-full px-4 py-1 mr-2">
                #Inauguration
              </span>
              <span className="inline-block bg-gray-200 text-gray-600 rounded-full px-4 py-1">
                #Tech Talks
              </span>
            </div>

            <Link to="https://shorturl.at/5oxr6">
              <button className="bg-blue-500 hover:bg-blue-700 text-white w-[10vw] py-2 rounded-lg">
                RSVP
              </button>
            </Link>
          </div>
        </div>
      </div>
    </TracingBeam>
  );
}

export default IndividualUpcomingEvent;