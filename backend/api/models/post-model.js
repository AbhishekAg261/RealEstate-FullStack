const mongoose = require("mongoose");
const PostDetail = require("./post-details");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  images: [
    {
      type: String,
    },
  ],
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  bedroom: {
    type: String,
  },
  bathroom: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  mode: {
    type: String,
    enum: ["buy", "rent"],
  },
  property: {
    type: String,
    enum: ["apartment", "house", "condo", "land"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  postDetail: {},
});

const Post = new mongoose.model("POST", postSchema);

module.exports = Post;

// [
//   {
//     title: "Elegant Haven",
//     price: 2900,
//     images: [
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533473/hotel9_ijbxun.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533471/hotel4_n4y3ff.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533471/hotel8_gfkwbd.jpg",
//     ],
//     address: "Pune, Maharashtra, India",
//     city: "Pune",
//     bedroom: "4",
//     bathroom: "3",
//     latitude: "18.5204",
//     longitude: "73.8567",
//     mode: "buy",
//     property: "house",
//     userId: "665f775d97fc51b46978012c",
//     postDetail: {
//       desc: "Experience luxury living at Elegant Haven in Pune. A spacious house with modern amenities and a serene ambiance.",
//       utilities: "tenant",
//       pet: "allowed",
//       income: "Revenue Management",
//       size: "180",
//       school: "20",
//       bus: "25",
//       restaurant: "30",
//     },
//     createdAt: "2024-06-04T20:50:33.402Z",
//   },
//   {
//     title: "Golden Meadows",
//     price: 1800,
//     images: [
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533471/hotel3_ziuzfz.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533473/hotel6_zun4cz.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533473/hotel10_kag94v.jpg",
//     ],
//     address: "Chennai, Tamil Nadu, India",
//     city: "Chennai",
//     bedroom: "2",
//     bathroom: "1",
//     latitude: "13.0827",
//     longitude: "80.2707",
//     mode: "buy",
//     property: "apartment",
//     userId: "665f776f97fc51b469780130",
//     postDetail: {
//       desc: "Discover the tranquility of Golden Meadows in Chennai. An elegant apartment complex with breathtaking views and modern amenities.",
//       utilities: "tenant",
//       pet: "not allowed",
//       income: "For Study",
//       size: "120",
//       school: "15",
//       bus: "20",
//       restaurant: "25",
//     },
//     createdAt: "2024-06-04T20:50:33.402Z",
//   },
//   {
//     title: "Riverfront Villa",
//     price: 2600,
//     images: [
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533475/hotl2_hktf6t.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533471/hotel5_zwkuy6.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533471/hotel4_n4y3ff.jpg",
//     ],
//     address: "Ahmedabad, Gujarat, India",
//     city: "Ahmedabad",
//     bedroom: "5",
//     bathroom: "4",
//     latitude: "23.0225",
//     longitude: "72.5714",
//     mode: "rent",
//     property: "house",
//     userId: "665f776f97fc51b469780130",
//     postDetail: {
//       desc: "Enjoy riverside living at Riverfront Villa in Ahmedabad. A spacious villa with scenic views and modern amenities.",
//       utilities: "tenant",
//       pet: "allowed",
//       income: "For Business",
//       size: "220",
//       school: "25",
//       bus: "30",
//       restaurant: "35",
//     },
//     createdAt: "2024-06-04T20:50:33.402Z",
//   },

