import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import successAnimation from "../../assets/payment_success.json";

export default function PaymentSuccess() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 1));
    }, 1000);

    const timer = setTimeout(() => {
      window.location.href = "/"; // Redirect to homepage
    }, 3000);

    return () => {
      clearInterval(countdownInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        style={{
          width: "100vw",
          height: "100vh",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          overflow: "hidden",
          background: "rgba(0, 0, 0, 0.5)" /* Darkened background */,
          backdropFilter: "blur(10px)" /* Blur effect */,
          boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.8)" /* Shadow effect */,
        }}
      >
        <motion.div
          initial={{ opacity: 0, width: "auto", height: "auto" }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="container"
        >
          <Lottie
            animationData={successAnimation}
            loop={false}
            className="lottie-animation"
          />
          <motion.h1
            initial={{ opacity: 0, y: -20, marginTop: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Payment Successful!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Redirecting to homepage in {countdown} seconds...
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
