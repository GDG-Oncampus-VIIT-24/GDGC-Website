import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import emailjs from 'emailjs-com';


import tf from "/images/tensorflow.svg";
import fb from "/images/firebase.svg";
import gcloud from "/images/gcloud.svg";
import flutter from "/images/flutter.svg";


const FeedbackForm = () => {
  const [thoughts, setThoughts] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !thoughts) {
      alert("Please fill in all fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const templateParams = {
      user_name: name,
      user_email: email,
      user_thoughts: thoughts
    };

    emailjs
      .send('service_8oeq8zu', 'template_2dvihlo', templateParams, 'PhHhBFsW2MXNaD8y1')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert("Feedback sent successfully!");
        },
        (error) => {
          console.log('FAILED...', error);
          alert("Failed to send feedback. Please try again.");
        }
      );

    // Clear form fields
    setThoughts("");
    setName("");
    setEmail("");
  };

  return (
    <div className="relative w-full min-h-screen bg-[#ffffff] bg-grid-black/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>

      {/* TensorFlow logo */}
      <div className="absolute top-8 left-16 w-16 h-16 transform -rotate-12 hidden md:block">
        <img src={tf} alt="TensorFlow Logo" width={64} height={64} />
      </div>

      {/* Google Cloud logo */}
      <div className="absolute top-6 right-12 w-16 h-16 transform rotate-12 hidden md:block">
        <img src={gcloud} alt="Google Cloud Logo" width={64} height={64} />
      </div>

      {/* Firebase logo */}
      <div className="absolute bottom-20 left-16 w-16 h-16 transform rotate-45 hidden md:block">
        <img src={fb} alt="Firebase Logo" width={64} height={64} />
      </div>

      {/* Flutter logo */}
      <div className="absolute bottom-28 right-20 w-16 h-16 transform -rotate-12 hidden md:block">
        <img src={flutter} alt="Flutter Logo" width={64} height={64} />
      </div>

      {/* Feedback form card */}
      <Card className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[28vw] shadow-xl bg-white">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Any feedback / Suggestion
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            What do you think of this Community?
          </p>

          <div className="mb-4">
            <label className="block mb-1 text-sm">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <p className="text-sm mb-2">
            Do you have any thoughts you'd like to share?
          </p>
          <Textarea
            value={thoughts}
            onChange={(e) => setThoughts(e.target.value)}
            placeholder="If you have any specific events you'd like us to organize,you can also add them here!"
            className="mb-4 border border-grey-700"
            rows={4}
          />

          <div className="flex justify-end space-x-2">
            <Button
              variant="outline"
              onClick={() => {
                setThoughts("");
                setName("");
                setEmail("");
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackForm;