//   {
//     title: "Sapphire Heights",
//     price: 2200,
//     images: [
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533471/hotel3_ziuzfz.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533471/hotel8_gfkwbd.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533583/hotel1_teyd5s.jpg",
//     ],
//     address: "Jaipur, Rajasthan, India",
//     city: "Jaipur",
//     bedroom: "3",
//     bathroom: "2",
//     latitude: "26.9124",
//     longitude: "75.7873",
//     mode: "rent",
//     property: "apartment",
//     userId: "665f776f97fc51b469780130",
//     postDetail: {
//       desc: "Discover the luxury of Sapphire Heights in Jaipur. A modern apartment complex offering stunning views and premium amenities.",
//       utilities: "tenant",
//       pet: "allowed",
//       income: "For Living",
//       size: "150",
//       school: "25",
//       bus: "35",
//       restaurant: "20",
//     },
//     createdAt: "2024-06-04T20:50:33.402Z",
//   },
//   {
//     title: "Elegant Haven",
//     price: 2900,
//     images: [
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533473/hotel9_ijbxun.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533471/hotel4_n4y3ff.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533471/hotel8_gfkwbd.jpg",
//     ],
//     address: "Pune, Maharashtra, India",
//     city: "Pune",
//     bedroom: "4",
//     bathroom: "3",
//     latitude: "18.5204",
//     longitude: "73.8567",
//     mode: "buy",
//     property: "house",
//     userId: "665f775d97fc51b46978012c",
//     postDetail: {
//       desc: "Experience luxury living at Elegant Haven in Pune. A spacious house with modern amenities and a serene ambiance.",
//       utilities: "tenant",
//       pet: "allowed",
//       income: "Revenue Management",
//       size: "180",
//       school: "20",
//       bus: "25",
//       restaurant: "30",
//     },
//     createdAt: "2024-06-04T20:50:33.402Z",
//   },
//   {
//     title: "Golden Meadows",
//     price: 1800,
//     images: [
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533471/hotel3_ziuzfz.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533473/hotel6_zun4cz.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533473/hotel10_kag94v.jpg",
//     ],
//     address: "Chennai, Tamil Nadu, India",
//     city: "Chennai",
//     bedroom: "2",
//     bathroom: "1",
//     latitude: "13.0827",
//     longitude: "80.2707",
//     mode: "rent",
//     property: "apartment",
//     userId: "665f776f97fc51b469780130",
//     postDetail: {
//       desc: "Discover the tranquility of Golden Meadows in Chennai. An elegant apartment complex with breathtaking views and modern amenities.",
//       utilities: "tenant",
//       pet: "not allowed",
//       income: "For Study",
//       size: "120",
//       school: "15",
//       bus: "20",
//       restaurant: "25",
//     },
//     createdAt: "2024-06-04T20:50:33.402Z",
//   },
//   {
//     title: "Riverfront Villa",
//     price: 2600,
//     images: [
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533475/hotl2_hktf6t.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533471/hotel5_zwkuy6.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533471/hotel4_n4y3ff.jpg",
//     ],
//     address: "Ahmedabad, Gujarat, India",
//     city: "Ahmedabad",
//     bedroom: "5",
//     bathroom: "4",
//     latitude: "23.0225",
//     longitude: "72.5714",
//     mode: "buy",
//     property: "house",
//     userId: "665f776f97fc51b469780130",
//     postDetail: {
//       desc: "Enjoy riverside living at Riverfront Villa in Ahmedabad. A spacious villa with scenic views and modern amenities.",
//       utilities: "tenant",
//       pet: "allowed",
//       income: "For Business",
//       size: "220",
//       school: "25",
//       bus: "30",
//       restaurant: "35",
//     },
//     createdAt: "2024-06-04T20:50:33.402Z",
//   },

//   {
//     title: "Cozy Cottage",
//     price: 1500,
//     images: [
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533475/hotl2_hktf6t.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533473/hotel9_ijbxun.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533473/hotel10_kag94v.jpg",
//     ],
//     address: "Mumbai, Maharashtra, India",
//     city: "Mumbai",
//     bedroom: "2",
//     bathroom: "1",
//     latitude: "19.0760",
//     longitude: "72.8777",
//     mode: "buy",
//     property: "apartment",
//     userId: "665f775d97fc51b46978012c",
//     postDetail: {
//       desc: "Experience comfort and charm at Cozy Cottage in Mumbai. Perfect for small families or couples looking for a peaceful retreat.",
//       utilities: "tenant",
//       pet: "allowed",
//       income: "For Living",
//       size: "100",
//       school: "15",
//       bus: "20",
//       restaurant: "25",
//     },
//     createdAt: "2024-06-04T20:50:33.402Z",
//   },
//   {
//     title: "Forest Hideaway",
//     price: 2800,
//     images: [
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533471/hotel5_zwkuy6.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533471/hotel4_n4y3ff.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533471/hotel3_ziuzfz.jpg",
//     ],
//     address: "Bangalore, Karnataka, India",
//     city: "Bangalore",
//     bedroom: "3",
//     bathroom: "2",
//     latitude: "12.9716",
//     longitude: "77.5946",
//     mode: "rent",
//     property: "house",
//     userId: "665f776f97fc51b469780130",
//     postDetail: {
//       desc: "Escape to the tranquility of Forest Hideaway in Bangalore. A charming house nestled amidst nature, perfect for relaxation and rejuvenation.",
//       utilities: "tenant",
//       pet: "not allowed",
//       income: "Revenue Management",
//       size: "180",
//       school: "20",
//       bus: "25",
//       restaurant: "30",
//     },
//     createdAt: "2024-06-04T20:50:33.402Z",
//   },
//   {
//     title: "Lakeview Retreat",
//     price: 2000,
//     images: [
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533471/hotel8_gfkwbd.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533583/hotel1_teyd5s.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533473/hotel10_kag94v.jpg",
//     ],
//     address: "Kolkata, West Bengal, India",
//     city: "Kolkata",
//     bedroom: "2",
//     bathroom: "2",
//     latitude: "22.5726",
//     longitude: "88.3639",
//     mode: "buy",
//     property: "apartment",
//     userId: "665f775d97fc51b46978012c",
//     postDetail: {
//       desc: "Enjoy picturesque views at Lakeview Retreat in Kolkata. A cozy apartment overlooking a serene lake, ideal for nature lovers.",
//       utilities: "tenant",
//       pet: "allowed",
//       income: "For Study",
//       size: "120",
//       school: "15",
//       bus: "20",
//       restaurant: "25",
//     },
//     createdAt: "2024-06-04T20:50:33.402Z",
//   },

