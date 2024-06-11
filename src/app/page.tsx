import TestimonialPage from "./pages/TestimonialCard/TestimonialPage";
const data = {
  name: "Sarah Dole",
  username: "sarahdole",
  image: "/profile-thumbnail.png",
  description: "I've been searching for high quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
}

export default function Home() {
  return (
    <div>
      <TestimonialPage/>
    </div>
  );
}