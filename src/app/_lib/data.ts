import Image1 from "../../../public/A-beginners-guide-to-minimalism-3-683x1024 (1).jpg"
import Image2 from "../../../public/NCA_Web_Medium_0608.png"
import Image3 from "../../../public/download (1).jpeg"
import Image4 from "../../../public/download (2).jpeg"
import Image5 from "../../../public/download (3).jpeg"
import Image6 from "../../../public/download (4).jpeg"
import Image7 from "../../../public/download.jpeg"
import Image8 from "../../../public/images (1).jpeg"
import Image9 from "../../../public/images (2).jpeg"
import Image10 from "../../../public/images (3).jpeg"
import Image11 from "../../../public/easy_chocolate_cake_slice-500x500.jpg"


// Define the interface for Blog objects
export interface Blogs {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Array of blog objects based on the Blogs interface
const techBlogs: Blogs[] = [
  {
    id: 1,
    title: "The Art of Coffee Brewing",
    description: "Discover the secrets to brewing the perfect cup of coffee. Learn about the journey from selecting premium beans to grinding them for optimal flavor. Explore different brewing techniques like French press, pour-over, and espresso. Understand the science behind temperature, ratios, and timing. Elevate your coffee experience to barista level with these tips.",
    image: "/cofe.png",
  },
  {
    id: 2,
    title: "Travel Diaries: Exploring Paris",
    description: "Embark on a journey through the enchanting streets of Paris. From the Eiffel Tower to hidden alleys, uncover the city's timeless charm. Dive into its rich history, captivating art, and vibrant culture. Savor the taste of authentic croissants and gourmet meals. Experience the City of Lights like never before with this guide.",
    image: "/6.jpeg"
    
    ,
  },
  {
    id: 3,
    title: "Fitness Myths Busted",
    description: "Unravel the truth behind the most common fitness misconceptions. Are carbs your enemy? Is cardio the only way to lose weight? Discover the facts supported by science and expert advice. Learn how to design a workout plan that suits your body and goals. Achieve lasting results with the right approach to fitness.",
    image: "/exercise.jpeg",
  },
  {
    id: 4,
    title: "The Ultimate Guide to Minimalism",
    description: "Simplify your life and embrace the art of minimalism. Learn how to declutter your space, mind, and schedule. Focus on what truly brings value and joy to your life. Find inspiration to live intentionally and free of excess. Start your journey toward a meaningful and fulfilled life with practical steps.",
    image: "/mi.jpg",
  },
  {
    id: 5,
    title: "Culinary Adventures: Fusion Cuisine",
    description: "Dive into the world of fusion cuisine where creativity meets tradition. Explore bold combinations of flavors from different cultures. Learn how to create dishes that tell stories through unique blends. Discover recipes that push culinary boundaries and delight the palate. Experience the art of fusion cooking at home.",
    image: "/cul.jpeg",
  },
  {
    id: 6,
    title: "Mastering the Art of Time Management",
    description: "Boost your productivity with proven time management strategies. Learn to prioritize tasks and avoid procrastination. Create schedules that maximize efficiency and reduce stress. Develop habits that help you stay focused on your goals. Take control of your time and achieve a balanced, fulfilling life.",
    image: "/3.jpeg",
  },
  {
    id: 7,
    title: "The Magic of Book Nooks",
    description: "Transform your reading experience by creating a magical book nook. Explore ideas for cozy and functional spaces that inspire. Discover the best furniture, lighting, and decor to enhance your corner. Learn how to personalize it with your favorite books and themes. Make your book nook the ultimate retreat for readers.",
    image: "/images (1).jpeg",
  },
  {
    id: 8,
    title: "Digital Detox: Reclaiming Your Focus",
    description: "Step away from the screen and rediscover the joys of offline living. Learn how a digital detox can improve focus and mental clarity. Find tips to reduce screen time and create healthier tech habits. Explore activities that promote creativity, relaxation, and connection. Reclaim your life from digital distractions today.",
    image: "/detox.jpeg",
  },
  {
    id: 9,
    title: "Gardening for Beginners",
    description: "Start your gardening journey with this comprehensive guide for beginners. Learn how to choose the right plants for your space and climate. Get tips on soil preparation, watering, and maintenance. Discover the joy of growing your own flowers, herbs, and vegetables. Create a garden that brings beauty and life to your home.",
    image: "/images (2).jpeg",
  },
  {
    id: 10,
    title: "The Rise of Sustainable Fashion",
    description: "Explore the growing movement of sustainable fashion. Learn how eco-friendly practices are reshaping the industry. Find out how to make conscious choices when buying clothes. Discover brands and designers prioritizing sustainability and ethics. Make a positive impact on the planet with your wardrobe decisions.",
    image: "/fashion.jpeg",
  },
  {
    id: 11,
    title: "Exploring the World of Photography",
    description: "Unlock your creative potential through photography. Learn tips for capturing stunning landscapes, portraits, and moments. Explore the art of composition, lighting, and storytelling. Discover the latest tools and techniques to improve your skills. Take your photography to the next level, one shot at a time.",
    image: "/travel.jpeg",
  },
  {
    id: 12,
    title: "Sista Cake",
    description: "Sista Cake is a delightful treat crafted to perfection. Its soft layers are complemented by a creamy filling and a nostalgic charm. Perfect for birthdays, tea parties, or just a sweet moment with loved ones. Indulge in this fusion of flavors that bring joy to every bite. Share this timeless dessert and create cherished memories.",
    image: "/cake.jpg",
  },
];

export default techBlogs;
