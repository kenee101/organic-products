// src/components/WhatsAppFAB.jsx
import { motion } from "motion/react";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.04 2.27c-5.38 0-9.76 4.38-9.76 9.76 0 1.83.51 3.56 1.4 5.08l-.94 3.44 3.52-.92c1.47.81 3.14 1.22 4.67 1.22 5.38 0 9.76-4.38 9.76-9.76 0-5.38-4.38-9.76-9.76-9.76zm4.84 13.91s-.11.19-.23.23c-.15.06-.48.24-.71.27-.24.03-.49.03-.76-.08s-1.55-.54-2.2-1.25c-.65-.7-1.1-1.6-1.15-1.7s-.05-.28-.05-.53.18-.51.27-.64.24-.31.39-.37.31-.05.47-.02.37.11.5.24.28.31.39.5.54.88 1.05.95c.13.06.27.05.4-.04.13-.09.56-.27.81-.55s.38-.45.47-.63.13-.37.13-.37-.04-.09-.12-.24-.46-.92-.63-1.24c-.16-.3-.32-.26-.44-.27s-.27-.01-.4-.01-.32-.01-.5-.01c-.18 0-.48.06-.72.33s-.92.89-.92 2.17c0 1.28.94 2.51 1.08 2.7.14.19 1.84 2.82 4.41 3.96 1.13.49 2.07.61 2.45.61.43 0 .84-.16 1.18-.46.34-.3.51-.71.6-1.23l.16-.95c.02-.13-.03-.26-.14-.32s-.27-.08-.41-.05c-.17.03-.38.1-.59.22z" />
  </svg>
);

const WhatsAppFAB = ({
  phoneNumber = "1234567890",
  prefilledMessage = "Hello OliveCrafts, I'm interested in your organic products!",
}) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    prefilledMessage
  )}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg cursor-pointer transition-colors duration-300"
      // Use your chosen earthy accent color for background
      style={{ backgroundColor: "#4F7942", color: "white" }}
      // Framer Motion for appealing hover and entrance effect
      initial={{ scale: 0, rotate: 180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)" }}
    >
      <WhatsAppIcon />
    </motion.a>
  );
};

export default WhatsAppFAB;
