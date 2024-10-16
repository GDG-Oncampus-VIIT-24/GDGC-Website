import { useParams } from "react-router-dom";
import { TracingBeam } from "./ui/tracing-beam";
import logo from "/images/GENai.jpg"

function IndividualPastEvent() {

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
            <h2 className="text-3xl font-bold mb-4">GEN AI Study Jams</h2>
            <p className="text-lg mb-6">
              Gen AI Study Jams will provide students an opportunity to
              kickstart their learning on Gen AI technology, and implement the
              learning by enabling them to build projects on the Google Cloud
              console.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center mb-4">
              <div>
                <h4 className="text-xl font-semibold">12+</h4>
                <p>Participants</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">30</h4>
                <p>Days</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">11th Oct - 11th Nov</h4>
                <p>Timeline</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">15+</h4>
                <p>Labs</p>
              </div>
            </div>
            <div className="mb-4">
              <span className="inline-block bg-gray-200 text-gray-600 rounded-full px-4 py-1 mr-2">
                #StudyJams
              </span>
              <span className="inline-block bg-gray-200 text-gray-600 rounded-full px-4 py-1">
                #AI
              </span>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white w-[10vw] py-2 rounded-lg">
              RSVP
            </button>
          </div>
        </div>

        {/* Resources Mentioned Section
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Resources Mentioned:</h3>
          <ul className="list-disc list-inside">
            <li>
              <a href="#link1" className="text-blue-500">
                link-1
              </a>
            </li>
            <li>
              <a href="#link2" className="text-blue-500">
                link-2
              </a>
            </li>
            <li>
              <a href="#link3" className="text-blue-500">
                link-3
              </a>
            </li>
            <li>
              <a href="#link4" className="text-blue-500">
                link-4
              </a>
            </li>
          </ul>
        </div>

        Event Photos Section
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
