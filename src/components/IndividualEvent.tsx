import { useParams } from "react-router-dom";
import { TracingBeam } from "./ui/tracing-beam";

function IndividualEvent() {

   const { id } = useParams<{ id: string }>();
   console.log("Rendering IndividualEvent with id:", id);


  return (
    <TracingBeam className="px-6">
      <div className="max-w-4xl mx-auto antialiased pt-8 pb-8">
        <div className="grid grid-cols-1 gap-8">
          <div>
            {/* Main Event Image */}
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hack2Code"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            {/* Event Details */}
            <h2 className="text-3xl font-bold mb-4">{`Event Id: ${id}`}</h2>
            <p className="text-lg mb-6">
              Indulge in the 24hrs hackathon to build Mobile and Web apps. Can't
              code? No problem. Join the solution challenge and participate in
              the no code hackathon.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center mb-4">
              <div>
                <h4 className="text-xl font-semibold">50+</h4>
                <p>Teams</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">2</h4>
                <p>Days</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">16th Dec</h4>
                <p>Event on</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">4</h4>
                <p>Sessions</p>
              </div>
            </div>
            <div className="mb-4">
              <span className="inline-block bg-gray-200 text-gray-600 rounded-full px-4 py-1 mr-2">
                #Hack2Code
              </span>
              <span className="inline-block bg-gray-200 text-gray-600 rounded-full px-4 py-1">
                #hackathon
              </span>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white w-[10vw] py-2 rounded-lg">
              RSVP
            </button>
          </div>
        </div>

        {/* Resources Mentioned Section */}
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

        {/* Event Photos Section */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Event Photos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-300 h-32 rounded-lg"></div>
            <div className="bg-gray-300 h-32 rounded-lg"></div>
            <div className="bg-gray-300 h-32 rounded-lg"></div>
            <div className="bg-gray-300 h-32 rounded-lg"></div>
          </div>
        </div>
      </div>
    </TracingBeam>
  );
}

export default IndividualEvent;