//   {
//     title: "Serenity House",
//     price: 1800,
//     images: [
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533473/hotel6_zun4cz.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533473/hotel10_kag94v.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533471/hotel8_gfkwbd.jpg",
//     ],
//     address: "Delhi, India",
//     city: "Delhi",
//     bedroom: "2",
//     bathroom: "1",
//     latitude: "28.7041",
//     longitude: "77.1025",
//     mode: "rent",
//     property: "apartment",
//     userId: "665f775d97fc51b46978012c",
//     postDetail: {
//       desc: "Find peace and comfort at Serenity House in Delhi. A modern apartment in a bustling city, perfect for urban living.",
//       utilities: "tenant",
//       pet: "allowed",
//       income: "For Living",
//       size: "100",
//       school: "15",
//       bus: "20",
//       restaurant: "25",
//     },
//     createdAt: "2024-06-04T20:50:33.402Z",
//   },
//   {
//     title: "Mountain View Cottage",
//     price: 2500,
//     images: [
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533475/hotl2_hktf6t.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533473/hotel9_ijbxun.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533473/hotel10_kag94v.jpg",
//     ],
//     address: "Shimla, Himachal Pradesh, India",
//     city: "Shimla",
//     bedroom: "3",
//     bathroom: "2",
//     latitude: "31.1048",
//     longitude: "77.1734",
//     mode: "buy",
//     property: "house",
//     userId: "665f776f97fc51b469780130",
//     postDetail: {
//       desc: "Experience breathtaking views at Mountain View Cottage in Shimla. A cozy house nestled amidst mountains, ideal for nature enthusiasts.",
//       utilities: "tenant",
//       pet: "not allowed",
//       income: "Revenue Management",
//       size: "180",
//       school: "20",
//       bus: "25",
//       restaurant: "30",
//     },
//     createdAt: "2024-06-04T20:50:33.402Z",
//   },
//   {
//     title: "Riverfront Retreat",
//     price: 2000,
//     images: [
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533473/hotel10_kag94v.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533583/hotel1_teyd5s.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533473/hotel9_ijbxun.jpg",
//     ],
//     address: "Varanasi, Uttar Pradesh, India",
//     city: "Varanasi",
//     bedroom: "2",
//     bathroom: "2",
//     latitude: "25.3176",
//     longitude: "82.9739",
//     mode: "rent",
//     property: "apartment",
//     userId: "665f776f97fc51b469780130",
//     postDetail: {
//       desc: "Relax by the riverside at Riverfront Retreat in Varanasi. A modern apartment with stunning river views, perfect for a peaceful stay.",
//       utilities: "tenant",
//       pet: "allowed",
//       income: "For Study",
//       size: "120",
//       school: "15",
//       bus: "20",
//       restaurant: "25",
//     },
//     createdAt: "2024-06-04T20:50:33.402Z",
//   },
//   {
//     title: "Urban Oasis",
//     price: 3000,
//     images: [
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533471/hotel3_ziuzfz.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533473/hotel10_kag94v.jpg",
//       "https://res.cloudinary.com/djull9qud/image/upload/v1717533471/hotel8_gfkwbd.jpg",
//     ],
//     address: "Chandigarh, India",
//     city: "Chandigarh",
//     bedroom: "4",
//     bathroom: "3",
//     latitude: "30.7333",
//     longitude: "76.7794",
//     mode: "buy",
//     property: "house",
//     userId: "665f775d97fc51b46978012c",
//     postDetail: {
//       desc: "Discover the essence of urban living at Urban Oasis in Chandigarh. A luxurious house with modern amenities, perfect for city dwellers.",
//       utilities: "tenant",
//       pet: "allowed",
//       income: "For Business",
//       size: "220",
//       school: "25",
//       bus: "30",
//       restaurant: "35",
//     },
//     createdAt: "2024-06-04T20:50:33.402Z",
//   },
// ];
