import TestimonialCard from "./TestimonialCard";

const data = {
  name: "Sarah Dole",
  username: "sarahdole",
  image: "/profile-thumbnail.png",
  description: "I've been searching for high quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
}

const TestimonialPage = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#F9FAFB] to-[#D2D6DB] flex flex-col">
      <div className="flex flex-col items-center mt-[200px]">
      <TestimonialCard data={data} /></div>
      <div className="credits" data-gfe-screenshot-exclude="true">
      A challenge by 
      <a
        href="https://www.greatfrontend.com/projects?ref=challenges"
        target="_blank"
        > GreatFrontEnd Projects</a
      >. Built by
      <a
        href="https://www.greatfrontend.com/projects/u/username"
        target="_blank"
        > Carlo</a
      >.
    </div>
    </div>
  );
}

export default TestimonialPage;